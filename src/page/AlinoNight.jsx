import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/AlinoNight/Header";
import EventSection from "../components/AlinoNight/Event";
import ReviewsSection from "../components/AlinoNight/TextScroll";
import ReservationSection from "../components/AlinoNight/ReservationSection";
import MenuSection from "../components/AlinoNight/MenuSection";
import LiquidMenu from "../components/AlinoNight/LiquidMenu";
import SpritMenu from "../components/AlinoNight/SpritMenu";
import VodkaSection from "../components/AlinoNight/VodkaMenu";
import WineSection from "../components/AlinoNight/Wine";
import CreamSection from "../components/AlinoNight/Cream";
import JuiceSection from "../components/AlinoNight/Juice";
import NightNavbar from "../components/AlinoNight/NightNavbar";

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
      <NightNavbar />
      <Hero />
      <EventSection />
      <ReviewsSection />
      <ReservationSection />
      <MenuSection />
      <LiquidMenu />
      <SpritMenu />
      <VodkaSection />
      <WineSection />
      <CreamSection />
      <JuiceSection />
    </div>
  );
};

export default AlinoNight;
