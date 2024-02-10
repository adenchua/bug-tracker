import { REPORT_STATUSES, REPORT_TYPES } from "../configs/reportConfig";
import { Media } from "./Media";

type ReportStatus = (typeof REPORT_STATUSES)[keyof typeof REPORT_STATUSES];
type ReportType = (typeof REPORT_TYPES)[keyof typeof REPORT_TYPES];

export interface Report {
  id: string;
  title: string;
  description: string;
  type: ReportType;
  isPublic: boolean;
  status: ReportStatus;
  createdDateISOString: string;
  completedDateISOString?: string;
  reporterId: string;
  productId?: string;
  URL?: string;
  media?: Media[];
}

export type NewReport = Omit<Report, "id">;
