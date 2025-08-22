"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { AnimatedList } from '@/components/magicui/animated-list';

import nextjsIcon from "@/assets/nextjs.svg";
import reactIcon from "@/assets/react.png";
import expressIcon from "@/assets/express.png";
import javaIcon from "@/assets/java.png";
import pythonIcon from "@/assets/python.png";
import javascriptIcon from "@/assets/javascript.png";
import mongodbIcon from "@/assets/mongodb.svg";
import postgresqlIcon from "@/assets/postgresql.png";
import springbootIcon from "@/assets/springboot.png";
import supabaseIcon from "@/assets/supabase.png";
import typescriptIcon from "@/assets/typescript.png";

interface Item {
  name: string;
  icon: React.ReactNode;
  color: string;
};

let skills = [
  {
    name: "Next.js",
    icon: <img src={nextjsIcon.src} alt="Next.js" className="w-6 h-6" />,
    color: "#00C9A7",
  },
  {
    name: "React",
    icon: <img src={reactIcon.src} alt="React" className="w-6 h-6" />,
    color: "#242222",
  },
  {
    name: "TypeScript",
    icon: <img src={typescriptIcon.src} alt="TypeScript" className="w-6 h-6" />,
    color: "#FF3D71",
  },
  {
    name: "Spring Boot",
    icon: <img src={springbootIcon.src} alt="Spring Boot" className="w-6 h-6" />,
    color: "#2d164a",
  },
  {
    name: "Supabase",
    icon: <img src={supabaseIcon.src} alt="Supabase" className="w-6 h-6" />,
    color: "#16274a",
  },
  {
    name: "Express.js",
    icon: <img src={expressIcon.src} alt="Express.js" className="w-6 h-6" />,
    color: "#FFB800",
  },
  {
    name: "PostgreSQL",
    icon: <img src={postgresqlIcon.src} alt="PostgreSQL" className="w-6 h-6" />,
    color: "#1E86FF",
  },
  {
    name: "Python",
    icon: <img src={pythonIcon.src} alt="Python" className="w-6 h-6" />,
    color: "#306998",
  },
  {
    name: "JavaScript",
    icon: <img src={javascriptIcon.src} alt="JavaScript" className="w-6 h-6" />,
    color: "#194d1e",
  },
  {
    name: "MongoDB",
    icon: <img src={mongodbIcon.src} alt="MongoDB" className="w-6 h-6" />,
    color: "#401628",
  },
  {
    name: "Java",
    icon: <img src={javaIcon.src} alt="Java" className="w-6 h-6" />,
    color: "#2b2222",
  },
];

skills = Array.from({ length: 10 }, () => skills).flat();

const Skill = ({ name, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-zinc-950 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg text-blue-50">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function SkillsIUseToBuildBackground({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "relative flex h-[20vh] w-full flex-col overflow-hidden p-2",
          className,
        )}
      >
        <AnimatedList className="absolute inset-0 z-0">
          {skills.map((item, idx) => (
            <Skill {...item} key={idx} />
          ))}
        </AnimatedList>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-tranparent via-[#0F0F0F]/80 to-#0F0F0F"></div>
      </div>
    </>
  )
};