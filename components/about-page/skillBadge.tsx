import React from 'react';
import type { IconType } from 'react-icons';

interface SkillBadgeProps {
  skill: string;
  logo?: string;
  icon?: IconType;
  color?: string;
  invertOnLight?: boolean;
}

export default function SkillBadge({ logo, icon: Icon, color, invertOnLight, skill }: SkillBadgeProps) {
  return (
    <>
      <div className="relative drop-shadow-xl w-full h-[3rem] overflow-hidden rounded-xl bg-[var(--surface-raised-edge)]">
        <div className="absolute flex items-center justify-center px-2 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[var(--surface-raised)]">
          <div className="flex items-center justify-center">
            {Icon ? (
              <Icon className="size-6 shrink-0 sm:size-8" style={{ color }} aria-hidden />
            ) : (
              <img 
                src={logo} 
                alt={`${skill} logo`} 
                className={`size-6 shrink-0 object-contain sm:size-8 ${invertOnLight ? "light:invert" : ""}`}
              />
            )}
          </div>
          <span className="truncate pl-2 text-sm font-extralight sm:pl-3 sm:text-base">{skill}</span>

        </div>
      </div>
    </>
  );
}