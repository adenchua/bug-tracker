import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

import { ReportType } from "../../interfaces/Report";
import FormLabel from "./FormLabel";
import ProgressButton from "./ProgressButton";

interface DisplayedReportType {
  label: string;
  reportType: ReportType;
}

const reportTypeList: DisplayedReportType[] = [
  {
    label: "Bug",
    reportType: "bug",
  },
  {
    label: "UX Issue",
    reportType: "ux-issue",
  },
  {
    label: "Feature Request",
    reportType: "feature-request",
  },
  {
    label: "Others",
    reportType: "others",
  },
];

interface CreateReportFormBProps {
  reportType: ReportType;
  onSelectReportType: (reportType: ReportType) => void;
  onUpdateStepNumber: (newStepNumber: number) => void;
  reportTitle: string;
  onUpdateReportTitle: (newReportTitle: string) => void;
  reportDescription: string;
  onUpdateReportDescription: (newReportDescription: string) => void;
}

/**
 * Part 2 of report creation form.
 * handles report location
 */
function CreateReportFormB(props: CreateReportFormBProps): JSX.Element {
  const {
    reportType,
    onSelectReportType,
    onUpdateStepNumber,
    reportDescription,
    reportTitle,
    onUpdateReportDescription,
    onUpdateReportTitle,
  } = props;

  const disableForm = !reportTitle || !reportDescription;

  return (
    <>
      <FormLabel primaryText="Report type" />
      <Box display="flex" gap={2} mb={6}>
        {reportTypeList.map((reportTypeDisplay) => (
          <Chip
            key={reportTypeDisplay.reportType}
            label={reportTypeDisplay.label}
            color={reportType === reportTypeDisplay.reportType ? "primary" : "default"}
            onClick={() => onSelectReportType(reportTypeDisplay.reportType)}
          />
        ))}
      </Box>

      <FormLabel
        primaryText="Please give your report a short summary title"
        secondaryText="This helps others when they search for reports"
      />
      <TextField
        value={reportTitle}
        onChange={(e) => onUpdateReportTitle(e.target.value)}
        variant="filled"
        fullWidth
        size="small"
        placeholder="eg. Products not showing in the dropdown list when browsing the homepage"
        sx={{ mb: 6 }}
      />

      <FormLabel primaryText="Please describe the technical details of the issue" />
      <TextField
        value={reportDescription}
        onChange={(e) => onUpdateReportDescription(e.target.value)}
        variant="filled"
        fullWidth
        size="small"
        multiline
        rows={12}
        sx={{ mb: 6 }}
      />

      <FormLabel primaryText="[Optional] Add screenshots/videos of the issue [max 50MB per file]" />
      <TextField
        type="file"
        fullWidth
        size="small"
        variant="filled"
        inputProps={{ multiple: true }}
      />

      <Box display="flex" gap={2} mt={6}>
        <ProgressButton text="Back" onClick={() => onUpdateStepNumber(0)} />
        <ProgressButton
          text="Next"
          onClick={() => onUpdateStepNumber(2)}
          isDisabled={disableForm}
        />
      </Box>
    </>
  );
}

export default CreateReportFormB;
