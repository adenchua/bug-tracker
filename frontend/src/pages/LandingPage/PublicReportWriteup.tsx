import Typography from "@mui/material/Typography";

import RedirectActionButton from "../../components/RedirectActionButton";

function PublicReportWriteup(): JSX.Element {
  return (
    <>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Public reports
      </Typography>
      <Typography sx={{ mb: 4 }}>
        Explore successful report submissions and see what others have contributed.
      </Typography>
      <RedirectActionButton buttonText="View public reports" linkTo="/report/vrp" />
    </>
  );
}

export default PublicReportWriteup;
