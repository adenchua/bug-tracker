import express from "express";

import mediaController from "../../controllers/v1/mediaController";
import uploadErrorHandlerMiddleware from "../../middlewares/uploadErrorHandlerMiddleware";

const router = express.Router();

router.post(
  "/upload/:reportId",
  uploadErrorHandlerMiddleware.uploadErrorHandler,
  mediaController.uploadMedia,
);

export default { router };
