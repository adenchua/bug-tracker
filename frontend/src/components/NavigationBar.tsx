import AppBar from "@mui/material/AppBar";
import Chip from "@mui/material/Chip";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import BugIcon from "../icons/BugIcon";

function NavigationBar(): JSX.Element {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar variant="dense">
        <BugIcon color="primary" />
        <Typography variant="h6" component="div" color="primary.main" sx={{ ml: 0.5 }}>
          Bug Trackr
        </Typography>
        <Chip size="small" label="alpha release" sx={{ ml: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
