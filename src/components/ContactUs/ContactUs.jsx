"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // minimal required validation (silent)
    if (!name || !email || !message) return;

    const whatsappNumber = "447737098045"; // no +

    const whatsappMessage = `
New Contact Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}
  `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };


  return (
    <section className="relative py-20 px-6 lg:px-20 overflow-hidden bg-white scroll-m-30 dark:bg-black transition-colors">
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up" id="contact">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-[#007A4D] dark:text-[#00FF8C]">
            Contact Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-black dark:text-gray-200">
            We’d love to hear from you! Reach out for reservations, questions, or feedback.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="shadow-xl rounded-2xl p-8 transition hover:shadow-2xl bg-white dark:bg-[#1B1B1B]"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
              Send us a message
            </h2>

            {/* Name */}
            <label className="block mb-2 font-medium text-black dark:text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#007A4D]"
              required
            />

            {/* Email */}
            <label className="block mb-2 font-medium text-black dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#007A4D]"
              required
            />

            {/* Phone */}
            <label className="block mb-2 font-medium text-black dark:text-gray-200">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#007A4D]"
            />

            {/* Message */}
            <label className="block mb-2 font-medium text-black dark:text-gray-200">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full mb-6 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#007A4D]"
              required
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold shadow transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#007A4D] bg-[#007A4D] text-white dark:text-black dark:bg-[#00FF8C]"
            >
              Send Message
            </button>
            <p className="text-xs text-center dark:text-gray-300 mt-5">By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
          </form>

          {/* Contact Info */}
          <div
            className="shadow-xl rounded-2xl p-8 transition hover:shadow-2xl bg-white dark:bg-[#1B1B1B]"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Get in touch</h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong className="text-[#007A4D] dark:text-[#00FF8C]">Address:</strong>{" "}
              <a
                href="https://maps.app.goo.gl/X9MaGHdrdnypXHje6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                11 Narborough Rd, Leicester LE3 0LE, United Kingdom
              </a>
            </p>

            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong className="text-[#007A4D] dark:text-[#00FF8C]">Phone:</strong>{" "}
              <a
                href="tel:+441162222153"
                className="hover:underline"
              >
                +44 116 222 2153
              </a>
            </p>

            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong className="text-[#007A4D] dark:text-[#00FF8C]">Email:</strong>{" "}
              <a
                href="mailto:alinoltd@gmail.com"
                className="hover:underline"
              >
                alinoltd@gmail.com
              </a>
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              <strong className="text-[#007A4D] dark:text-[#00FF8C]">Opening Hours:</strong> Mon-Sun: 10:00 AM - 10:00 PM
            </p>

            {/* Google Map */}
            <div className="w-full h-104 rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.635833947923!2d-1.1481993!3d52.6304247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761d658176503%3A0x8966cbad0f1f790c!2sALINO!5e0!3m2!1sen!2slk!4v1767791559998!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
