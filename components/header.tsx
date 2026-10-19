import React from 'react';
import { cn } from '@/lib/utils';
import { AuroraText } from './magicui/aurora-text';
import { Spotlight } from './ui/spotlight';

interface HeaderProps {
  heading: string;
  subHeading: string;
  coloredText: string;
}

export default function Header({ heading, subHeading, coloredText }: HeaderProps) {
  return (
    <>
      <div className="font-(family-name:--font-inter-tight) text-center text-5xl md:text-1xl font-bold pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b bg-white bg-clip-text leading-none tracking-tighter text-transparent">
      
        <p className="mb-3 text-center font-(family-name:--font-geist-mono) text-xs font-normal lowercase tracking-widest text-zinc-500">
          {"// "}
          {heading}
        </p>
        <span className="">  
          {subHeading}
          <span>
            <AuroraText className="text-[3.25rem] italic font-(family-name:--font-dm-serif-display) font-normal tracking-normal"> {coloredText} </AuroraText>
          </span> 
        </span>
      </div>
    </>
  )
}