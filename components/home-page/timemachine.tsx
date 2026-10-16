"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { AnimatePresence, animate, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, RotateCcw, Zap } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { cn } from "@/lib/utils";
import "@/css/timemachine.css";

import Starfield from "./time-machine/starfield";
import TimeCircuits from "./time-machine/time-circuits";
import { ERAS, Era, CircuitDate, toCircuitDate } from "./time-machine/eras";

type Phase = "present" | "traveling" | "arrived";

const DEPART_MS = 900;

function longDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function EraCard({ era, index, onTravel }: { era: Era; index: number; onTravel: (i: number) => void }) {
  return (
    <div className="grid h-full w-full max-w-5xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-[0_30px_80px_-20px_rgba(140,30,255,0.45)]">
        <div className="flex h-8 items-center gap-3 border-b border-white/[0.06] bg-zinc-900/80 px-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 truncate rounded-md bg-white/[0.05] px-3 py-0.5 text-center font-(family-name:--font-geist-mono) text-[10px] text-zinc-500">
            {era.url ? era.url.replace(/^https?:\/\//, "") : `mark-${era.mark.toLowerCase()} · archived`}
          </div>
        </div>
        <div className="relative aspect-[16/10]">
          <Image src={era.image} alt={`Mark ${era.mark} portfolio`} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover object-top" />
        </div>
      </div>

      <div>
        <p className="font-(family-name:--font-geist-mono) text-xs tracking-widest text-[#ff4a3d]">
          {"// arrived · "}
          {longDate(era.date).toLowerCase()}
        </p>
        <h3 className="mt-2 font-(family-name:--font-inter-tight) text-5xl font-bold tracking-tighter text-white">
          Mark {era.mark}
        </h3>
        <p className="mt-3 text-zinc-400">{era.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {era.stack.map((s) => (
            <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-(family-name:--font-geist-mono) text-[11px] text-zinc-300">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {era.url ? (
            <a
              href={era.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.12]"
            >
              Visit Mark {era.mark} <ArrowUpRight className="size-4" />
            </a>
          ) : (
            <span className="font-(family-name:--font-geist-mono) text-xs text-zinc-500">no longer online, archived here</span>
          )}
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              aria-label="Previous version"
              disabled={index === 0}
              onClick={() => onTravel(index - 1)}
              className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:bg-white/[0.1] disabled:cursor-default disabled:opacity-30"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next version"
              disabled={index === ERAS.length - 1}
              onClick={() => onTravel(index + 1)}
              className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:bg-white/[0.1] disabled:cursor-default disabled:opacity-30"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type SplinePipeline = {
  postprocessingState?: Record<string, { enabled: boolean }>;
  updatePostprocessing?: (state: Record<string, unknown>) => void;
};

// Strip the Spline scene down to just the DeLorean: hide its dusty ground (the Torus)
// and particle emitters. The background is the page colour rather than transparent,
// which keeps the car's edges clean; the stage mask fades it into a soft oval.
function isolateCar(app: Application) {
  app.setBackgroundColor("#282828");
  for (const obj of app.getAllObjects()) {
    if (obj.name === "Torus" || obj.name.startsWith("Particle Emitter")) obj.visible = false;
  }

  // The scene's film-grain effect leaves a grey halo around the car on a transparent
  // background (chromatic aberration adds a grey fringe too). Spline re-applies its effects
  // just after load, so switch them off a few times.
  [0, 250, 1000].forEach((ms) => setTimeout(() => disableGrain(app), ms));
}

// Reaches into Spline's private renderer, so stay defensive
function disableGrain(app: Application) {
  try {
    const pipeline = (app as unknown as { _renderer?: { pipeline?: SplinePipeline } })._renderer?.pipeline;
    const state = pipeline?.postprocessingState;
    if (state?.noise && pipeline?.updatePostprocessing && (state.noise.enabled || state.chromaticAberration?.enabled)) {
      pipeline.updatePostprocessing({
        ...state,
        noise: { ...state.noise, enabled: false },
        ...(state.chromaticAberration && { chromaticAberration: { ...state.chromaticAberration, enabled: false } }),
      });
    }
  } catch {
    // Keep the grain rather than break the scene
  }
}

export default function TimeMachine() {
  const warp = useRef(0);
  const [phase, setPhase] = useState<Phase>("present");
  const [destination, setDestination] = useState(0);
  const [current, setCurrent] = useState<number | null>(null);
  const [lastDeparted, setLastDeparted] = useState<CircuitDate | null>(null);
  const [present, setPresent] = useState<CircuitDate | null>(null);
  const [flash, setFlash] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<Application | null>(null);
  const stageVisible = useRef(false);

  // The 3D car is the heaviest thing on the page: only render it while the stage is on screen
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      stageVisible.current = entry.isIntersecting;
      const app = splineRef.current;
      if (!app) return;
      if (entry.isIntersecting) app.play();
      else app.stop();
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => setPresent(toCircuitDate(new Date())), []);

  // to = era index, or null for the present day
  const travel = (to: number | null) => {
    if (phase === "traveling") return;
    if (to !== null) setDestination(to);
    setLastDeparted(current === null ? present : toCircuitDate(ERAS[current].date));
    setPhase("traveling");

    animate(0, 1, { duration: DEPART_MS / 1000, ease: "easeIn", onUpdate: (v) => (warp.current = v) });
    setTimeout(() => {
      setFlash((f) => f + 1);
      setCurrent(to);
      setPhase(to === null ? "present" : "arrived");
      animate(1, 0, { duration: 1.6, ease: "easeOut", onUpdate: (v) => (warp.current = v) });
    }, DEPART_MS);
  };

  const atPresent = current === null;
  const carState = phase === "present" ? "home" : atPresent ? "gone" : "away";

  return (
    <section className="relative mt-20 overflow-hidden py-20">
      <Starfield
        warp={warp}
        className="pointer-events-none absolute inset-0 size-full [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
      />

      <div className="relative z-10 text-center">
        <p className="font-(family-name:--font-geist-mono) text-xs tracking-widest text-zinc-500">{"// the time machine"}</p>
        <h2 className="mt-3 font-(family-name:--font-inter-tight) text-5xl font-bold leading-none tracking-tighter text-white md:text-7xl">
          Travel Back Through{" "}
          <AuroraText className="pr-2 font-(family-name:--font-dm-serif-display) font-normal tracking-normal italic">Time</AuroraText>
          <span className="mt-2 block text-3xl font-semibold tracking-tight text-zinc-300 md:text-5xl">
            at{" "}
            <span className="font-(family-name:--font-dm-serif-display) font-normal tracking-normal italic text-white">light speed</span>
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Every version of this site I&apos;ve built, from the very first one. Set a destination and hit engage.
        </p>
      </div>

      {/* Stage: the DeLorean at rest, or the version you've travelled to */}
      <div ref={stageRef} className="relative z-10 mx-auto flex h-[460px] max-w-6xl items-center justify-center">
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={carState}
          variants={{
            home: { x: "0%", scale: 1, opacity: 1, filter: "blur(0px)", transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
            gone: { x: "110%", scale: 0.55, opacity: 0, filter: "blur(8px)", transition: { duration: DEPART_MS / 1000, ease: "easeIn" } },
            away: { x: "-110%", scale: 0.55, opacity: 0, transition: { duration: 0 } },
          }}
        >
          {/* Hover glow from the flux-powered undercarriage */}
          <div
            aria-hidden
            className="absolute left-1/2 top-[58%] h-24 w-[min(520px,70%)] -translate-x-1/2 animate-[hover-glow_3s_ease-in-out_infinite] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(80,220,255,0.35),rgba(140,30,255,0.15)_45%,transparent_70%)] blur-2xl"
          />
          <div className="size-full animate-[float_6s_ease-in-out_infinite] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]">
            <Spline
              scene="https://prod.spline.design/poaxHmjn6ibZuMeg/scene.splinecode"
              onLoad={(app) => {
                splineRef.current = app;
                isolateCar(app);
                if (!stageVisible.current) app.stop();
              }}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {phase === "arrived" && current !== null && (
            <motion.div
              key={current}
              className="relative flex size-full items-center justify-center"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(16px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, scale: 1.15, filter: "blur(12px)", transition: { duration: 0.4, ease: "easeIn" } }}
            >
              <EraCard era={ERAS[current]} index={current} onTravel={travel} />
            </motion.div>
          )}
        </AnimatePresence>

        {flash > 0 && (
          <motion.div
            key={flash}
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(140,30,255,0.35)_35%,transparent_70%)]"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        )}
      </div>

      {/* Controls */}
      <div className="relative z-10 mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 px-4">
        <TimeCircuits
          destination={toCircuitDate(ERAS[destination].date)}
          present={present}
          lastDeparted={lastDeparted}
          traveling={phase === "traveling"}
        />

        <div className="flex flex-wrap justify-center gap-2">
          {ERAS.map((era, i) => (
            <button
              key={era.mark}
              type="button"
              onClick={() => setDestination(i)}
              className={cn(
                "cursor-pointer rounded-xl border px-3 py-2 text-left transition-all",
                i === destination
                  ? "border-[#ff4a3d]/70 bg-[#ff4a3d]/10 shadow-[0_0_20px_-4px_rgba(255,74,61,0.6)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/25",
              )}
            >
              <span className="block font-(family-name:--font-inter-tight) text-sm font-bold text-white">Mark {era.mark}</span>
              <span className="block font-(family-name:--font-geist-mono) text-[10px] text-zinc-500">{era.date.slice(0, 4)}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            disabled={phase === "traveling" || destination === current}
            onClick={() => travel(destination)}
            className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] py-2 pl-6 pr-2 font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.14] disabled:cursor-default disabled:opacity-40"
          >
            {phase === "traveling" ? "Traveling…" : `Engage · Mark ${ERAS[destination].mark}`}
            <span className="flex size-9 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform duration-300 group-hover:rotate-12">
              <Zap className="size-4" />
            </span>
          </button>
          {!atPresent && (
            <button
              type="button"
              disabled={phase === "traveling"}
              onClick={() => travel(null)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white disabled:opacity-40"
            >
              <RotateCcw className="size-4" /> Return to present
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
