import { Request, Response } from "express";

import { PROXY_STATIC_FOLDER, STATIC_FOLDER } from "../../configs/generalConfig";

const uploadMedia = (req: Request, res: Response): void => {
  const filePaths: string[] = [];

  if (req.files && Array.isArray(req.files)) {
    req.files.forEach((file) => {
      const filePath = `${req.protocol}://${req.headers.host}/${file.path.replace(STATIC_FOLDER, `${PROXY_STATIC_FOLDER}`)}`;
      filePaths.push(filePath);
    });
  }

  res.json({ src_path: filePaths });
};

export default { uploadMedia };
