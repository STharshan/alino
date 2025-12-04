import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled ? 'bg-[#090402]' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="/" className="shrink-0 z-50">
              <div className="flex items-center space-x-2 text-white">
                {/* Logo Image */}
                <img
                  src="/logo.jpeg" // <-- replace with your logo path
                  alt="Alino Logo"
                  className="w-15 h-15  object-contain"
                />
                {/* Company Name */}
                <span className="text-2xl lg:text-3xl font-serif tracking-wider">
                  ALINO
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuLinks.slice(0, 3).map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-white hover:text-[#FFB612] transition-colors duration-300 text-sm tracking-wide"
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Reservations Button - Hidden on small mobile */}
              <a
               // href="https://www.sevenrooms.com/reservations/varanasibirmingham"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block bg-[#FFB612] hover:bg-amber-700 text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-colors duration-300"
              >
                Reservations
              </a>
              <ThemeToggle />

              {/* Menu Button */}
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

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#090402] z-40 transition-transform duration-500 h-screen ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full overflow-y-auto pt-24 pb-8">
          <div className="min-h-full flex flex-col lg:flex-row">
            {/* Left Side - Menu Items */}
            <div className="flex-1 px-6 sm:px-8 lg:p-16 flex flex-col justify-start lg:justify-center">
              <div className="max-w-xl w-full">
                {/* Logo for mobile menu */}
                <div className="lg:hidden mb-8 sm:mb-12 text-white text-2xl sm:text-3xl font-serif tracking-wider">
                  ALINO
                </div>

                {/* Main Menu Links */}
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                  {menuLinks.map((link, index) => (
                    <div key={link.title} className="group">
                      <div className="flex items-center">
                        <div className="w-0 h-0.5 bg-[#FFB612] group-hover:w-8 lg:group-hover:w-12 transition-all duration-300 mr-3 lg:mr-4"></div>
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="text-white hover:text-[#FFB612] text-xl sm:text-2xl lg:text-3xl font-light tracking-wide transition-colors duration-300"
                        >
                          {link.title}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Separator */}
                <div className="h-px bg-gray-700 my-6 sm:my-8"></div>

                {/* Small Links */}
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                  {smallLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="block text-gray-400 hover:text-white text-sm sm:text-base lg:text-lg transition-colors duration-300"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="tel:+44 7737 098045"
                    className="flex items-center space-x-3 text-white hover:text-[#FFB612] transition-colors duration-300 text-sm sm:text-base"
                  >
                    <Phone size={18} className="sm:w-5 sm:h-5 shrink-0" />
                    <span>Call us: +44 7737 098045</span>
                  </a>
                  <a
                      href="https://wa.me/447737098045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white hover:text-[#FFB612] transition-colors duration-300 text-sm sm:text-base"
                  >
                    <svg className="w-[18px] h-[18px] sm:w-5 sm:h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>Enquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Image (Desktop Only) */}
            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#090402] z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Fine Dining"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-8 right-8 z-20">
                <div className="bg-white px-4 py-2 rounded">
                  <span className="text-sm font-semibold">TripAdvisor 2021</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>


    </>
  );
}