"use client";
import React, { useEffect } from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { MdRestaurantMenu, MdLocalDining } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // replay every scroll
      mirror: true, // animate on scroll up
      offset: 100,
      easing: "ease-out",
    });

    const refreshTimer = setTimeout(() => AOS.refreshHard(), 300);
    window.addEventListener("resize", AOS.refresh);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  // service cards data with brand colors
  const services = [
    {
      id: 1,
      icon: <FaMobileScreen className="text-4xl mb-4" style={{ color: "#007A4D" }} />, // green
      title: "Online Reservations",
      desc: "Book your table instantly through our app or website",
      shadow: "hover:shadow-[0_0_30px_#007A4D]", // green glow
    },
    {
      id: 2,
      icon: <MdRestaurantMenu className="text-4xl mb-4" style={{ color: "#FFB612" }} />, // yellow
      title: "Gourmet Menu",
      desc: "Enjoy a wide range of delicious meals crafted by top chefs",
      shadow: "hover:shadow-[0_0_30px_#FFB612]", // yellow glow
    },
    {
      id: 3,
      icon: <MdLocalDining className="text-4xl mb-4" style={{ color: "#000000" }} />, // black
      title: "Dine-In Experience",
      desc: "Relax in our cozy restaurant with a welcoming ambiance",
      shadow: "hover:shadow-[0_0_30px_#000000]", // black glow
    },
    {
      id: 4,
      icon: <CiDeliveryTruck className="text-4xl mb-4" style={{ color: "#007A4D" }} />, // green again for balance
      title: "Home Delivery",
      desc: "Get your favorite meals delivered fast and fresh to your door",
      shadow: "hover:shadow-[0_0_30px_#007A4D]", // green glow
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }} // ✅ white base bg
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* header section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#007A4D" }}
          >
            Our Services
          </h1>
          <p className="mt-2 text-lg" style={{ color: "#000000" }}>
            Experience the best dining with our premium services
          </p>
        </div>

        {/* icons section with cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className={`flex flex-col items-center text-center bg-white rounded-xl p-8 h-72 shadow-md transform transition duration-500 ease-out cursor-pointer ${service.shadow}`}
            >
              {service.icon}
              <p
                className="text-xl font-semibold mb-2"
                style={{ color: "#000000" }}
              >
                {service.title}
              </p>
              <span
                className="text-sm leading-relaxed"
                style={{ color: "#4B5563" }}
              >
                {service.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
