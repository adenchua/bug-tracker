import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F57D0D",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 0,
          "&:hover": {
            backgroundColor: "#F57D0D",
            color: "#FFF",
          },
        },
      },
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPage />}>
      <Route index path="about" element={<LandingPage />} />
      <Route index path="report" element={<LandingPage />} />
      <Route index path="leaderboard" element={<LandingPage />} />
    </Route>,
  ),
);

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
