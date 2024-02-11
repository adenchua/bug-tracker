import { NewReport, Report } from "../interfaces/Report";

const filterKeys = {
  product: "productId",
  reporter: "reporterId",
} as const;

type FilterKey = (typeof filterKeys)[keyof typeof filterKeys];
type Filters = Partial<Record<FilterKey, string>>;

const createReport = (newReport: NewReport): Report => {
  return { id: "123456", ...newReport };
};

const updateReport = (reportId: string, updatedReportFields: Partial<Report>): void => {};

const getReportById = (reportId: string): Report | null => {
  return null;
};

const getReports = (filters: Filters): Report[] => {
  const result: Report[] = [];

  return result;
};

export default {
  createReport,
  updateReport,
  getReportById,
  getReports,
};
