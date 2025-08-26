import React from 'react';
import { AuroraText } from '@/components/magicui/aurora-text';
import { BackgroundLines } from '../ui/background-lines';
import SkillBadge from './skillBadge';

import javaLogo from "@/assets/java.png";
import pythonLogo from "@/assets/python.png";
import javascriptLogo from "@/assets/javascript.png";
import typescriptLogo from "@/assets/typescript.png";
import cLogo from "@/assets/c.png";
import cppLogo from "@/assets/cpp.png";
import graphqlLogo from "@/assets/graphql.png";

import nodejsLogo from "@/assets/nodejs.png";
import nextjsLogo from "@/assets/nextjs.svg";
import reactLogo from "@/assets/react.png";
import expressLogo from "@/assets/express.png";
import viteLogo from "@/assets/vite.png";
import npmLogo from "@/assets/npm.png";

import mongodbLogo from "@/assets/mongodb.svg";
import postgresqlLogo from "@/assets/postgresql.png";
import supabaseLogo from "@/assets/supabase.png";
import mysqlLogo from "@/assets/mysql.png";
import firebaseLogo from "@/assets/firebase.png";

import htmlLogo from "@/assets/html.png";
import cssLogo from "@/assets/css.png";
import tailwindLogo from "@/assets/tailwind.png";
import bootstrapLogo from "@/assets/bootstrap.png";

import postmanLogo from "@/assets/postman.png";
import gitLogo from "@/assets/git.png";
import githubLogo from "@/assets/github.png";
import gitlabLogo from "@/assets/gitlab.png";
import sourcetreeLogo from "@/assets/sourcetree.png";
import vscodeLogo from "@/assets/vscode.png";
import intellijLogo from "@/assets/intellij.png";

const skillsList = [
  { skill: "Java", logo: javaLogo },
  { skill: "Python", logo: pythonLogo },
  { skill: "JavaScript", logo: javascriptLogo },
  { skill: "TypeScript", logo: typescriptLogo },
  { skill: "C Programming", logo: cLogo },
  { skill: "C++", logo: cppLogo },
  { skill: "GraphQL", logo: graphqlLogo },
  { skill: "Node.js", logo: nodejsLogo },
  { skill: "Next.js", logo: nextjsLogo },
  { skill: "React", logo: reactLogo },
  { skill: "Express.js", logo: expressLogo },
  { skill: "Vite", logo: viteLogo },
  { skill: "npm", logo: npmLogo },
  { skill: "MongoDB", logo: mongodbLogo },
  { skill: "PostgreSQL", logo: postgresqlLogo },
  { skill: "Supabase", logo: supabaseLogo },
  { skill: "MySQL", logo: mysqlLogo },
  { skill: "Firebase", logo: firebaseLogo },
  { skill: "HTML", logo: htmlLogo },
  { skill: "CSS", logo: cssLogo },
  { skill: "Tailwind CSS", logo: tailwindLogo },
  { skill: "Bootstrap", logo: bootstrapLogo },
  { skill: "Postman", logo: postmanLogo },
  { skill: "Git", logo: gitLogo },
  { skill: "GitHub", logo: githubLogo },
  { skill: "GitLab", logo: gitlabLogo },
  { skill: "Sourcetree", logo: sourcetreeLogo },
  { skill: "VS Code", logo: vscodeLogo },
  { skill: "IntelliJ IDEA", logo: intellijLogo },
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