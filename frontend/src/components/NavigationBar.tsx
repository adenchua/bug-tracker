import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation, Link } from "react-router-dom";
import { useMemo } from "react";

import BugIcon from "../icons/BugIcon";
import NavigationLink from "./NavigationLink";

function NavigationBar(): JSX.Element {
  const { pathname } = useLocation();

  const firstPathname = useMemo(() => pathname.split("/")[1], [pathname]);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, top: 0 }}
    >
      <Toolbar variant="dense">
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <BugIcon color="primary" />
          <Typography variant="h6" component="div" color="primary.main" sx={{ ml: 0.5 }}>
            BugTrackr
          </Typography>
        </Link>
        <Chip size="small" label="alpha release" sx={{ ml: 1 }} />
        <Box display="flex" flexGrow={1} gap={3} sx={{ ml: 4 }}>
          <NavigationLink text="About" linkTo="/about" isActive={firstPathname === "about"} />
          <NavigationLink
            text="Report"
            linkTo="/report/overview"
            isActive={firstPathname === "report"}
          />
          <NavigationLink
            text="Leaderboard"
            linkTo="/leaderboard"
            isActive={firstPathname === "leaderboard"}
            isDisabled
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
