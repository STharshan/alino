import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔒 Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const menuLinks = [
    { title: 'HOME', href: '#home' },
    { title: 'MENU', href: '#menu' },
    { title: 'CONTACT US', href: '#contact' },
  ];

  const smallLinks = [
    { title: 'About Us', href: '#about' },
    { title: 'Chefs Specialities', href: '#chefs-specialities' },
    { title: 'Our Service', href: '#service' },
    { title: 'Testimonials', href: '#testimonials' },
  ];

  // ✅ Smooth scroll + auto close
  const handleLinkClick = (href) => {
    setIsMenuOpen(false);

    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 300);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled ? 'bg-[#090402]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="flex items-center space-x-2 text-white">
              <img
                src="/logo.png"
                alt="Alino Logo"
                className="w-45 h-45 object-contain"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <HashLink 
                to="/#contact"
                smooth
                className="hidden sm:block bg-[#FFB612] hover:bg-amber-700 text-black px-6 py-2.5 rounded-sm text-sm font-medium transition-colors duration-300">
                Reservations
              </HashLink>

              <ThemeToggle />

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 hover:text-[#FFB612] transition-colors z-50"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <div
        className={`fixed inset-0 bg-[#090402] z-40 transition-transform duration-500 h-screen ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto pt-24 pb-8">
          <div className="min-h-full flex flex-col lg:flex-row">
            {/* LEFT SIDE */}
            <div className="flex-1 px-6 sm:px-8 lg:p-16 flex flex-col justify-start lg:justify-center">
              <div className="max-w-xl w-full">
                {/* Mobile Logo */}
                <div className="lg:hidden mb-8 sm:mb-12 text-white text-2xl sm:text-3xl font-serif tracking-wider">
                  ALINO
                </div>

                {/* MAIN LINKS */}
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                  {menuLinks.map((link) => (
                    <div key={link.title} className="group">
                      <div className="flex items-center">
                        <div className="w-0 h-0.5 bg-[#FFB612] group-hover:w-12 transition-all duration-300 mr-4"></div>
                        <button
                          onClick={() => handleLinkClick(link.href)}
                          className="text-white hover:text-[#FFB612] text-xl sm:text-2xl lg:text-3xl font-light tracking-wide transition-colors duration-300"
                        >
                          {link.title}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-700 my-6 sm:my-8"></div>

                {/* SMALL LINKS */}
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                  {smallLinks.map((link) => (
                    <button
                      key={link.title}
                      onClick={() => handleLinkClick(link.href)}
                      className="block text-gray-400 hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-300"
                    >
                      {link.title}
                    </button>
                  ))}
                </div>

                {/* CONTACT */}
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="tel:+447737098045"
                    className="flex items-center space-x-3 text-white hover:text-[#FFB612] transition-colors duration-300 text-sm sm:text-base"
                  >
                    <Phone size={18} />
                    <span>Call us: +44 7737 098045</span>
                  </a>

                  <a
                    href="https://wa.me/447737098045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white hover:text-[#FFB612] transition-colors duration-300 text-sm sm:text-base"
                  >
                    {/* WhatsApp SVG */}
                    <svg
                      className="w-[18px] h-[18px] sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
                    </svg>
                    <span>Enquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#090402] z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Fine Dining"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
