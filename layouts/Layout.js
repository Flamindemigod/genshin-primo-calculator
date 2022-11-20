import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box
        className="flex flex-col relative "
        sx={{ minHeight: "100vh", flex: "1 0 100%", overflowX: "hidden" }}
      >
        <Background />

        <header className="z-50 bg-black bg-opacity-30">
          <Header />
        </header>
        <main
          className="flex relative align-center w-screen flex-grow overflow-auto"
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
        <footer id="footer" className="z-50 bg-black bg-opacity-30">
          <Footer />
        </footer>
      </Box>
    </Box>
  );
};

export default Layout;
