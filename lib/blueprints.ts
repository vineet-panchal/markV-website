import type { SkillName } from "@/components/skill-icons";

export const PHASES = ["Idea", "Spec", "Prototype", "Build"] as const;

export type Blueprint = {
  code: string;
  title: string;
  tagline: string;
  description: string;
  goals: string[];
  stack: SkillName[];
  // Index into PHASES
  phase: number;
  // Which line drawing to show on the sheet
  sketch: "orbit" | "regression" | "patch" | "papers";
};

// Planned projects. Drafted as ideas that grow out of my current work, so swap freely.
export const blueprints: Blueprint[] = [
  {
    code: "BP-01",
    title: "Lune: Mission Control",
    tagline: "From tracking orbits to planning them.",
    description:
      "The next chapter of Lune: plan launches and interplanetary transfers, then watch the trajectory play out on the same 3D globe.",
    goals: ["Launch trajectory planner", "Earth-to-Mars transfer windows", "Mission timelines with ephemeris data"],
    stack: ["Next.js", "Three.js", "Spring Boot", "Java", "FastAPI", "NumPy"],
    phase: 1,
    sketch: "orbit",
  },
  {
    code: "BP-02",
    title: "Regress",
    tagline: "Catch the slowdown before your users do.",
    description:
      "A performance regression tracker for any repo. CI runs push benchmark results, Regress spots slowdowns between releases, and an LLM writes the summary.",
    goals: ["GitHub Actions benchmark uploads", "Release-over-release regression alerts", "AI-written release summaries"],
    stack: ["C#", ".NET", "React", "TypeScript", "PostgreSQL", "OpenAI"],
    phase: 0,
    sketch: "regression",
  },
  {
    code: "BP-03",
    title: "Patchwork",
    tagline: "Security findings, explained and fixed.",
    description:
      "A GitHub app that reviews pull requests for vulnerable dependencies and OWASP Top 10 patterns, explains each finding in plain English, and suggests a fix.",
    goals: ["Pull request scanning", "Plain-English explanations", "Suggested patches as review comments"],
    stack: ["Go", "Gin", "PostgreSQL", "Docker", "OpenAI"],
    phase: 0,
    sketch: "patch",
  },
  {
    code: "BP-04",
    title: "Margin",
    tagline: "Read papers with a research partner.",
    description:
      "A reading companion for ML research: ask questions across a library of papers and explore how they cite each other on an interactive graph.",
    goals: ["Retrieval over a personal paper library", "Answers with citations", "Interactive citation graph"],
    stack: ["Python", "FastAPI", "Pinecone", "OpenAI", "Next.js", "TypeScript"],
    phase: 1,
    sketch: "papers",
  },
];
