"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Music, Languages } from "lucide-react";
import { Tile } from "./tile";

// The three languages Vineet speaks — update if these aren't right
const GREETINGS = [
  { word: "Hello", lang: "English" },
  { word: "नमस्ते", lang: "Hindi" },
  { word: "કેમ છો", lang: "Gujarati" },
];

const BARS = [0.9, 0.5, 1, 0.65, 0.8, 0.4, 0.95, 0.6, 0.75, 0.45, 0.85, 0.55];

export default function BeyondTile({ className }: { className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % GREETINGS.length), 2200);
    return () => clearInterval(id);
  }, []);

  const g = GREETINGS[i];

  return (
    <Tile label="off the clock" className={className}>
      <div className="flex h-full flex-col justify-between pt-4">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-white/[0.06]">
            <Music className="size-4 text-zinc-300" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-white">Making music</p>
            <p className="text-xs text-zinc-500">when the code compiles</p>
          </div>
          <div aria-hidden className="ml-auto flex h-8 items-end gap-[3px]">
            {BARS.map((h, n) => (
              <span
                key={n}
                className="w-[3px] origin-bottom rounded-full bg-gradient-to-t from-[#8c1eff] via-[#ff2975] to-[#ffd319]"
                style={{
                  height: `${h * 100}%`,
                  animation: `eq-bounce ${0.7 + (n % 4) * 0.18}s ease-in-out ${n * 0.07}s infinite alternate`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative h-20 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={g.word}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0 flex items-center font-(family-name:--font-inter-tight) text-5xl font-bold tracking-tight text-white"
            >
              {g.word}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-white/[0.06]">
            <Languages className="size-4 text-zinc-300" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-white">Speaks {GREETINGS.length} languages</p>
            <p className="font-(family-name:--font-geist-mono) text-xs text-zinc-500">now: {g.lang.toLowerCase()}</p>
          </div>
        </div>
      </div>
    </Tile>
  );
}
