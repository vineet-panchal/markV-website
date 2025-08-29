import React from 'react';
import Header from '../header';
import Journey from './journey';

export default function CodingJourney() {
  return (
    <>
      <div className="bg-[var(--color-midnight)]">
        <Header heading="My Coding Journey" subHeading="How it all" coloredText="started." />
        Coding Journey
        <Journey />
      </div>
    </>
  )
}