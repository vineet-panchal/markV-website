"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Tile } from "./tile";

import java from "@/assets/logos/java.png";
import python from "@/assets/logos/python.png";
import javascript from "@/assets/logos/javascript.png";
import typescript from "@/assets/logos/typescript.png";
import react from "@/assets/logos/react.png";
import nextjs from "@/assets/logos/nextjs.svg";
import springboot from "@/assets/logos/springboot.png";
import express from "@/assets/logos/express.png";
import postgresql from "@/assets/logos/postgresql.png";
import mongodb from "@/assets/logos/mongodb.svg";
import golang from "@/assets/logos/golang.svg";
import csharp from "@/assets/logos/csharp.svg";
import sqlserver from "@/assets/logos/sqlserver.svg";
import dotnet from "@/assets/logos/dotnet.svg";
import nodejs from "@/assets/logos/nodejs.png";
import fastapi from "@/assets/logos/fastapi.svg";

type Skill = { name: string; icon: StaticImageData; invert?: boolean };

const LANGUAGES: Skill[] = [
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Go", icon: golang },
  { name: "C#", icon: csharp },
];

const FRAMEWORKS: Skill[] = [
  { name: "React", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "Spring Boot", icon: springboot },
  { name: "Express.js", icon: express, invert: true },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL Server", icon: sqlserver },
  { name: ".NET", icon: dotnet },
  { name: "Node.js", icon: nodejs },
  { name: "FastAPI", icon: fastapi },
];

// One ring of icons. The ring spins; each icon spins the opposite way around
// its own centre (which sits exactly on the ring) so it stays upright.
function Ring({
  skills,
  radius,
  iconSize,
  duration,
  reverse,
}: {
  skills: Skill[];
  radius: number;
  iconSize: number;
  duration: number;
  reverse?: boolean;
}) {
  const spin = `orbit-spin ${duration}s linear infinite${reverse ? " reverse" : ""}`;
  const counter = `orbit-spin ${duration}s linear infinite${reverse ? "" : " reverse"}`;

  return (
    <>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      <div className="absolute left-1/2 top-1/2 size-0 will-change-transform" style={{ animation: spin }}>
        {skills.map((s, i) => {
          const angle = (360 / skills.length) * i;
          return (
            <div
              key={s.name}
              className="absolute left-0 top-0"
              style={{
                width: iconSize,
                height: iconSize,
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg) translate(-50%, -50%)`,
              }}
            >
              <div className="size-full will-change-transform" style={{ animation: counter }}>
                <div
                  title={s.name}
                  className="flex size-full items-center justify-center rounded-xl border border-white/10 bg-zinc-900 transition-transform hover:scale-125"
                >
                  <Image
                    src={s.icon}
                    alt={s.name}
                    className={`object-contain ${s.invert ? "invert" : ""}`}
                    style={{ width: iconSize * 0.55, height: iconSize * 0.55 }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function StackTile({ className }: { className?: string }) {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);

  // Fit both rings to whatever space the card gives the orbit
  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setSize(Math.min(entry.contentRect.width, entry.contentRect.height));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const iconSize = size > 300 ? 38 : 32;
  const outer = Math.max(0, size / 2 - iconSize / 2 - 2);
  const inner = outer * 0.55;

  return (
    <Tile label="daily drivers" className={className}>
      <div className="flex h-full flex-col">
        <div ref={orbitRef} className="relative -mx-4 min-h-[280px] flex-1">
          <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8c1eff]/20 blur-3xl" />
          {size > 0 && (
            <>
              <Ring skills={LANGUAGES} radius={inner} iconSize={iconSize} duration={28} reverse />
              <Ring skills={FRAMEWORKS} radius={outer} iconSize={iconSize} duration={44} />
            </>
          )}
          <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_6px_rgba(140,30,255,0.6)]" />
        </div>

        <div>
          <h3 className="font-(family-name:--font-inter-tight) text-3xl font-bold tracking-tighter text-white">
            Skills I use a lot
          </h3>
          <p className="mt-1 text-sm text-zinc-400">
            {LANGUAGES.length} languages in the inner ring, {FRAMEWORKS.length} frameworks and databases around them.
          </p>
        </div>
      </div>
    </Tile>
  );
}
