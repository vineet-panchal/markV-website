"use client";

import { useCallback, useSyncExternalStore } from "react";
import { VIEW_MODE_KEY as KEY } from "@/lib/view-mode-script";

// "quick" is a one-page, resume-style home; "full" is the whole site.
// Quick is the default, and the visitor's choice is remembered per browser.
export type ViewMode = "quick" | "full";

const listeners = new Set<() => void>();

function read(): ViewMode {
  try {
    return localStorage.getItem(KEY) === "full" ? "full" : "quick";
  } catch {
    return "quick";
  }
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useViewMode() {
  const mode = useSyncExternalStore(subscribe, read, () => "quick" as ViewMode);

  const setMode = useCallback((next: ViewMode) => {
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Private mode: the choice just won't persist
    }
    document.documentElement.dataset.view = next;
    listeners.forEach((l) => l());
  }, []);

  return { mode, setMode };
}
