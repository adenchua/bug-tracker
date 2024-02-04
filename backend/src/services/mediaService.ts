import fs from "fs";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

import {
  MEDIA_FOLDER_PATH,
  MAX_FILE_SIZE_BYTES,
  ACCEPTED_FILE_MIMETYPES,
  MAX_FILE_LIMIT,
} from "../configs/mediaConfig";

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      const reportPath = req.params.reportId;
      const directory = `${MEDIA_FOLDER_PATH}/${reportPath}`;

      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }

      callback(null, directory);
    },
    filename: (req, file, callback) => {
      const fileExtension = file.mimetype.split("/")[1];
      const filename = `${Date.now()}-${uuidv4()}.${fileExtension}`;
      callback(null, filename);
    },
  }),
  limits: { fileSize: MAX_FILE_SIZE_BYTES },
  // eslint-disable-next-line consistent-return
  fileFilter: (req, file, callback) => {
    // TODO: improve file type validation as mimetype can be changed
    if (!ACCEPTED_FILE_MIMETYPES.includes(file.mimetype)) {
      // eslint-disable-next-line @stylistic/max-len
      const errorMessage = `Invalid file type received. Valid file types: ${ACCEPTED_FILE_MIMETYPES.toString()}`;
      return callback(new Error(errorMessage));
    }

    callback(null, true);
  },
}).array("file", MAX_FILE_LIMIT); // request form-data param key needs to be "file"

export default { upload };
