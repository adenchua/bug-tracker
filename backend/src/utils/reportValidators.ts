import { body } from "express-validator";
import { REPORT_STATUSES, REPORT_TYPES } from "../configs/reportConfig";

// report title validators
const reportTitleStringValidator = body("report.title", "report title must be a string").isString();
const reportTitleLengthValidator = body(
  "report.title",
  "report title maximum length is 512 characters",
).isLength({ max: 512 });

// report description validators
const reportDescriptionStringValidator = body(
  "report.description",
  "report description must be a string",
).isString();

// report  URL validators
const reportURLValidator = body("report.URL", "report URL must be a valid URL string").isURL();

// report type validators
const reportTypeValidator = body("report.type", "report type must be a valid type").isIn([
  REPORT_TYPES.bug,
  REPORT_TYPES.suggestion,
]);

const createReportValidators = [
  body("report.title", "report title must not be empty").notEmpty(),
  reportTitleStringValidator,
  reportTitleLengthValidator,
  body("report.description", "report description must not be empty").notEmpty(),
  reportDescriptionStringValidator,
  reportURLValidator.optional(),
  body("report.type", "report type must not be empty").notEmpty(),
  reportTypeValidator,
  body("report.productId", "product id must not be empty").notEmpty(),
  body("report.reporterId", "reporter id must not be empty").notEmpty(),
];

const patchReportValidators = [
  body("report", "report object is not provided").notEmpty(),
  reportTitleStringValidator.optional(),
  reportTitleLengthValidator.optional(),
  reportDescriptionStringValidator.optional(),
  reportURLValidator.optional(),
  reportTypeValidator.optional(),
  body("report.status", "report status must be a valid type")
    .isIn([
      REPORT_STATUSES.submitted,
      REPORT_STATUSES.triaged,
      REPORT_STATUSES.fixed,
      REPORT_STATUSES.closed,
    ])
    .optional(),
  body("report.isPublic", "report isPublic field must be a boolean type").isBoolean().optional(),
];

export default { createReportValidators, patchReportValidators };
