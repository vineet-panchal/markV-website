import React from 'react';
import { AuroraText } from './magicui/aurora-text';

import Image from 'next/image';
interface MainHeaderProps {
  subheading: string;
  heading: string;
  coloredText: string;
}

export default function MainHeader({subheading, heading, coloredText} : MainHeaderProps) {
  return (
    <>
      <div className="relative h-[30rem] bg-transparent text-white w-full flex items-center justify-center text-4xl font-bold overflow-hidden">
        <Image
          src="/assets/experience.jpg"
          alt="clouds"
          className="inset-0 z-0 object-cover opacity-100 light:opacity-45 light:[filter:invert(1)_grayscale(1)_brightness(1.2)_contrast(0.85)]"
          fill
          priority
        />
        
        <div 
          className="pointer-events-none absolute top-0 left-0 w-full h-1/2 z-10"
          style={{
            background: "linear-gradient(to bottom, var(--color-midnight), transparent)"
          }} 
        />

        <div 
          className="pointer-events-none absolute bottom-0 left-0 w-full h-1/3 z-10"
          style={{
            background: "linear-gradient(to top, var(--color-midnight), transparent)"
          }} 
        />

      <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center pointer-events-none">
        <p className="font-(family-name:--font-space-grotesk) text-lg font-light tracking-wide text-zinc-200 sm:text-xl">
          {subheading}
        </p>
        <h1 className="font-(family-name:--font-inter-tight) text-5xl font-bold leading-none tracking-tighter text-white sm:text-6xl md:text-7xl">
          {heading}{" "}
          <AuroraText className="pr-2 text-[1.08em] font-(family-name:--font-dm-serif-display) font-normal italic tracking-normal">
            {coloredText}
          </AuroraText>
        </h1>
      </div>
      </div>
    </>
  )
};