"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

// Dock button that flips between dark and light. Which icon shows is decided in CSS
// from the theme class on <html>, so it renders correctly before hydration.
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const toggle = () => setTheme(resolvedTheme === "light" ? "dark" : "light");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className={cn(
        "relative flex size-9 items-center justify-center rounded-full text-white transition-colors hover:bg-zinc-900",
        className,
      )}
    >
      {/* Dark theme shows the sun (switch to light); light theme shows the moon */}
      <Sun className="size-4 transition-all duration-500 light:-rotate-90 light:scale-0 light:opacity-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 opacity-0 transition-all duration-500 light:rotate-0 light:scale-100 light:opacity-100" />
    </button>
  );
}
