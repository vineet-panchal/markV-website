import React from 'react';
import Image from 'next/image';
import { SKILL_ICONS, type SkillIcon, type SkillName } from '@/components/skill-icons';

// Small pill with a skill's logo and name, used on certification and work cards.
export default function SkillChip({ skill }: { skill: SkillName }) {
  const { logo, icon: Icon, color }: SkillIcon = SKILL_ICONS[skill];
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1.5 pr-2.5 text-xs text-zinc-300">
      {Icon ? (
        <Icon className="size-4 shrink-0" style={{ color }} aria-hidden />
      ) : (
        logo && <Image src={logo} alt="" className="size-4 shrink-0 object-contain" />
      )}
      {skill}
    </li>
  );
}
