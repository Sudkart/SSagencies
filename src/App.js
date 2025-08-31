import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Services from "./pages/services";
import About from "./pages/about";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
     AOS.init({
      duration: 1000,   // animation duration (ms)
      once: true,       // animate only once
      offset: 80,       // offset (px) before element enters view
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Router>
      {/* Spinner (optional) */}
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{ display: "none" }}>
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* Add other pages later: About, Services, Blog, Contact, etc. */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
