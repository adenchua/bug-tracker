import { STATIC_FOLDER } from "./generalConfig";

export const MAX_FILE_SIZE_BYTES = 52_428_800; // limit max file size per file to 50mb

export const MAX_FILE_LIMIT = 5; // limit max file per report to 5

export const ACCEPTED_FILE_MIMETYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "video/mp4",
] as const;

// where all report media will be uploaded to
export const MEDIA_FOLDER_PATH = `./${STATIC_FOLDER}/media-data/reports`;

export default {};
