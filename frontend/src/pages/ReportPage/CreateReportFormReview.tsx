import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { ReportType } from "../../interfaces/Report";
import FormLabel from "./FormLabel";
import { reportDisplayTextMap } from "./CreateReportFormB";
import ProgressButton from "./ProgressButton";

interface CreateReportFormReviewProps {
  productId: string | null;
  issueUrl: string;
  reportType: ReportType;
  reportTitle: string;
  reportDescription: string;
  onUpdateStepNumber: (newStepNumber: number) => void;
}

function CreateReportFormReview(props: CreateReportFormReviewProps): JSX.Element {
  const { productId, issueUrl, reportDescription, reportTitle, reportType, onUpdateStepNumber } =
    props;

  return (
    <>
      <Typography variant="h5" paragraph>
        Issue location
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, mb: 6 }}>
        <FormLabel primaryText="Product" />
        <Typography color="GrayText" mb={6}>
          {productId ?? <i>My product is not listed</i>}
        </Typography>
        <FormLabel primaryText="Issue URL" />
        <Typography color="GrayText">
          {issueUrl === "" ? <i>No issue URL specified</i> : issueUrl}
        </Typography>
      </Paper>
      <Typography variant="h5" paragraph>
        Report Details
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, mb: 8 }}>
        <FormLabel primaryText="Report type" />
        <Typography color="GrayText" mb={6}>
          {reportDisplayTextMap[reportType]}
        </Typography>
        <FormLabel primaryText="Report Title" />
        <Typography color="GrayText" mb={6}>
          {reportTitle}
        </Typography>
        <FormLabel primaryText="Report Description" />
        <Typography color="GrayText" whiteSpace="pre-wrap">
          {reportDescription}
        </Typography>
      </Paper>
      <Box display="flex" gap={2}>
        <ProgressButton text="Back" onClick={() => onUpdateStepNumber(1)} />
        <Button
          variant="contained"
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default CreateReportFormReview;
