import React from 'react';
import Navbar from '@/components/navbar';
import AboutMe from '@/components/about-page/aboutme';

export default function Page() {
  return (
    <>
      <div className="bg-[var(--color-midnight)]">
        <Navbar />
        <AboutMe />
        About Page
      </div>
    </>
  )
};