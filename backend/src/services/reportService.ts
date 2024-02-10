import { NewReport, Report } from "../interfaces/Report";

const createReport = (newReport: NewReport): Report => {
  return { id: "123456", ...newReport };
};

const updateReport = (reportId: string, updatedReportFields: Partial<Report>): void => {};

const getReportById = (reportId: string): Report | null => {
  return null;
};

const getReportsByProductId = (productId: string): Report[] => {
  const result: Report[] = [];

  return result;
};

export default { createReport, updateReport, getReportById, getReportsByProductId };
