import React from 'react';
import Navbar from '@/components/navbar';
import MainHeader from '@/components/main-header';
import FeaturedProjects from '@/components/projects-page/featuredProjects';
import ProjectsList from '@/components/projects-page/projectsList';
import NextVentures from '@/components/projects-page/nextVentures';

export default function Page() {
  return (
    <>
      <div className="bg-[var(--color-midnight)]">
        <Navbar />
        <MainHeader />
        <FeaturedProjects />
        <ProjectsList />
        <NextVentures />
      </div>
    </>
  )
};