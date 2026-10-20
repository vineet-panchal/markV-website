"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import SkillChip from "@/components/skill-chip"
import type { SkillName } from "@/components/skill-icons"

type Role = {
  title: string
  company: string
  // Square logo under /public; falls back to a monogram tile in the accent colour
  logo?: string
  // Logo already has its own background, so it fills the tile edge to edge
  logoBleed?: boolean
  accent: string
  date: string
  current?: boolean
  location: string
  team?: string
  bullets: string[]
  skills: SkillName[]
}

// Dates and teams from LinkedIn; bullets from the resume where the role is on it
const roles: Role[] = [
  {
    title: "Machine Learning Researcher",
    company: "Algoverse",
    logo: "/logos/algoverse.jpg",
    logoBleed: true,
    accent: "#4F5BD5",
    date: "Sep 2026 - Present",
    current: true,
    location: "Remote · Internship",
    bullets: [],
    skills: ["Python", "Machine Learning"],
  },
  {
    title: "Software Developer Intern",
    company: "Dayforce",
    logo: "/logos/dayforce.png",
    accent: "#1F6FE5",
    date: "May 2026 - Aug 2026",
    location: "Toronto, ON · Internship",
    team: "Application Development · FedRAMP SecBug Tiger Team 🐯",
    bullets: [
      "Investigated & remediated security vulnerabilities across full-stack & monolithic .NET applications, addressing issues including CSRF, OWASP Top 10 findings, dependency vulnerabilities, denial of service risks, etc.",
      "Owned end-to-end remediation across multiple codebases, configuring unfamiliar repositories, reproducing findings, performing root-cause analysis, implementing secure fixes, and validating changes through testing.",
      "Collaborated with application owners to understand system behavior, validate remediation approaches, resolve feedback, and deliver production-ready fixes through established review workflows.",
    ],
    skills: ["C#", ".NET", "Application Security", "OWASP Top 10"],
  },
  {
    title: "Software Developer Intern",
    company: "Dayforce",
    logo: "/logos/dayforce.png",
    accent: "#1F6FE5",
    date: "Sep 2025 - Apr 2026",
    location: "Toronto, ON · Internship",
    team: "Performance Engineering · Frameworks 🚀",
    bullets: [
      "Enhanced performance analytics platforms by delivering full-stack features using C#, .NET, React, TypeScript, Azure, and SQL Server, transforming large-scale performance data into interactive dashboards that improved visibility into system reliability and regressions across performance engineering teams.",
      "Implemented end-to-end features across frontend, backend, and database layers, integrating REST APIs, Azure resources, and secure ASP.NET controllers to reduce manual performance analysis time by 25%.",
      "Led early AI and cloud initiatives by integrating Azure OpenAI with blob-backed indexing and retrieval workflows to generate automated summaries of performance data, helping engineers review release results 45% faster.",
    ],
    skills: ["C#", ".NET", "React", "TypeScript", "Azure", "SQL Server", "REST APIs", "Azure OpenAI"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Codveda Technologies",
    logo: "/logos/codveda.png",
    accent: "#2563EB",
    date: "May 2025 - Aug 2025",
    location: "Remote · Internship",
    bullets: [
      "Developed full-stack applications across MERN, WebSockets, and GraphQL, including an authenticated goal-tracking platform, real-time group chat, and structured GraphQL API with persistent data storage.",
      "Implemented JWT authentication, protected MongoDB CRUD APIs, Socket.IO event-driven messaging, and GraphQL schemas, resolvers, queries, & mutations supporting nested data relationships across three projects.",
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "GraphQL", "Socket.IO", "WebSockets", "JWT"],
  },
  {
    title: "Software Engineer",
    company: "Summer of Bitcoin",
    logo: "/logos/summer-of-bitcoin.png",
    accent: "#F7931A",
    date: "Mar 2025 - Apr 2025",
    location: "Remote · On-call",
    bullets: [
      "Solved blockchain coding challenges in multiple programming languages.",
      "Learned about transaction verification and cryptographic hashing.",
    ],
    skills: ["Python", "Java", "Blockchain", "Cryptography"],
  },
  {
    title: "Software Developer Fellow",
    company: "Headstarter AI",
    logo: "/logos/headstarter.png",
    accent: "#10D9A0",
    date: "Jul 2024 - Sep 2024",
    location: "New York, NY · Remote",
    bullets: [
      "Built AI-powered full-stack applications using Next.js, React, OpenAI, Firebase, and Supabase, implementing authentication, real-time data synchronization, API integrations, and scalable backend services across products.",
    ],
    skills: ["Next.js", "React", "TypeScript", "OpenAI", "Firebase", "Supabase"],
  },
  {
    title: "Frontend Developer Intern",
    company: "the CIRCLE lab",
    logo: "/logos/circle-lab.png",
    accent: "#2F5AA8",
    date: "May 2024 - Jul 2024",
    location: "Toronto, ON · Remote",
    bullets: [
      "Designed and developed an engaging and informative website highlighting the organization’s mission and impact.",
      "Delivered a seamless and high-quality UI/UX experience, receiving positive feedback for its functionality.",
      "Developed the back-end functionality using Node.js and Express.js, with MongoDB for secure user authentication and data integrity.",
    ],
    skills: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
  },
]

const initials = (name: string) =>
  name
    .replace(/^the\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("")

function CompanyLogo({ role }: { role: Role }) {
  if (role.logo) {
    return (
      <div className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-[#fff] ring-1 ring-[rgba(0,0,0,0.06)]">
        <Image
          src={role.logo}
          alt={`${role.company} logo`}
          fill
          sizes="48px"
          className={role.logoBleed ? "object-cover" : "object-contain p-1.5"}
        />
      </div>
    )
  }
  return (
    <div
      className="flex size-12 shrink-0 items-center justify-center rounded-xl font-(family-name:--font-inter-tight) text-base font-bold tracking-tight text-white"
      style={{ background: `linear-gradient(135deg, ${role.accent}, ${role.accent}88)` }}
      aria-hidden
    >
      {initials(role.company)}
    </div>
  )
}

function RoleCard({ role }: { role: Role }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[var(--surface-1)] to-[var(--surface-2)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_50px_-25px_rgba(0,0,0,0.7)] transition-colors duration-300 hover:border-white/20 sm:p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-15 blur-3xl transition-opacity duration-300 group-hover:opacity-30"
        style={{ backgroundColor: role.accent }}
      />

      <div className="relative flex items-start gap-4">
        <CompanyLogo role={role} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-(family-name:--font-inter-tight) text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
              {role.title}
            </h3>
            {role.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-(family-name:--font-geist-mono) text-[10px] uppercase tracking-wider text-emerald-300">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                now
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm font-medium text-zinc-300">{role.company}</p>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">
            <span className="md:hidden">{role.date}</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3" />
              {role.location}
            </span>
          </p>
        </div>
      </div>

      {role.team && (
        <div className="relative mt-5 inline-flex max-w-full items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-200">
          <span className="shrink-0 font-(family-name:--font-geist-mono) text-zinc-500">{"// team"}</span>
          <span className="truncate">{role.team}</span>
        </div>
      )}

      {role.bullets.length > 0 && (
        <ul className="relative mt-5 space-y-2.5">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
              <span
                className="mt-[0.55rem] size-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: role.accent, boxShadow: `0 0 8px ${role.accent}` }}
                aria-hidden
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="relative mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5" aria-label="Technologies">
        {role.skills.map((skill) => (
          <SkillChip key={skill} skill={skill} />
        ))}
      </ul>
    </article>
  )
}

export default function Timeline() {
  return (
    <div className="relative w-full bg-[var(--color-midnight)] py-16 text-neutral-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 sm:px-6">
        {roles.map((role, idx) => (
          <motion.div
            key={`${role.company}-${role.date}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[11rem_minmax(0,1fr)]"
          >
            {/* Left side - sticky date */}
            <div className="relative hidden md:block">
              <div className="sticky top-24 pt-6">
                <span className="font-(family-name:--font-geist-mono) text-xs text-zinc-400">{role.date}</span>
              </div>
            </div>

            {/* Right side - timeline line, dot and card */}
            <div className="relative min-w-0 pl-7 md:pl-9">
              {idx !== roles.length - 1 && (
                <div className="absolute left-[5px] top-8 h-[calc(100%+3rem)] w-[2px] bg-neutral-700" />
              )}
              <span
                className={`absolute left-0 top-7 size-3 rounded-full ring-4 ring-[var(--color-midnight)] ${
                  role.current ? "animate-pulse bg-emerald-400" : "bg-green-500"
                }`}
              />
              <RoleCard role={role} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
