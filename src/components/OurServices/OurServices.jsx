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

  const services = [
    {
      id: 1,
      icon: <FaMobileScreen className="text-4xl mb-4" style={{ color: "#007A4D" }} />,
      title: "Online Reservations",
      desc: "Book your table instantly through our app or website",
      shadow: "hover:shadow-[0_0_30px_#007A4D]",
      darkShadow: "hover:shadow-[0_0_30px_#50C878]", // lighter green for dark
    },
    {
      id: 2,
      icon: <MdRestaurantMenu className="text-4xl mb-4" style={{ color: "#FFB612" }} />,
      title: "Gourmet Menu",
      desc: "Enjoy a wide range of delicious meals crafted by top chefs",
      shadow: "hover:shadow-[0_0_30px_#FFB612]",
      darkShadow: "hover:shadow-[0_0_30px_#FFD700]", // gold for dark
    },
    {
      id: 3,
      icon: <MdLocalDining className="text-4xl mb-4" style={{ color: "#FFB612" }} />,
      title: "Dine-In Experience",
      desc: "Relax in our cozy restaurant with a welcoming ambiance",
      shadow: "hover:shadow-[0_0_30px_#FFB612]",
      darkShadow: "hover:shadow-[0_0_30px_#FFD700]",
    },
    {
      id: 4,
      icon: <CiDeliveryTruck className="text-4xl mb-4" style={{ color: "#007A4D" }} />,
      title: "Home Delivery",
      desc: "Get your favorite meals delivered fast and fresh to your door",
      shadow: "hover:shadow-[0_0_30px_#007A4D]",
      darkShadow: "hover:shadow-[0_0_30px_#50C878]",
    },
  ];

  return (
    <section id="service" className="relative py-24 overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10 " />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* header section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1
            className="text-4xl font-bold mb-4 text-[#007A4D] dark:text-[#50C878]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Services
          </h1>
          <p className="mt-2 text-lg text-black dark:text-gray-300">
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
              className={`flex flex-col items-center text-center bg-white dark:bg-[#111A1D] rounded-xl p-8 h-72 shadow-md transform transition duration-500 ease-out cursor-pointer 
                          ${service.shadow} dark:${service.darkShadow}`}
            >
              {service.icon}
              <p className="text-xl font-semibold mb-2 text-black dark:text-white">
                {service.title}
              </p>
              <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
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
