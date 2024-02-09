type AllowedMediaMimeTypes = "image/jpeg" | "image/jpg" | "image/png" | "video/mp4";

export interface Media {
  id: string;
  srcPath: string;
  mimeType: AllowedMediaMimeTypes;
}
