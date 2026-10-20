"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Header from '../header';
import FeaturedProjectDisplay from './featuredProjectDisplay';
import SkillChip from '@/components/skill-chip';
import { projects } from '@/lib/projects';

export default function FeaturedProjects() {
  return (
    <div className="bg-[var(--color-midnight)] py-5 text-white">
      <Header heading="My Featured Projects" subHeading="Highlights from the" coloredText="lab." />
      <div className="relative w-full bg-[var(--color-midnight)] py-16 text-neutral-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 sm:px-6">
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-12"
            >
              {/* Left side - project showcase */}
              <Link href={`/projects/${project.slug}`} className="relative block lg:col-span-7" aria-label={`Open ${project.title}`}>
                <FeaturedProjectDisplay
                  bgColor={project.color}
                  displayImg={project.image}
                  header={project.header}
                  title={project.title}
                />
              </Link>

              {/* Right side - sticky information */}
              <div className="relative lg:col-span-5">
                <div className="flex flex-col gap-5 lg:sticky lg:top-24">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-1 w-6 rounded-full" style={{ backgroundColor: project.accent }} />
                      <h2 className="font-(family-name:--font-inter-tight) text-2xl font-bold tracking-tight">{project.title}</h2>
                    </div>
                    <p className="mt-2 font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">
                      {"// "}
                      {project.year} · {project.context.toLowerCase()}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-400">{project.description}</p>

                  <ul className="space-y-3">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-300">
                        <span
                          className="mt-[0.55rem] size-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: project.accent, boxShadow: `0 0 8px ${project.accent}` }}
                          aria-hidden
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                    {project.skills.map((skill) => (
                      <SkillChip key={skill} skill={skill} />
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] py-1.5 pl-5 pr-1.5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.14]"
                    >
                      View project
                      <span className="flex size-8 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="size-4" />
                      </span>
                    </Link>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        title="Source code"
                        className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1]"
                      >
                        <FaGithub className="size-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live site`}
                        title="Live site"
                        className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1]"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
