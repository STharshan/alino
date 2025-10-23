import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/TopList";
import Banner from "./components/Banner/Banner";
import OurServices from "./components/OurServices/OurServices";
import AboutUs from "./components/AboutUs/AboutUs";
import MenuSection from "./components/MenuSection/MenuSection";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
// import MenuPage from "./pages/MenuPage"; // Your new Menu page
// import HomePage from "./pages/HomePage"; // Optional: wrap homepage sections in this
import PrivacyPolicy from "../src/components/PrivacyPolicy"
import  TermsConditions from "../src/components/Term"
import ScrollToTop from "../src/components/ScrollToTop"
import AboutStory from "../src/components/AboutStory"
import SeafoodSection from "../src/components/SeafoodSection";
import Specialties from "../src/components/Specialties"
import OrderOnline from "../src/components/OrderOnline"
const bgStyle = {
  // backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
import DelightfulExperience from "../src/components/DelightfulExperience"
const App = () => {
  return (
    <Router>
      <div style={bgStyle} className="overflow-x-hidden">
        <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
          <Navbar />
  < ScrollToTop  />
          <Routes>
           
            {/* Home page route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutStory/>
                  <DelightfulExperience />
                
                  <SeafoodSection />
                  
                   <Specialties />
                  <OurServices />
                  <MenuSection />
                  <OrderOnline />

                  <ContactUs />
                </>
              }
            />

            {/* Menu page route */}
         

            {/* About page route (optional) */}
            <Route path="/about" element={
              <>
              
              
            
           
              </>
               
              } />

            <Route path="/contact" element={<ContactUs />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
