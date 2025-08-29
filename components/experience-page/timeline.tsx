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
    title: "Software Developer Intern - Dayforce",
    description:
      "Joined the cloud developement team.",
    date: "Sept 2025 - Present",
    tags: ["Java"],
  },
  {
    title: "Full Stack Developer Intern - Codveda Technologies",
    description:
      "Built a full-stack MERN application with user authentication (JWT), secure role-based routing, and seamless database integration using MongoDB and Mongoose; deployed and optimized both frontend and backend. Implemented real-time communication using WebSockets and Socket.io, enabling live chat functionality and dynamic, event-driven updates across the user interface. Developed a GraphQL API with Express-GraphQL, creating custom queries and mutations with authentication, and optimized data fetching for scalable client-server interactions.",
    date: "May 2025 - Aug 2025",
    tags: ["React", "Express", "MongoDB", "GraphQL", "WebSockets", "Node.js", "JWT", "Socket.io"],
  },
  {
    title: "Software Engineer - Summer Of Bitcoin",
    description:
      "Solved blockchain coding challenges in multiple programming languages. Learned about transaction verification and cryptographic hashing.",
    date: "Mar 2025 - Apr 2025",
    tags: ["Blockchain", "Python", "Java"],
  },
  {
    title: "Software Engineer Fellow - Headstarter AI",
    description:
      "Developed AI-powered web applications using Next, React, and OpenAI, improving user engagement by leveraging dynamic UI components and intelligent state management, resulting in a more interactive user experience. Improved system performance by optimizing API calls, reducing latency, and implementing server-side rendering, while ensuring seamless database management for structured data storage. Engineered API systems to streamline OpenAI model interactions while implementing scalable back-end architectures with Firebase and Supabase to optimize real-time data handling and authentication.",
    date: "July 2024 - Sept 2024",
    tags: ["Next.js", "React", "OpenAI", "Firebase", "Supabase", "TypeScript"],
  },
  {
    title: "Frontend Developer Intern - The Circle Labs",
    description:
      "Designed and developed an engaging and informative website highlighting the organization’s mission and impact. Delivered a seamless and high-quality UI/UX experience, receiving positive feedback for its functionality. Developed the back-end functionality of the website using Node.js and Express.js and implemented MongoDB databases to ensure secure user authentication and data integrity.",
    date: "May 2024 - July 2024",
    tags: ["React", "Node.js", "TypeScript", "MongoDB", "Express"],
  }
]

export default function Timeline() {
  return (
    <div className="relative w-full bg-[var(--color-midnight)] py-16 text-neutral-50">
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
                <div className="absolute left-[-22px] top-0 h-full w-[2px] bg-neutral-800" />
                )}
              {idx !== timelineData.length - 1 && (
                <div className="absolute left-[-22px] h-[25vh] w-[2px] bg-neutral-800" />
              )}

              <div className="relative rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-md">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {/* Timeline connector line */}
                    {idx !== timelineData.length - 1 && (
                    <div
                      className="absolute left-[-1.5rem] top-3 h-[calc(100%+4rem)] w-[2px] bg-neutral-700"
                      style={{
                      height: 'calc(100% + 4rem)', // Extends to the next item's position
                      }}
                    />
                    )}
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