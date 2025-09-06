"use client";

import React from 'react';
import Header from '../header';
import FeaturedProjectCard from './featuredProjectCard';

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type Project = {
  title: string
  description: string
  points?: string[]
  tags?: string[]
  color: string
};

const projectsData: Project[] = [
  {
    title: "Teach For Cambodia",
    description:
      "Teaching platform for Teach For Cambodia, a startup non-profit, that works to increase educational opportunities for children in the country.",
    points: [
      "Developed a teaching platform for Teach For Cambodia, improving remote education accessibility and enabling seamless communication between students, instructors, & admin with Supabase and Google Authentication.", 
      "Implemented a course management system with real-time updates, enabling educators to seamlessly create, edit, and organize lessons for students. Added dynamic search for easy course navigation.", 
      
    ],
    tags: ["Next.js", "React", "Supabase", "TypeScript", "Material UI", "Vercel"],
    color: "bg-pink-500",
  },
  {
    title: "SmartDeck",
    description:
      "An AI-powered tool that generates flashcards on text input.",
    points: [
      "Created a web app that generates flashcards for educational use, enhancing learning experiences through personalized AI-driven content, using OpenAI’s API.", 
      "Integrated Clerk for user authentication, Firebase for data storage, and Material UI for enhanced user experience.", 
  
    ],
    tags: ["React", "Next.js", "Firebase", "OpenAI", "Material UI", "Clerk"],
    color: "bg-blue-500",
  },
  {
    title: "Fashion Disaster Avoider",
    description:
      "Fashion Disaster Avoider, a platform that is a brutally honest fashion-savvy friend who helps you avoid style mishaps.",
    points: [
      "Developed an AI-powered chatbot that provides real-time, fashion advice, helping users refine their style choices.", 
      "Integrated OpenAI’s API to analyze outfit combinations and trends, delivering instant, personalized recommendations."
    
    ],
    tags: ["Next.js", "React", "Material UI", "OpenAI", "TypeScript"],
    color: "bg-green-500",
  },
  {
    title: "Rate My Professor",
    description:
      "A chatbot that you can communicate with to rate your professors.",
    points: [
      "Built a comprehensive AI-powered assistant using Retrieval Augmented Generation (RAG), enabling students to receive real-time, detailed feedback on professors and courses by integrating external knowledge bases.", 
      "Streamlined user experience by integrating a vector database with a large language model for accurate responses."
    ],
    tags: ["Next.js", "React", "Pincone", "Material UI"],
    color: "bg-yellow-500",
  },
  {
    title: "A-Star Pathfinding Visualizer",
    description:
      "An introduction to data structures and algorithms in python. Created a visualizer for the A-Star algorithm using pygame.",
    points: ["asdf", "asdf", "asdf"],
    tags: ["Python", "Pygame"],
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
                  {projectsData.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15 }}
                      className="grid grid-cols-12 gap-6"
                    >
                      {/* Left side - Project Showcase */}
                      <div className="relative col-span-7 ">

                        <div className="relative rounded-xl h-[100vh] border border-neutral-800 bg-neutral-900 p-6 shadow-md">
                          asdf        
                        </div>
                      </div>



                      {/* Right side - Sticky Information */}
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
                                      <span className={`h-2 w-2 m-2  ${item.color}`} />
                                      <span>{point}</span>
                                    </li>
                                ))}
                              </ul>

                              {/* Example stack badges */}
                              <div className="mt-4 flex flex-wrap gap-2">
                                {item.tags?.map((tag, i) => (
                                  <div key={i} className="mt-4 flex flex-wrap gap-2">
                                    <Badge className="bg-neutral-800 text-neutral-200">{tag}</Badge>
                                  </div>
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