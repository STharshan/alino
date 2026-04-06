import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error when typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { name, email, phone, message } = formData;

    const whatsappNumber = "447737098045";

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

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <section className="relative py-20 px-6 lg:px-20 overflow-hidden bg-white scroll-m-30 dark:bg-black transition-colors">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="shadow-xl rounded-2xl p-8 transition hover:shadow-2xl bg-white dark:bg-[#1B1B1B]"
          >
            <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
              Send us a message
            </h2>

            {/* Name */}
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full mb-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${
                errors.name ? "border border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mb-3">{errors.name}</p>
            )}

            {/* Email */}
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full mb-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${
                errors.email ? "border border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-3">{errors.email}</p>
            )}

            {/* Phone */}
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
            />

            {/* Message */}
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`w-full mb-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${
                errors.message ? "border border-red-500" : ""
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mb-3">{errors.message}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold shadow transition-transform duration-300 hover:scale-105 bg-[#007A4D] text-white dark:bg-[#00FF8C] dark:text-black"
            >
              Send Message
            </button>

            <p className="text-xs text-center dark:text-gray-300 mt-5">
             By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
            </p>
          </form>

          {/* RIGHT SIDE (unchanged) */}
          <div className="shadow-xl rounded-2xl p-8 bg-white dark:bg-[#1B1B1B]">
            <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
              Get in touch
            </h2>

            <p className="mb-3">
              <strong>Address:</strong> 11 Narborough Rd, Leicester LE3 0LE, UK
            </p>

            <p className="mb-3">
              <strong>Phone:</strong> 07737098045
            </p>

            <p className="mb-3">
              <strong>Email:</strong> alinoltd@gmail.com
            </p>

            <p className="mb-6">
              <strong>Opening Hours:</strong> Mon-Sun: 10:00 AM - 10:00 PM
            </p>

            <div className="w-full h-80 rounded-xl overflow-hidden">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;