import React from 'react';
import Navbar from '@/components/navbar';
import MainHeader from '@/components/main-header';
import WorkTimeline from '@/components/experience-page/workTimeline';
import CodingJourney from '@/components/experience-page/codingJourney';

export default function Page() {
  return (
    <>
      <div className="bg-[var(--color-midnight)]">
        <Navbar />
        <MainHeader />
        <WorkTimeline />
        <CodingJourney />
      </div>
    </>
  )
};