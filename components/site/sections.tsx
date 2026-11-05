import Image from "next/image";
import { Award, GraduationCap, Quote } from "lucide-react";
import {
  brands,
  education,
  experience,
  expertise,
  impact,
  skills,
  site,
  testimonials,
} from "@/lib/site-content";
import { Badge, Card, SectionHeading } from "@/components/ui/primitives";

export function BrandStrip() {
  return (
    <section aria-label="Brands" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--foreground)]/50">
          Consumer, media & tech brands led
        </p>
        <ul className="mt-6 flex flex-wrap items-stretch justify-center gap-x-5 gap-y-4">
          {brands.map((b) => (
            <li
              key={b.name}
              className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white py-2.5 pl-3 pr-4 shadow-[0_1px_2px_rgba(15,27,45,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:shadow-[0_6px_16px_rgba(15,27,45,0.08)]"
            >
              {b.logo ? (
                <>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${b.logo.src}`}
                    alt=""
                    width={b.logo.width}
                    height={100}
                    unoptimized
                    className="h-7 w-auto max-w-none"
                  />
                  <span aria-hidden className="h-6 w-px bg-[var(--line)]" />
                </>
              ) : null}
              <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-[var(--foreground)]/80">
                {b.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1fr] md:py-20">
        <SectionHeading
          eyebrow="About"
          title="Strategic, analytical, and creative — focused on what matters"
          lede="A rare combination of product marketing, growth leadership, and hands-on product strategy. Melanie embeds PLG and lifecycle optimization directly into the product experience and translates complex tech into clear value props."
        />
        <div className="space-y-4 text-[15px] leading-relaxed text-[var(--foreground)]/75">
          <p>
            Tenacious problem-solver who cuts through noise, focuses teams on
            outcomes, and rolls up her sleeves. Equally at home with Product,
            Engineering, Sales, and Operations.
          </p>
          <p>
            Through-line: digital product innovation — how breakthrough products
            are positioned, experienced, and adopted. Now focused on helping
            AI-driven products grow in signal-constrained ecosystems where
            precision, experimentation, and storytelling must work together.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--surface)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          eyebrow="Expertise"
          title="What she brings to a VP role"
          lede="Targeting VP Marketing and VP Product leadership roles — full-funnel ownership from positioning to revenue."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e) => (
            <Card key={e.title}>
              <h3 className="text-base font-bold">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/70">
                {e.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          eyebrow="Selected impact"
          title="Results across SaaS, marketplaces, and Fortune 500"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {impact.map((i) => (
            <Card
              key={i.title}
              className="border-l-4"
              style={{ borderLeftColor: "var(--accent)" }}
            >
              <p className="font-display text-3xl font-semibold text-[var(--accent)]">
                {i.metric}
              </p>
              <h3 className="mt-2 text-base font-bold">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/70">
                {i.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--surface)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          eyebrow="Experience"
          title="25+ years from consulting to VP"
          lede="Full history in LinkedIn PDF. Highlights below — contact for resume."
        />
        <ol className="mt-8 space-y-4">
          {experience.map((r) => (
            <li
              key={`${r.company}-${r.role}`}
              className="rounded-2xl border border-[var(--line)] bg-white p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold">
                  {r.role} · {r.company}
                </h3>
                <p className="text-xs font-semibold text-[var(--foreground)]/55">
                  {r.period} · {r.location}
                </p>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--foreground)]/75">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <SectionHeading
          eyebrow="Recommendations"
          title="Trusted by engineering and executive partners"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <Quote
                className="text-[var(--accent)]"
                size={24}
                aria-hidden
              />
              <blockquote className="mt-3 text-[15px] leading-relaxed text-[var(--foreground)]/80">
                “{t.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-bold">{t.name}</p>
              <p className="text-xs text-[var(--foreground)]/60">{t.context}</p>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-xs text-[var(--foreground)]/55">
          Sourced from public LinkedIn recommendations. Full profile:{" "}
          <a className="underline" href={site.linkedin}>
            linkedin.com/in/melaniedeleon
          </a>
        </p>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-[var(--line)] bg-[var(--surface)]"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-16">
        <div>
          <SectionHeading eyebrow="Education" title="Foundation" />
          <ul className="mt-6 space-y-3">
            {education.map((e) => (
              <li
                key={e.school}
                className="flex items-start gap-3 rounded-2xl border border-[var(--line)] bg-white p-4"
              >
                {e.school === "Honors" ? (
                  <Award size={20} aria-hidden />
                ) : (
                  <GraduationCap size={20} aria-hidden />
                )}
                <div>
                  <p className="text-sm font-bold">{e.school}</p>
                  <p className="text-sm text-[var(--foreground)]/65">
                    {e.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-[var(--brand)] p-8 text-[var(--brand-ink)]">
          <h3 className="font-display text-2xl font-semibold">
            Seeking VP Marketing / VP Product roles
          </h3>
          <p className="mt-3 text-sm leading-relaxed opacity-85">
            SaaS, marketplaces, emerging tech, and consumer platforms. AI-driven
            GTM, PLG, and lifecycle — with full revenue accountability.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-bold text-[var(--brand)]"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-white/40 px-6 text-sm font-semibold"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
