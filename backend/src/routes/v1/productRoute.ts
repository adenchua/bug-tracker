import express from "express";

import reportController from "../../controllers/v1/reportController";

const router = express.Router();

router.get("/:id/reports", reportController.getReportsByProductId);

export default { router };
