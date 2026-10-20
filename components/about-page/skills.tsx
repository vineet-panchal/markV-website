import React from 'react';
import { BackgroundLines } from '../ui/background-lines';
import SkillBadge from './skillBadge';
import Header from '../header';
import { SKILL_ICONS, type SkillIcon, type SkillName } from '@/components/skill-icons';

const skillsList: SkillName[] = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "C Programming",
  "C++",
  "C#",
  "Go",
  "GraphQL",
  "Haskell",
  "Rust",
  "Node.js",
  "Next.js",
  "React",
  "Express.js",
  "Spring Boot",
  ".NET",
  "Gin",
  "FastAPI",
  "WebSockets",
  "Socket.IO",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "MySQL",
  "SQL Server",
  "Firebase",
  "Azure",
  "TensorFlow",
  "scikit-learn",
  "Matplotlib",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Postman",
  "Git",
  "GitHub",
  "Sourcetree",
  "VS Code",
  "IntelliJ IDEA",
];

export default function Skills() {
  return (
    <>
      <div className="relative flex w-full justify-center bg-#262626">
        <BackgroundLines className="relative flex h-auto min-h-0 w-full flex-col items-center justify-center px-4 py-16 md:h-auto md:min-h-screen md:py-24">
          <Header 
            heading="My technical skills" 
            subHeading="Behind the" 
            coloredText="scenes."
          />
          
          <div className="relative z-10 mt-10 grid w-full max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
            {skillsList.map((skill) => {
              const { logo, icon, color, invertOnLight }: SkillIcon = SKILL_ICONS[skill];
              return (
                <SkillBadge 
                  key={skill} 
                  logo={logo?.src} 
                  icon={icon}
                  color={color}
                  invertOnLight={invertOnLight}
                  skill={skill} 
                />
              );
            })}
          </div>
        </ BackgroundLines>
      </div>
    </>
  )
};