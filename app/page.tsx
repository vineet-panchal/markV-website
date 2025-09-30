"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Introduction from "@/components/home-page/introduction";
import HomeGrid from "@/components/home-page/homegrid";
import TimeMachine from "@/components/home-page/timemachine";

export default function Home() {
  return (
    <>
      <div className="bg-[var(--color-midnight)] m-0 p-0">
        <Navbar />
        <Introduction />
        <HomeGrid />
        <TimeMachine />
      </div>
    </>
  );
}
