"use client";

import React from 'react';
import { motion } from 'motion/react';
import Header from '../header';
import SkillChip from '@/components/skill-chip';
import { blueprints, PHASES, type Blueprint } from '@/lib/blueprints';

const INK = "rgba(191, 219, 254, 0.9)";
const INK_SOFT = "rgba(191, 219, 254, 0.35)";

// Draws a path on as the sheet scrolls into view, like a pen tracing the plan
function Line({ d, delay = 0, dashed, soft }: { d: string; delay?: number; dashed?: boolean; soft?: boolean }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={soft ? INK_SOFT : INK}
      strokeWidth={soft ? 1 : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dashed ? "5 6" : undefined}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.4, ease: "easeInOut", delay }}
    />
  );
}

function Label({ x, y, children, anchor = "start" }: { x: number; y: number; children: React.ReactNode; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="fill-blue-200/70 font-(family-name:--font-geist-mono) text-[9px] uppercase tracking-wider">
      {children}
    </text>
  );
}

function Sketch({ kind }: { kind: Blueprint["sketch"] }) {
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Concept sketch">
      {kind === "orbit" && (
        <>
          <Line d="M60 100 a28 28 0 1 0 56 0 a28 28 0 1 0 -56 0" />
          <Line d="M70 100 h36 M88 82 v36" soft />
          <Line d="M318 100 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0" delay={0.3} />
          <Line d="M88 100 a124 62 0 0 1 246 0" dashed delay={0.6} />
          <Line d="M88 100 a124 62 0 0 0 246 0" soft dashed delay={0.8} />
          <Line d="M200 41 l8 -4 m-8 4 l8 4" delay={1.2} />
          <Label x={88} y={152} anchor="middle">earth</Label>
          <Label x={334} y={136} anchor="middle">mars</Label>
          <Label x={211} y={30} anchor="middle">transfer orbit</Label>
        </>
      )}
      {kind === "regression" && (
        <>
          <Line d="M40 30 V170 H370" soft />
          <Line d="M40 140 L80 132 L120 136 L160 128 L200 131 L240 126 L270 78 L300 84 L340 80 L370 82" delay={0.2} />
          <Line d="M240 20 V170" dashed soft delay={0.6} />
          <Line d="M262 60 l8 -14 l8 14 z" delay={1.1} />
          <Line d="M270 52 v4 m0 3 v0.5" delay={1.3} />
          <Label x={244} y={186}>v2.4 release</Label>
          <Label x={48} y={26}>ms / request</Label>
          <Label x={286} y={46}>+38% regression</Label>
        </>
      )}
      {kind === "patch" && (
        <>
          <Line d="M40 30 H230 V170 H40 Z" soft />
          <Line d="M56 52 H150 M56 72 H200 M56 92 H130 M56 132 H180 M56 152 H120" soft delay={0.2} />
          <Line d="M48 104 H222 V120 H48 Z" delay={0.5} />
          <Line d="M300 50 L340 64 V100 C340 126 322 142 300 152 C278 142 260 126 260 100 V64 Z" delay={0.8} />
          <Line d="M284 100 l12 12 l22 -24" delay={1.3} />
          <Line d="M222 112 C244 112 246 100 258 100" dashed delay={1.1} />
          <Label x={48} y={24}>pull request #42</Label>
          <Label x={300} y={172} anchor="middle">suggested fix</Label>
        </>
      )}
      {kind === "papers" && (
        <>
          <Line d="M40 50 h50 v64 h-50 z M48 64 h34 M48 76 h34 M48 88 h22" soft />
          <Line d="M180 24 h50 v64 h-50 z M188 38 h34 M188 50 h34 M188 62 h22" soft delay={0.2} />
          <Line d="M300 96 h50 v64 h-50 z M308 110 h34 M308 122 h34 M308 134 h22" soft delay={0.4} />
          <Line d="M120 150 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0" delay={0.6} />
          <Line d="M90 92 L124 142 M180 70 L140 140 M300 128 L144 150" dashed delay={0.9} />
          <Line d="M230 56 L300 110" dashed delay={1.1} />
          <Label x={132} y={186} anchor="middle">your question</Label>
          <Label x={205} y={102} anchor="middle">cited</Label>
        </>
      )}
    </svg>
  );
}

