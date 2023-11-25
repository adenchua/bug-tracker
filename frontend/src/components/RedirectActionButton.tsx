import Button, { ButtonProps } from "@mui/material/Button";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";

interface RedirectActionButtonProps extends ButtonProps {
  buttonText: string;
}

function RedirectActionButton(props: RedirectActionButtonProps): JSX.Element {
  const { buttonText, sx } = props;

  return (
    <Button variant="outlined" endIcon={<ArrowIcon />} sx={sx}>
      {buttonText}
    </Button>
  );
}

export default RedirectActionButton;
