import { BrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Nextsection from "./components/Nextsection";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Aboutus />
        <Nextsection />
        <Testimonial />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
