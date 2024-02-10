import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { NewReport, Report } from "../../interfaces/Report";
import reportService from "../../services/reportService";

type CreateReportBody = Omit<
  Report,
  "id" | "createdDateISOString" | "isPublic" | "status" | "media" | "completedDateISOString"
>;

type UpdateReportBody = Omit<
  Report,
  "id" | "createdDateISOString" | "completedDateISOString" | "media" | "reporterId"
>;

const createReport = (req: Request, res: Response): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
    return;
  }

  const { report } = <{ report: CreateReportBody }>req.body;
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

const updateReport = (req: Request, res: Response): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
    return;
  }

  const { id } = req.params;
  const { report } = <{ report: UpdateReportBody }>req.body;
  const { title, description, type, isPublic, status, productId, URL } = report;

  const reportToUpdate = reportService.getReportById(id);

  // check if report exist, if doesn't send 404
  if (!reportToUpdate) {
    res.status(404).json({ error: "report does not exist" });
    return;
  }

  reportService.updateReport(id, {
    title,
    description,
    type,
    isPublic,
    status,
    productId,
    URL,
  });

  res.sendStatus(204);
};

export default { createReport, updateReport };
