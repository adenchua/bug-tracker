import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

export interface Tab {
  name: string;
  linkTo: string;
}

interface TabNavigationBarProps {
  tabs: Tab[];
}

function TabNavigationBar(props: TabNavigationBarProps): JSX.Element {
  const { tabs } = props;
  const { pathname } = useLocation();

  const childPathname = useMemo(() => pathname.split("/").pop(), [pathname]);

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar variant="dense">
        <Box ml={33} display="flex" gap={2}>
          {tabs.map((tab) => (
            <Chip
              key={tab.name}
              label={tab.name}
              color={childPathname === tab.linkTo ? "primary" : "default"}
              variant="outlined"
              component={Link}
              to={tab.linkTo}
              sx={{ cursor: "pointer" }}
            />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TabNavigationBar;
