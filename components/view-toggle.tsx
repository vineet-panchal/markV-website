"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useViewMode } from "@/components/view-mode";

// Dock button that expands the quick one-pager into the full site, or collapses it back.
export function ViewToggle({ className, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { mode, setMode } = useViewMode();
  const pathname = usePathname();
  const router = useRouter();
  const quick = mode === "quick";

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Tooltip triggers pass their own handler through; keep it working
    onClick?.(e);
    setMode(quick ? "full" : "quick");
    // Quick view lives on the home page
    if (quick || pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    else router.push("/");
  };

  return (
    <button
      {...props}
      type="button"
      onClick={toggle}
      aria-label={quick ? "Show the full site" : "Switch to quick view"}
      aria-pressed={!quick}
      className={cn(
        "relative flex size-9 items-center justify-center rounded-full text-white transition-colors hover:bg-zinc-900",
        className,
      )}
    >
      {quick ? <ChevronsUpDown className="size-4" /> : <ChevronsDownUp className="size-4" />}
    </button>
  );
}
