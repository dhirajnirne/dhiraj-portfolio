"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Deliberate one-time mount flag: theme is unknown during SSR, so we
    // render a neutral placeholder until after hydration to avoid a
    // dark/light mismatch flash (the standard next-themes pattern).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9 shrink-0" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border text-text-muted transition-all duration-200 hover:border-accent hover:text-accent active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {isDark ? (
        <Sun size={16} className="transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon size={16} className="transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
