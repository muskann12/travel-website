import React from 'react';
import Image from 'next/image';
import SearchBox from './helper/SearchBox';

const Hero = () => {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      {/* Background image */}
      <Image
        src="/images/Hunza.png" // Replace with your image path
        alt="Hunza"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Centered content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center">
        <h1 className="text-white text-4xl lg:text-6xl font-serif mb-4">
          Let&apos;s Enjoy the Journey
        </h1>
        <p className="text-white text-lg lg:text-2xl max-w-[600px] font-semibold">
          Explore the beautiful Pakistan&apos;s landscapes, breathtaking views, and thrilling adventures that await you in the heart of nature.
        </p>

        {/* SearchBox added here */}
        <SearchBox />
      </div>

      {/* Overlay (darken the image) */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
    </div>
  );
};

export default Hero;


