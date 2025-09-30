import React from 'react';
import Navbar from '@/components/navbar';
import MainHeader from '@/components/main-header';
import WorkTimeline from '@/components/experience-page/workTimeline';
import CodingJourney from '@/components/experience-page/codingJourney';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vineet Panchal - Experience",
  description: "My personal portfolio website.",
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--color-midnight)]">
        <Navbar />
        <MainHeader
          subheading="What shaped my journey so far?" 
          heading="My" 
          coloredText="Experience" 
        />
        <WorkTimeline />
        <CodingJourney />
      </div>
    </>
  )
};