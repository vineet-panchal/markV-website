import { ArcTimeline, ArcTimelineItem } from "@/components/magicui/arc-timeline";
import {
  RocketIcon,
  CubeIcon,
  LockClosedIcon,
  GlobeIcon,
  GearIcon,
  LightningBoltIcon,
  StarIcon,
  MagicWandIcon,
  CodeIcon,
  IdCardIcon,
  BarChartIcon,
  TargetIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

export default function Journey() {
  return (
    <ArcTimeline
      // className={cn(
      //   "[--step-line-active-color:#888888] dark:[--step-line-active-color:#9780ff]",
      //   "[--step-line-inactive-color:#b1b1b1] dark:[--step-line-inactive-color:#737373]",
      //   "[--placeholder-line-color:#a1a1a1] dark:[--placeholder-line-color:#737373]",
      //   "[--icon-active-color:#555555] dark:[--icon-active-color:#d4d4d4]",
      //   "[--icon-inactive-color:#a3a3a3] dark:[--icon-inactive-color:#a3a3a3]",
      //   "[--time-active-color:#555555] dark:[--time-active-color:#d4d4d4]",
      //   "[--time-inactive-color:#a3a3a3] dark:[--time-inactive-color:#a3a3a3]",
      //   "[--description-color:#555555] dark:[--description-color:#d4d4d4]"
      // )}
      data={TIMELINE}
      defaultActiveStep={{ time: "2026", stepIndex: 5 }}
      arcConfig={{
        circleWidth: 4500,
        angleBetweenMinorSteps: 0.4,
        lineCountFillBetweenSteps: 8,
        boundaryPlaceholderLinesCount: 50,
      }}
    />
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "2018",
    steps: [
      {
        icon: <GlobeIcon width={20} height={20} />,
        content: 
          "Wrote my first program to guide a robot through a path with obstacles."
      },
    ],
  },
  {
    time: "2019",
    steps: [
      {
        icon: <CubeIcon width={20} height={20} />,
        content: 
          "Created my first game using Scratch."
      },
    ],
  },
  {
    time: "2020",
    steps: [
      {
        icon: <RocketIcon width={20} height={20} />,
        content:
          "Wrote my first few lines of code and built a simple website in HTML/CSS.",
      },
    ],
  },
  {
    time: "2021",
    steps: [
      {
        icon: <CubeIcon width={20} height={20} />,
        content: 
          "Started learning Python and drew drawings with Turtle graphics.",
      },
      {
        icon: <LockClosedIcon width={20} height={20} />,
        content: 
          "Created my first personal website using HTML/CSS."
      }
    ]
  },
  {
    time: "2022",
    steps: [
      {
        icon: <GlobeIcon width={20} height={20} />,
        content: 
          "Enrolled in Intro to Computer Science course in highschool and learned Java.",
      },
      {
        icon: <GearIcon width={20} height={20} />,
        content: 
          "Built a text-based Poker game in Java.",
      },
      {
        icon: <LightningBoltIcon width={20} height={20} />,
        content: 
          "Built a website for my school using HTML/CSS/JavaScript and hosted it on GitHub Pages.",
      }
    ]
  },


  {
    time: "2023",
    steps: [
      {
        icon: <LockClosedIcon width={20} height={20} />,
        content: "Enrolled in Intro to Computer Science II and updated my Poker game with a GUI using JavaFX and added more complexion.",
      },
      {
        icon: <GlobeIcon width={20} height={20} />,
        content:
          "Built my second personal website using HTML/CSS/JavaScript and hosted it on GitHub Pages.",
      },
      {
        icon: <GearIcon width={20} height={20} />,
        content:
          "Started my undergraduate studies in Computer Science at Toronto Metropolitan University.",
      },
      {
        icon: <LightningBoltIcon width={20} height={20} />,
        content:
          "Studied Python, computer system design, and discrete math in semester 1. Built a Sudoku solver in Python.",
      },
      {
        icon: <CubeIcon width={20} height={20} />,
        content:
          "Created a time management web app called TimeWise using React. Also developed a Minesweeper game in HTML/CSS/JS and a web app for browsing movies called MoviesNet using React. Created an A-Star Pathfinding Algorithm Visualizer in Pygame.",
      }
    ],
  },
  {
    time: "2024",
    steps: [
      {
        icon: <RocketIcon width={20} height={20} />,
        content:
          "Studied Java, computer architecture, calculus in computation, linear algebra, data structures, C, C++, and Unix in my undergrad.",
      },
      {
        icon: <GlobeIcon width={20} height={20} />,
        content:
          "Got my first internship as a Frontend Developer Intern at the CIRCLE lab, where I designed and built the organization’s website.",
      },
      {
        icon: <MagicWandIcon width={20} height={20} />,
        content:
          "Joined Headstarter AI as a Software Developer Fellow and developed AI-powered web applications, including Fashion Disaster Avoider, Rate My Professor, AI Wingman, and Teach For Cambodia.",
      }
    ],
  },
  {
    time: "2025",
    steps: [
      {
        icon: <StarIcon width={20} height={20} />,
        content:
          "Studied software engineering, discrete structures, Rust, Haskell, Elixir, Smalltalk, operating systems, probability and stats in R, artificial intelligence, and machine learning in my undergrad studies.",
      },
      {
        icon: <IdCardIcon width={20} height={20} />,
        content:
          "Earned the freeCodeCamp Front-End Development Libraries certification, covering React, Redux, Bootstrap, Sass, and jQuery.",
      },
      {
        icon: <LockClosedIcon width={20} height={20} />,
        content:
          "Joined Summer of Bitcoin as a Software Engineer and solved blockchain coding challenges in multiple languages, learning about transaction verification and cryptographic hashing.",
      },
      {
        icon: <ReaderIcon width={20} height={20} />,
        content:
          "Earned IBM SkillsBuild's Cloud Computing Fundamentals credential, covering cloud service models, virtualization, containers, and cloud security.",
      },
      {
        icon: <LightningBoltIcon width={20} height={20} />,
        content:
          "Joined Codveda Technologies as a Full-Stack Developer Intern and built three projects: an authenticated goal-tracking MERN app, a real-time group chat with Socket.IO, and a GraphQL API with persistent data storage.",
      },
      {
        icon: <BarChartIcon width={20} height={20} />,
        content:
          "Joined the Performance Engineering team at Dayforce as a Software Developer Intern, building performance analytics dashboards in C#, .NET, React, TypeScript, Azure, and SQL Server, and integrating Azure OpenAI to auto-summarize release results.",
      },
    ],
  },
  {
    time: "2026",
    steps: [
      {
        icon: <IdCardIcon width={20} height={20} />,
        content:
          "Earned HackerRank's Frontend Developer (React) and Software Engineer Intern certifications.",
      },
      {
        icon: <GlobeIcon width={20} height={20} />,
        content:
          "Built Lune, a real-time 3D satellite tracking platform with Next.js and Three.js, backed by a Spring Boot service and a FastAPI microservice that clusters satellites with scikit-learn.",
      },
      {
        icon: <CodeIcon width={20} height={20} />,
        content:
          "Built PaperStack, a paper trading platform with a Go/Gin and PostgreSQL backend, JWT auth, and live WebSocket price feeds.",
      },
      {
        icon: <LockClosedIcon width={20} height={20} />,
        content:
          "Returned to Dayforce for a second term on Application Development's FedRAMP SecBug Tiger Team, remediating security vulnerabilities like CSRF and OWASP Top 10 findings across .NET applications.",
      },
      {
        icon: <GearIcon width={20} height={20} />,
        content:
          "Completed JPMorganChase's Software Engineering Job Simulation on Forage, building a Spring Boot transaction service with Kafka, Spring Data JPA, and a REST balance API.",
      },
      {
        icon: <TargetIcon width={20} height={20} />,
        content:
          "Started as a Machine Learning Researcher at Algoverse.",
      },
    ],
  },
];