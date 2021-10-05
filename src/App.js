import Navbar from "./components/Navbar";
import Info from "./components/sections/Info";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

import Grid from "@mui/material/Grid";

import "./css/index.css";

function App() {
  return (
    <Grid container>
      <Navbar />
      <Info />
      <Projects />
      <Contact />
      <Footer />
    </Grid>
  );
}

export default App;
