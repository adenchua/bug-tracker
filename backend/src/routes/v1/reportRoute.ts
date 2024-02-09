import express from "express";

import reportController from "../../controllers/v1/reportController";
import reportValidators from "../../utils/reportValidators";

const router = express.Router();

router.post("/", reportValidators.createReportValidator, reportController.createReport);

export default { router };
