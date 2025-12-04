import React from 'react';

const FoodGalleryTicker = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fc2?w=500&h=500&fit=crop",
      alt: "Food 1",
      bg: "bg-red-900 dark:bg-red-800"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop",
      alt: "Food 2",
      bg: "bg-red-700 dark:bg-red-600"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&h=500&fit=crop",
      alt: "Food 3",
      bg: "bg-amber-800 dark:bg-amber-700"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=500&h=500&fit=crop",
      alt: "Person",
      bg: "bg-stone-700 dark:bg-stone-800"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=500&fit=crop",
      alt: "Food 5",
      bg: "bg-green-700 dark:bg-green-800"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop",
      alt: "Food 6",
      bg: "bg-green-900 dark:bg-green-900"
    }
  ];

  const duplicatedImages = [...images, ...images, ...images];

  const getCardSize = (index) => {
    const pattern = index % 2;
    if (pattern === 0) {
      return 'w-56 h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 lg:w-96 lg:h-[28rem]';
    } else {
      return 'w-40 h-48 sm:w-48 sm:h-56 md:w-60 md:h-72 lg:w-72 lg:h-80';
    }
  };

  const getRotation = (index) => {
    const pattern = index % 2;
    return pattern === 0 ? 'group-hover:rotate-3' : 'group-hover:-rotate-3';
  };

  return (
    <div className="w-full py-12 md:py-20 overflow-hidden bg-amber-50 dark:bg-black relative transition-colors duration-500">
          <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-[#007A4D]/10 via-transparent to-[#FFB612]/10" />
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-r from-amber-50 to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-l from-orange-50 to-transparent dark:from-black dark:to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="flex gap-6 md:gap-8 items-center animate-scroll">
          {duplicatedImages.map((image, index) => (
            <a
              key={`${image.id}-${index}`}
              href="https://www.instagram.com/afrikanakitchen/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 group perspective"
            >
              <div
                className={`relative overflow-hidden rounded-3xl md:rounded-[2.5rem] shadow-xl transition-all duration-500 ease-out
                  ${getCardSize(index)}
                  ${getRotation(index)}
                  group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:scale-105
                  transform-gpu ${image.bg}`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-white/10 transition-all duration-500"></div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  );
};

export default FoodGalleryTicker;
