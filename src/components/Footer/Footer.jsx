import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-[#FFFFFF] pt-12 pb-6 ps-0 lg:ps-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {/* About Section */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#FFB612" }} // yellow heading
          >
            Our Restaurant
          </h2>
          <p className="leading-relaxed" style={{ color: "#E5E5E5" }}>
            Serving delicious meals with love and passion. Enjoy our cozy
            ambiance, fast delivery, and gourmet menu.
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#FFB612" }}
          >
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <HashLink
                to="/#"
                className="transition hover:text-[#007A4D]  text-[#E5E5E5]"
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#about"
                className="transition hover:text-[#007A4D] text-[#E5E5E5]"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#menu"
                className="transition hover:text-[#007A4D] text-[#E5E5E5]"
              >
                Menu
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                className="transition hover:text-[#007A4D] text-[#E5E5E5]"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#FFB612" }}
          >
            Contact Us
          </h2>
          <p style={{ color: "#E5E5E5" }}>
            <a
              href="https://maps.app.goo.gl/X9MaGHdrdnypXHje6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-[#E5E5E5]"
              style={{  textDecoration: "none" }}
            >
              11 Narborough Rd, Leicester LE3 0LE, <br /> United Kingdom
            </a>
          </p>

          <p style={{ color: "#E5E5E5" }}>
            <a
              href="tel:+447737098045"
              className="hover:text-gray-300 text-[#E5E5E5]"
              style={{ textDecoration: "none" }}
            >
              07737098045
            </a>
          </p>

          <p style={{ color: "#E5E5E5" }}>
            <a
            className="hover:text-gray-300 text-[#E5E5E5]"
              href="mailto:alinoltd@gmail.com"
              style={{  textDecoration: "none" }}
            >
              alinoltd@gmail.com
            </a>
          </p>
          <div className="flex mt-4 space-x-3">
            <a
              href="https://web.facebook.com/AlinoRestaurantBar/?locale=en_GB&_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#007A4D] hover:bg-[#FFB612] text-white p-2 rounded-full transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm space-y-2 px-6" style={{ color: "#AAAAAA" }}>
        <p>
          <Link to="/terms-conditions" className="hover:text-[#007A4D] transition">
            Terms &amp; Conditions
          </Link>{" "}
          |{" "}
          <Link to="/privacy-policy" className="hover:text-[#007A4D] transition">
            Privacy Policy
          </Link>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Our Restaurant. All rights reserved. | Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFB612] font-semibold"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
