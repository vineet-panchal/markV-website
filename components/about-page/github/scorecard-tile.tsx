"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Tile } from "@/components/home-page/bento/tile";
import { CURISM, GITROLL_URL, SCANNED, SCORE } from "./gitroll-data";

const MAX = 5;
const SIZE = 300;
const CENTER = SIZE / 2;
const RADIUS = 88;
const RINGS = [1, 2, 3, 4, 5];

const point = (i: number, value: number) => {
  const angle = (Math.PI * 2 * i) / CURISM.length - Math.PI / 2;
  const r = (value / MAX) * RADIUS;
  return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)] as const;
};

const polygon = (value: (i: number) => number) =>
  CURISM.map((_, i) => point(i, value(i)).join(",")).join(" ");

function Rating({ start }: { start: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!start) return;
    const controls = animate(0, SCORE.rating, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(2);
      },
    });
    return () => controls.stop();
  }, [start]);
  return <span ref={ref}>0.00</span>;
}

function Radar({ start }: { start: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-auto w-full max-w-[340px] overflow-visible" role="img" aria-label="CURISM radar chart">
      <defs>
        <linearGradient id="curism-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8c1eff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ff2975" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {RINGS.map((ring) => (
        <polygon key={ring} points={polygon(() => ring)} fill="none" stroke="rgba(255,255,255,0.07)" />
      ))}
      {CURISM.map((_, i) => {
        const [x, y] = point(i, MAX);
        return <line key={i} x1={CENTER} y1={CENTER} x2={x} y2={y} stroke="rgba(255,255,255,0.07)" />;
      })}

      <motion.polygon
        points={polygon((i) => CURISM[i].value)}
        fill="url(#curism-fill)"
        stroke="#ff2975"
        strokeWidth={1.5}
        strokeLinejoin="round"
        style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={start ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />

      {CURISM.map(({ axis, value }, i) => {
        const [x, y] = point(i, value);
        const [lx, ly] = point(i, MAX + 1.6);
        const isActive = active === i;
        return (
          <g key={axis} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} className="cursor-default">
            <motion.circle
              cx={x}
              cy={y}
              r={isActive ? 5 : 3.5}
              fill="#fff"
              stroke="#ff2975"
              strokeWidth={1.5}
              initial={{ opacity: 0 }}
              animate={start ? { opacity: 1 } : {}}
              transition={{ delay: 1 + i * 0.08 }}
            />
            <text
              x={lx}
              y={ly - 6}
              textAnchor="middle"
              className="fill-zinc-400 font-(family-name:--font-geist-mono) text-[10px] transition-colors"
              style={isActive ? { fill: "#fff" } : undefined}
            >
              {axis.toLowerCase()}
            </text>
            <text x={lx} y={ly + 9} textAnchor="middle" className="fill-white font-(family-name:--font-inter-tight) text-[13px] font-semibold">
              {value.toFixed(2)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ScorecardTile({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Tile
      label="gitroll scorecard"
      className={className}
      aside={
        <a
          href={GITROLL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group/gr -my-1.5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300 transition-all hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
        >
          full report
          <ArrowUpRight className="size-3.5 transition-transform group-hover/gr:-translate-y-0.5 group-hover/gr:translate-x-0.5" />
        </a>
      }
    >
      <div ref={ref} className="grid flex-1 items-center gap-8 pt-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="relative flex size-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8c1eff] via-[#ff2975] to-[#ffd319] p-px">
              <div className="flex size-full items-center justify-center rounded-[15px] bg-[var(--surface-1)]">
                <span className="font-(family-name:--font-dm-serif-display) text-5xl italic text-white">{SCORE.grade}</span>
              </div>
            </div>
            <div>
              <p className="font-(family-name:--font-inter-tight) text-5xl font-bold leading-none tracking-tighter text-white tabular-nums">
                <Rating start={inView} />
              </p>
              <p className="mt-1.5 font-(family-name:--font-geist-mono) text-xs text-zinc-500">overall · {SCORE.percentile.toLowerCase()}</p>
            </div>
          </div>

          <div>
            <p className="font-(family-name:--font-inter-tight) text-lg font-semibold tracking-tight text-white">{SCORE.level}</p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-400">{SCORE.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {SCORE.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                {badge}
              </span>
            ))}
          </div>

          <p className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-600">{"// scanned "}{SCANNED}</p>
        </div>

        <div className="flex justify-center px-6 sm:px-2">
          <Radar start={inView} />
        </div>
      </div>
    </Tile>
  );
}
