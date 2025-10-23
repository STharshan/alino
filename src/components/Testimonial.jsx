"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiStar } from "react-icons/fi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";

const BRAND = {
  primary: "#007A4D", // blue
  primaryHover: "#007BC2",
  text: "#1f2937",
};

const testimonials = [
  {
    text: "Absolutely amazing experience at ALINO! The food was full of authentic African flavours — fresh, perfectly seasoned, and beautifully presented. The atmosphere is warm and lively, with great music that really sets the mood.",
    name: "Amjad Khan",
  },
  {
    text: "What amazing food. Cooked with love and soul. Come here for the delicious food. Service a bit hit and miss, although they dealt with an issue well, and were courteous.",
    name: "Boncesca",
  },
  {
    text: "Wow! This place really has a nice vibe! I had a guest with me from Northampton and wanted to take him to African vibe place so was my first time here and had such a great experience! On arrival the bar staff are very friendly organised us drinks fast.",
    name: "Thunder Domain",
  },
  {
    text: "Stop here with my family for dinner. The food was amazing and fresh. Customer service top you don’t want to leave. Keep it up…",
    name: "Andre Cutz",
  },
  {
    text: "Great atmosphere, kind and warm welcome by the owner and 5 stars food, delicious!!! Highly recommend it.",
    name: "ARMANDO PORTABALES CAMPELO",
  },
  {
    text: "What a amazing venue. Recently opened back up after a fantastic refurb.... Good was on point. Staff welcoming and all with smiles. Atmosphere was on point. I ate drank and had an amazing time. Dj played the best music and the place was so full of lively people all looking for one thing to enjoy good food, good music, good company and a good night of fun",
    name: "Lauren Clarke",
  },
  {
    text: "Great place with great fried rice and roasted chicken. I enjoyed the reception as well and the music was great. I'm definitely going back to Alino when next I visit Leicester.",
    name: "Love Mba",
  },
  {
    text: "What an amazing place to come to. The food reminds you of Africa, the test and the flavours are so nice. Will highly encourage you to come over. The fish (Tilapia) so sweet😋😋😋😋😋",
    name: "Nana Fabiola",
  },
];

function InitialAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center font-semibold text-base"
      style={{
        backgroundColor: "rgba(0,150,230,0.12)",
        border: `1px solid ${BRAND.primary}`,
        color: BRAND.primary,
      }}
    >
      {initials}
    </div>
  );
}

export default function ReviewsSlider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // repeat animations
      mirror: true, // animate back on scroll up
      offset: 100,
    });
  }, []);

  return (
    <section
      className="w-full bg-white dark:bg-black text-[#1f2937] dark:text-white py-16 px-4 relative transition-colors"
      id="testimonial"
    >
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: transparent;
          border: 2px solid ${BRAND.primary};
          width: 10px;
          height: 10px;
          opacity: 1;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: ${BRAND.primary};
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2
            className="text-5xl font-bold mb-5 font-sans text-[#007A4D]"
          >
            Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg font-semibold">
            What Our Customers Say
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="flex">
              <article
                className="flex flex-col justify-between h-full w-full min-h-[320px] rounded-2xl border p-6 shadow-md 
                           transition-all hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] cursor-pointer
                           bg-[#f9fafb] dark:bg-gray-900 border-gray-200 dark:border-gray-700 group relative"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#FFB612]/5 via-transparent to-transparent" />

                <div>
                  <div className="flex items-center gap-3">
                    <InitialAvatar name={t.name} />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 text-[#FFB612]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FiStar key={i} className="w-4 h-4 fill-[#FFB612]" />
                        ))}
                      </div>
                      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Verified review
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    “{t.text}”
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div
                    className="font-semibold"
                    style={{ color: BRAND.primary }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="flex items-center gap-1 px-2 py-1 rounded-full border text-sm text-[#FFB612]"
              
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar key={i} className="w-3.5 h-3.5 fill-[#FFB612]" />
                    ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav buttons */}
        <div
          className="flex justify-center gap-6 mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center rounded-full border transition
                       border-[#FFB612] text-[#FFB612] hover:bg-[#FFB612] hover:text-white active:scale-95"
          >
            <BsArrowLeft className="w-5 h-5" />
          </button>
          <button
            className="swiper-button-next-custom w-10 h-10 flex items-center justify-center rounded-full border transition
                       border-[#FFB612] text-[#FFB612] hover:bg-[#FFB612] hover:text-white active:scale-95"
          >
            <BsArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA button */}
        <div
          className="flex justify-center mt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="https://www.google.com/search?sca_esv=4acfbdfe9e621853&rlz=1C5CHFA_enCA1132CA1132&sxsrf=AE3TifNrfck74VfLMnFpdty89y6InpNqwA:1761228599164&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ex3gtzaFfJIubCoxIu_waRFztEXpy5ZOzn6h9v81TezHCs-jzJYCtHRXKDqT6cFS_DD6VO9ydvG4vej4_tUyQ1_SpSN5&q=ALINO+Reviews&sa=X&ved=2ahUKEwjW0JXov7qQAxUA4zgGHaS3DMUQ0bkNegQIJxAE&biw=1366&bih=633&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md text-white text-sm font-semibold transition
                       bg-[#FFB612] hover:bg-[#007A4D] active:scale-95"
          >
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}

