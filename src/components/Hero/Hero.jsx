"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "/logo.jpeg"; // <-- your logo image

const Hero = () => {
  const taglines = [
    "Delicious Food Is Waiting For You",
    "Experience The Taste Of Happiness",
    "Fresh Ingredients, Perfectly Cooked",
    "Your Favorite Meals, Anytime",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    // Tagline rotation
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-5" />

      {/* Content */}
      <div className="relative flex items-center justify-center h-full z-10">
        <div className="flex flex-col justify-center items-center text-center gap-8 text-white px-4">
          <h1
            key={currentIndex}
            className="text-4xl lg:text-6xl font-bold drop-shadow-lg transition-opacity duration-1000"
            data-aos="fade-up"
            style={{ color: "#FFB612" }}
          >
            {taglines[currentIndex]}
          </h1>

          <p
            className="max-w-2xl text-lg drop-shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ color: "#FFFFFF" }}
          >
            Welcome to our restaurant, where every dish is crafted with love and
            passion. From authentic flavors to modern favorites, we serve meals
            that bring people together and create lasting memories.
          </p>

          <div
            className="flex gap-4 items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <button
              className="px-6 py-3 rounded-lg font-semibold hover:scale-105 duration-200"
              style={{ backgroundColor: "#007A4D", color: "#FFFFFF" }}
            >
              Food Menu
            </button>
            <button
              className="px-6 py-3 rounded-lg font-semibold hover:scale-105 duration-200"
              style={{ backgroundColor: "#FFB612", color: "#000000" }}
            >
              Book Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
