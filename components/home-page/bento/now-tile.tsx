"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun, GraduationCap } from "lucide-react";
import { Tile } from "./tile";

const TIME_ZONE = "America/Toronto";

// Night → sunrise → noon → sunset → night, in the hero highlight colours
const DAY_GRADIENT =
  "linear-gradient(90deg, #1e1b3a 0%, #4a1d7a 18%, #ff2975 28%, #ffd319 50%, #ff2975 72%, #4a1d7a 82%, #1e1b3a 100%)";

function torontoParts(date: Date) {
  const fmt = (opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE, ...opts }).formatToParts(date);
  const pick = (parts: Intl.DateTimeFormatPart[], type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const time = fmt({ hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZoneName: "short" });
  const offset = fmt({ timeZoneName: "shortOffset" });
  const hh = pick(time, "hour").replace("24", "00");
  const mm = pick(time, "minute");
  const ss = pick(time, "second");
  const hour = Number(hh);

  return {
    hour,
    hh,
    mm,
    ss,
    zone: pick(time, "timeZoneName"),
    offset: pick(offset, "timeZoneName").replace("GMT", "UTC"),
    date: new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE, weekday: "short", month: "short", day: "numeric" }).format(date),
    dayFraction: (hour * 3600 + Number(mm) * 60 + Number(ss)) / 86400,
  };
}

export default function NowTile({ className }: { className?: string }) {
  // Rendered only after mount so server and client markup match
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = now ? torontoParts(now) : null;
  const isDay = t ? t.hour >= 7 && t.hour < 19 : true;

  return (
    <Tile
      label="based in"
      className={className}
      aside={
        t && (
          <span className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">
            {t.zone} · {t.offset}
          </span>
        )
      }
    >
      <div className="flex h-full flex-col justify-between pt-5">
        <div>
          <div className="flex items-center gap-1.5 text-sm text-zinc-400">
            {isDay ? (
              <Sun className="size-3.5 text-[#ffd319]" />
            ) : (
              <Moon className="size-3.5 text-[#b98cff]" />
            )}
            {isDay ? "Daytime in" : "Night owl hours in"}
          </div>
          <h3 className="mt-1 font-(family-name:--font-inter-tight) text-4xl font-bold tracking-tighter text-white">
            Toronto, ON
          </h3>
        </div>

        <div>
          <div className="flex items-baseline justify-between font-(family-name:--font-geist-mono)">
            <p className="text-white tabular-nums">
              <span className="text-[2.75rem] font-medium leading-none tracking-tight">
                {t ? `${t.hh}:${t.mm}` : "--:--"}
              </span>
              <span className="ml-1 text-lg text-zinc-500">{t ? t.ss : "--"}</span>
            </p>
            <span className="text-xs text-zinc-500">{t?.date}</span>
          </div>

          <div className="relative mt-4 h-1.5 rounded-full opacity-80" style={{ background: DAY_GRADIENT }}>
            {t && (
              <span
                className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-zinc-950 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-[left] duration-1000"
                style={{ left: `${t.dayFraction * 100}%` }}
              />
            )}
          </div>
          <div className="mt-1.5 flex justify-between font-(family-name:--font-geist-mono) text-[10px] text-zinc-600">
            <span>12a</span>
            <span>6a</span>
            <span>12p</span>
            <span>6p</span>
            <span>12a</span>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
            <GraduationCap className="size-4 text-zinc-300" />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="text-sm font-medium text-white">Computer Science</p>
            <p className="text-xs text-zinc-500">Toronto Metropolitan University</p>
          </div>
        </div>
      </div>
    </Tile>
  );
}
