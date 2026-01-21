import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CocktailBarCarousel() {

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg-night.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10  flex flex-col items-center justify-center h-full px-4 text-center">
        <Link
          to="/alino-night#contact"
          className={`border-2 border-white rounded-xl text-white px-10 py-4 uppercase tracking-widest hover:bg-[#FFB612] hover:text-black transition-all duration-300 translate-y-4'
            : 'opacity-100 translate-y-0'
            }`}
          style={{ transitionDelay: '200ms' }}
        >
          Reservation
        </Link>
      </div>
    </div>
  );
}
