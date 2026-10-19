import * as React from "react";
import "@/css/homegrid.css";

import NowTile from "./bento/now-tile";
import GitHubTile from "./bento/github-tile";
import LabTile from "./bento/lab-tile";
import StackTile from "./bento/stack-tile";
import GlobeTile from "./bento/globe-tile";
import BeyondTile from "./bento/beyond-tile";
import ConnectTile from "./bento/connect-tile";

export default function HomeGrid() {
  return (
    <section className="relative mt-10 flex w-full justify-center px-4">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3">
          <NowTile />
          <GitHubTile className="md:col-span-2" />
          <LabTile className="md:col-span-2" />
          <StackTile className="md:row-span-2" />
          <GlobeTile className="min-h-[20rem]" />
          <BeyondTile />
        </div>
        <ConnectTile className="mt-4" />
      </div>
    </section>
  );
}
