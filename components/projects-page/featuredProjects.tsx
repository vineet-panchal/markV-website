"use client";

import React from 'react';
import Header from '../header';
import FeaturedProjectCard from './featuredProjectCard';

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type TimelineItem = {
  title: string
  description: string
  points?: string[]
  date: string
  tags?: string[]
  color: string
};

const timelineData: TimelineItem[] = [
  {
    title: "Software Developer Intern - Dayforce",
    description:
      "Joined the cloud developement team.",
    points: ["asdf", "asdf", "asdf"],
    date: "Sept 2025 - Present",
    tags: ["Java"],
    color: "bg-pink-500",
  },
  {
    title: "Full Stack Developer Intern - Codveda Technologies",
    description:
      "Built a full-stack MERN application with user authentication (JWT), secure role-based routing, and seamless database integration using MongoDB and Mongoose; deployed and optimized both frontend and backend. Implemented real-time communication using WebSockets and Socket.io, enabling live chat functionality and dynamic, event-driven updates across the user interface. Developed a GraphQL API with Express-GraphQL, creating custom queries and mutations with authentication, and optimized data fetching for scalable client-server interactions.",
    points: ["asdf", "asdf", "asdf"],
    date: "May 2025 - Aug 2025",
    tags: ["React", "Express", "MongoDB", "GraphQL", "WebSockets", "Node.js", "JWT", "Socket.io"],
    color: "bg-blue-500",
  },
  {
    title: "Software Engineer - Summer Of Bitcoin",
    description:
      "Solved blockchain coding challenges in multiple programming languages. Learned about transaction verification and cryptographic hashing.",
    points: ["asdf", "asdf", "asdf"],
    date: "Mar 2025 - Apr 2025",
    tags: ["Blockchain", "Python", "Java"],
    color: "bg-green-500",
  },
  {
    title: "Software Engineer Fellow - Headstarter AI",
    description:
      "Developed AI-powered web applications using Next, React, and OpenAI, improving user engagement by leveraging dynamic UI components and intelligent state management, resulting in a more interactive user experience. Improved system performance by optimizing API calls, reducing latency, and implementing server-side rendering, while ensuring seamless database management for structured data storage. Engineered API systems to streamline OpenAI model interactions while implementing scalable back-end architectures with Firebase and Supabase to optimize real-time data handling and authentication.",
    points: ["asdf", "asdf", "asdf"],
    date: "July 2024 - Sept 2024",
    tags: ["Next.js", "React", "OpenAI", "Firebase", "Supabase", "TypeScript"],
    color: "bg-yellow-500",
  },
  {
    title: "Frontend Developer Intern - The Circle Labs",
    description:
      "Designed and developed an engaging and informative website highlighting the organization’s mission and impact. Delivered a seamless and high-quality UI/UX experience, receiving positive feedback for its functionality. Developed the back-end functionality of the website using Node.js and Express.js and implemented MongoDB databases to ensure secure user authentication and data integrity.",
    points: ["asdf", "asdf", "asdf"],
    date: "May 2024 - July 2024",
    tags: ["React", "Node.js", "TypeScript", "MongoDB", "Express"],
    color: "bg-purple-500",
  }
];

export default function FeaturedProjects() {
  return (
    <>
      <div className="bg-[var(--color-midnight)] text-white py-5">
        <Header heading="My Featured Projects" subHeading="Highlights from the" coloredText="lab." />


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
                      <div className="relative col-span-7 ">

                        <div className="relative rounded-xl h-[100vh] border border-neutral-800 bg-neutral-900 p-6 shadow-md">
                          asdf        
                        </div>
                      </div>



                      {/* Right side - Content */}
                      <div className="relative col-span-5">
                        <div className="sticky top-24">
                          <span className="text-sm font-medium text-neutral-400">

                            <div className="relative col-span-3 space-y-6">
                              {/* Title with dash */}
                              <div className="flex items-center gap-3">
                                <span className={`h-1 w-6 rounded-full ${item.color}`} />
                                <h2 className="text-xl font-bold">Next Ventures</h2>
                              </div>

                              <p className="text-sm text-neutral-400">
                                {item.description}
                              </p>

                              <ul className="space-y-3">
                                {item.points?.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <span className={`mt-2 h-2 w-2 rounded-full ${item.color}`} />
                                      <span>{point}</span>
                                    </li>
                                ))}
                              </ul>

                              {/* Example stack badges */}
                              <div className="mt-4 flex flex-wrap gap-2">
                                {item.tags?.map((tag, i) => (
                                  <Badge className="bg-neutral-800 text-neutral-200">{tag}</Badge>
                                ))}
                              </div>
                            </div>


                          </span>
                        </div>
                      </div>
          
                    </motion.div>
                  ))}
                </div>
              </div>



      </div>
    </>
  );
};