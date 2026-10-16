// Past versions of this portfolio, oldest first. Dates are each repo's first commit.
export type Era = {
  mark: string;
  date: string; // YYYY-MM-DD
  image: string;
  blurb: string;
  stack: string[];
  url?: string; // omitted when the site is no longer online
};

export const ERAS: Era[] = [
  {
    mark: "I",
    date: "2023-09-24",
    image: "/time-machine/mark-i.jpg",
    blurb: "Where it all started: a typewriter intro, outlined serif type and a photo from campus.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://vineet-panchal.github.io/markI-website/",
  },
  {
    mark: "II",
    date: "2023-09-26",
    image: "/time-machine/mark-ii.jpg",
    blurb: "A cleaner, responsive rework shipped two days later, with pill navigation and small-caps type.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://vineet-panchal.github.io/markII-website/",
  },
  {
    mark: "III",
    date: "2024-07-27",
    image: "/time-machine/mark-iii.jpg",
    blurb: "First React build, with a pixel-font hero glowing over a city map.",
    stack: ["React", "Vite", "React Router"],
    url: "https://mark-iii-website-en23.vercel.app",
  },
  {
    mark: "IV",
    date: "2024-10-07",
    image: "/time-machine/mark-iv.jpg",
    blurb: "Minimal two-column layout floating over an interactive particle network.",
    stack: ["React", "Vite", "Spline", "tsParticles"],
  },
];

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export type CircuitDate = { month: string; day: string; year: string };

export function toCircuitDate(input: string | Date): CircuitDate {
  const d = typeof input === "string" ? new Date(`${input}T00:00:00Z`) : input;
  const utc = typeof input === "string";
  return {
    month: MONTHS[utc ? d.getUTCMonth() : d.getMonth()],
    day: String(utc ? d.getUTCDate() : d.getDate()).padStart(2, "0"),
    year: String(utc ? d.getUTCFullYear() : d.getFullYear()),
  };
}
