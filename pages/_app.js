import "../styles/globals.css";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Layout from "../layouts/Layout";

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
  // typography: {
  //   fontFamily: `"Open Sans,sans-serif"`,
  // },
});

function MyApp({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
