"use client";

import React, { useMemo, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Tile } from "@/components/home-page/bento/tile";
import { LANGUAGES } from "./gitroll-data";

const CELLS = 100;
const SHOWN = 7;

// Largest-remainder rounding so the waffle always has exactly 100 cells
function toCells(shares: number[]) {
  const raw = shares.map((s) => s * CELLS);
  const cells = raw.map(Math.floor);
  const order = raw.map((r, i) => [r - Math.floor(r), i] as const).sort((a, b) => b[0] - a[0]);
  for (let k = 0; cells.reduce((a, b) => a + b, 0) < CELLS; k++) cells[order[k][1]]++;
  return cells;
}

export default function LanguagesTile({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<string | null>(null);

  const { groups, grid } = useMemo(() => {
    const total = LANGUAGES.reduce((sum, l) => sum + l.bytes, 0);
    const top = LANGUAGES.slice(0, SHOWN);
    const rest = LANGUAGES.slice(SHOWN);
    const groups = [
      ...top.map((l) => ({ name: l.name, color: l.color, share: l.bytes / total, members: [l.name] })),
      {
        name: `+${rest.length} more`,
        color: "#52525b",
        share: rest.reduce((sum, l) => sum + l.bytes, 0) / total,
        members: rest.map((l) => l.name),
      },
    ];
    const counts = toCells(groups.map((g) => g.share));
    const grid = groups.flatMap((g, i) => Array.from({ length: counts[i] }, () => g));
    return { groups, grid };
  }, []);

  const pct = (share: number) => (share * 100 < 1 ? "<1" : (share * 100).toFixed(1));

  return (
    <Tile label="languages, by bytes of code" className={className}>
      <div ref={ref} className="grid flex-1 items-center gap-8 pt-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div
          className="mx-auto grid w-full max-w-[300px] grid-cols-10 gap-1 sm:gap-1.5"
          onMouseLeave={() => setActive(null)}
          role="img"
          aria-label={groups.map((g) => `${g.name} ${pct(g.share)}%`).join(", ")}
        >
          {grid.map((g, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(g.name)}
              title={`${g.name} · ${pct(g.share)}%`}
              className="aspect-square rounded-[4px] transition-[opacity,transform] duration-500"
              style={{
                backgroundColor: g.color,
                opacity: !inView ? 0 : active && active !== g.name ? 0.15 : 1,
                transform: inView ? "scale(1)" : "scale(0.3)",
                transitionDelay: inView && !active ? `${(i % 10) * 30 + Math.floor(i / 10) * 45}ms` : "0ms",
              }}
            />
          ))}
        </div>

        <ul className="flex flex-col gap-1" onMouseLeave={() => setActive(null)}>
          {groups.map((g) => (
            <li
              key={g.name}
              onMouseEnter={() => setActive(g.name)}
              title={g.members.length > 1 ? g.members.join(", ") : undefined}
              className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors"
              style={{ backgroundColor: active === g.name ? "rgba(255,255,255,0.06)" : undefined }}
            >
              <span className="size-2.5 shrink-0 rounded-[3px]" style={{ backgroundColor: g.color }} />
              <span className="min-w-0 flex-1 truncate text-sm text-zinc-300">{g.name}</span>
              <span className="font-(family-name:--font-geist-mono) text-xs tabular-nums text-zinc-500">{pct(g.share)}%</span>
            </li>
          ))}
          <li className="px-2 pt-2 font-(family-name:--font-geist-mono) text-[11px] leading-relaxed text-zinc-600">
            {"// "}
            {LANGUAGES.slice(SHOWN).map((l) => l.name).join(", ")}
          </li>
        </ul>
      </div>
    </Tile>
  );
}
