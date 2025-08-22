"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [43.651070, -79.347015], size: 0.07 }, // Toronto
    { location: [41.878113, -87.629799], size: 0.07 }, // Chicago
    { location: [42.331429, -83.045753], size: 0.07 }, // Detroit
    { location: [30.267153, -97.743057], size: 0.07 }, // Austin
    { location: [29.760427, -95.369804], size: 0.07 }, // Houston
    { location: [32.776665, -96.796989], size: 0.07 }, // Dallas
    { location: [23.022505, 72.571362], size: 0.07 }, // Ahmedabad
    { location: [22.307159, 73.181219], size: 0.07 }, // Vadodara
    { location: [19.076090, 72.877426], size: 0.07 }, // Mumbai
    { location: [44.648764, -63.575239], size: 0.07 }, // Halifax
    { location: [45.501689, -73.567256], size: 0.07 }, // Montreal
    { location: [45.421530, -75.697193], size: 0.07 }, // Ottawa
    { location: [46.813878, -71.207981], size: 0.07 }, // Quebec City
    { location: [43.255721, -79.871102], size: 0.07 }, // Hamilton, Canada
    { location: [43.464260, -80.520410], size: 0.07 }, // Waterloo
    { location: [43.589045, -79.644120], size: 0.07 }, // Mississauga
    { location: [29.424122, -98.493629], size: 0.07 }, // San Antonio
    { location: [39.961176, -82.998794], size: 0.07 }, // Columbus
    { location: [52.3676, 4.9041], size: 0.07 }, // Amsterdam
    { location: [24.453884, 54.3773438], size: 0.07 }, // Abu Dhabi
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
