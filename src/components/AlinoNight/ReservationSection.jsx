"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(true);

  // ✅ SAME STRUCTURE, SAME FIELD NAMES
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    people: "",
    date: "",
    time: ""
  });

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // ✅ CONTENT ONLY UPDATED
  const handleWhatsAppBooking = (e) => {
    e.preventDefault();

    const message =
      `Hello Alino, I would like to reserve a table:%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Guests:* ${formData.people}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}`;

    window.open(
      `https://wa.me/441162222153?text=${message}`,
      "_blank"
    );
  };

  // unchanged
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 md:px-8 lg:px-16 
      bg-white text-black 
      dark:bg-black dark:text-white 
      transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT HERO */}
        <div className="relative w-full h-80 md:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden border border-black/10 dark:border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/60" />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <span className="text-[#007A4D] font-bold tracking-[0.4em] uppercase text-xs mb-4">
              Reservations
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl uppercase leading-tight text-white">
              Book <br /> via <br />
              <span className="text-[#007A4D]">WhatsApp</span>
            </h2>
            <div className="h-1 w-16 bg-[#007A4D] my-6"></div>
            <p className="text-gray-300 text-sm italic max-w-xs">
              Alino, Authentic African Cuisine & Bar
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-3xl p-8 md:p-12 backdrop-blur-xl 
          bg-black/5 dark:bg-white/3 
          border border-black/10 dark:border-white/10 transition">

          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl">
              Secure Your Table
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs tracking-widest uppercase">
              Traditional Taste • Modern Convenience
            </p>
          </div>

          {/* ⚠️ STRUCTURE UNCHANGED */}
          <form
            onSubmit={handleWhatsAppBooking}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { label: "FULL NAME", name: "name", type: "text" },
              { label: "PHONE NUMBER", name: "phone", type: "tel" },
              { label: "GUESTS", name: "people", type: "number" },
              { label: "DATE", name: "date", type: "date" }
            ].map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="text-[10px] tracking-[0.2em] mb-2 text-gray-500">
                  {field.label}
                </label>
                <input
                  required
                  {...field}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl 
                  bg-white text-black 
                  dark:bg-black dark:text-white 
                  border border-black/10 dark:border-white/10
                  focus:outline-none focus:border-[#007A4D]"
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="text-[10px] tracking-[0.2em] mb-2 block text-gray-500">
                ARRIVAL TIME
              </label>
              <input
                required
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl 
                bg-white text-black 
                dark:bg-black dark:text-white 
                border border-black/10 dark:border-white/10
                focus:outline-none focus:border-[#007A4D]"
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-5 rounded-xl uppercase tracking-[0.2em] text-xs font-black 
                bg-[#007A4D] text-white hover:brightness-110 transition flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} />
                Confirm on WhatsApp
              </button>
            </div>

            <div className="md:col-span-2 mt-8 pt-8 border-t border-black/10 dark:border-white/10 text-center space-y-2 text-xs text-gray-500">
              <div className="flex justify-center gap-2">
                <MapPin size={12} className="text-[#007A4D]" />
                11 Narborough Rd, Leicester LE3 0LE, United Kingdom
              </div>
              <div className="flex justify-center gap-2">
                <Phone size={12} className="text-[#007A4D]" />
                +44 116 222 2153
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
