import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/Term";
import ScrollToTop from "./components/ScrollToTop";
import GDPRConsent from "./components/GDPRButton";
import Home from "./page/Home";
import AlinoNight from "./page/AlinoNight";
import ScrollToHash from "./components/ScrollToHash";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,     // animate every time you scroll
      mirror: true,    // animate out while scrolling up
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alino-night" element={<AlinoNight />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      <GDPRConsent />
    </Router>
  );
};

export default App;
