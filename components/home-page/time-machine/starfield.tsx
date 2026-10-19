"use client";

import React, { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; twinkle: number; tint: string; bright: boolean };

const TINTS = ["255,255,255", "255,255,255", "255,255,255", "201,166,255", "255,170,200", "160,220,255"];

// Pre-rendered soft halo per tint, so bright stars don't build a gradient every frame
const haloCache = new Map<string, HTMLCanvasElement>();
function halo(tint: string) {
  let sprite = haloCache.get(tint);
  if (!sprite) {
    sprite = document.createElement("canvas");
    sprite.width = sprite.height = 64;
    const g = sprite.getContext("2d")!;
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, `rgba(${tint},0.45)`);
    grad.addColorStop(1, `rgba(${tint},0)`);
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    haloCache.set(tint, sprite);
  }
  return sprite;
}

function makeStar(z = Math.random()): Star {
  return {
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    z: Math.max(0.05, z),
    twinkle: 0.5 + Math.random() * 2.5,
    tint: TINTS[Math.floor(Math.random() * TINTS.length)],
    bright: Math.random() < 0.06,
  };
}

// Canvas starfield that drifts slowly at rest and stretches into light-speed
// streaks as `warp` (0..1) rises. `warp` is a ref so it can change every frame
// without re-rendering React.
export default function Starfield({ warp, className }: { warp: React.RefObject<number>; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let frame = 0;
    let visible = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 2000);
      stars = Array.from({ length: count }, () => makeStar());
    };

    const project = (s: Star, z: number) => ({
      x: w / 2 + (s.x / z) * (w / 2),
      y: h / 2 + (s.y / z) * (h / 2),
    });

    const draw = (t: number) => {
      const wv = warp.current ?? 0;
      const speed = reduced ? 0 : 0.00025 + wv * wv * 0.03;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const prevZ = s.z;
        s.z -= speed;
        if (s.z <= 0.05) {
          stars[i] = makeStar(1);
          continue;
        }
        const p = project(s, s.z);
        if (p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
          stars[i] = makeStar(1);
          continue;
        }

        const depth = 1 - s.z;
        const shimmer = reduced ? 1 : 0.7 + 0.3 * Math.sin((t / 1000) * s.twinkle + i);
        const alpha = Math.min(1, (0.45 + depth * 0.55) * shimmer + wv * 0.4);

        if (wv > 0.05) {
          // Streak from where the star was a moment ago (stretched with warp)
          const tail = project(s, Math.min(1, prevZ + wv * 0.12));
          ctx.strokeStyle = `rgba(${s.tint},${alpha})`;
          ctx.lineWidth = 0.6 + depth * 1.6;
          ctx.beginPath();
          ctx.moveTo(tail.x, tail.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        } else {
          const r = (s.bright ? 1.1 : 0.55) + depth * (s.bright ? 1.4 : 0.9);
          if (s.bright) {
            // Soft halo plus a faint four-point sparkle on the brightest stars
            ctx.globalAlpha = alpha;
            ctx.drawImage(halo(s.tint), p.x - r * 6, p.y - r * 6, r * 12, r * 12);
            ctx.globalAlpha = 1;
            const spike = r * 5 * shimmer;
            ctx.strokeStyle = `rgba(${s.tint},${alpha * 0.5})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x - spike, p.y);
            ctx.lineTo(p.x + spike, p.y);
            ctx.moveTo(p.x, p.y - spike);
            ctx.lineTo(p.x, p.y + spike);
            ctx.stroke();
          }
          ctx.fillStyle = `rgba(${s.tint},${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // The loop only runs while the canvas is on screen
    const loop = (t: number) => {
      draw(t);
      frame = visible ? requestAnimationFrame(loop) : 0;
    };

    resize();
    draw(0);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduced && !frame) frame = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }, [warp]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
