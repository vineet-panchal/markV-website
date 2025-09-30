import React from 'react';
import Navbar from '@/components/navbar';
import AboutMe from '@/components/about-page/aboutme';
import Skills from '@/components/about-page/skills';
import Certifications from '@/components/about-page/certifications';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vineet Panchal - About",
  description: "My personal portfolio website.",
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--color-midnight)] m-0 p-0 overflow-hidden">
        <Navbar />
        <AboutMe />
        <Skills />
        <Certifications />
      </div>
    </>
  )
};