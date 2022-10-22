import "../styles/globals.css";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#29c9e5",
    },
    secondary: {
      main: "#00c46d",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
