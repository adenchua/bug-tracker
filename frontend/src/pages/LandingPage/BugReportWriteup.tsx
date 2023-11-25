import Typography from "@mui/material/Typography";

import RedirectActionButton from "../../components/RedirectActionButton";

function BugReportWriteup(): JSX.Element {
  return (
    <>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Building better together.
      </Typography>
      <Typography sx={{ mb: 4 }}>
        We believe in building better products together with our users. By submitting bug reports
        when you encounter any issues, you play a vital role in enhancing our software&apos;s
        performance and delivering an exceptional user experience. Let&apos;s collaborate and shape
        the future together.
      </Typography>
      <RedirectActionButton buttonText="Report an issue" />
    </>
  );
}

export default BugReportWriteup;
