"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Shared shell for every homepage bento tile: dark glass card, a soft
// spotlight that follows the cursor, and an optional mono "// label" row
// with room for a small detail on the right (`aside`). Animations inside a
// tile pause while it is off screen (see css/homegrid.css).
export function Tile({
  className,
  label,
  aside,
  children,
}: {
  className?: string;
  label?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      el.toggleAttribute("data-offscreen", !entry.isIntersecting);
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--tile-x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--tile-y", `${e.clientY - rect.top}px`);
      }}
      className={cn(
        "group/tile relative isolate flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] p-6 [contain:layout_paint]",
        "bg-gradient-to-b from-[#1f1f1f] to-[#151515] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_50px_-25px_rgba(0,0,0,0.7)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/tile:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--tile-x) var(--tile-y), rgba(255,255,255,0.06), transparent 60%)",
        }}
      />
      {(label || aside) && (
        <div className="flex items-center justify-between gap-3">
          {label && <TileLabel>{label}</TileLabel>}
          {aside}
        </div>
      )}
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

export function TileLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-(family-name:--font-geist-mono) text-xs tracking-wide text-zinc-500">
      {"// "}
      {children}
    </span>
  );
}
