import { body } from "express-validator";

const createReportValidator = [
  body("report.title", "report title must not be empty").notEmpty(),
  body("report.title", "report title maximum length is 512 characters").isLength({ max: 512 }),
  body("report.description", "report description must not be empty").notEmpty(),
  body("report.URL", "report URL must be a valid URL string").isURL().optional(),
  body("report.type", "report type must not be empty").notEmpty(),
  body("report.type", "report type must be a valid").isIn(["BUG", "SUGGESTION"]),
  body("report.productId", "product id must not be empty").notEmpty(),
  body("report.reporterId", "reporter id must not be empty").notEmpty(),
];

export default { createReportValidator };
