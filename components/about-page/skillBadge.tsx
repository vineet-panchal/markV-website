import React from 'react';

interface SkillBadgeProps {
  logo: string;
  skill: string;
}

export default function SkillBadge({ logo, skill }: SkillBadgeProps) {
  return (
    <>
      <div className="relative drop-shadow-xl w-[10rem] h-[3rem] overflow-hidden rounded-xl bg-[#3d3c3d]">
        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
          <div className="flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${skill} logo`} 
              className="w-[2rem] h-[2rem] object-contain"
            />
          </div>
          <span className="text-1xl pl-3 font-extralight">{skill}</span>

        </div>
      </div>
    </>
  );
}