import React from 'react';
import type { IconType } from 'react-icons';

interface SkillBadgeProps {
  skill: string;
  logo?: string;
  icon?: IconType;
  color?: string;
}

export default function SkillBadge({ logo, icon: Icon, color, skill }: SkillBadgeProps) {
  return (
    <>
      <div className="relative drop-shadow-xl w-full h-[3rem] overflow-hidden rounded-xl bg-[#3d3c3d]">
        <div className="absolute flex items-center justify-center px-2 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
          <div className="flex items-center justify-center">
            {Icon ? (
              <Icon className="size-6 shrink-0 sm:size-8" style={{ color }} aria-hidden />
            ) : (
              <img 
                src={logo} 
                alt={`${skill} logo`} 
                className="size-6 shrink-0 object-contain sm:size-8"
              />
            )}
          </div>
          <span className="truncate pl-2 text-sm font-extralight sm:pl-3 sm:text-base">{skill}</span>

        </div>
      </div>
    </>
  );
}