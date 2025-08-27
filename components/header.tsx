import React from 'react';
import { AuroraText } from './magicui/aurora-text';

interface HeaderProps {
  heading: string;
  subHeading: string;
  coloredText: string;
}

export default function Header({ heading, subHeading, coloredText }: HeaderProps) {
  return (
    <>
      <div className="font-[outfit] text-center text-5xl md:text-1xl font-bold pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b bg-white bg-clip-text leading-none tracking-tighter text-transparent">
        <div className="bg-white bg-clip-text text-center text-2xl font-extralight text-transparent font-sans">
          {heading}
        </div>
        <span className="">  
          {subHeading}
          <span>
            <AuroraText className="text-6xl italic font-[nyght-serif-dark]"> {coloredText} </AuroraText>
          </span> 
        </span>
      </div>
    </>
  )
}