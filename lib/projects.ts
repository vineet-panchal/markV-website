import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bot,
  Brain,
  Clock,
  Compass,
  Database,
  Filter,
  GraduationCap,
  Layers,
  LineChart,
  ListChecks,
  Lock,
  MessageSquare,
  Orbit,
  Radio,
  Route,
  Search,
  Shirt,
  Sparkles,
  Trophy,
  Wallet,
  Zap,
} from "lucide-react";
import type { SkillName } from "@/components/skill-icons";

import LuneImg from "@/assets/featured-projects/lune.webp";
import TeachForCambodiaImg from "@/assets/featured-projects/tfc.png";
import SmartdeckImg from "@/assets/featured-projects/smartdeck.png";
import FashionDisasterAvoiderImg from "@/assets/featured-projects/fashion.png";
import RateMyProfessorImg from "@/assets/featured-projects/rate-my-professor.png";
import AStarPathfinderImg from "@/assets/featured-projects/astar.png";

export type Project = {
  slug: string;
  title: string;
  // Short line shown above the screenshot on the featured card
  header: string;
  description: string;
  points: string[];
  skills: SkillName[];
  // Tailwind background for the featured card, plus the same colour as hex for project pages
  color: string;
  accent: string;
  image?: StaticImageData;
  year: string;
  role: string;
  context: string;
  status: string;
  repo?: string;
  live?: string;
  stats: { value: string; label: string }[];
  overview: string[];
  features: { icon: LucideIcon; title: string; body: string }[];
  architecture: { layer: string; nodes: { name: string; detail: string; skill?: SkillName }[] }[];
  stack: { group: string; skills: SkillName[] }[];
  build: { title: string; body: string }[];
  challenges: { title: string; problem: string; solution: string }[];
};

