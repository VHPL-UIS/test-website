import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Tokenomics from "./components/sections/Tokenomics";
import Roadmap from "./components/sections/Roadmap";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={light}>
    <Navigation/>
    <Home />
    <About />
    <Roadmap />
    <Tokenomics />
    <Footer />
    <ScrollToTop />
    </ThemeProvider>
    </>
  );
}

export default App;
