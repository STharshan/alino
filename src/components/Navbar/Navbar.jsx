import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "/logo.jpeg"; // import your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change bg after 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-4 lg:py-6 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="ALINO Logo"
              className="w-12 h-12 object-contain"
            />
          </Link>
          <p
            className={`text-2xl lg:text-3xl font-semibold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            ALINO
          </p>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`gap-8 hidden sm:flex ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <li className="hover:border-b-2 border-primary uppercase">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b-2 border-primary uppercase">
            <HashLink smooth to="#menu">
              Menu
            </HashLink>
          </li>
          <li className="hover:border-b-2 border-primary uppercase">
            <HashLink smooth to="#contact">
              Contact Us
            </HashLink>
          </li>
        </ul>

        {/* Hamburger for Mobile */}
        <button
          className={`sm:hidden text-3xl ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"} sm:hidden`}
      >
        <ul className="flex flex-col mt-20 gap-6 px-6 text-black">
          <li className="hover:border-b-2 border-primary uppercase">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:border-b-2 border-primary uppercase">
            <HashLink smooth to="#menu" onClick={() => setIsOpen(false)}>
              Menu
            </HashLink>
          </li>
          <li className="hover:border-b-2 border-primary uppercase">
            <HashLink smooth to="#contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </HashLink>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
