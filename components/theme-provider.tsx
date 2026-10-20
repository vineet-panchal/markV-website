"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Dark is the default and ignores the OS setting. Dark mode uses a `theme-dark` class
// (not `dark`) so the existing `dark:` utilities, written for a light base, stay inactive.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      themes={["dark", "light"]}
      value={{ dark: "theme-dark", light: "light" }}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
