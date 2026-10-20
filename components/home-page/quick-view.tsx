"use client";

import React from "react";
import { ArrowRight, ChevronsUpDown } from "lucide-react";
import AboutMe from "@/components/about-page/aboutme";
import Skills from "@/components/about-page/skills";
import Certifications from "@/components/about-page/certifications";
import WorkTimeline from "@/components/experience-page/workTimeline";
import FeaturedProjects from "@/components/projects-page/featuredProjects";
import { useViewMode } from "@/components/view-mode";

// The resume-style one-pager shown on the home page by default. Each section has an
// id so the navbar can scroll to it while quick view is on.
export default function QuickView() {
  const { setMode } = useViewMode();

  const showFullSite = () => {
    setMode("full");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="quick-only">
      <section id="about" className="scroll-mt-20">
        <AboutMe />
      </section>
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>
      <section id="experience" className="scroll-mt-20">
        <WorkTimeline />
      </section>
      <section id="projects" className="scroll-mt-20">
        <FeaturedProjects limit={4} />
      </section>
      <section id="certifications" className="scroll-mt-20">
        <Certifications />
      </section>

      <section className="px-4 pb-8 pt-4 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[var(--surface-1)] to-[var(--surface-2)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-12">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[#8c1eff]/15 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/4 size-80 rounded-full bg-[#ff2975]/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-(family-name:--font-geist-mono) text-xs tracking-widest text-zinc-500">{"// quick view"}</p>
              <h2 className="mt-3 font-(family-name:--font-inter-tight) text-4xl font-bold leading-none tracking-tighter text-white sm:text-5xl">
                That&apos;s the short{" "}
                <span className="font-(family-name:--font-dm-serif-display) font-normal italic tracking-normal text-[#b98cff]">version.</span>
              </h2>
              <p className="mt-3 max-w-lg text-zinc-400">
                There&apos;s a lot more: my GitHub stats, a time machine through every version of this site, every project in detail, and what I&apos;m building next.
              </p>
            </div>
            <button
              type="button"
              onClick={showFullSite}
              className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] py-2 pl-5 pr-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.14]"
            >
              <ChevronsUpDown className="size-4" />
              Explore the full site
              <span className="flex size-8 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="size-4" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
