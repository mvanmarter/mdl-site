"use client";

import { Menu, X } from "lucide-react";
import * as React from "react";
import { site } from "@/lib/site-content";
import { ThemeSwitcher } from "@/components/site/theme-switcher";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Praise" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand)] font-display text-sm font-bold text-[var(--brand-ink)]"
          >
            ML
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold">{site.name}</span>
            <span className="block text-xs text-[var(--foreground)]/60">
              VP Marketing & Product
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)]"
            >
              {l.label}
            </a>
          ))}
          <ThemeSwitcher />
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-9 items-center rounded-full bg-[var(--brand)] px-4 text-sm font-semibold text-[var(--brand-ink)] hover:opacity-90"
          >
            Contact
          </a>
        </nav>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <nav
          className="border-t border-[var(--line)] px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <ThemeSwitcher className="self-start" />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
