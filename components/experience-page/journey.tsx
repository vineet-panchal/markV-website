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
      defaultActiveStep={{ time: "2025 Q2", stepIndex: 0 }}
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
    time: "2020",
    steps: [
      {
        icon: <RocketIcon width={20} height={20} />,
        content:
          "Wrote my first few lines of code and built a simple website in HTML/CSS.",
      },
      // {
      //   icon: <CubeIcon width={20} height={20} />,
      //   content:
      //     "Launched first AI-powered mobile app for personalized recommendations.",
      // },
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
          "Got my first internship at a place called The Circle Labs, where I developed a website for the organization.",
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
        icon: <LightningBoltIcon width={20} height={20} />,
        content: "Joined Codveda Technologies as a Full-Stack Developer Intern and developed various applications using GraphQL, Express-GraphQL, JWT, MongoDB, Mongoose, Web Sockets, Socket.io, React, Express, Node.js, Next.js. Including a full-stack MERN application.",
      },
      {
        icon: <RocketIcon width={20} height={20} />,
        content:
          "Joined the Performance Engineering team at Dayforce as a Software Developer Intern. Working on the development of performance tracking platforms in C#, ASP.NET, React, SQL Server, and TypeScript.",
      },
    ],
  },
  {
    time: "2025 Q2",
    steps: [
      {
        icon: <GearIcon width={20} height={20} />,
        content: "Rebranded company with new logo and visual identity.",
      },
      {
        icon: <StarIcon width={20} height={20} />,
        content:
          "Launched AI-driven content creation tool for marketing teams.",
      },
      {
        icon: <CubeIcon width={20} height={20} />,
        content:
          "Acquired a competitor in the AI space to strengthen market position.",
      },
    ],
  },
  {
    time: "2025 Q3",
    steps: [
      {
        icon: <CubeIcon width={20} height={20} />,
        content: "Launched self-driving AI platform for industrial automation.",
      },
      {
        icon: <MagicWandIcon width={20} height={20} />,
        content: "Added virtual reality integration to the product suite.",
      },
    ],
  },
  {
    time: "2025 Q4",
    steps: [
      {
        icon: <StarIcon width={20} height={20} />,
        content:
          "Introduced AI-driven analytics dashboard for enterprise clients.",
      },
      {
        icon: <LightningBoltIcon width={20} height={20} />,
        content:
          "Launched international expansion into Asian and European markets.",
      },
      {
        icon: <RocketIcon width={20} height={20} />,
        content: "Hosted first global conference showcasing AI innovations.",
      },
    ],
  },
  {
    time: "2026 Q1",
    steps: [
      {
        icon: <GearIcon width={20} height={20} />,
        content:
          "Released API for developers to integrate AI into their applications.",
      },
      {
        icon: <StarIcon width={20} height={20} />,
        content:
          "Launched new AI-powered voice assistant with multi-language support.",
      },
      {
        icon: <GlobeIcon width={20} height={20} />,
        content:
          "Partnered with government agencies for AI-driven policy making.",
      },
    ],
  },
  {
    time: "2026 Q2",
    steps: [
      {
        icon: <GearIcon width={20} height={20} />,
        content: "Unveiled new AI-powered robotics platform for manufacturing.",
      },
      {
        icon: <MagicWandIcon width={20} height={20} />,
        content:
          "Introduced machine learning models for sustainable energy solutions.",
      },
    ],
  },
];