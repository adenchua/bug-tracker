import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ReportPage from "./pages/ReportPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreateReportTabContent from "./pages/ReportPage/CreateReportTabContent";
import ReportOverviewTabContent from "./pages/ReportPage/ReportOverviewTabContent";
import PublicReportsTabContent from "./pages/ReportPage/PublicReportsTabContent";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 0,
          "&:hover": {
            backgroundColor: orange[500],
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
            <Route path="overview" element={<ReportOverviewTabContent />} />
            <Route path="crp" element={<CreateReportTabContent />} />
            <Route path="vrp" element={<PublicReportsTabContent />} />
          </Route>
          <Route path="/leaderboard" element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
