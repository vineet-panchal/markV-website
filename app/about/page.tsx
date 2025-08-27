import React from 'react';
import Navbar from '@/components/navbar';
import AboutMe from '@/components/about-page/aboutme';
import Skills from '@/components/about-page/skills';
import Certifications from '@/components/about-page/certifications';

export default function Page() {
  return (
    <>
      <div className="bg-[var(--color-midnight)]">
        <Navbar />
        <AboutMe />
        <Skills />
        <Certifications />
      </div>
    </>
  )
};