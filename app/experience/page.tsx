import React from 'react';
import Navbar from '@/components/navbar';
import MainHeader from '@/components/main-header';
import WorkTimeline from '@/components/experience-page/workTimeline';

export default function Page() {
  return (
    <>
      <Navbar />
      <MainHeader />
      <WorkTimeline />
    </>
  )
};