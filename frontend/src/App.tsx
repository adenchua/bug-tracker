import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ReportPage from "./pages/ReportPage";
import NotFoundPage from "./pages/NotFoundPage";

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

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/report" element={<ReportPage />}>
            <Route path="overview" element={<ReportPage />} />
            <Route path="crp" element={<ReportPage />} />
            <Route path="vrp" element={<ReportPage />} />
          </Route>
          <Route path="/leaderboard" element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
