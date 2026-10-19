"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Tile } from "@/components/home-page/bento/tile";
import { CountUp } from "@/components/home-page/bento/github-tile";
import { LANGUAGES } from "./gitroll-data";

const USERNAME = "vineet-panchal";

type Stats = {
  publicRepos: number;
  followers: number;
  stars: number;
  forks: number;
  createdAt: string;
  contributions: number | null;
  contributionsByYear: { year: number; count: number }[];
  recentRepos: { name: string; url: string; language: string | null; pushedAt: string }[];
  topRepos: { name: string; url: string; description: string | null; language: string | null; stars: number }[];
};

const languageColor = (name: string | null) => LANGUAGES.find((l) => l.name === name)?.color ?? "#71717a";

function timeAgo(iso: string) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "a month ago" : `${months} months ago`;
}

function Metric({ label, value, start }: { label: string; value: number | undefined; start: boolean }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="font-(family-name:--font-inter-tight) text-3xl font-bold leading-none tracking-tight text-white tabular-nums">
        {value === undefined ? "–" : <CountUp value={value} start={start} />}
      </p>
      <p className="mt-2 font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">{label}</p>
    </div>
  );
}

function YearBars({ years, start }: { years: Stats["contributionsByYear"]; start: boolean }) {
  const max = Math.max(1, ...years.map((y) => y.count));
  return (
    <div className="flex items-end gap-2">
      {years.map(({ year, count }, i) => (
        <div key={year} className="flex flex-1 flex-col items-center gap-1.5" title={`${count} contributions in ${year}`}>
          <div className="flex h-24 w-full flex-col items-center justify-end gap-1">
            <span className="font-(family-name:--font-geist-mono) text-[10px] tabular-nums text-zinc-400">{count}</span>
            <motion.div
              className="w-full rounded-md bg-gradient-to-t from-[#8c1eff] via-[#ff2975] to-[#ffd319]"
              style={{ height: `${Math.max((count / max) * 78, 3)}%`, transformOrigin: "bottom" }}
              initial={{ scaleY: 0 }}
              animate={start ? { scaleY: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.1 }}
            />
          </div>
          <span className="font-(family-name:--font-geist-mono) text-[10px] text-zinc-600">&apos;{String(year).slice(2)}</span>
        </div>
      ))}
    </div>
  );
}

function RepoRow({ name, url, language, meta }: { name: string; url: string; language: string | null; meta: React.ReactNode }) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/repo flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/[0.05]"
      >
        <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: languageColor(language) }} />
        <span className="min-w-0 flex-1 truncate text-sm text-zinc-200 group-hover/repo:text-white">{name}</span>
        <span className="flex shrink-0 items-center gap-1 font-(family-name:--font-geist-mono) text-xs text-zinc-500">{meta}</span>
      </a>
    </li>
  );
}

const Skeleton = () => (
  <>
    {Array.from({ length: 3 }, (_, i) => (
      <li key={i} className="h-9 animate-pulse rounded-xl bg-white/[0.03]" />
    ))}
  </>
);

export default function GitHubLiveTile({ className }: { className?: string }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    fetch("/api/github-stats")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setStats)
      .catch(() => setFailed(true));
  }, []);

  const years = stats ? Math.floor((Date.now() - new Date(stats.createdAt).getTime()) / (365.25 * 86400000)) : undefined;
  const start = inView && !!stats;

  return (
    <Tile
      label="live from github"
      className={className}
      aside={
        <span className="flex items-center gap-1.5 font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">
          <span className={`size-1.5 rounded-full ${failed ? "bg-zinc-600" : "animate-pulse bg-emerald-400"}`} />
          {failed ? "offline" : "synced daily"}
        </span>
      }
    >
      <div ref={ref} className="flex flex-1 flex-col gap-6 pt-6">
        <div>
          <p className="font-(family-name:--font-inter-tight) text-6xl font-bold leading-none tracking-tighter text-white tabular-nums">
            {stats?.contributions == null ? "–" : <CountUp value={stats.contributions} start={start} />}
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            contributions since {stats ? new Date(stats.createdAt).getFullYear() : "joining"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Metric label="public repos" value={stats?.publicRepos} start={start} />
          <Metric label="stars earned" value={stats?.stars} start={start} />
          <Metric label="followers" value={stats?.followers} start={start} />
          <Metric label="years shipping" value={years} start={start} />
        </div>

        {!!stats?.contributionsByYear?.length && (
          <div>
            <p className="mb-3 font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">{"// contributions by year"}</p>
            <YearBars years={stats.contributionsByYear} start={start} />
          </div>
        )}

        <div>
          <p className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">{"// most starred"}</p>
          <ul className="mt-2 flex flex-col">
            {stats
              ? (stats.topRepos ?? []).map((repo) => (
                  <RepoRow key={repo.name} {...repo} meta={<><Star className="size-3" />{repo.stars}</>} />
                ))
              : !failed && <Skeleton />}
          </ul>
        </div>

        <div>
          <p className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">{"// recently pushed"}</p>
          <ul className="mt-2 flex flex-col">
            {stats
              ? (stats.recentRepos ?? []).map((repo) => <RepoRow key={repo.name} {...repo} meta={timeAgo(repo.pushedAt)} />)
              : !failed && <Skeleton />}
          </ul>
        </div>

        <div className="mt-auto">
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/gh inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] py-1.5 pl-1.5 pr-4 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all hover:border-white/35 hover:bg-white/[0.14]"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-white text-zinc-900">
              <FaGithub className="size-4" />
            </span>
            {USERNAME}
            <ArrowUpRight className="size-4 transition-transform group-hover/gh:-translate-y-0.5 group-hover/gh:translate-x-0.5" />
          </a>
        </div>
      </div>
    </Tile>
  );
}
