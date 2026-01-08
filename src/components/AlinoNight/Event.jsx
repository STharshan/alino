import React from 'react';

export default function EventSection() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Side - Image Section */}
        <div className="lg:w-1/2 relative bg-black">
          <div className="absolute top-8 left-8 md:top-16 md:left-16 z-10">
            <div className="text-white">
              <div className="text-8xl md:text-9xl font-bold leading-none" style={{fontFamily: 'Arial, sans-serif'}}>12</div>
              <div className="text-xl md:text-2xl mt-1 font-light">November</div>
              <div className="text-xl md:text-2xl font-light">Opening</div>
            </div>
          </div>
          
          {/* Image with gradient overlay */}
          <div className="h-96 lg:h-full w-full relative">
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80" 
              alt="Musician performing" 
              className="w-full h-full object-cover brightness-75"
            />
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="lg:w-1/2 flex flex-col justify-center items-end px-8 md:px-16 lg:px-20 xl:px-32 py-16 lg:py-0 bg-black">
          
          {/* EVENTS Title */}
          <div className="w-full text-right mb-20 lg:mb-32">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider" 
                style={{
                  color: '#3a3a3a',
                  fontFamily: 'Arial, sans-serif',
                  letterSpacing: '0.05em'
                }}>
              EVENTS
            </h1>
          </div>

          {/* Event Details */}
          <div className="w-full text-right">
            {/* Artist Name with Underline */}
            <div className="mb-8 flex flex-col items-end">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-3" 
                  style={{fontFamily: 'Arial, sans-serif'}}>
                Lilly Flat
              </h2>
              <div className="w-24 md:w-32 h-px bg-white"></div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-md ml-auto" 
               style={{
                 color: '#e0e0e0',
                 fontFamily: 'Arial, sans-serif',
                 lineHeight: '1.8'
               }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at sapien pharetra nunc ultricies mollis. Integer quis varius diam.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}