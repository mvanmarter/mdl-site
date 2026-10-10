import { Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/primitives";
import { site } from "@/lib/site-content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">
            Let&apos;s talk about your next stage of growth
          </h2>
          <p className="mt-3 text-[var(--foreground)]/70">
            Email is fastest. Based in {site.location}.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-8 font-semibold text-[var(--brand-ink)] hover:opacity-90"
            >
              <Mail size={16} /> {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--line)] px-8 font-semibold hover:bg-[var(--surface)]"
            >
              <Phone size={16} /> {site.phone}
            </a>
          </div>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            <LinkedInIcon size={16} /> linkedin.com/in/melaniedeleon
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-xs text-[var(--foreground)]/60 sm:flex-row sm:px-6">
        <p>
          © 2026 {site.name} · {site.location}
        </p>
        <p>
          Content adapted from public LinkedIn profile ·{" "}
          <a className="underline" href={site.linkedin}>
            Source
          </a>
        </p>
      </div>
    </footer>
  );
}