export const projects: Project[] = [
  {
    slug: "lune",
    title: "Lune",
    header: "Every satellite, live, in your browser.",
    description:
      "A full-stack platform for real-time satellite tracking, orbital analysis and space mission visualization on an interactive 3D globe.",
    points: [
      "Built a real-time 3D satellite tracking platform in Next.js with client-side SGP4 orbital propagation via satellite.js, letting users track, filter, and click any satellite to visualize its live orbital path.",
      "Engineered a Spring Boot backend fetching TLE data from CelesTrak with API fallback, and a Python FastAPI microservice using scikit-learn (k-means, DBSCAN, Isolation Forest) to recolor satellites by orbital grouping.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Three.js", "Spring Boot", "Java", "FastAPI", "Python", "scikit-learn"],
    color: "bg-indigo-500",
    accent: "#6366F1",
    image: LuneImg,
    year: "2026",
    role: "Solo full-stack developer",
    context: "Personal project",
    status: "In active development",
    repo: "https://github.com/vineet-panchal/lune",
    stats: [
      { value: "3", label: "services: web, API, ML" },
      { value: "3", label: "ML models for orbital analysis" },
      { value: "3600×", label: "fastest time warp" },
      { value: "5", label: "views in the app" },
    ],
    overview: [
      "Lune turns raw orbital data into something you can explore. Two-Line Element sets for thousands of satellites, from the ISS and Hubble to Starlink, GPS and GLONASS, are pulled in, propagated with SGP4 and drawn live on a WebGL globe.",
      "Beyond tracking, Lune groups satellites by how they orbit. A separate machine learning service clusters the catalog by altitude, inclination and mean motion, and flags unusual orbits, so the globe can be recolored by what the data says rather than by a fixed label.",
    ],
    features: [
      { icon: Orbit, title: "Live orbital propagation", body: "SGP4 runs client-side with satellite.js, so every satellite's position updates in real time without a round trip to the server." },
      { icon: Search, title: "Search & filter", body: "Find any satellite by name, or filter by type and operator, from popular objects to whole constellations." },
      { icon: Route, title: "Click-to-trace orbits", body: "Click a satellite to draw its orbital path across the globe, with configurable trail lengths." },
      { icon: Clock, title: "Time controls", body: "Pause, scrub ±1 hour, or warp time from 1× up to 3600× to watch orbits play out." },
      { icon: Brain, title: "Orbital intelligence", body: "k-means and DBSCAN group satellites by orbit, and Isolation Forest highlights orbits that don't fit any pattern." },
      { icon: Layers, title: "Visual modes", body: "Recolor satellites by altitude band, from very low Earth orbit to beyond GEO, and switch globe styles and atmosphere." },
    ],
    architecture: [
      { layer: "Client", nodes: [
        { name: "Next.js app", detail: "Globe, panels and controls", skill: "Next.js" },
        { name: "Globe.gl + Three.js", detail: "WebGL globe and satellite points", skill: "Three.js" },
        { name: "satellite.js", detail: "SGP4 propagation in the browser", skill: "satellite.js" },
      ] },
      { layer: "Services", nodes: [
        { name: "Spring Boot API", detail: "TLE catalog, positions, launch planning", skill: "Spring Boot" },
        { name: "FastAPI service", detail: "k-means, DBSCAN, Isolation Forest", skill: "FastAPI" },
      ] },
      { layer: "Data", nodes: [
        { name: "CelesTrak", detail: "Constellation TLE groups" },
        { name: "TLE API", detail: "Real-time catalog with fallback" },
      ] },
    ],
    stack: [
      { group: "Frontend", skills: ["Next.js", "React", "TypeScript", "Three.js", "Globe.gl", "satellite.js", "Tailwind CSS"] },
      { group: "Backend", skills: ["Spring Boot", "Java", "REST APIs"] },
      { group: "Analytics", skills: ["FastAPI", "Python", "scikit-learn", "NumPy", "Pydantic"] },
    ],
    build: [
      { title: "Orbits on a globe", body: "Started by parsing TLE data and propagating positions with SGP4, then plotting them on a Globe.gl scene." },
      { title: "A real backend", body: "Moved catalog fetching into a Spring Boot API that pulls from CelesTrak with a fallback TLE source." },
      { title: "Making it explorable", body: "Added search, type and operator filters, orbit trails on click, and time controls for warping through the day." },
      { title: "Orbital intelligence", body: "Added a FastAPI microservice that clusters satellites with scikit-learn and recolors the globe by orbital grouping." },
      { title: "Mission control, next", body: "Launch trajectories and Earth-to-Mars planning are on the roadmap." },
    ],
    challenges: [
      { title: "Thousands of moving points", problem: "Propagating and redrawing every satellite each frame can bog down the browser.", solution: "Positions are propagated in the browser with satellite.js, so the server only serves TLE data and never has to compute live positions." },
      { title: "Unreliable data sources", problem: "Public TLE feeds rate-limit and occasionally go down.", solution: "The Spring Boot API falls back to a second TLE source and surfaces which source and how fresh the data is." },
      { title: "Turning ML output into visuals", problem: "Cluster labels mean nothing on their own.", solution: "Each cluster maps to a colour on the globe, so orbital groupings become visible at a glance." },
    ],
  },
  {
    slug: "midas",
    title: "Midas",
    header: "Every transaction, accounted for.",
    description:
      "A Spring Boot microservice for JPMorganChase's transaction pipeline, built in the JPMorganChase Software Engineering Job Simulation on Forage.",
    points: [
      "Built a Spring Boot microservice for JPMorganChase's transaction pipeline, integrating Kafka for message consumption, Spring Data JPA/H2 for persistence, and RestTemplate to process external incentive API responses.",
      "Exposed a REST balance-query endpoint via Spring controller, validated end-to-end with Maven test suites.",
    ],
    skills: ["Java", "Spring Boot", "Kafka", "Spring Data JPA", "H2", "Maven"],
    color: "bg-orange-500",
    accent: "#F97316",
    year: "2026",
    role: "Backend developer",
    context: "JPMorganChase × Forage job simulation",
    status: "Completed",
    repo: "https://github.com/vineet-panchal/mirage-transaction-processing-system",
    stats: [
      { value: "1", label: "Spring Boot microservice" },
      { value: "Kafka", label: "transaction stream" },
      { value: "H2", label: "embedded database" },
      { value: "REST", label: "balance query API" },
    ],
    overview: [
      "Midas is the core of a simulated transaction processing system. Transactions arrive on a Kafka topic, get validated against the users involved, and are recorded in a relational database.",
      "Each recorded transaction is also sent to an external incentive API, whose response adjusts the recipient's balance. A REST endpoint then lets other services query any user's up-to-date balance.",
    ],
    features: [
      { icon: Radio, title: "Kafka consumer", body: "Listens to a transaction topic and deserializes each message into a typed transaction." },
      { icon: ListChecks, title: "Validation", body: "Checks that sender and recipient exist and that the sender can cover the amount before anything is recorded." },
      { icon: Database, title: "Persistence", body: "Spring Data JPA entities store users and transactions in an embedded H2 database." },
      { icon: Sparkles, title: "Incentive API", body: "Calls an external incentive service with RestTemplate and applies the returned bonus to the recipient." },
      { icon: Wallet, title: "Balance endpoint", body: "A Spring controller exposes a REST endpoint that returns any user's current balance." },
      { icon: Activity, title: "Tested end-to-end", body: "Maven test suites drive transactions through the whole pipeline to verify balances." },
    ],
    architecture: [
      { layer: "Input", nodes: [{ name: "Kafka topic", detail: "Incoming transactions", skill: "Kafka" }] },
      { layer: "Midas core", nodes: [
        { name: "Transaction listener", detail: "Consume and validate", skill: "Spring Boot" },
        { name: "Balance controller", detail: "REST balance queries", skill: "REST APIs" },
      ] },
      { layer: "Downstream", nodes: [
        { name: "H2 database", detail: "Users and transactions via JPA", skill: "H2" },
        { name: "Incentive API", detail: "Bonus per transaction" },
      ] },
    ],
    stack: [
      { group: "Service", skills: ["Java", "Spring Boot", "REST APIs"] },
      { group: "Messaging & data", skills: ["Kafka", "Spring Data JPA", "H2"] },
      { group: "Build & test", skills: ["Maven"] },
    ],
    build: [
      { title: "Project setup", body: "Configured the Spring Boot project and its dependencies with Maven." },
      { title: "Kafka integration", body: "Added a Kafka listener that consumes and deserializes incoming transactions." },
      { title: "Persistence", body: "Modelled users and transactions with Spring Data JPA on an H2 database, recording only valid transactions." },
      { title: "Incentives", body: "Integrated the external incentive API with RestTemplate and applied bonuses to balances." },
      { title: "Balance API", body: "Exposed a REST balance-query endpoint and verified the whole flow with Maven tests." },
    ],
    challenges: [
      { title: "Keeping balances consistent", problem: "Invalid or partial transactions can corrupt balances.", solution: "Every transaction is validated against both users before it is saved, so only valid transfers ever touch a balance." },
      { title: "External calls in the pipeline", problem: "The incentive API sits in the middle of transaction processing.", solution: "Its response is mapped to a typed object and applied only after the transaction is recorded." },
    ],
  },
  {
    slug: "paperstack",
    title: "PaperStack",
    header: "Trade the market, risk nothing.",
    description:
      "A paper trading platform where you practice stock trading with $100K in virtual cash and real-time market data.",
    points: [
      "Built a paper trading platform for users to practice stock trading with JWT auth and live WebSocket price feeds.",
      "Engineered Go/Gin REST backend with PostgreSQL parameterized queries and routine background jobs.",
    ],
    skills: ["Go", "Gin", "PostgreSQL", "Next.js", "TypeScript", "JWT", "WebSockets"],
    color: "bg-teal-500",
    accent: "#14B8A6",
    year: "2026",
    role: "Full-stack developer",
    context: "Team project",
    status: "Completed",
    repo: "https://github.com/vineet-panchal/PaperStack",
    stats: [
      { value: "$100K", label: "virtual starting cash" },
      { value: "10", label: "core features" },
      { value: "Live", label: "WebSocket price feed" },
      { value: "0", label: "real money involved" },
    ],
    overview: [
      "PaperStack lets anyone practice trading without risking real money. Every account starts with $100K in virtual cash, real-time quotes stream in from Finnhub, and trades update the portfolio instantly.",
      "Around the core buy and sell flow sit the features that make practice stick: a watchlist, side-by-side stock comparison, portfolio charts, a diversification score, a leaderboard, and badges for milestones.",
    ],
    features: [
      { icon: Zap, title: "Real-time quotes", body: "Prices stream to the browser over WebSockets, so the portfolio moves with the market." },
      { icon: Wallet, title: "Buy & sell", body: "Trade with $100K in virtual cash, with every order recorded in a full transaction history." },
      { icon: LineChart, title: "Portfolio charts", body: "Track portfolio value over time and see how diversified your holdings are." },
      { icon: BarChart3, title: "Compare stocks", body: "Put stocks side by side, and keep favourites on a watchlist." },
      { icon: Trophy, title: "Leaderboard & badges", body: "See how you rank against other traders and unlock achievements along the way." },
      { icon: Lock, title: "Secure accounts", body: "Register and log in with JWT authentication guarding every API route." },
    ],
    architecture: [
      { layer: "Client", nodes: [
        { name: "Next.js app", detail: "Dashboard, trade, compare", skill: "Next.js" },
        { name: "Zustand + Recharts", detail: "State and portfolio charts", skill: "Recharts" },
      ] },
      { layer: "API", nodes: [
        { name: "Go / Gin server", detail: "Handlers, services, JWT middleware", skill: "Gin" },
        { name: "WebSocket hub", detail: "Live price updates", skill: "WebSockets" },
      ] },
      { layer: "Data", nodes: [
        { name: "PostgreSQL", detail: "Parameterized queries via sqlc", skill: "PostgreSQL" },
        { name: "Finnhub API", detail: "Real-time market data" },
      ] },
    ],
    stack: [
      { group: "Frontend", skills: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Recharts"] },
      { group: "Backend", skills: ["Go", "Gin", "JWT", "WebSockets", "REST APIs"] },
      { group: "Data", skills: ["PostgreSQL"] },
    ],
    build: [
      { title: "Schema first", body: "Set up the PostgreSQL schema and migrations for users, holdings, orders, watchlists and badges." },
      { title: "Go API", body: "Built Gin handlers and services with JWT middleware and parameterized SQL queries." },
      { title: "Live prices", body: "Connected Finnhub market data and pushed price updates to clients over WebSockets." },
      { title: "The trading UI", body: "Built the dashboard, trade and compare pages in Next.js with Zustand state and Recharts graphs." },
      { title: "Make it stick", body: "Added the leaderboard, badges, diversification score and background jobs that keep stats fresh." },
    ],
    challenges: [
      { title: "Keeping prices live", problem: "Polling for quotes is slow and wasteful.", solution: "A WebSocket feed pushes price changes to every open client as they happen." },
      { title: "Safe queries", problem: "Trading endpoints take user input that touches money and holdings.", solution: "Every query is parameterized, and JWT middleware guards all account routes." },
    ],
  },
  {
    slug: "teach-for-cambodia",
    title: "Teach For Cambodia",
    header: "Empowering classrooms through code.",
    description:
      "Teaching platform for Teach For Cambodia, a startup non-profit, that works to increase educational opportunities for children in the country.",
    points: [
      "Developed a teaching platform for Teach For Cambodia, improving remote education accessibility and enabling seamless communication between students, instructors, & admin with Supabase and Google Authentication.",
      "Implemented a course management system with real-time updates, enabling educators to seamlessly create, edit, and organize lessons for students. Added dynamic search for easy course navigation.",
    ],
    skills: ["Next.js", "React", "Supabase", "TypeScript", "Material UI", "Vercel"],
    color: "bg-pink-500",
    accent: "#EC4899",
    image: TeachForCambodiaImg,
    year: "2024",
    role: "Full-stack developer",
    context: "Headstarter AI fellowship · team project",
    status: "Shipped",
    repo: "https://github.com/vineet-panchal/tfc-courses",
    stats: [
      { value: "3", label: "user roles" },
      { value: "Live", label: "course updates" },
      { value: "Google", label: "one-click sign-in" },
      { value: "1", label: "non-profit served" },
    ],
    overview: [
      "Teach For Cambodia works to widen educational opportunity for children across the country. This platform gives its students, instructors and administrators one place to teach and learn remotely.",
      "Instructors build and organize courses that update for students in real time, and everyone signs in with their Google account, so getting started takes seconds.",
    ],
    features: [
      { icon: GraduationCap, title: "Course management", body: "Educators create, edit and organize lessons, and changes reach students in real time." },
      { icon: Lock, title: "Google sign-in", body: "Supabase authentication with Google lets students and staff sign in without new passwords." },
      { icon: Layers, title: "Role-based access", body: "Separate experiences for students, instructors and admins." },
      { icon: Search, title: "Dynamic search", body: "Find courses quickly as the catalog grows." },
    ],
    architecture: [
      { layer: "Client", nodes: [
        { name: "Next.js app", detail: "Course pages and dashboards", skill: "Next.js" },
        { name: "Material UI", detail: "Component library", skill: "Material UI" },
      ] },
      { layer: "Backend", nodes: [
        { name: "Supabase", detail: "Database, auth and real-time", skill: "Supabase" },
        { name: "Google Auth", detail: "Sign-in provider", skill: "Google Auth" },
      ] },
      { layer: "Hosting", nodes: [{ name: "Vercel", detail: "Deployments", skill: "Vercel" }] },
    ],
    stack: [
      { group: "Frontend", skills: ["Next.js", "React", "TypeScript", "Material UI"] },
      { group: "Backend", skills: ["Supabase", "Google Auth"] },
      { group: "Hosting", skills: ["Vercel"] },
    ],
    build: [
      { title: "Understanding the need", body: "Mapped out how students, instructors and admins would each use the platform." },
      { title: "Auth & roles", body: "Set up Supabase with Google sign-in and role-based access." },
      { title: "Course builder", body: "Built course creation and editing with real-time updates for students." },
      { title: "Search & polish", body: "Added dynamic course search and deployed on Vercel." },
    ],
    challenges: [
      { title: "Three audiences, one app", problem: "Students, instructors and admins need very different views.", solution: "Role-based routing serves each group its own dashboard from the same codebase." },
      { title: "Keeping lessons in sync", problem: "Students shouldn't need to refresh to see new material.", solution: "Supabase real-time subscriptions push course changes straight to open pages." },
    ],
  },
  {
    slug: "smartdeck",
    title: "SmartDeck",
    header: "Flashcards that actually think smarter.",
    description: "An AI-powered tool that generates flashcards on text input.",
    points: [
      "Created a web app that generates flashcards for educational use, enhancing learning experiences through personalized AI-driven content, using OpenAI’s API.",
      "Integrated Clerk for user authentication, Firebase for data storage, and Material UI for enhanced user experience.",
    ],
    skills: ["React", "Next.js", "Firebase", "OpenAI", "Material UI", "Clerk"],
    color: "bg-blue-500",
    accent: "#3B82F6",
    image: SmartdeckImg,
    year: "2024",
    role: "Full-stack developer",
    context: "Headstarter AI fellowship",
    status: "Live",
    repo: "https://github.com/vineet-panchal/smartdeck",
    live: "https://smartdeckai.vercel.app/",
    stats: [
      { value: "AI", label: "generated flashcards" },
      { value: "1", label: "click from notes to deck" },
      { value: "Clerk", label: "secure accounts" },
      { value: "Saved", label: "decks in Firebase" },
    ],
    overview: [
      "SmartDeck turns any block of text, like lecture notes or a textbook passage, into a ready-to-study deck of flashcards.",
      "OpenAI writes the question and answer pairs, Clerk handles accounts, and Firebase keeps every deck saved so you can come back to it.",
    ],
    features: [
      { icon: Sparkles, title: "Instant generation", body: "Paste text and get a full deck of question and answer cards from OpenAI." },
      { icon: Lock, title: "Accounts with Clerk", body: "Sign up and sign in securely to keep decks personal." },
      { icon: Database, title: "Saved decks", body: "Firebase stores every deck so it's there next time you study." },
      { icon: Layers, title: "Flip-card study mode", body: "Review cards one at a time in a clean Material UI interface." },
    ],
    architecture: [
      { layer: "Client", nodes: [{ name: "Next.js app", detail: "Input, deck and study views", skill: "Next.js" }] },
      { layer: "Services", nodes: [
        { name: "OpenAI API", detail: "Flashcard generation", skill: "OpenAI" },
        { name: "Clerk", detail: "Authentication", skill: "Clerk" },
      ] },
      { layer: "Data", nodes: [{ name: "Firebase", detail: "Saved decks", skill: "Firebase" }] },
    ],
    stack: [
      { group: "Frontend", skills: ["Next.js", "React", "Material UI"] },
      { group: "Services", skills: ["OpenAI", "Clerk", "Firebase"] },
    ],
    build: [
      { title: "Prompting", body: "Designed prompts that turn free text into consistent question and answer pairs." },
      { title: "The study flow", body: "Built the input, deck and flip-card views in Next.js with Material UI." },
      { title: "Accounts & storage", body: "Added Clerk sign-in and saved decks per user in Firebase." },
      { title: "Ship it", body: "Deployed on Vercel, and later rebuilt an optimized version." },
    ],
    challenges: [
      { title: "Structured AI output", problem: "Free-form model replies are hard to turn into cards.", solution: "Prompts ask for a fixed structure, which the app parses straight into flashcards." },
      { title: "Per-user data", problem: "Decks have to stay private to their owner.", solution: "Each deck is stored under the signed-in Clerk user in Firebase." },
    ],
  },
  {
    slug: "fashion-disaster-avoider",
    title: "Fashion Disaster Avoider",
    header: "Your virtual stylist in disguise.",
    description:
      "Fashion Disaster Avoider, a platform that is a brutally honest fashion-savvy friend who helps you avoid style mishaps.",
    points: [
      "Developed an AI-powered chatbot that provides real-time, fashion advice, helping users refine their style choices.",
      "Integrated OpenAI’s API to analyze outfit combinations and trends, delivering instant, personalized recommendations.",
    ],
    skills: ["Next.js", "React", "Material UI", "OpenAI", "TypeScript"],
    color: "bg-green-500",
    accent: "#22C55E",
    image: FashionDisasterAvoiderImg,
    year: "2024",
    role: "Full-stack developer",
    context: "Headstarter AI fellowship",
    status: "Live",
    repo: "https://github.com/vineet-panchal/fashion-diaster-avoider",
    live: "https://fashion-diaster-avoider.vercel.app",
    stats: [
      { value: "24/7", label: "honest style advice" },
      { value: "AI", label: "outfit analysis" },
      { value: "Instant", label: "recommendations" },
      { value: "0", label: "fashion disasters" },
    ],
    overview: [
      "Fashion Disaster Avoider is the friend who tells you the truth about your outfit before you leave the house.",
      "Describe what you're wearing or planning to wear, and an OpenAI-powered chatbot weighs the combination against current trends and gives honest, personalized advice in real time.",
    ],
    features: [
      { icon: MessageSquare, title: "Chat with a stylist", body: "A conversational chatbot that gives real-time fashion advice." },
      { icon: Shirt, title: "Outfit analysis", body: "OpenAI analyzes outfit combinations and current trends." },
      { icon: Sparkles, title: "Personal picks", body: "Instant recommendations tailored to what you describe." },
      { icon: Bot, title: "Brutally honest", body: "A personality built to tell you what works and what doesn't." },
    ],
    architecture: [
      { layer: "Client", nodes: [{ name: "Next.js chat UI", detail: "Material UI chat interface", skill: "Next.js" }] },
      { layer: "AI", nodes: [{ name: "OpenAI API", detail: "Style analysis and replies", skill: "OpenAI" }] },
      { layer: "Hosting", nodes: [{ name: "Vercel", detail: "Deployments", skill: "Vercel" }] },
    ],
    stack: [
      { group: "Frontend", skills: ["Next.js", "React", "TypeScript", "Material UI"] },
      { group: "AI", skills: ["OpenAI"] },
    ],
    build: [
      { title: "Finding the voice", body: "Shaped a system prompt for an honest, fashion-savvy personality." },
      { title: "The chat", body: "Built a real-time chat interface in Next.js and Material UI." },
      { title: "Smarter advice", body: "Fed outfit details to OpenAI to analyze combinations and trends." },
      { title: "Launch", body: "Deployed on Vercel for anyone to try." },
    ],
    challenges: [
      { title: "Honest but helpful", problem: "Blunt feedback can feel harsh.", solution: "The prompt pairs every critique with a concrete suggestion to fix the outfit." },
    ],
  },
  {
    slug: "rate-my-professor",
    title: "Rate My Professor",
    header: "Student voices, amplified with AI.",
    description: "A chatbot that you can communicate with to rate your professors.",
    points: [
      "Built a comprehensive AI-powered assistant using Retrieval Augmented Generation (RAG), enabling students to receive real-time, detailed feedback on professors and courses by integrating external knowledge bases.",
      "Streamlined user experience by integrating a vector database with a large language model for accurate responses.",
    ],
    skills: ["Next.js", "React", "Pinecone", "OpenAI", "Material UI"],
    color: "bg-yellow-500",
    accent: "#EAB308",
    image: RateMyProfessorImg,
    year: "2024",
    role: "Full-stack developer",
    context: "Headstarter AI fellowship · team project",
    status: "Shipped",
    repo: "https://github.com/vineet-panchal/Rate-My-Professor",
    stats: [
      { value: "RAG", label: "retrieval pipeline" },
      { value: "Vector", label: "search over reviews" },
      { value: "LLM", label: "grounded answers" },
      { value: "Real-time", label: "chat responses" },
    ],
    overview: [
      "Choosing courses means guessing which professors will be a good fit. This assistant lets students simply ask.",
      "Professor reviews are embedded into a Pinecone vector database. When a student asks a question, the most relevant reviews are retrieved and handed to a large language model, which answers with detail grounded in what other students actually said.",
    ],
    features: [
      { icon: Brain, title: "Retrieval-augmented answers", body: "Relevant reviews are retrieved first, so responses stay grounded in real data." },
      { icon: Database, title: "Vector search", body: "Pinecone finds reviews by meaning, not just keywords." },
      { icon: MessageSquare, title: "Conversational", body: "Ask about a professor or course in plain language." },
      { icon: Compass, title: "Course guidance", body: "Get detailed feedback on teaching style, workload and more." },
    ],
    architecture: [
      { layer: "Client", nodes: [{ name: "Next.js chat UI", detail: "Material UI interface", skill: "Next.js" }] },
      { layer: "Retrieval", nodes: [
        { name: "Embeddings", detail: "Reviews turned into vectors", skill: "OpenAI" },
        { name: "Pinecone", detail: "Vector similarity search", skill: "Pinecone" },
      ] },
      { layer: "Generation", nodes: [{ name: "LLM", detail: "Answers from retrieved reviews", skill: "OpenAI" }] },
    ],
    stack: [
      { group: "Frontend", skills: ["Next.js", "React", "Material UI"] },
      { group: "AI", skills: ["OpenAI", "Pinecone", "RAG"] },
    ],
    build: [
      { title: "Indexing reviews", body: "Embedded professor reviews and loaded them into Pinecone." },
      { title: "Retrieval", body: "Matched each question to the most relevant reviews by vector similarity." },
      { title: "Generation", body: "Passed retrieved context to an LLM to produce grounded answers." },
      { title: "Chat UI", body: "Wrapped it in a real-time chat interface with Next.js and Material UI." },
    ],
    challenges: [
      { title: "Avoiding made-up answers", problem: "LLMs can invent details about real people.", solution: "Answers are built from retrieved reviews, so the model works from real student feedback." },
    ],
  },
  {
    slug: "astar-visualizer",
    title: "A-Star Pathfinding Visualizer",
    header: "Watch algorithms find their way.",
    description:
      "An introduction to data structures and algorithms in python. Created a visualizer for the A-Star algorithm using pygame.",
    points: [
      "Built an interactive grid in Pygame where you place a start node, an end node and barriers, then watch A* search for the shortest path step by step.",
      "Implemented A* with a priority queue and a distance heuristic, highlighting open, closed and final-path nodes as the search runs.",
    ],
    skills: ["Python", "Pygame", "Algorithms", "Data Structures"],
    color: "bg-purple-500",
    accent: "#A855F7",
    image: AStarPathfinderImg,
    year: "2023",
    role: "Solo developer",
    context: "Personal project",
    status: "Completed",
    repo: "https://github.com/vineet-panchal/astar-visualizer",
    stats: [
      { value: "A*", label: "search algorithm" },
      { value: "Live", label: "step-by-step drawing" },
      { value: "1", label: "priority queue" },
      { value: "∞", label: "mazes to draw" },
    ],
    overview: [
      "This was my hands-on introduction to data structures and algorithms. Instead of reading about A*, I built a tool to watch it think.",
      "Draw walls on a grid, drop a start and an end point, and the visualizer animates A* exploring the grid and tracing the shortest path it finds.",
    ],
    features: [
      { icon: Route, title: "Shortest paths", body: "A* finds the shortest route around any barriers you draw." },
      { icon: Activity, title: "Animated search", body: "Open, closed and path nodes are colored as the algorithm runs." },
      { icon: Layers, title: "Draw your own maze", body: "Click to place the start, the end and walls anywhere on the grid." },
      { icon: Filter, title: "Heuristic-guided", body: "A distance heuristic steers the search toward the goal." },
    ],
    architecture: [
      { layer: "Input", nodes: [{ name: "Mouse & keyboard", detail: "Place nodes, start the search" }] },
      { layer: "Algorithm", nodes: [{ name: "A* search", detail: "Priority queue + heuristic", skill: "Algorithms" }] },
      { layer: "Rendering", nodes: [{ name: "Pygame grid", detail: "Animated node states", skill: "Pygame" }] },
    ],
    stack: [
      { group: "Language", skills: ["Python"] },
      { group: "Graphics", skills: ["Pygame"] },
      { group: "Concepts", skills: ["Algorithms", "Data Structures"] },
    ],
    build: [
      { title: "The grid", body: "Drew a clickable grid of nodes in Pygame." },
      { title: "The algorithm", body: "Implemented A* with a priority queue and heuristic." },
      { title: "Animation", body: "Colored nodes as they open, close and join the final path." },
    ],
    challenges: [
      { title: "Seeing the search", problem: "An algorithm that finishes instantly teaches nothing.", solution: "The search redraws the grid on every step, so you can follow its decisions." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

