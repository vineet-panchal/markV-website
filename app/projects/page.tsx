import React from 'react';
import Navbar from '@/components/navbar';
import MainHeader from '@/components/main-header';
import FeaturedProjects from '@/components/projects-page/featuredProjects';
import ProjectsList from '@/components/projects-page/projectsList';
import NextVentures from '@/components/projects-page/nextVentures';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vineet Panchal - Projects",
  description: "My personal portfolio website.",
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--color-midnight)]">
        <Navbar />
        <MainHeader 
          subheading="What have I been building?"
          heading="My"
          coloredText="Projects"
        />
        <FeaturedProjects />
        <ProjectsList />
        <NextVentures />
      </div>
    </>
  )
};