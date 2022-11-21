import "../styles/globals.css";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Layout from "../layouts/Layout";
import { LangContextProvider, langs } from "../contexts/LangContext";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#008080",
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
  const [lang, setLang] = useState("en");
  useEffect(() => {
    setLang(localStorage.getItem("lang") || "en");
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={darkTheme}>
        <LangContextProvider lang={langs[lang]}>
          <CssBaseline />
          <Layout setLang={setLang}>
            <Component {...pageProps} />
          </Layout>
        </LangContextProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
