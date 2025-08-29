import React from 'react';
import Navbar from '@/components/navbar';
import MainHeader from '@/components/main-header';
import WorkTimeline from '@/components/experience-page/workTimeline';

export default function Page() {
  return (
    <>
      <div className="bg-[var(--color-midnight)]">
        <Navbar />
        <MainHeader />
        <WorkTimeline />
      </div>
    </>
  )
};