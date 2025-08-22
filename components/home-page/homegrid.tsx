import * as React from "react";

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

import TheLabBackground from "./homegrid-backgrounds/thelabBackground";
import SkillsIUseToBuildBackground from "./homegrid-backgrounds/skillsiusetobuildBackground";
import WhereIveBeenBackground from "./homegrid-backgrounds/whereivebeenBackground";
import LetsConnectBackground from "./homegrid-backgrounds/letsconnectBackground";

const features = [
  {
    Icon: FileTextIcon,
    name: "The Lab",
    description: "Ideas that turned into late-night coding sessions.",
    href: "#",
    cta: "Visit The Lab",
    className: "col-span-3 lg:col-span-2",
    background: <TheLabBackground />,
  },
  {
    Icon: BellIcon,
    name: "Skills I Use A Lot",
    description: "These are my daily drivers.",
    href: "#",
    cta: "Where I learned them",
    className: "col-span-3 lg:col-span-1",
    background: <SkillsIUseToBuildBackground />,
  },
  {
    Icon: Share2Icon,
    name: "Where I've Been",
    description: "Work from anywhere, learn from everywhere.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 row-span-2",
    background: <WhereIveBeenBackground />,
  },
  {
    Icon: React.Fragment,
    name: "",
    description: "",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "",
    background: <LetsConnectBackground />,
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (""),
  },
    {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (""),
  },
];

export default function HomeGrid() {
  return (
    <div className="relative mt-10 flex w-full flex-col items-center justify-center gap-4 px-4">
      <div className="w-full max-w-6xl">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard
              key={idx}
              {...feature}
              className={cn("rounded-2xl bg-gradient-to-b from-[#1A1A1A] via-[#0F0F0F] to-black shadow-lg", feature.className)}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
