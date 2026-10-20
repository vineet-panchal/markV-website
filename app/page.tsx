"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Introduction from "@/components/home-page/introduction";
import HomeGrid from "@/components/home-page/homegrid";
import TimeMachine from "@/components/home-page/timemachine";
import QuickView from "@/components/home-page/quick-view";
import Footer from "@/components/footer";
import { useViewMode } from "@/components/view-mode";

export default function Home() {
  const { mode } = useViewMode();

  return (
    <>
      <div className="bg-[var(--color-midnight)] m-0 p-0">
        <Navbar />
        <Introduction />
        {mode === "full" ? (
          <>
            <HomeGrid />
            <TimeMachine />
          </>
        ) : (
          <QuickView />
        )}
        <Footer />
      </div>
    </>
  );
}
