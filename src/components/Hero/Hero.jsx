"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const taglines = [
    "Delicious Food Is Waiting For You",
    "Experience The Taste Of Happiness",
    "Fresh Ingredients, Perfectly Cooked",
    "Your Favorite Meals, Anytime",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* Load GloriaFood Script ONCE */
  const openReservation = () => {
    // Load script once
    if (!document.getElementById("glf-script")) {
      const script = document.createElement("script");
      script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
      script.async = true;
      script.defer = true;
      script.id = "glf-script";
      document.body.appendChild(script);
    }

    // Trigger widget every click
    const interval = setInterval(() => {
      const btn = document.querySelector(".glf-button");
      if (btn) {
        btn.click();
        clearInterval(interval);
      }
    }, 200);
  };

  return (
    <div className="relative w-full h-screen" id="home">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark/Light Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 -z-5 transition-colors duration-300" />

      {/* Content */}
      <div className="relative flex items-center justify-center h-full z-10">
        <div className="flex flex-col justify-center items-center text-center gap-8 text-white px-4">

          {/* Tagline */}
          <h1
            key={currentIndex}
            className="
              text-4xl lg:text-6xl font-bold drop-shadow-lg
              transition-opacity duration-1000
              text-[#FFB612] 
            "
            data-aos="fade-up"
          >
            {taglines[currentIndex]}
          </h1>

          {/* Description */}
          <p
            className="
              max-w-2xl text-lg drop-shadow-md
              text-white/90 dark:text-gray-200
              transition-colors
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome to our restaurant, where every dish is crafted with love and
            passion. From authentic flavors to modern favorites, we serve meals
            that bring people together and create lasting memories.
          </p>

          {/* Buttons */}
          <div
            className="flex gap-4 items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {/* Food Menu Button */}
            <a
              href="#menu"
              className="
                px-6 py-3 rounded-lg font-semibold hover:scale-105 duration-200
                bg-[#007A4D] text-white
                dark:bg-[#00995F] dark:text-white
              "
            >
              Food Menu
            </a>

            {/* Book Table Button */}
            <button
              onClick={openReservation}
              className="
                px-6 py-3 rounded-lg font-semibold hover:scale-105 duration-200
                bg-[#FFB612] text-black
                dark:bg-[#FFB612] dark:text-gray-900
              "
            >
              order now
            </button>
          </div>
        </div>
      </div>
      <span
        className="glf-button"
        data-glf-cuid="090174fa-7049-49f3-8058-5195366e5e06"
        data-glf-ruid="2e15d43c-f4d8-4c97-b8b5-ba72b7e75773"
        style={{ display: "none" }}
      >
        Order
      </span>
    </div>
  );
};

export default Hero;
