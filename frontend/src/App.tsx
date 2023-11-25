import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
