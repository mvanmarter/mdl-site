# Melanie de Leon — One-Page Executive Site

A responsive one-page marketing site for **Melanie de Leon, VP Marketing & Product Development**, targeting **VP Marketing / VP Product** roles. Content is adapted from her LinkedIn PDF export (`docs/Profile.pdf`) plus the public LinkedIn teaser and two public recommendations.

Live page sections: sticky nav → hero (contact CTAs + metric cards) → brand strip → About → Expertise → Selected Impact → Experience timeline → Testimonials → Education/Honors → Contact → footer.

## How it was built

### Tech stack (exact)

| Layer             | Choice                                                                                                                           | Version (per `package.json`)                         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Framework         | Next.js App Router (file-system routing, React Server Components, static prerender)                                              | `16.4.0`                                             |
| UI library        | React                                                                                                                            | `19.3.0` / `react-dom 19.3.0`                        |
| Language          | TypeScript                                                                                                                       | `^5`                                                 |
| Styling           | Tailwind CSS v4 (CSS-first config via `@import "tailwindcss"` + `@theme inline` in `app/globals.css`) + `@tailwindcss/turbopack` | `^4`                                                 |
| Component pattern | shadcn/ui-style: `class-variance-authority` variants + `clsx` + `tailwind-merge` via `lib/utils.ts` `cn()`                       | `cva ^0.7.1`, `clsx ^2.1.1`, `tailwind-merge ^3.7.0` |
| Icons             | `lucide-react` for UI icons; custom inline-SVG `LinkedInIcon` (lucide `1.55.0` removed brand icons)                              | `^1.55.0`                                            |
| Fonts             | `next/font/google`: Inter (body `--font-sans`) + Fraunces (headings `--font-display`, `.font-display` class)                     | built into Next                                      |
| Images            | `next/image` for the headshot (`/headshot.jpg` with monogram fallback)                                                           | built into Next                                      |
| Lint              | ESLint + `eslint-config-next` (React Compiler rules enforced)                                                                    | `eslint ^9`                                          |

Node/npm used for this build: Node `v24.21.0`, npm `11.19.0`. Any Node 20+ should work.

### File map

- `app/layout.tsx` — root layout, metadata/SEO + OpenGraph, font variables, `<html data-theme="executive">` default.
- `app/page.tsx` — composes all sections (server component).
- `app/globals.css` — **all theme tokens in one place**: `--background, --foreground, --brand, --brand-ink, --accent, --accent-soft, --surface, --line` plus four `data-theme` presets (`executive`, `warm`, `modern`, `mono`). Components only use `var(--…)` so one edit rebrands the site.
- `lib/site-content.ts` — **all copy in one file**: `site` (name, email `deleon.melanie@gmail.com`, phone `310-736-5993`, LinkedIn URL), `stats`, `brands`, `expertise`, `impact`, `experience`, `testimonials`, `education`, `skills`.
- `lib/utils.ts` — `cn()` helper.
- `components/ui/button.tsx` — `Button` with `cva` variants (`default`, `accent`, `outline`, `ghost`; `sm/default/lg`).
- `components/ui/primitives.tsx` — `Badge`, `Card`, `SectionHeading`, `LinkedInIcon` (inline SVG path).
- `components/site/navbar.tsx` — client component: sticky header, mobile menu (`Menu`/`X` icons), anchor links, theme switcher, mailto CTA.
- `components/site/hero.tsx` — client component: headline, tagline, email/LinkedIn/phone CTAs, 4 stat cards, `Headshot()` with `next/image` + monogram fallback (LinkedIn blocks photo hotlinking).
- `components/site/sections.tsx` — server components: `BrandStrip`, `About`, `Expertise`, `Impact`, `Experience`, `Testimonials`, `Education`.
- `components/site/contact.tsx` — `Contact` (mailto/tel/LinkedIn) + `Footer`.
- `components/site/theme-switcher.tsx` — client component: persists to `localStorage` (`mdl-theme`), applies `data-theme` on `<html>`.
- `THEMING.md` — quick guide to switching colors/fonts.
- `public/` — static assets. **Add `public/headshot.jpg`** (4:5 portrait, ~1200px wide) to replace the placeholder; no code change needed.

### Rendering behavior

- All sections prerender as static content (`○ (Static)` in `next build`). Verified: `npm run build` + `npm run lint` clean, production `next start` returns `200`.
- Only `navbar`, `hero` (photo fallback state), and `theme-switcher` are client components (`"use client"`); everything else is a server component.
- One known framework constraint handled: `new Date().getFullYear()` in the footer breaks Next 16 prerendering, so the year is a static `2026` in `contact.tsx`.
- Accessibility/responsive: semantic landmarks, aria labels on nav/menu/theme group, mobile-first Tailwind (`sm:`/`md:` breakpoints), sticky nav with `scroll-mt-20` anchors.

## Run locally

Prerequisites: Node 20+ and npm.

```bash
cd /Users/marcvanmarter/Dev/MDL/mdl-site
npm install
npm run dev      # http://localhost:3000
```

Other commands:

```bash
npm run build    # production build (also runs TypeScript + static prerender)
npm run start    # serve the production build (default port 3000; e.g. npm run start -- -p 3107)
npm run lint     # eslint
```

Edit content: `lib/site-content.ts`. Change colors/fonts: see `THEMING.md` (tokens in `app/globals.css`, fonts in `app/layout.tsx`, default theme via `<html data-theme=…>`).

## Where to host (free / low-cost)

This is a static-feeling one-page site, so hosting is cheap. Cheapest path first:

### 1. Vercel — recommended (free)

Built by the Next.js team; zero-config for this repo. Free tier includes SSL, previews, and custom domains (domain purchase ~$10–15/yr separate).

1. Push this folder to GitHub.
2. Go to `vercel.com` → New Project → import the repo → Deploy.
3. Optional: add a custom domain in project settings.
   Cost: **$0** for personal/low-traffic use. Paid plans only needed for teams/bandwidth scale.

### 2. Netlify (free)

Good alternative with form handling if you later add a contact form. Drag-and-drop or Git import; set build command `npm run build` and publish directory `.next` via the Next.js plugin (or use static export, below). Free tier: 100 GB bandwidth/mo.
Cost: **$0** to start.

### 3. Cloudflare Pages (free, generous)

Very generous free bandwidth + fast global CDN. Git import, framework preset “Next.js”. Free tier covers this site easily.
Cost: **$0** + optional $10/yr domain.

### 4. GitHub Pages (free, with a caveat)

Only serves **static** files, so you must switch Next to static export first:

- Add `output: "export"` to `next.config.ts`, run `npm run build`, publish the `out/` folder.
- Trade-off: you lose `next/image` optimization (set `images: { unoptimized: true }`) — fine for one page.
  Cost: **$0**.

### 5. AWS Amplify / S3+CloudFront (~$0–5/mo)

Amplify Git import is the easy AWS path (free tier 12 mo). Pure S3+CloudFront is cheapest long-term but more setup. Only worth it if you already live in AWS.

### 6. Render / Fly.io / Railway (~$0–7/mo)

Runs `npm run build && npm run start` as a small Node service. Simple, but overkill vs. the free static hosts above. Use only if you need server features later.

**Suggestion:** start on **Vercel free** (best Next.js fit). Buy/attach a custom domain (e.g. `melaniedeleon.com`) via Vercel, Cloudflare Registrar, or Namecheap (~$10–15/yr) for an executive job search. If you outgrow free bandwidth, Cloudflare Pages is the cheapest next step.

### 7. Test

Adding test text to force GitHub Pages deployment
