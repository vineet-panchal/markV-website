"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Tile } from "./tile";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const USERNAME = "vineet-panchal";
// Levels follow the hero highlight gradient: purple → pink → yellow
const LEVEL_COLORS = ["rgba(255,255,255,0.05)", "#5b2a9e", "#8c1eff", "#ff2975", "#ffd319"];
const WEEKDAYS = ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const utc = (date: string) => new Date(`${date}T00:00:00Z`);
const shortDate = (date: string) => `${MONTHS[utc(date).getUTCMonth()]} ${utc(date).getUTCDate()}`;

function getStats(days: Day[]) {
  let longest = 0;
  let run = 0;
  let best = days[0];
  const byWeekday = Array(7).fill(0);
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
    if (d.count > best.count) best = d;
    byWeekday[utc(d.date).getUTCDay()] += d.count;
  }

  const last = utc(days[days.length - 1].date);
  const thisMonth = days
    .filter((d) => {
      const u = utc(d.date);
      return u.getUTCFullYear() === last.getUTCFullYear() && u.getUTCMonth() === last.getUTCMonth();
    })
    .reduce((sum, d) => sum + d.count, 0);

  const total = days.reduce((sum, d) => sum + d.count, 0);

  return {
    longest,
    best,
    thisMonth,
    thisMonthName: MONTHS[last.getUTCMonth()],
    perDay: total / days.length,
    busiest: WEEKDAYS[byWeekday.indexOf(Math.max(...byWeekday))],
    activeDays: days.filter((d) => d.count > 0).length,
  };
}

export function CountUp({ value, start }: { value: number; start: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!start || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString();
      },
    });
    return () => controls.stop();
  }, [value, start]);
  return <span ref={ref}>0</span>;
}

function Stat({ label, value, note }: { label: string; value: React.ReactNode; note?: string }) {
  return (
    <div className="border-l border-white/[0.08] pl-4">
      <p className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">{label}</p>
      <p className="mt-1 font-(family-name:--font-inter-tight) text-2xl font-bold tracking-tight text-white tabular-nums">
        {value}
      </p>
      {note && <p className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">{note}</p>}
    </div>
  );
}

export default function GitHubTile({ className }: { className?: string }) {
  const [days, setDays] = useState<Day[] | null>(null);
  const [total, setTotal] = useState(0);
  const [failed, setFailed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-80px" });

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        setDays(data.contributions);
        setTotal(data.total?.lastYear ?? 0);
      })
      .catch(() => setFailed(true));
  }, []);

  // Pad the front so each column is one Sunday→Saturday week
  const cells = useMemo(() => {
    if (!days?.length) return Array.from({ length: 53 * 7 }, () => null);
    const pad = utc(days[0].date).getUTCDay();
    return [...Array.from({ length: pad }, () => null), ...days];
  }, [days]);

  const weeks = Math.ceil(cells.length / 7);

  // A month label sits above the first week column that starts in that month
  const monthLabels = useMemo(() => {
    const labels: { col: number; name: string }[] = [];
    let prev = -1;
    for (let col = 0; col < weeks; col++) {
      const first = cells.slice(col * 7, col * 7 + 7).find(Boolean);
      if (!first) continue;
      const m = utc(first.date).getUTCMonth();
      if (m !== prev) {
        // Skip a label that would collide with the previous one
        if (!labels.length || col - labels[labels.length - 1].col >= 3) labels.push({ col, name: MONTHS[m] });
        prev = m;
      }
    }
    return labels;
  }, [cells, weeks]);

  const stats = useMemo(() => (days ? getStats(days) : null), [days]);
  const columns = `repeat(${weeks}, minmax(0, 1fr))`;

  return (
    <Tile
      label="commits, last 12 months"
      className={className}
      aside={
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/gh -my-1.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3 text-xs font-medium text-zinc-300 transition-all hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-white text-zinc-900">
            <FaGithub className="size-3.5" />
          </span>
          {USERNAME}
          <ArrowUpRight className="size-3.5 transition-transform group-hover/gh:-translate-y-0.5 group-hover/gh:translate-x-0.5" />
        </a>
      }
    >
      <div className="flex h-full flex-col justify-between gap-4 pt-4">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <p className="font-(family-name:--font-inter-tight) text-5xl font-bold leading-none tracking-tighter text-white tabular-nums">
              {failed ? "—" : <CountUp value={total} start={inView && total > 0} />}
            </p>
            <p className="mt-1.5 text-sm text-zinc-400">contributions on GitHub</p>
          </div>

          <div className="hidden gap-6 sm:flex">
            <Stat label="this month" value={stats?.thisMonth ?? "–"} note={stats?.thisMonthName} />
            <Stat label="best day" value={stats?.best.count ?? "–"} note={stats ? shortDate(stats.best.date) : undefined} />
            <Stat label="avg / day" value={stats ? stats.perDay.toFixed(1) : "–"} note="commits" />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="grid grid-rows-[12px_repeat(7,minmax(0,1fr))] gap-[3px] pr-1 font-(family-name:--font-geist-mono) text-[9px] leading-none text-zinc-600">
            <span />
            {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
              <span key={i} className="flex items-center">
                {d}
              </span>
            ))}
          </div>

          <div className="min-w-0 flex-1">
            <div className="relative mb-[3px] h-3 font-(family-name:--font-geist-mono) text-[9px] leading-none text-zinc-500">
              {monthLabels.map((m) => (
                <span key={`${m.name}-${m.col}`} className="absolute top-0" style={{ left: `${(m.col / weeks) * 100}%` }}>
                  {m.name}
                </span>
              ))}
            </div>
            <div
              ref={gridRef}
              className="grid gap-[3px]"
              style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))", gridTemplateColumns: columns, gridAutoFlow: "column" }}
            >
              {cells.map((d, i) => (
                <div
                  key={i}
                  title={d ? `${d.count} contribution${d.count === 1 ? "" : "s"} on ${shortDate(d.date)}` : undefined}
                  className="aspect-square rounded-[3px] transition-[opacity,transform] duration-500 hover:outline hover:outline-1 hover:outline-white/60"
                  style={{
                    backgroundColor: d ? LEVEL_COLORS[d.level] : "transparent",
                    opacity: inView && days ? 1 : 0,
                    transform: inView && days ? "scale(1)" : "scale(0.4)",
                    transitionDelay: `${Math.floor(i / 7) * 18}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 font-(family-name:--font-geist-mono) text-xs text-zinc-500">
          <div className="flex gap-5">
            <span>
              <span className="text-zinc-200">{stats?.longest ?? "–"}</span> day streak
            </span>
            <span>
              <span className="text-zinc-200">{stats?.activeDays ?? "–"}</span> active days
            </span>
            <span>
              busiest on <span className="text-zinc-200">{stats?.busiest ?? "–"}</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            less
            {LEVEL_COLORS.map((c) => (
              <span key={c} className="size-2.5 rounded-[2px]" style={{ backgroundColor: c }} />
            ))}
            more
          </div>
        </div>
      </div>
    </Tile>
  );
}
