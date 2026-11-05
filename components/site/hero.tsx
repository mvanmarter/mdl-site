"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/primitives";
import Image from "next/image";
import * as React from "react";
import { site, stats } from "@/lib/site-content";

/**
 * Headshot behavior:
 * - If public/headshot.jpg exists it renders the photo.
 * - Otherwise it falls back to a monogram (LinkedIn photo is auth-walled,
 *   so it cannot be hotlinked). Drop the file in later — no code change needed.
 */
function Headshot() {
  const [failed, setFailed] = React.useState(false);
  if (failed) {
    return (
      <div
        aria-label={`${site.name} photo placeholder`}
        className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl bg-[var(--brand)] text-[var(--brand-ink)]"
      >
        <span className="font-display text-7xl font-semibold">ML</span>
      </div>
    );
  }
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)]">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/headshot.jpg`}
        alt={site.name}
        fill
        sizes="(max-width: 768px) 100vw, 420px"
        className="object-cover"
        priority
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-[var(--surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs font-semibold text-[var(--foreground)]/70">
            <MapPin size={14} /> {site.location} · Open to VP Marketing / VP
            Product
          </p>
          <h1 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-[var(--accent)]">
            {site.title}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--foreground)]/75">
            {site.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-[var(--brand-ink)] hover:opacity-90"
            >
              <Mail size={16} /> Email Melanie <ArrowRight size={16} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-white px-6 text-sm font-semibold hover:bg-[var(--surface)]"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-white px-6 text-sm font-semibold hover:bg-[var(--surface)]"
            >
              <Phone size={16} /> {site.phone}
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[var(--line)] bg-white p-4"
              >
                <dt className="order-2 mt-1 text-xs leading-snug text-[var(--foreground)]/60">
                  {s.label}
                </dt>
                <dd className="font-display text-2xl font-semibold">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <Headshot />
          <p className="mt-3 text-xs leading-relaxed text-[var(--foreground)]/55">
            Photo placeholder — LinkedIn blocks direct photo reuse. Add{" "}
            <code>public/headshot.jpg</code> to display the real portrait.
          </p>
        </div>
      </div>
    </section>
  );
}
