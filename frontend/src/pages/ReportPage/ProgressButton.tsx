import Button from "@mui/material/Button";

interface ProgressButtonProps {
  text: "Next" | "Back";
  isDisabled?: boolean;
  onClick: () => void;
}

function ProgressButton(props: ProgressButtonProps): JSX.Element {
  const { isDisabled, onClick, text } = props;

  return (
    <Button
      color={text === "Next" ? "primary" : "inherit"}
      variant="contained"
      disableElevation
      disableRipple
      fullWidth
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </Button>
  );
}

ProgressButton.defaultProps = {
  isDisabled: false,
};

export default ProgressButton;
