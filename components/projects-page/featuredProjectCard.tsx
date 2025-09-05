import React from 'react';

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  points: string[];
  tags: string[];
}

export default function FeaturedProjectCard() {
  return (
    <>
      <div className="relative col-span-3 space-y-6">
        {/* Title with dash */}
        <div className="flex items-center gap-3">
          <span className="h-1 w-6 rounded-full bg-pink-500" />
          <h2 className="text-xl font-bold">Next Ventures</h2>
        </div>
      
        <p className="text-sm text-neutral-400">
          A platform designed for early-stage entrepreneurs to pitch, browse,
          and engage with startup ideas. It’s built to impress both users and
          investors with blazing speed, compelling visuals, and a modern tech
          stack.
        </p>
      
        <ul className="space-y-3">
          {[
            "Leveraged Partial Prerendering and After for faster loading.",
            "Simplified idea submission with a clean, intuitive design.",
            "Enhanced browsing with seamless performance optimization.",
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-pink-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      
        {/* Example stack badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge className="bg-neutral-800 text-neutral-200">Next.js</Badge>
          <Badge className="bg-neutral-800 text-neutral-200">React</Badge>
          <Badge className="bg-neutral-800 text-neutral-200">
            Tailwind CSS
          </Badge>
          <Badge className="bg-neutral-800 text-neutral-200">
            TypeScript
          </Badge>
        </div>
      </div>
    </>
  )
};