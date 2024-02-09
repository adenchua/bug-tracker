import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { NewReport, Report } from "../../interfaces/Report";
import reportService from "../../services/reportService";

type ReportBody = Omit<
  Report,
  "id" | "createdDateISOString" | "isPublic" | "status" | "media" | "completedDateISOString"
>;

const createReport = (req: Request, res: Response): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
    return;
  }

  const { report } = <{ report: ReportBody }>req.body;
  const { title, description, URL, type, productId, reporterId } = report;

  const newReport: NewReport = {
    title,
    description,
    URL,
    type,
    productId,
    reporterId,
    isPublic: false,
    status: "SUBMITTED",
    createdDateISOString: new Date().toISOString(),
  };

  const createdReport = reportService.createReport(newReport);

  res.status(201).json({ ...createdReport });
};

export default { createReport };
