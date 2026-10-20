"use client";
import React, { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AuroraText } from "../magicui/aurora-text";
import { LANGUAGES } from "../about-page/github/gitroll-data";

type Product = {
  title: string;
  link: string;
  thumbnail?: string;
  repo?: string;
  language?: string;
  year?: string;
  description?: string;
};

const languageColor = (name?: string) => LANGUAGES.find((l) => l.name === name)?.color ?? "#71717a";

// The 3D parallax only runs on large screens for people who haven't asked for reduced motion.
// The server and first client render use the lightweight scroller, then large screens swap in the parallax.
const PARALLAX_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

function useParallaxEnabled() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(PARALLAX_QUERY);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(PARALLAX_QUERY).matches,
    () => false,
  );
}

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const parallax = useParallaxEnabled();
  return parallax ? <ParallaxLibrary products={products} /> : <ScrollerLibrary products={products} />;
};

function ParallaxLibrary({ products }: { products: Product[] }) {
  const rows = [products.slice(0, 5), products.slice(5, 10), products.slice(10, 15)];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-linked values (no springs), so nothing keeps animating once scrolling stops
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [-700, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col self-auto overflow-hidden bg-[var(--color-midnight)] pb-16 pt-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }} className="will-change-transform">
        {rows.map((row, i) => (
          <Row key={i} products={row} translate={i === 1 ? translateXReverse : translateX} reverse={i !== 1} last={i === 2} />
        ))}
      </motion.div>
    </div>
  );
}

// Each row moves as one layer instead of animating every card separately
function Row({ products, translate, reverse, last }: { products: Product[]; translate: MotionValue<number>; reverse: boolean; last: boolean }) {
  return (
    <motion.div
      style={{ x: translate }}
      className={`flex gap-20 will-change-transform ${reverse ? "flex-row-reverse" : "flex-row"} ${last ? "" : "mb-20"}`}
    >
      {products.map((product) => (
        <ProductCard key={product.title} product={product} className="h-96 w-[30rem]" />
      ))}
    </motion.div>
  );
}

function ScrollerLibrary({ products }: { products: Product[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  // Arrows move by roughly one card
  const step = (dir: 1 | -1) => {
    const el = listRef.current;
    const card = el?.querySelector<HTMLElement>("[role=listitem]");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  const arrow =
    "hidden size-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-zinc-200 transition-all hover:border-white/30 hover:bg-white/[0.1] disabled:pointer-events-none disabled:opacity-30 pointer-fine:flex";

  return (
    <div className="relative bg-[var(--color-midnight)] pb-16 pt-24">
      <Header />
      <div className="relative">
        <div
          ref={listRef}
          onScroll={updateEdges}
          className="library-scroller flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:gap-5 sm:px-8"
          role="list"
          aria-label="Code library projects"
        >
          {products.map((product) => (
            <div key={product.title} role="listitem" className="snap-start">
              <ProductCard product={product} compact className="h-60 w-[17rem] sm:h-72 sm:w-[22rem]" />
            </div>
          ))}
        </div>
        {!edges.end && (
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--color-midnight)] to-transparent" />
        )}
      </div>
      <div className="mt-3 flex items-center justify-between gap-4 px-4 sm:px-8">
        <p className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">
          <span className="pointer-fine:hidden">{"// swipe to browse →"}</span>
          <span className="hidden pointer-fine:inline">{"// scroll or use the arrows →"}</span>
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={() => step(-1)} disabled={edges.start} aria-label="Previous projects" className={arrow}>
            <ArrowLeft className="size-4" />
          </button>
          <button type="button" onClick={() => step(1)} disabled={edges.end} aria-label="Next projects" className={arrow}>
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export const Header = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 md:py-24 lg:py-40">
      <div className="bg-white bg-clip-text text-left text-xl font-extralight text-transparent font-sans sm:text-2xl">
        Projects Archive
      </div>
      <span className="text-5xl font-bold md:text-7xl dark:text-white font-[outfit]">
        The code
        <span>
          <AuroraText className="ml-3 text-[1.3em] italic font-[nyght-serif-dark] lg:ml-[2vh] lg:text-[10.5vh]"> library </AuroraText>
        </span>
      </span>
    </div>
  );
};

// Stand-in for repos without a live site to screenshot
const PlaceholderShot = ({ product, compact }: { product: Product; compact?: boolean }) => {
  const color = languageColor(product.language);
  return (
    <div
      className="absolute inset-0 flex flex-col overflow-hidden rounded-xl border border-white/10"
      // A gradient glow instead of a blurred element keeps the card cheap to repaint while it moves
      style={{ background: `radial-gradient(circle at 90% 25%, ${color}40, transparent 55%), linear-gradient(to bottom, #1f1f1f, #141414)` }}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex h-5 min-w-0 flex-1 items-center truncate rounded-md bg-white/[0.06] px-2 font-(family-name:--font-geist-mono) text-[10px] text-zinc-500">
          github.com/vineet-panchal/{product.repo}
        </span>
      </div>
      <div className={`relative flex flex-1 flex-col justify-between [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px] ${compact ? "p-5" : "p-7"}`}>
        <div className="flex items-center justify-between font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full" style={{ backgroundColor: color }} />
            {product.language}
          </span>
          <span>{product.year}</span>
        </div>
        <div>
          <p className={`font-(family-name:--font-inter-tight) font-bold leading-none tracking-tighter text-white ${compact ? "text-2xl sm:text-3xl" : "text-4xl"}`}>
            {product.title}
          </p>
          <p className={`max-w-sm leading-relaxed text-zinc-400 ${compact ? "mt-2 text-xs sm:text-sm" : "mt-3 text-sm"}`}>{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-600">{"// screenshot coming soon"}</span>
          <span className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-zinc-300">
            <FaGithub className="size-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, compact, className = "" }: { product: Product; compact?: boolean; className?: string }) => {
  return (
    <div className={`group/product relative shrink-0 transition-transform duration-300 hover:-translate-y-2.5 ${className}`}>
      <a href={product.link} target="_blank" rel="noopener noreferrer" className="block h-full w-full group-hover/product:shadow-2xl">
        {product.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.thumbnail}
            height="600"
            width="600"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full rounded-xl object-cover object-left-top"
            alt={product.title}
          />
        ) : (
          <PlaceholderShot product={product} compact={compact} />
        )}
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full rounded-xl bg-black opacity-0 transition-opacity duration-300 group-hover/product:opacity-80"></div>
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 opacity-0 transition-opacity duration-300 group-hover/product:opacity-100">
        <h2 className="flex items-center gap-2 font-(family-name:--font-inter-tight) text-xl font-semibold text-white">
          {product.title}
          <ArrowUpRight className="size-4" />
        </h2>
        {product.description && <p className="mt-1 text-sm text-zinc-300">{product.description}</p>}
      </div>
    </div>
  );
};
