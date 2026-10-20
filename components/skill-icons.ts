import type { StaticImageData } from 'next/image';
import type { IconType } from 'react-icons';
import { SiApachekafka, SiApachemaven, SiBitcoin, SiClerk, SiDocker, SiGoogle, SiJsonwebtokens, SiMui, SiNumpy, SiOpenai, SiOwasp, SiPydantic, SiThreedotjs, SiVercel, SiDotnet, SiFastapi, SiGin, SiGo, SiJquery, SiKubernetes, SiRedux, SiSass, SiScikitlearn, SiSocketdotio, SiSpring, SiSpringboot, SiTensorflow } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { TbAccessible, TbApi, TbBox, TbBrain, TbChartLine, TbDatabase, TbDeviceGamepad2, TbLock, TbRobot, TbSatellite, TbShieldLock, TbSql, TbStack2, TbWorld, TbBinaryTree, TbBrandCSharp, TbChartHistogram, TbCloudLock, TbCube, TbLambda, TbLayoutGrid, TbPlugConnected, TbRoute, TbServer2 } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

import javaLogo from "@/assets/logos/java.png";
import pythonLogo from "@/assets/logos/python.png";
import javascriptLogo from "@/assets/logos/javascript.png";
import typescriptLogo from "@/assets/logos/typescript.png";
import cLogo from "@/assets/logos/c.png";
import cppLogo from "@/assets/logos/cpp.png";
import graphqlLogo from "@/assets/logos/graphql.png";
import haskellLogo from "@/assets/logos/haskell.png";
import rustLogo from "@/assets/logos/rust.png";

import nodejsLogo from "@/assets/logos/nodejs.png";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import reactLogo from "@/assets/logos/react.png";
import expressLogo from "@/assets/logos/express.png";

import mongodbLogo from "@/assets/logos/mongodb.svg";
import postgresqlLogo from "@/assets/logos/postgresql.png";
import supabaseLogo from "@/assets/logos/supabase.png";
import mysqlLogo from "@/assets/logos/mysql.png";
import firebaseLogo from "@/assets/logos/firebase.png";

import htmlLogo from "@/assets/logos/html.png";
import cssLogo from "@/assets/logos/css.png";
import tailwindLogo from "@/assets/logos/tailwind.png";
import bootstrapLogo from "@/assets/logos/bootstrap.png";

import postmanLogo from "@/assets/logos/postman.png";
import gitLogo from "@/assets/logos/git.png";
import githubLogo from "@/assets/logos/github.png";
import sourcetreeLogo from "@/assets/logos/sourcetree.png";
import vscodeLogo from "@/assets/logos/vscode.png";
import intellijLogo from "@/assets/logos/intellij.png";

export type SkillIcon = {
  logo?: StaticImageData;
  icon?: IconType;
  color?: string;
};

