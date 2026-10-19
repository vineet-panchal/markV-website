import React from "react";
import { ArrowUpRight, GitPullRequest, Star } from "lucide-react";
import { Tile } from "@/components/home-page/bento/tile";
import { CONTRIBUTIONS } from "./gitroll-data";

export default function OpenSourceTile({ className }: { className?: string }) {
  return (
    <Tile label="open-source contributions" className={className}>
      <div className="flex flex-1 flex-col gap-4 pt-6">
        <p className="text-sm leading-relaxed text-zinc-400">Repos I&apos;ve contributed to, as counted by GitRoll.</p>
        <ul className="flex flex-col gap-1">
          {CONTRIBUTIONS.map(({ repo, stars }) => {
            const [owner, name] = repo.split("/");
            return (
              <li key={repo}>
                <a
                  href={`https://github.com/${repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/os flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-white/[0.05]"
                >
                  <GitPullRequest className="size-4 shrink-0 text-zinc-500 group-hover/os:text-[#ff2975]" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm text-zinc-200 group-hover/os:text-white">{name}</span>
                    <span className="block truncate font-(family-name:--font-geist-mono) text-[11px] text-zinc-600">{owner}</span>
                  </span>
                  <span className="flex items-center gap-1 font-(family-name:--font-geist-mono) text-xs text-zinc-500">
                    <Star className="size-3" />
                    {stars}
                  </span>
                  <ArrowUpRight className="size-3.5 shrink-0 text-zinc-600 opacity-0 transition-all group-hover/os:opacity-100" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Tile>
  );
}
