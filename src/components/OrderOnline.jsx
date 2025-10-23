import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OrderOnline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: false,      // replay on scroll
      mirror: true,     // animate back when scrolling up
      offset: 100,
      easing: "ease-in-out",
    });

    const refreshTimer = setTimeout(() => AOS.refreshHard(), 300);
    window.addEventListener("resize", AOS.refresh);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  const partners = [
    {
      name: "Uber Eats",
      abbr: "UE",
      link: "https://www.ubereats.com/gb/store/alino-african-restaurant/gzN1O3tERbSgA7MxLaqp5w?srsltid=AfmBOoqzr1ibQWpjP4co10l_E9hINdIMM2Go81TLvGnTdVWDnvsfxmUX",
      color: "#007A4D", // green
    },
    {
      name: "Just Eat",
      abbr: "JE",
      link: "https://www.just-eat.co.uk",
      color: "#FFB612", // yellow
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10 text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)", color: "#000000" }}
          data-aos="fade-up"
        >
          Order Online
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto mb-12"
          style={{ color: "#4B5563" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Can’t visit us? No problem! Enjoy authentic African flavors delivered
          straight to your door through our delivery partners.
        </p>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-between 
                         transition duration-500 ease-out hover:-translate-y-2 
                         hover:shadow-[0_0_30px_#007A4D] active:shadow-[0_0_30px_#FFB612]"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              {/* Abbreviation Circle */}
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full text-2xl font-bold mb-6"
                style={{ backgroundColor: `${partner.color}20`, color: "#000000" }}
              >
                {partner.abbr}
              </div>

              {/* Name */}
              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-heading)", color: "#000000" }}
              >
                {partner.name}
              </h3>

              {/* Button */}
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-lg font-medium shadow 
                           transition duration-300 hover:scale-105 text-center"
                style={{
                  backgroundColor: partner.color,
                  color: partner.color === "#FFB612" ? "#000000" : "#FFFFFF",
                }}
              >
                Order on {partner.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderOnline;
