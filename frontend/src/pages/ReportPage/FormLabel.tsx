import Typography from "@mui/material/Typography";

interface FormLabelProps {
  primaryText: string;
  secondaryText?: string;
}

function FormLabel(props: FormLabelProps): JSX.Element {
  const { primaryText, secondaryText } = props;

  return (
    <>
      <Typography fontWeight="bold" gutterBottom={!secondaryText}>
        {primaryText}
      </Typography>
      {secondaryText && (
        <Typography variant="body2" color="GrayText" gutterBottom>
          {secondaryText}
        </Typography>
      )}
    </>
  );
}

FormLabel.defaultProps = {
  secondaryText: "",
};

export default FormLabel;
