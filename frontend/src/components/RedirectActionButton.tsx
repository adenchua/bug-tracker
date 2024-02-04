import { Link } from "react-router-dom";
import Button, { ButtonProps } from "@mui/material/Button";
import ArrowIcon from "@mui/icons-material/ArrowRightAlt";

interface RedirectActionButtonProps extends ButtonProps {
  buttonText: string;
  linkTo: string;
}

function RedirectActionButton(props: RedirectActionButtonProps): JSX.Element {
  const { buttonText, sx, linkTo } = props;

  return (
    <Button variant="outlined" endIcon={<ArrowIcon />} sx={sx} component={Link} to={linkTo}>
      {buttonText}
    </Button>
  );
}

export default RedirectActionButton;
