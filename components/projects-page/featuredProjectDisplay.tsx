import React from 'react';
import { WobbleCard } from '../ui/wobble-card';
import Image, { StaticImageData } from 'next/image';
import { ImageIcon } from 'lucide-react';

interface FeaturedProjectDisplayProps {
  bgColor: string;
  displayImg?: string | StaticImageData;
  header: string;
  title: string;
}

// Stand-in browser window for projects that don't have screenshots yet
export function ScreenPlaceholder({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/15 bg-[var(--surface-3)] shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 h-4 flex-1 rounded-md bg-white/[0.06]" />
      </div>
      <div className="relative flex aspect-[16/9] flex-col items-center justify-center gap-2 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]">
        <ImageIcon className="size-8 text-zinc-600" />
        <p className="font-(family-name:--font-inter-tight) text-lg font-semibold tracking-tight text-zinc-300">{title}</p>
        <p className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">{"// screenshots coming soon"}</p>
      </div>
    </div>
  );
}

export default function FeaturedProjectDisplay({ bgColor, displayImg, header, title }: FeaturedProjectDisplayProps) {
  return (
    <WobbleCard containerClassName={`${bgColor} relative h-full min-h-[340px] rounded-xl border border-neutral-800 sm:min-h-[420px]`}>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 sm:px-10">
        <p className="pb-4 text-center font-(family-name:--font-inter-tight) text-xl font-bold tracking-tight text-white sm:text-2xl">
          {header}
        </p>
        {displayImg ? (
          <Image src={displayImg} alt={`${title} screenshot`} className="h-auto w-full max-w-[520px] rounded-t-xl object-contain" />
        ) : (
          <ScreenPlaceholder title={title} className="w-full max-w-[520px] rounded-b-none" />
        )}
      </div>
    </WobbleCard>
  );
};
