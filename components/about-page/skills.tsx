import React from 'react';
import { AuroraText } from '@/components/magicui/aurora-text';
import { BackgroundLines } from '../ui/background-lines';
import SkillBadge from './skillBadge';

import javaLogo from "@/assets/java.png";
import pythonLogo from "@/assets/python.png";
import javascriptLogo from "@/assets/javascript.png";
import typescriptLogo from "@/assets/typescript.png";

import nextjsLogo from "@/assets/nextjs.svg";
import reactLogo from "@/assets/react.png";
import expressLogo from "@/assets/express.png";

import mongodbLogo from "@/assets/mongodb.svg";
import postgresqlLogo from "@/assets/postgresql.png";
import supabaseLogo from "@/assets/supabase.png";


const skillsList = [
  { skill: "Java", logo: javaLogo },
  { skill: "Python", logo: pythonLogo },
  { skill: "JavaScript", logo: javascriptLogo },
  { skill: "TypeScript", logo: typescriptLogo },
  { skill: "Next.js", logo: nextjsLogo },
  { skill: "React", logo: reactLogo },
  { skill: "Express.js", logo: expressLogo },
  { skill: "MongoDB", logo: mongodbLogo },
  { skill: "PostgreSQL", logo: postgresqlLogo },
  { skill: "Supabase", logo: supabaseLogo },
];

export default function Skills() {
  return (
    <>
      <div className="relative flex h-[50rem] w-full justify-center bg-#262626 mt-5">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="font-[outfit] text-center text-5xl md:text-1xl font-bold pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b bg-white bg-clip-text leading-none tracking-tighter text-transparent">
          <div className="bg-white bg-clip-text text-center text-2xl font-extralight text-transparent font-sans">
            My technical skills.
          </div>
          <span className="">  
            Behind the 
            <span>
              <AuroraText className="text-6xl italic font-[nyght-serif-dark]"> scenes. </AuroraText>
            </span> 
          </span>
        </div>
        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-8">
          {skillsList.map(({ skill, logo }) => (
            <SkillBadge 
              key={skill} 
              logo={logo.src} 
              skill={skill} 
            />
          ))}
        </div>
      </ BackgroundLines>
      </div>
    </>
  )
};