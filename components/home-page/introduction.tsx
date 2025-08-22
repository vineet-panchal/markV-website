import React from 'react';
import { RetroGrid } from "@/components/magicui/retro-grid";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import "@/css/introduction.css"

export default function Introduction() {
  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-midnight p-8">
        
        <div className="relative flex h-[80vh] w-full flex-col gap-5 items-center justify-center overflow-hidden bg-midnight p-8">
          <span className="bg-white bg-clip-text text-center text-2xl font-bold text-transparent">
            Hello, my name is Vineet Panchal, a software developer.
          </span>
          
          <div className="max-w-4xl mx-auto text-center">
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b bg-white bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
              I code for fun... and sometimes it turns into 
              <span className="bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent"> something useful.</span>
            </span>
          </div>

          <div className="intro-btn-ctr z-100">
            <button className="intro-btn">
              <div className="text">
                Let's Connect --&gt;
              </div> 
            </button>
          </div>

        </div>
        
        <InteractiveGridPattern
          squares={[60, 20]}
          width={40}
          height={40}
          squaresClassName="fade-grid-square"
          className="fade-grid-container z-0"
        />
      </div>
    </>
  )
};
