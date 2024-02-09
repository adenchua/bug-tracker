import { Media } from "./Media";

type Status = "SUBMITTED" | "TRIAGED" | "FIXED" | "CLOSED";
type ReportType = "BUG" | "SUGGESTION";

export interface Report {
  id: string;
  title: string;
  description: string;
  type: ReportType;
  isPublic: boolean;
  status: Status;
  createdDateISOString: string;
  completedDateISOString?: string;
  reporterId: string;
  productId?: string;
  URL?: string;
  media?: Media[];
}

export type NewReport = Omit<Report, "id">;
