import React from 'react';
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const files = [
  {
    name: "SmartDeck",
    body: "Smart flashcards that actually learn with you.",
  },
  {
    name: "Rate My Professor",
    body: "Helping students pick the right prof before it’s too late.",
  },
  {
    name: "Fashion Disaster Avoider",
    body: "AI-powered style checks to save me from bad fits.",
  },
  {
    name: "Teach For Cambodia",
    body: "Built a educational platform for underprivileged kids in Cambodia.",
  },
  {
    name: "CrewChat",
    body: "A simple group chat app to stay connected with your crew.",
  },
];

export default function TheLabBackground() {
  return (
    <>
      <Marquee
        pauseOnHover
        className="absolute top-8 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-white-1 bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:white",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-white">{f.body}</blockquote>
          </figure>
        ))};
      </Marquee>  
    </>
  )
};
