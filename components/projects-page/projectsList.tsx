"use client";

import React from 'react';
import { HeroParallax } from '../ui/hero-parallax';

// Smaller repos from github.com/vineet-panchal, three parallax rows of five.
// Only projects with a working live site have a screenshot; the rest render a placeholder card.
export const products = [
  { title: "Pantry Tracker", link: "https://pantry-tracker-sand-delta.vercel.app", repo: "pantry-tracker", language: "JavaScript", year: "2024", description: "Manage your own pantry by keeping track of each item.", thumbnail: "/library/pantry-tracker.jpg" },
  { title: "AI Vision Wingman", link: "https://github.com/vineet-panchal/ai-vision-wingman", repo: "ai-vision-wingman", language: "JavaScript", year: "2024", description: "An AI-driven companion for navigating dating and social interactions." },
  { title: "Group Chat", link: "https://github.com/vineet-panchal/groupchat", repo: "groupchat", language: "JavaScript", year: "2025", description: "A group chat app with live messaging over WebSockets." },
  { title: "ML Algorithms", link: "https://github.com/vineet-panchal/ml-algorithms", repo: "ml-algorithms", language: "Python", year: "2025", description: "A collection of algorithms from across machine learning." },
  { title: "Heads-Up Poker", link: "https://github.com/vineet-panchal/heads-up-poker", repo: "heads-up-poker", language: "Java", year: "2023", description: "My grade 12 computer science final project, built in Java." },

  { title: "React Calculator", link: "https://fascinating-boba-3f679f.netlify.app/", repo: "react-calculator", language: "TypeScript", year: "2024", description: "A calculator built for freeCodeCamp's Front End Libraries certification.", thumbnail: "/library/react-calculator.jpg" },
  { title: "CP24 Clone", link: "https://github.com/vineet-panchal/cp24-clone", repo: "cp24-clone", language: "HTML", year: "2024", description: "Our team's submission for the Hacktober Open Source Hackfest 2024." },
  { title: "GraphQL UMS", link: "https://github.com/vineet-panchal/graphql-ums", repo: "graphql-ums", language: "JavaScript", year: "2025", description: "A GraphQL API for user management with authentication." },
  { title: "SmartDeck Optimized", link: "https://github.com/vineet-panchal/smartdeck-optimized", repo: "smartdeck-optimized", language: "JavaScript", year: "2025", description: "An optimized version of my AI flashcard app, SmartDeck." },
  { title: "Interview Cheatsheet", link: "https://github.com/vineet-panchal/interview-cheatsheet", repo: "interview-cheatsheet", language: "Common Lisp", year: "2025", description: "An interview cheatsheet with examples across many languages." },

  { title: "Sudoku Solver", link: "https://github.com/vineet-panchal/sudoku-solver", repo: "sudoku-solver", language: "Python", year: "2024", description: "Solves any Sudoku grid using the backtracking algorithm." },
  { title: "Chess", link: "https://github.com/vineet-panchal/chess", repo: "chess", language: "JavaScript", year: "2024", description: "Chess, built in JavaScript." },
  { title: "MoviesNet", link: "https://github.com/vineet-panchal/moviesnet", repo: "moviesnet", language: "CSS", year: "2023", description: "Find your favourite movies and TV shows to watch." },
  { title: "TimeWise Calendar", link: "https://github.com/vineet-panchal/time-wise-calendar", repo: "time-wise-calendar", language: "CSS", year: "2023", description: "Schedule your events and keep track of your progress." },
  { title: "Minesweeper", link: "https://github.com/vineet-panchal/minesweeper", repo: "minesweeper", language: "JavaScript", year: "2023", description: "Classic Minesweeper, one of my first JavaScript projects." },
];

export default function ProjectsList() {
  return (
    <>
      <div className="bg-[var(--color-midnight)] text-white">
        <HeroParallax products={products} />
      </div>
    </>
  );
};