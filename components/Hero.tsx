import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 h-screen w-full">
      <div className="absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
          Next-level solutions for your ideas.
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Turning epic ideas into seamless Next.js"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Ayush, a Next.js developer based in INDIA
          </p>

          <a href="#about">
            <MagicButton 
              title="Show my work"
              icon={<FaLocationArrow />} // Ensure this icon is correctly imported and used
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
