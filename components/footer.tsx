"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "@/assets/logo.png";

const EMAIL = "vineetpanchal03@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=Hello%20Vineet&body=Hi%20Vineet%2C%0A%0A`;

const NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/vineet-panchal", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vineetpanchal1/", icon: FaLinkedin },
  { label: "Email", href: MAILTO, icon: Mail },
];

const COLOPHON = [
  ["Type", "Inter Tight, Geist Mono, DM Serif Display"],
  ["Built with", "Next.js, Tailwind CSS, Motion"],
  ["3D", "Spline, cobe"],
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-(family-name:--font-geist-mono) text-xs tracking-wide text-zinc-500">
      {"// "}
      {children}
    </p>
  );
}

function TorontoTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", hour: "2-digit", minute: "2-digit", hour12: false });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-(family-name:--font-geist-mono) text-xs text-zinc-400">
      <span className="size-1.5 animate-pulse rounded-full bg-[#3dff7a] shadow-[0_0_8px_#3dff7a]" />
      Toronto · {time ?? "--:--"}
    </span>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(EMAIL);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          window.location.href = MAILTO;
        }
      }}
      className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] py-2 pl-5 pr-2 font-(family-name:--font-geist-mono) text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/[0.14]"
    >
      {copied ? "copied to clipboard" : EMAIL}
      <span className="flex size-8 items-center justify-center rounded-full bg-white text-zinc-900">
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </span>
    </button>
  );
}

// Huge outlined name; the highlight gradient fills in wherever the cursor is
function Wordmark() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      aria-hidden
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--wx", `${e.clientX - r.left}px`);
        el.style.setProperty("--wy", `${e.clientY - r.top}px`);
        el.style.setProperty("--wo", "1");
      }}
      onMouseLeave={() => ref.current?.style.setProperty("--wo", "0")}
      className="@container relative select-none overflow-hidden px-4 [--wo:0]"
    >
      <p className="whitespace-nowrap text-center font-(family-name:--font-inter-tight) text-[12.4cqw] font-bold leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.14)]">
        VINEET PANCHAL
      </p>
      <p
        className="pointer-events-none absolute inset-0 px-4 whitespace-nowrap opacity-(--wo) transition-opacity duration-500 bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center font-(family-name:--font-inter-tight) text-[12.4cqw] font-bold leading-[0.8] tracking-tighter text-transparent"
        style={{
          maskImage: "radial-gradient(260px circle at var(--wx, 50%) var(--wy, 50%), black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(260px circle at var(--wx, 50%) var(--wy, 50%), black 20%, transparent 70%)",
        }}
      >
        VINEET PANCHAL
      </p>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--surface-1)] to-transparent" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="px-4 pb-6 pt-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[var(--surface-1)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Call to action */}
        <div className="relative flex flex-col items-start justify-between gap-6 border-b border-white/[0.06] p-8 md:flex-row md:items-end md:p-10">
          <div aria-hidden className="absolute -left-20 -top-24 size-80 rounded-full bg-[#8c1eff]/15 blur-3xl" />
          <div aria-hidden className="absolute -right-10 -top-20 size-72 rounded-full bg-[#ff2975]/10 blur-3xl" />
          <div className="relative">
            <p className="font-(family-name:--font-geist-mono) text-xs tracking-wide text-zinc-500">{"// got an idea?"}</p>
            <h2 className="mt-2 font-(family-name:--font-inter-tight) text-4xl font-bold tracking-tighter text-white md:text-6xl">
              Let&apos;s build{" "}
              <span className="bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text pr-1 font-(family-name:--font-dm-serif-display) font-normal tracking-normal text-transparent italic">
                something.
              </span>
            </h2>
          </div>
          <div className="relative">
            <CopyEmail />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 p-8 md:grid-cols-[1.4fr_1fr_1fr_1.4fr] md:p-10">
          <div className="col-span-2 md:col-span-1">
            <Image src={Logo} alt="Vineet Panchal logo" width={40} height={40} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Every pixel tells a story, thanks for scrolling! You&apos;ve reached the end… or maybe the beginning.
            </p>
            <div className="mt-5">
              <TorontoTime />
            </div>
          </div>

          <div>
            <ColumnTitle>sitemap</ColumnTitle>
            <ul className="space-y-2.5">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-zinc-300 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>elsewhere</ColumnTitle>
            <ul className="space-y-2.5">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group/s inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <Icon className="size-3.5 text-zinc-500 transition-colors group-hover/s:text-white" />
                    {label}
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover/s:-translate-y-0.5 group-hover/s:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <ColumnTitle>colophon</ColumnTitle>
            <dl className="space-y-2.5">
              {COLOPHON.map(([term, value]) => (
                <div key={term} className="flex gap-3 text-sm">
                  <dt className="w-20 shrink-0 text-zinc-500">{term}</dt>
                  <dd className="text-zinc-300">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <Wordmark />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] px-8 py-5 font-(family-name:--font-geist-mono) text-xs text-zinc-500 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} Vineet Panchal. All rights reserved.</span>
          <span>Mark V · designed and built by Vineet</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
