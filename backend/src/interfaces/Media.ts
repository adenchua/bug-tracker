import { ACCEPTED_FILE_MIMETYPES } from "../configs/mediaConfig";

export type AllowedMediaMimeTypes = (typeof ACCEPTED_FILE_MIMETYPES)[number];

export interface Media {
  id: string;
  srcPath: string;
  mimeType: AllowedMediaMimeTypes;
}
