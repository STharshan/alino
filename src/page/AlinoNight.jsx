import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/AlinoNight/Header";
import Cocktails from "../components/AlinoNight/Cocktails";
import EventSection from "../components/AlinoNight/Event";
import ReviewsSection from "../components/AlinoNight/TextScroll";
import ReservationSection from "../components/AlinoNight/ReservationSection";
import MenuSection from "../components/AlinoNight/MenuSection";
import LiquidMenu from "../components/AlinoNight/LiquidMenu";

const AlinoNight = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for render
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <EventSection />
      <ReviewsSection />
      <ReservationSection />
      {/* <Cocktails /> */}
      <MenuSection />
      <LiquidMenu />
    </div>
  );
};

export default AlinoNight;