// Every skill logo on the site, shared by the skills grid, certification cards and work timeline.
export const SKILL_ICONS = {
  "Java": { logo: javaLogo },
  "Python": { logo: pythonLogo },
  "JavaScript": { logo: javascriptLogo },
  "TypeScript": { logo: typescriptLogo },
  "C Programming": { logo: cLogo },
  "C++": { logo: cppLogo },
  "C#": { icon: TbBrandCSharp, color: "#9B4F96" },
  "Go": { icon: SiGo, color: "#00ADD8" },
  "GraphQL": { logo: graphqlLogo },
  "Haskell": { logo: haskellLogo },
  "Rust": { logo: rustLogo },
  "Node.js": { logo: nodejsLogo },
  "Next.js": { logo: nextjsLogo },
  "React": { logo: reactLogo },
  "Express.js": { logo: expressLogo },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  ".NET": { icon: SiDotnet, color: "#7B5BE6" },
  "Gin": { icon: SiGin, color: "#008ECF" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "WebSockets": { icon: TbPlugConnected, color: "#E4E4E7" },
  "Socket.IO": { icon: SiSocketdotio, color: "#FFFFFF" },
  "MongoDB": { logo: mongodbLogo },
  "PostgreSQL": { logo: postgresqlLogo },
  "Supabase": { logo: supabaseLogo },
  "MySQL": { logo: mysqlLogo },
  "SQL Server": { icon: DiMsqlServer, color: "#CC2927" },
  "Firebase": { logo: firebaseLogo },
  "Azure": { icon: VscAzure, color: "#0089D6" },
  "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  "Matplotlib": { icon: TbChartHistogram, color: "#4C9BD6" },
  "HTML": { logo: htmlLogo },
  "CSS": { logo: cssLogo },
  "Tailwind CSS": { logo: tailwindLogo },
  "Bootstrap": { logo: bootstrapLogo },
  "Postman": { logo: postmanLogo },
  "Git": { logo: gitLogo },
  "GitHub": { logo: githubLogo },
  "Sourcetree": { logo: sourcetreeLogo },
  "VS Code": { logo: vscodeLogo },
  "IntelliJ IDEA": { logo: intellijLogo },

  // Only used on certification cards and the work timeline
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
  "Virtualization": { icon: TbServer2, color: "#A1A1AA" },
  "Cloud Security": { icon: TbCloudLock, color: "#60A5FA" },
  "Sass": { icon: SiSass, color: "#CC6699" },
  "jQuery": { icon: SiJquery, color: "#0769AD" },
  "Redux": { icon: SiRedux, color: "#764ABC" },
  "Data Structures": { icon: TbBinaryTree, color: "#A1A1AA" },
  "Algorithms": { icon: TbRoute, color: "#A1A1AA" },
  "OOP": { icon: TbCube, color: "#A1A1AA" },
  "Functional Programming": { icon: TbLambda, color: "#A1A1AA" },
  "Flexbox & Grid": { icon: TbLayoutGrid, color: "#A1A1AA" },
  "Accessibility": { icon: TbAccessible, color: "#A1A1AA" },
  "Kafka": { icon: SiApachekafka, color: "#FFFFFF" },
  "Spring": { icon: SiSpring, color: "#6DB33F" },
  "REST APIs": { icon: TbApi, color: "#A1A1AA" },
  "SQL": { icon: TbSql, color: "#A1A1AA" },
  "OpenAI": { icon: SiOpenai, color: "#FFFFFF" },
  "Azure OpenAI": { icon: SiOpenai, color: "#0089D6" },
  "JWT": { icon: SiJsonwebtokens, color: "#D63AFF" },
  "Blockchain": { icon: SiBitcoin, color: "#F7931A" },
  "Cryptography": { icon: TbLock, color: "#A1A1AA" },
  "Application Security": { icon: TbShieldLock, color: "#60A5FA" },
  "OWASP Top 10": { icon: SiOwasp, color: "#FFFFFF" },
  "Machine Learning": { icon: TbBrain, color: "#ff2975" },

  // Only used on project cards and project pages
  "Three.js": { icon: SiThreedotjs, color: "#FFFFFF" },
  "Globe.gl": { icon: TbWorld, color: "#38BDF8" },
  "satellite.js": { icon: TbSatellite, color: "#A1A1AA" },
  "NumPy": { icon: SiNumpy, color: "#4DABCF" },
  "Pydantic": { icon: SiPydantic, color: "#E92063" },
  "Spring Data JPA": { icon: SiSpring, color: "#6DB33F" },
  "H2": { icon: TbDatabase, color: "#1E88E5" },
  "Maven": { icon: SiApachemaven, color: "#C71A36" },
  "Zustand": { icon: TbBox, color: "#A1A1AA" },
  "Recharts": { icon: TbChartLine, color: "#22B5BF" },
  "Material UI": { icon: SiMui, color: "#007FFF" },
  "Vercel": { icon: SiVercel, color: "#FFFFFF" },
  "Clerk": { icon: SiClerk, color: "#6C47FF" },
  "Google Auth": { icon: SiGoogle, color: "#4285F4" },
  "Pinecone": { icon: TbStack2, color: "#A1A1AA" },
  "RAG": { icon: TbRobot, color: "#A1A1AA" },
  "Pygame": { icon: TbDeviceGamepad2, color: "#FFD43B" },
} satisfies Record<string, SkillIcon>;

export type SkillName = keyof typeof SKILL_ICONS;