function CropMarks() {
  const mark = "absolute size-4 border-blue-300/50";
  return (
    <>
      <span className={`${mark} left-3 top-3 border-l border-t`} />
      <span className={`${mark} right-3 top-3 border-r border-t`} />
      <span className={`${mark} bottom-3 left-3 border-b border-l`} />
      <span className={`${mark} bottom-3 right-3 border-b border-r`} />
    </>
  );
}

function Sheet({ blueprint, index }: { blueprint: Blueprint; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-blue-400/25 bg-[#0a1630] p-5 shadow-[0_30px_60px_-30px_rgba(37,99,235,0.45)] sm:p-7"
    >
      {/* blueprint paper: fine grid plus a heavier grid every five squares */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(147,197,253,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.07)_1px,transparent_1px),linear-gradient(rgba(147,197,253,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.12)_1px,transparent_1px)] [background-size:14px_14px,14px_14px,70px_70px,70px_70px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-blue-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
      />
      <CropMarks />

      <div className="relative flex items-center justify-between font-(family-name:--font-geist-mono) text-[11px] uppercase tracking-widest text-blue-200/70">
        <span>{blueprint.code} · rev a</span>
        <span className="rounded-full border border-blue-300/30 px-2.5 py-0.5 text-blue-100">{PHASES[blueprint.phase]}</span>
      </div>

      <div className="relative mt-4 aspect-[2/1] rounded-xl border border-dashed border-blue-300/25 bg-[#0c1b3a]/60 p-3">
        <Sketch kind={blueprint.sketch} />
        <span className="absolute bottom-2 right-3 font-(family-name:--font-geist-mono) text-[9px] uppercase tracking-widest text-blue-200/40">
          fig. {index + 1}: concept sketch
        </span>
      </div>

      {/* title block, like the corner of an engineering drawing */}
      <div className="relative mt-5 grid overflow-hidden rounded-xl border border-blue-300/25 text-blue-50 [&>div]:border-blue-300/20">
        <div className="border-b p-4">
          <p className="font-(family-name:--font-geist-mono) text-[10px] uppercase tracking-widest text-blue-200/60">project</p>
          <h3 className="mt-1 font-(family-name:--font-inter-tight) text-2xl font-bold tracking-tight text-white">{blueprint.title}</h3>
          <p className="mt-1 font-(family-name:--font-dm-serif-display) text-lg italic text-blue-300">{blueprint.tagline}</p>
        </div>

        <div className="border-b p-4">
          <p className="font-(family-name:--font-geist-mono) text-[10px] uppercase tracking-widest text-blue-200/60">the plan</p>
          <p className="mt-1.5 text-sm leading-relaxed text-blue-100/80">{blueprint.description}</p>
          <ul className="mt-3 grid gap-1.5">
            {blueprint.goals.map((goal) => (
              <li key={goal} className="flex items-center gap-2.5 text-sm text-blue-50/90">
                <span className="size-3 shrink-0 rounded-[3px] border border-dashed border-blue-300/60" aria-hidden />
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b p-4">
          <p className="font-(family-name:--font-geist-mono) text-[10px] uppercase tracking-widest text-blue-200/60">planned stack</p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {blueprint.stack.map((skill) => (
              <SkillChip key={skill} skill={skill} />
            ))}
          </ul>
        </div>

        <div className="p-4">
          <p className="font-(family-name:--font-geist-mono) text-[10px] uppercase tracking-widest text-blue-200/60">progress</p>
          <ol className="mt-2.5 grid grid-cols-4 gap-1.5">
            {PHASES.map((phase, i) => (
              <li key={phase} className="flex flex-col gap-1.5">
                <span
                  className={`h-1.5 rounded-full ${
                    i < blueprint.phase ? "bg-blue-300" : i === blueprint.phase ? "animate-pulse bg-blue-400" : "bg-blue-300/15"
                  }`}
                />
                <span className={`font-(family-name:--font-geist-mono) text-[10px] ${i <= blueprint.phase ? "text-blue-100" : "text-blue-200/40"}`}>
                  {phase.toLowerCase()}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </motion.article>
  );
}

export default function NextVentures() {
  return (
    <section className="bg-[var(--color-midnight)] px-4 py-20 text-white sm:px-8">
      <Header heading="Next Ventures" subHeading="Blueprints in" coloredText="motion." />
      <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-zinc-400">
        Ideas on the drawing board: what I want to build next, and the stack I&apos;d reach for.
      </p>
      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
        {blueprints.map((blueprint, i) => (
          <Sheet key={blueprint.code} blueprint={blueprint} index={i} />
        ))}
      </div>
    </section>
  );
};
