import React from 'react';
import Navbar from '@/components/navbar';
import FeaturedProjects from '@/components/projects-page/featuredProjects';
import ProjectsList from '@/components/projects-page/projectsList';
import NextVentures from '@/components/projects-page/nextVentures';

export default function Page() {
  return (
    <>
      <div className="bg-[var(--color-midnight)]">
        <Navbar />
        <FeaturedProjects />
        <ProjectsList />
        <NextVentures />
      </div>
    </>
  )
};