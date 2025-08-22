import React from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { AuroraText } from '@/components/magicui/aurora-text';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function LetsConnectBackground() {
  return (
    <>
      <AuroraBackground
      >
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center h-full w-full text-center"
        >
          <div className="font-[outfit] text-3xl md:text-1xl font-bold dark:text-white text-center pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b bg-white bg-clip-text leading-none tracking-tighter text-transparent">
            <span className="">
              Let's
              <span>
                <AuroraText className="text-4xl italic font-[nyght-serif-dark]"> connect</AuroraText>
              </span> 
            </span>
          </div>
          <div className="font-extralight text-base md:text-4xl text-white dark:text-neutral-200 ">
            Always down to talk code, projects, or just random ideas.
          </div>
          <div className="py-2">
            <InteractiveHoverButton>Connect</InteractiveHoverButton>
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  )
};