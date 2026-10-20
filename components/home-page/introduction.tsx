import React from 'react';
import { RetroGrid } from "@/components/magicui/retro-grid";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { ArrowRight } from "lucide-react";

export default function Introduction() {
  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-midnight px-4 py-8 sm:p-8">
        
        <div className="relative flex h-[80vh] w-full flex-col gap-5 items-center justify-center overflow-hidden bg-midnight px-0 py-8 sm:p-8">
          <span className="text-center font-(family-name:--font-geist-mono) text-sm font-medium tracking-tight text-zinc-300 sm:text-lg">
            Hello, my name is Vineet Panchal, a software developer.
          </span>
          
          <div className="max-w-4xl mx-auto text-center">
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b bg-white bg-clip-text text-center font-(family-name:--font-inter-tight) text-[2.6rem] font-bold leading-none sm:text-6xl md:text-7xl tracking-tighter text-transparent">
              I code for fun... and sometimes it turns into 
              <span className="bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent"> something useful.</span>
            </span>
          </div>

          <div className="z-100">
            <button className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] py-2 pl-6 pr-2 text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:cursor-pointer hover:border-white/35 hover:bg-white/[0.14]">
              Let&apos;s Connect
              <span className="flex size-9 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="size-4" />
              </span>
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
