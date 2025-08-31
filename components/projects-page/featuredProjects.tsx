import React from 'react';
import Header from '../header';

export default function FeaturedProjects() {
  return (
    <>
      <div className="bg-[var(--color-midnight)] h-[30vh] text-white py-5">
        <Header heading="My Featured Projects" subHeading="Highlights from the" coloredText="lab." />
      </div>
    </>
  );
};