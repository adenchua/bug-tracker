import { NewReport, Report } from "../interfaces/Report";

const createReport = (newReport: NewReport): Report => {
  return { id: "123456", ...newReport };
};

export default { createReport };
