// Snapshot of the GitRoll scan of github.com/vineet-panchal. GitRoll has no
// public API, so re-copy these numbers after a re-scan.
export const GITROLL_URL = "https://gitroll.io/profile/u4fAgykOTKnXyLh5Fyohnw0nYGBg2";
export const SCANNED = "Apr 26, 2026";

export const SCORE = {
  grade: "C",
  rating: 4.9,
  percentile: "Above 10% of people",
  level: "Intern-level Full-Stack Developer",
  badges: ["Top 89% in CA", "Top 80% at TMU"],
  summary: "Writes secure and clean code, with room to grow in open-source contribution and reach.",
};

// CURISM scores, each out of 5
export const CURISM = [
  { axis: "Reliability", value: 2.87 },
  { axis: "Security", value: 4.93 },
  { axis: "Maintainability", value: 4.65 },
  { axis: "Uniqueness", value: 3.8 },
  { axis: "Contribution", value: 0 },
  { axis: "Influence", value: 0.32 },
];

// Bytes of code per language across scanned repos, with GitHub's language colours
export const LANGUAGES = [
  { name: "Jupyter Notebook", bytes: 2682760, color: "#DA5B0B" },
  { name: "Python", bytes: 1419011, color: "#3572A5" },
  { name: "TypeScript", bytes: 511081, color: "#3178C6" },
  { name: "JavaScript", bytes: 249443, color: "#F1E05A" },
  { name: "Common Lisp", bytes: 154379, color: "#3FB68B" },
  { name: "CSS", bytes: 119038, color: "#663399" },
  { name: "Java", bytes: 88068, color: "#B07219" },
  { name: "C", bytes: 38756, color: "#A8B9CC" },
  { name: "Haskell", bytes: 38093, color: "#5E5086" },
  { name: "Assembly", bytes: 27230, color: "#6E4C13" },
  { name: "Rust", bytes: 24592, color: "#DEA584" },
  { name: "Shell", bytes: 16379, color: "#89E051" },
  { name: "Elixir", bytes: 12610, color: "#6E4A7E" },
  { name: "MDX", bytes: 12306, color: "#FCB32C" },
  { name: "HTML", bytes: 6666, color: "#E34C26" },
  { name: "Smalltalk", bytes: 4848, color: "#596706" },
  { name: "C#", bytes: 103, color: "#178600" },
];

// Share of detected skills per area, each skill weighted by how many repos use it
export const STACKS = [
  {
    area: "Frontend",
    share: 40.74,
    color: "#ff2975",
    skills: ["React", "Next.js", "UI Development", "RESTful", "Jest", "Axios", "Animation", "Three.js", "Tailwind CSS", "Redux"],
  },
  {
    area: "Machine Learning",
    share: 28.89,
    color: "#ffd319",
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "Deep Learning", "Feature Engineering", "Time Series", "NLP", "NumPy", "Matplotlib"],
  },
  {
    area: "Backend",
    share: 27.41,
    color: "#8c1eff",
    skills: ["Next.js", "RESTful", "Express", "API Development", "Microservices", "Scaling", "JWT", "MongoDB"],
  },
  { area: "Mobile", share: 1.48, color: "#22d3ee", skills: ["Cross-platform Apps"] },
  { area: "DevOps", share: 1.48, color: "#34d399", skills: ["Version Control", "GitHub"] },
];

// Repos GitRoll counts as open-source contributions, with their star counts
export const CONTRIBUTIONS = [
  { repo: "slnnhn/tfc-courses", stars: 3 },
  { repo: "vineet-panchal/cp24-clone", stars: 1 },
  { repo: "A-n-i-e/fashion-disaster-avoider", stars: 0 },
  { repo: "fadeddarts/arc-assembly", stars: 0 },
];
