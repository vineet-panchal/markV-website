import React from "react";
import Header from "../../header";
import ScorecardTile from "./scorecard-tile";
import GitHubLiveTile from "./github-live-tile";
import LanguagesTile from "./languages-tile";
import StacksTile from "./stacks-tile";
import OpenSourceTile from "./open-source-tile";
import GitHubTile from "@/components/home-page/bento/github-tile";

export default function GitHubStats() {
  return (
    <section className="relative flex w-full flex-col justify-center px-4 py-16 sm:px-8 md:py-20">
      <Header heading="My GitHub" subHeading="Commits don't" coloredText="lie." />

      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
        <ScorecardTile className="lg:col-span-2" />
        <GitHubLiveTile className="lg:row-span-2" />
        <LanguagesTile className="lg:col-span-2" />
        <GitHubTile className="lg:col-span-3" />
        <StacksTile className="lg:col-span-2" />
        <OpenSourceTile />
      </div>
    </section>
  );
}
