'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SiChase, SiFreecodecamp, SiHackerrank } from 'react-icons/si';
import Header from '../header';
import { HoverEffect } from '../ui/card-hover-effect';
import { type SkillName } from '@/components/skill-icons';
import SkillChip from '@/components/skill-chip';
import ibmLogo from "@/public/ibmCertification.png";

const MicrosoftLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 23 23" className={className} aria-hidden>
    <path fill="#F25022" d="M1 1h10v10H1z" />
    <path fill="#7FBA00" d="M12 1h10v10H12z" />
    <path fill="#00A4EF" d="M1 12h10v10H1z" />
    <path fill="#FFB900" d="M12 12h10v10H12z" />
  </svg>
);

const ISSUERS = {
  jpmorgan: {
    name: "JPMorganChase × Forage",
    accent: "#117ACA",
    logo: <SiChase className="size-6 text-[#117ACA]" aria-hidden />,
  },
  hackerrank: {
    name: "HackerRank",
    accent: "#2EC866",
    logo: <SiHackerrank className="size-6 text-[#1BA94C]" aria-hidden />,
  },
  ibm: {
    name: "IBM SkillsBuild",
    accent: "#4F6BED",
    logo: <Image src={ibmLogo} alt="" className="size-9 object-contain" />,
  },
  freecodecamp: {
    name: "freeCodeCamp",
    accent: "#2AA876",
    logo: <SiFreecodecamp className="size-6 text-[#0A0A23]" aria-hidden />,
  },
  microsoft: {
    name: "Microsoft × freeCodeCamp",
    accent: "#00A4EF",
    logo: <MicrosoftLogo className="size-5" />,
  },
};

type Certification = {
  title: string;
  issuer: keyof typeof ISSUERS;
  issued: string;
  description: string;
  skills: SkillName[];
  link: string;
};

const certifications: Certification[] = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "jpmorgan",
    issued: "Jun 2026",
    description:
      "Built a Spring Boot service that consumes transactions from Kafka, validates and stores them in a SQL database, and exposes the results through a REST API.",
    skills: ["Java", "Spring Boot", "Spring", "Kafka", "REST APIs", "SQL"],
    link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_Aup79SHoBpQFgZoHz_1782622750274_completion_certificate.pdf",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "hackerrank",
    issued: "Jan 2026",
    description:
      "A timed, proctored assessment of building and debugging React components and core JavaScript.",
    skills: ["React", "JavaScript"],
    link: "https://www.hackerrank.com/certificates/728f73e19075",
  },
  {
    title: "Software Engineer Intern",
    issuer: "hackerrank",
    issued: "Jan 2026",
    description:
      "A timed, proctored assessment of problem solving, data structures and algorithms in Python, plus SQL queries.",
    skills: ["Python", "Algorithms", "SQL"],
    link: "https://www.hackerrank.com/certificates/e04894a3919e",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "ibm",
    issued: "May 2025",
    description:
      "Cloud service and deployment models, virtualization, orchestration and cloud security, including containerizing and deploying a web app in a simulated environment.",
    skills: ["Docker", "Kubernetes", "Virtualization", "Cloud Security"],
    link: "http://credly.com/badges/7f62e839-2355-4417-847e-341d32279538/linked_in_profile",
  },
  {
    title: "Front-End Development Libraries",
    issuer: "freecodecamp",
    issued: "Jan 2025",
    description:
      "Styling sites quickly with Bootstrap, adding logic to CSS with Sass, and building single-page applications with React and Redux.",
    skills: ["React", "Redux", "Bootstrap", "Sass", "jQuery"],
    link: "https://www.freecodecamp.org/certification/vineetp/front-end-development-libraries",
  },
  {
    title: "Foundational C#",
    issuer: "microsoft",
    issued: "Oct 2023",
    description:
      "Core C# syntax, data types, control flow and object-oriented programming, applied through hands-on exercises and projects.",
    skills: ["C#", ".NET", "OOP"],
    link: "https://www.freecodecamp.org/certification/vineetp/foundational-c-sharp-with-microsoft",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freecodecamp",
    issued: "Sep 2023",
    description:
      "JavaScript fundamentals, object-oriented and functional programming, algorithmic thinking, local storage and fetching data from APIs.",
    skills: ["JavaScript", "Data Structures", "Algorithms", "Functional Programming"],
    link: "https://www.freecodecamp.org/certification/vineetp/javascript-algorithms-and-data-structures",
  },
  {
    title: "Responsive Web Design",
    issuer: "freecodecamp",
    issued: "Sep 2023",
    description:
      "Building accessible webpages with HTML and CSS, from CSS variables to layouts that adapt to any screen with Flexbox and Grid.",
    skills: ["HTML", "CSS", "Flexbox & Grid", "Accessibility"],
    link: "https://www.freecodecamp.org/certification/vineetp/responsive-web-design",
  },
];

function CertificationCard({ title, issuer, issued, description, skills }: Certification) {
  const { name, accent, logo } = ISSUERS[issuer];
  return (
    <article className="relative z-20 flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-[#1c1c1e] p-6 transition-colors duration-300 group-hover:border-white/20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-35"
        style={{ backgroundColor: accent }}
      />

      <div className="relative flex items-center gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.08)]">
          {logo}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-zinc-200">{name}</p>
          <p className="font-(family-name:--font-geist-mono) text-xs tracking-wide text-zinc-500">
            {"// issued "}
            {issued}
          </p>
        </div>
        <ArrowUpRight className="size-5 shrink-0 self-start text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>

      <div className="relative">
        <h3 className="font-(family-name:--font-inter-tight) text-xl font-semibold leading-snug tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
      </div>

      <ul className="relative mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-5" aria-label="Skills">
        {skills.map((skill) => (
          <SkillChip key={skill} skill={skill} />
        ))}
      </ul>
    </article>
  );
}

export default function Certifications() {
  return (
    <div className="relative flex w-full flex-col justify-center px-4 py-16 sm:px-8 md:py-20">
      <Header
        heading="My Certifications"
        subHeading="Proof of the"
        coloredText="grind."
      />
      <HoverEffect
        items={certifications}
        renderItem={(cert) => <CertificationCard {...cert} />}
        className="mx-auto w-full max-w-6xl"
      />
    </div>
  )
};
