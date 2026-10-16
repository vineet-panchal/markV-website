"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Tile } from "./tile";

import smartdeck from "@/assets/featured-projects/smartdeck.png";
import rateMyProfessor from "@/assets/featured-projects/rate-my-professor.png";
import fashion from "@/assets/featured-projects/fashion.png";
import tfc from "@/assets/featured-projects/tfc.png";

type Project = { name: string; slug: string; body: string; image: StaticImageData };

const PROJECTS: Project[] = [
  { name: "SmartDeck", slug: "smartdeck", body: "Smart flashcards that actually learn with you.", image: smartdeck },
  { name: "Rate My Professor", slug: "rate-my-professor", body: "Helping students pick the right prof before it's too late.", image: rateMyProfessor },
  { name: "Fashion Disaster Avoider", slug: "fashion-disaster-avoider", body: "AI-powered style checks to save me from bad fits.", image: fashion },
  { name: "Teach For Cambodia", slug: "teach-for-cambodia", body: "An educational platform for underprivileged kids in Cambodia.", image: tfc },
];

const SLIDE_MS = 4000;

export default function LabTile({ className }: { className?: string }) {
  const [front, setFront] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setFront((f) => (f + 1) % PROJECTS.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [front, paused]);

  const current = PROJECTS[front];

  return (
    <Tile label="the lab" className={className}>
      <div
        className="grid h-full grid-cols-1 gap-6 pt-4 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-(family-name:--font-inter-tight) text-4xl font-bold tracking-tighter text-white">
              The Lab
            </h3>
            <p className="mt-2 text-sm text-zinc-400">Ideas that turned into late-night coding sessions.</p>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg font-semibold text-white">{current.name}</p>
                <p className="text-sm text-zinc-400">{current.body}</p>
              </motion.div>
            </AnimatePresence>

            {/* One segment per project; the active one fills up until the next slide */}
            <div className="mt-4 flex gap-1.5">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  aria-label={`Show ${p.name}`}
                  onClick={() => setFront(i)}
                  className="h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-white/10"
                >
                  {i === front && (
                    <motion.span
                      key={`${front}-${paused}`}
                      className="block h-full w-full origin-left rounded-full bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff]"
                      initial={{ scaleX: paused ? 1 : 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: paused ? 0 : SLIDE_MS / 1000, ease: "linear" }}
                    />
                  )}
                  {i < front && <span className="block h-full w-full rounded-full bg-white/30" />}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/projects"
            className="group/link inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white"
          >
            Visit The Lab
            <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* Browser window sized to the screenshots' shape so nothing gets cropped */}
        <div className="hidden items-center md:flex">
          <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
            <div className="flex h-8 items-center gap-3 border-b border-white/[0.06] bg-zinc-900/80 px-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 truncate rounded-md bg-white/[0.05] px-3 py-0.5 text-center font-(family-name:--font-geist-mono) text-[10px] text-zinc-500">
                ~/the-lab/{current.slug}
              </div>
            </div>
            <div className="relative aspect-[1904/879]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.name}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(min-width: 1024px) 420px, 50vw"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Tile>
  );
}
