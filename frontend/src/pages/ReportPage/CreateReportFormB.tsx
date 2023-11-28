import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function CreateReportFormB(): JSX.Element {
  return (
    <>
      <Typography fontWeight="bold" gutterBottom>
        Report title
      </Typography>
      <TextField variant="filled" fullWidth size="small" />
      <Typography fontWeight="bold" gutterBottom mt={4}>
        Report description
      </Typography>
      <TextField variant="filled" fullWidth size="small" multiline rows={12} />
      <Typography fontWeight="bold" gutterBottom mt={4}>
        URL of issue encountered
      </Typography>
      <TextField variant="filled" fullWidth size="small" placeholder="https://example.com" />
    </>
  );
}

export default CreateReportFormB;
