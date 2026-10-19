"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Tile } from "@/components/home-page/bento/tile";
import { STACKS } from "./gitroll-data";

const MAX_SHARE = Math.max(...STACKS.map((s) => s.share));

export default function StacksTile({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Tile label="tech stacks detected in my repos" className={className}>
      <div ref={ref} className="flex flex-1 flex-col justify-center gap-5 pt-6">
        {STACKS.map((stack, i) => (
          <div key={stack.area} className="grid gap-2 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-center sm:gap-5">
            <div className="flex items-baseline justify-between gap-3 sm:block">
              <p className="font-(family-name:--font-inter-tight) text-base font-semibold tracking-tight text-white">{stack.area}</p>
              <p className="font-(family-name:--font-geist-mono) text-xs tabular-nums text-zinc-500">{stack.share.toFixed(1)}%</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${stack.color}55, ${stack.color})`,
                    boxShadow: `0 0 16px ${stack.color}66`,
                  }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${Math.max((stack.share / MAX_SHARE) * 100, 3)}%` } : {}}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.12 }}
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stack.skills.slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-(family-name:--font-geist-mono) text-[11px] text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
                {stack.skills.length > 6 && (
                  <span className="px-1 py-0.5 font-(family-name:--font-geist-mono) text-[11px] text-zinc-600">
                    +{stack.skills.length - 6}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Tile>
  );
}
