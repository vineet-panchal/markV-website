"use client";

import React from "react";
import { COBEOptions } from "cobe";
import { Globe, GLOBE_CONFIG } from "@/components/magicui/globe";
import { Tile } from "./tile";

const COUNTRIES = ["Canada", "USA", "India", "Netherlands", "UAE"];

// Dark-mode take on the shared globe so it sits quietly on the dark tiles
const DARK_GLOBE: COBEOptions = {
  ...GLOBE_CONFIG,
  mapSamples: 12000,
  dark: 1,
  diffuse: 1.2,
  mapBrightness: 5,
  baseColor: [0.32, 0.32, 0.34],
  glowColor: [0.35, 0.2, 0.5],
  markerColor: [1, 0.16, 0.46],
};

export default function GlobeTile({ className }: { className?: string }) {
  return (
    <Tile label="where I've been" className={className}>
      <div className="relative z-10 pt-4">
        <p className="font-(family-name:--font-inter-tight) text-5xl font-bold tracking-tighter text-white tabular-nums">
          {GLOBE_CONFIG.markers.length}
          <span className="ml-2 text-lg font-medium tracking-normal text-zinc-400">cities</span>
        </p>
        <p className="mt-1 text-sm text-zinc-400">across {COUNTRIES.length} countries, and counting.</p>
      </div>
      <Globe config={DARK_GLOBE} className="top-24 left-1/2 w-[130%] max-w-none -translate-x-1/2" />
      <div className="pointer-events-none absolute -inset-x-6 -bottom-6 h-20 bg-gradient-to-t from-[#151515] to-transparent" />
    </Tile>
  );
}
