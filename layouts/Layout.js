import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
  return (
    <Box
      className="flex flex-col"
      sx={{ minHeight: "100vh", flex: "1 0 100%", overflowX: "hidden" }}
    >
      <header>
        <Header />
      </header>
      <main
        className="flex justify-center align-center w-full flex-grow"
        id="main"
      >
        <a
          className="navigation--link | fixed top-0 left-0 right-0 p-4 text-center bg-black text-white z-10"
          href="#footer"
        >
          Skip Content
        </a>
        {children}
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </Box>
  );
};

export default Layout;
