import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface NavigationLinkProps {
  text: string;
  linkTo: string;
  isActive: boolean;
  isDisabled?: boolean;
}

function NavigationLink(props: NavigationLinkProps): JSX.Element {
  const { text, linkTo, isActive, isDisabled } = props;

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        sx={{
          color: isActive ? "primary.main" : "inherit",
          textDecoration: "none",
          textTransform: "none",
          "&:hover": {
            color: isActive ? "primary.light" : "primary.main",
            background: "transparent",
          },
        }}
        variant="text"
        component={Link}
        to={linkTo}
        disableRipple
        disableFocusRipple
        disableTouchRipple
        disabled={isDisabled}
      >
        {text}
      </Button>
      {isActive && (
        <Box
          sx={{
            border: "1px solid",
            borderColor: "primary.main",
            position: "absolute",
            bottom: "-7px",
            width: "100%",
          }}
        />
      )}
    </Box>
  );
}

NavigationLink.defaultProps = {
  isDisabled: false,
};

export default NavigationLink;
