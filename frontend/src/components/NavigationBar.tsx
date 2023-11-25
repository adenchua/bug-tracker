import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

import BugIcon from "../icons/BugIcon";
import NavigationLink from "./NavigationLink";

function NavigationBar(): JSX.Element {
  const { pathname } = useLocation();

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
          BugTrackr
        </Typography>
        <Chip size="small" label="alpha release" sx={{ ml: 1 }} />
        <Box display="flex" flexGrow={1} gap={3} sx={{ ml: 4 }}>
          <NavigationLink text="About" linkTo="/about" isActive={pathname === "/about"} />
          <NavigationLink text="Report" linkTo="/report" isActive={pathname === "/report"} />
          <NavigationLink
            text="Leaderboard"
            linkTo="/leaderboard"
            isActive={pathname === "/leaderboard"}
            isDisabled
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
