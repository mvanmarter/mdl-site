"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const THEMES = [
  { id: "executive", label: "Executive" },
  { id: "warm", label: "Warm" },
  { id: "modern", label: "Modern" },
  { id: "mono", label: "Mono" },
] as const;

function getInitialTheme(): string {
  if (typeof window === "undefined") return "executive";
  return window.localStorage.getItem("mdl-theme") ?? "executive";
}

function applyTheme(id: string) {
  document.documentElement.setAttribute("data-theme", id);
  window.localStorage.setItem("mdl-theme", id);
}

export function ThemeSwitcher({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<string>(getInitialTheme);

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-white/80 p-1 backdrop-blur",
        className
      )}
      role="group"
      aria-label="Color theme"
    >
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          aria-pressed={theme === t.id}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
            theme === t.id
              ? "bg-[var(--brand)] text-[var(--brand-ink)]"
              : "text-[var(--foreground)]/60 hover:bg-[var(--surface)]"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
