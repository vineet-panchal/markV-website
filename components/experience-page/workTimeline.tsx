"use client";

import Header from "../header";
import Timeline from "./timeline";

export default function WorkTimeline() {
  return (
    <div className="py-10 bg-[var(--color-midnight)]">
      <Header heading="My Work Timeline" subHeading="Chapters of my" coloredText="career." />
      <Timeline />
    </div>
  )
}
