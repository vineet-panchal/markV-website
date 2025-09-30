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
          className="inset-0 object-cover z-0 opacity-100"
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

      <div className="font-[outfit] text-center text-5xl md:text-1xl font-bold pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b bg-white bg-clip-text leading-none tracking-tighter text-transparent">
      
        <div className="bg-white bg-clip-text text-center text-2xl font-extralight text-transparent font-sans letter-spacing-wide">
          {subheading}
        </div>
        <span className="">  
          {heading}
          <span>
            <AuroraText className="text-6xl italic font-[nyght-serif-dark]"> {coloredText} </AuroraText>
          </span> 
        </span>
      </div>
      </div>
    </>
  )
};