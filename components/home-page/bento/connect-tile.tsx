import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Tile } from "./tile";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vineetpanchal1/" },
  { label: "GitHub", href: "https://github.com/vineet-panchal" },
];

const EMAIL = "mailto:vineetpanchal03@gmail.com?subject=Hello%20Vineet&body=Hi%20Vineet%2C%0A%0A";

export default function ConnectTile({ className }: { className?: string }) {
  return (
    <Tile label="say hi" className={className}>
      <div
        aria-hidden
        className="absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-[#ff2975]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-1/3 -z-10 size-96 rounded-full bg-[#8c1eff]/15 blur-3xl"
      />
      <div className="flex h-full flex-col justify-between gap-6 pt-4 md:flex-row md:items-end">
        <div>
          <h3 className="font-(family-name:--font-inter-tight) text-5xl font-bold tracking-tighter text-white md:text-6xl">
            Let&apos;s <AuroraText className="pr-1 font-(family-name:--font-dm-serif-display) font-normal tracking-normal italic">connect</AuroraText>
          </h3>
          <p className="mt-2 max-w-md text-zinc-400">Always down to talk code, projects, or just random ideas.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium text-zinc-200 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/[0.1] hover:text-white"
            >
              {l.label}
              <ArrowUpRight className="size-4" />
            </a>
          ))}
          <a
            href={EMAIL}
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] py-2 pl-5 pr-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.14]"
          >
            Send an email
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform duration-300 group-hover:translate-x-1">
              <Mail className="size-4" />
            </span>
          </a>
        </div>
      </div>
    </Tile>
  );
}
