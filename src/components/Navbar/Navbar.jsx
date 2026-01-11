import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* Handle Scroll */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const menuLinks = [
    { title: "HOME", href: "#home" },
    { title: "MENU", href: "#menu" },
    { title: "CONTACT US", href: "#contact" },
  ];

  const smallLinks = [
    { title: "About Us", href: "#about" },
    { title: "Chefs Specialities", href: "#chefs-specialities" },
    { title: "Our Service", href: "#service" },
    { title: "Testimonials", href: "#testimonials" },
  ];


  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#090402]" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Alino Logo"
              className="w-40 h-auto object-contain"
            />

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Reservations Button */}
              <button
                onClick={openReservation}
                className="hidden sm:block bg-[#FFB612] hover:bg-[#007A4D] text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-colors"
              >
                Reservations
              </button>

              <ThemeToggle />

              {/* Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 hover:text-[#FFB612] transition-colors z-50"
              >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE / FULLSCREEN MENU ================= */}
      <div
        className={`fixed inset-0 bg-[#090402] z-40 transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="h-full overflow-y-auto pt-24 pb-8">
          <div className="min-h-full flex flex-col lg:flex-row">
            {/* Left Menu */}
            <div className="flex-1 px-6 lg:p-16 flex flex-col justify-center">
              <div className="max-w-xl">
                <div className="space-y-6 mb-10">
                  {menuLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white hover:text-[#FFB612] text-2xl lg:text-3xl transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                <div className="h-px bg-gray-700 my-8" />

                <div className="space-y-4 mb-10">
                  {smallLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                {/* Mobile Reservation Button */}
                <button
                  onClick={openReservation}
                  className="w-auto bg-[#FFB612] hover:bg-[#007A4D] text-white text-sm px-4 py-2 mb-6 rounded transition"
                >
                  Reservations
                </button>

                {/* Contact */}
                <a
                  href="tel:+447737098045"
                  className="flex items-center gap-3 text-white hover:text-[#FFB612]"
                >
                  <Phone size={18} /> +44 7737 098045
                </a>
                <a
                  href="https://wa.me/447737098045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 mt-3 text-white hover:text-[#FFB612] transition-colors duration-300 text-sm sm:text-base"
                >
                  <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#090402] z-10" />
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Fine Dining"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* 🔹 HIDDEN WIDGET TRIGGER (REQUIRED) */}
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
    </>
  );
}
