# Theming — how to try different styles

One-page site is built for fast re-styling. No hardcoded brand colors in components.

## 1. Instant switcher (in the nav)
`components/site/theme-switcher.tsx` toggles `<html data-theme>` between:
- `executive` (default: navy `#0f2a4a` + teal `#0e7c7b`)
- `warm` (terracotta / cream)
- `modern` (plum / magenta)
- `mono` (black / grey)

Try it live, then make the winner the default by editing `app/layout.tsx`:
`<html data-theme="warm">`.

## 2. Edit tokens (all in one place)
`app/globals.css` — change any theme block:
`--background, --foreground, --brand, --brand-ink, --accent, --accent-soft, --surface, --line`

Components reference only `var(--brand)`, `var(--accent)`, etc., so one edit rebrands the whole page.

## 3. Fonts
Loaded in `app/layout.tsx` via `next/font/google`:
- Sans: `Inter` → `--font-sans` (body)
- Display: `Fraunces` → `--font-display` (headings, `.font-display` class)

Swap to e.g. `Manrope` + `Playfair Display` by changing the import — no other files needed.

## 4. Content
All copy in `lib/site-content.ts` (`site, stats, expertise, impact, experience, testimonials, education`).
Edit text there; layout stays intact.

## 5. Components (shadcn-style, Tailwind)
Primitives in `components/ui/` (`button.tsx`, `primitives.tsx`: Badge, Card, SectionHeading) follow shadcn/ui patterns with `cva + tailwind-merge`.
Page sections in `components/site/` (`navbar, hero, sections, contact`).

## 6. Photo
LinkedIn blocks hotlinking, so the hero uses a monogram fallback until you add:
`public/headshot.jpg` (4:5 portrait, ~1200px). `next/image` picks it up automatically.
