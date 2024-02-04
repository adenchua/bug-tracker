import { NextFunction, Request, Response } from "express";
import multer from "multer";

import mediaService from "../services/mediaService";

const uploadErrorHandler = (req: Request, res: Response, next: NextFunction): void => {
  mediaService.upload(req, res, function handleError(error) {
    // when no form data are sent at all, or empty file array
    if (!req.files || req.files.length === 0) {
      res.sendStatus(400);
      return;
    }
    if (error instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.sendStatus(400);
      return;
    }
    if (error instanceof Error) {
      // self defined error in multer upload middleware
      res.status(400).send({ error: error.message });
      return;
    }

    // no errors
    next();
  });
};

export default { uploadErrorHandler };
