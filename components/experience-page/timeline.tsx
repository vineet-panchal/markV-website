"use client"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

type TimelineItem = {
  title: string
  description: string
  date: string
  tags?: string[]
}

const timelineData: TimelineItem[] = [
  {
    title: "Software Engineer Fellow - Headstarter AI",
    description:
      "Built and shipped 3 AI-powered applications including a fashion recommendation tool, professor rating app, and an AI flashcard generator. Collaborated with Teach For Cambodia to design a teaching platform.",
    date: "Summer 2024",
    tags: ["AI", "Next.js", "TypeScript", "Supabase"],
  },
  {
    title: "Backend Developer - The Circle Lab",
    description:
      "Implemented backend functionality for a sustainability-focused platform. Focused on APIs and data integration.",
    date: "2023",
    tags: ["Backend", "APIs", "Databases"],
  },
  {
    title: "Summer of Bitcoin Program",
    description:
      "Solved blockchain coding challenges in multiple programming languages. Learned about transaction verification and cryptographic hashing.",
    date: "2023",
    tags: ["Blockchain", "C++", "Python"],
  },
  {
    title: "Open Source Contributor",
    description:
      "Contributed bug fixes and documentation improvements to open-source libraries on GitHub. Gained experience collaborating in large codebases.",
    date: "2022",
    tags: ["Open Source", "GitHub", "Collaboration"],
  },
  {
    title: "Teaching Assistant - Intro to Software",
    description:
      "Guided students through Java projects, graded assignments, and hosted coding workshops.",
    date: "2022",
    tags: ["Java", "Mentorship", "Teaching"],
  },
  {
    title: "Personal Project - Insurance Inventory App",
    description:
      "Developed a prototype app to organize home insurance documents, with photo uploads, accessibility options, and community features.",
    date: "2025",
    tags: ["React", "Firebase", "UI/UX"],
  },
]

export default function Timeline() {
  return (
    <div className="relative w-full bg-neutral-950 py-16 text-neutral-50">
      <div className="mx-auto flex max-w-5xl flex-col space-y-16 px-6">
        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="grid grid-cols-12 gap-6"
          >
            {/* Left side - Sticky Date */}
            <div className="relative col-span-3">
              <div className="sticky top-24">
                <span className="text-sm font-medium text-neutral-400">
                  {item.date}
                </span>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="relative col-span-9">
              {/* Timeline connector line */}
              {idx !== timelineData.length - 1 && (
                <div className="absolute left-[-22px] h-[100vh] w-[2px] bg-neutral-800" />
              )}

              <div className="relative rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-md">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags?.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-neutral-800 text-neutral-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Timeline dot */}
                <span className="absolute -left-[29px] top-0 h-3 w-3 rounded-full bg-green-500 ring-4 ring-neutral-950" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
