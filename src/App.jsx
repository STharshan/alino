import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "../src/components/PrivacyPolicy"
import TermsConditions from "../src/components/Term"
import ScrollToTop from "../src/components/ScrollToTop"
import GDPRConsent from "./components/GDPRButton";
import Home from "./page/Home";

const App = () => {
  return (
    <Router>
          <Navbar />
          < ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
          <GDPRConsent />
    </Router>
  );
};

export default App;
