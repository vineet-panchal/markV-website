import React from 'react';
import { BackgroundLines } from '../ui/background-lines';
import SkillBadge from './skillBadge';
import Header from '../header';

import javaLogo from "@/assets/logos/java.png";
import pythonLogo from "@/assets/logos/python.png";
import javascriptLogo from "@/assets/logos/javascript.png";
import typescriptLogo from "@/assets/logos/typescript.png";
import cLogo from "@/assets/logos/c.png";
import cppLogo from "@/assets/logos/cpp.png";
import graphqlLogo from "@/assets/logos/graphql.png";
import haskellLogo from "@/assets/logos/haskell.png";
import rustLogo from "@/assets/logos/rust.png";

import nodejsLogo from "@/assets/logos/nodejs.png";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import reactLogo from "@/assets/logos/react.png";
import expressLogo from "@/assets/logos/express.png";
import viteLogo from "@/assets/logos/vite.png";
import npmLogo from "@/assets/logos/npm.png";

import mongodbLogo from "@/assets/logos/mongodb.svg";
import postgresqlLogo from "@/assets/logos/postgresql.png";
import supabaseLogo from "@/assets/logos/supabase.png";
import mysqlLogo from "@/assets/logos/mysql.png";
import firebaseLogo from "@/assets/logos/firebase.png";

import htmlLogo from "@/assets/logos/html.png";
import cssLogo from "@/assets/logos/css.png";
import tailwindLogo from "@/assets/logos/tailwind.png";
import bootstrapLogo from "@/assets/logos/bootstrap.png";

import postmanLogo from "@/assets/logos/postman.png";
import gitLogo from "@/assets/logos/git.png";
import githubLogo from "@/assets/logos/github.png";
import gitlabLogo from "@/assets/logos/gitlab.png";
import sourcetreeLogo from "@/assets/logos/sourcetree.png";
import vscodeLogo from "@/assets/logos/vscode.png";
import intellijLogo from "@/assets/logos/intellij.png";

const skillsList = [
  { skill: "Java", logo: javaLogo },
  { skill: "Python", logo: pythonLogo },
  { skill: "JavaScript", logo: javascriptLogo },
  { skill: "TypeScript", logo: typescriptLogo },
  { skill: "C Programming", logo: cLogo },
  { skill: "C++", logo: cppLogo },
  { skill: "GraphQL", logo: graphqlLogo },
  { skill: "Haskell", logo: haskellLogo },
  { skill: "Rust", logo: rustLogo },
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
      <div className="relative flex w-full justify-center bg-#262626">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <Header 
            heading="My technical skills." 
            subHeading="Behind the" 
            coloredText="scenes."
          />
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-6">
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