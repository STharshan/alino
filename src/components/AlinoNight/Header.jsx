import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from 'lucide-react';

export default function CocktailBarCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      image: '3.jpg',
      title: 'Club 54 & Coctail Bar',
      address: '57 Rue du Maréchal Joffre, 16130 Nice, France',
      hours: 'Mon / Sat - 09:00am to 23:00pm'
    },
    {
      id: 2,
      image: '8.jpg',
      title: 'Classic Cocktails',
      address: '57 Rue du Maréchal Joffre, 16130 Nice, France',
      hours: 'Mon / Sat - 09:00am to 23:00pm'
    },
    {
      id: 3,
      image: 'alino.jpg',
      title: 'Premium Selection',
      address: '57 Rue du Maréchal Joffre, 16130 Nice, France',
      hours: 'Mon / Sat - 09:00am to 23:00pm'
    },
    {
      id: 4,
      image: '12.jpg',
      title: 'Signature Drinks',
      address: '57 Rue du Maréchal Joffre, 16130 Nice, France',
      hours: 'Mon / Sat - 09:00am to 23:00pm'
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/10 bg-opacity-40" />
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 text-center">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-4 md:mb-6 transition-all duration-700 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {slides[currentSlide].title}
        </h1>

        <p
          className={`text-sm sm:text-base md:text-lg text-white mb-2 transition-all duration-700 delay-100 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {slides[currentSlide].address}
        </p>

        <p
          className={`text-sm sm:text-base md:text-lg text-white mb-6 md:mb-8 transition-all duration-700 delay-150 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {slides[currentSlide].hours}
        </p>

        <button
          className={`bg-transparent border-2 border-white text-white px-8 md:px-12 py-3 md:py-4 text-sm md:text-base uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Reservation
        </button>
      </div>


      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 700);
              }
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6 md:w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}