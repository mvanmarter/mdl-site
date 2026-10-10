export const site = {
  name: "Melanie de Leon",
  title: "VP Marketing & Product Development",
  headline:
    "Head of Marketing | Emerging Tech, SaaS & Consumer Platforms | PLG & Lifecycle Strategy | AI-Driven Omnichannel GTM",
  location: "Los Angeles Metropolitan Area",
  email: "deleon.melanie@gmail.com",
  phone: "310-736-5993",
  phoneHref: "tel:+13107365993",
  linkedin: "https://www.linkedin.com/in/melaniedeleon",
  tagline:
    "Product marketing and growth leader helping SaaS, emerging tech, digital media, and Fortune 500 consumer companies build AI-driven go-to-market engines that connect product, customer insight, and revenue outcomes.",
  photoNote:
    "Drop a high-res headshot at public/headshot.jpg to replace the monogram placeholder. See THEMING.md.",
} as const;

export const stats = [
  { value: "$0 → 8-figure", label: "Marketplace revenue scaled" },
  { value: "+47%", label: "Marketing efficiency (MER) lift" },
  { value: "+20%", label: "Activation & premium adoption (SaaS)" },
  { value: "+77%", label: "Med-tech revenue growth" },
] as const;

export const brands = [
  "Warner Bros.",
  "Disney / ABC",
  "Sony Pictures",
  "CBS",
  "CNN",
  "Discovery",
  "HSN",
  "Kraft",
  "Nestlé",
  "GSN",
  "G4",
] as const;

export const expertise = [
  {
    title: "Product Marketing & Positioning",
    body: "Segmentation, value props, messaging frameworks, packaging, and competitive intelligence that sharpen differentiation.",
  },
  {
    title: "AI-Driven Omnichannel GTM",
    body: "Full-funnel execution across paid social, SEM, influencer/UGC, affiliate, programmatic, SEO/ASO/AEO, and lifecycle.",
  },
  {
    title: "Product-Led Growth & Lifecycle",
    body: "Onboarding optimization, activation, expansion, and retention loops embedded directly in the product experience.",
  },
  {
    title: "Growth Analytics & MarTech",
    body: "GA4, MMP, CRM, CMS, MMM, incrementality testing, and experimentation systems for real attribution and faster learning.",
  },
  {
    title: "Team Leadership & Scale",
    body: "Built and led PMM, growth, lifecycle, creative, content, and analytics teams plus agency partners with full P&L ownership.",
  },
  {
    title: "0→1 Launches & Transformation",
    body: "From CPG mobile apps (Top 5 Lifestyle, Clio) to streaming, interactive TV, ecommerce, and second-screen experiences.",
  },
] as const;

export const impact = [
  {
    metric: "$0 → 8-figure",
    title: "Marketplace growth engine",
    body: "Built an AI-enabled full-funnel engine at Platphorm; marketing drove 100% of portfolio revenue with consistent YoY growth.",
  },
  {
    metric: "+47% MER",
    title: "Efficiency at scale",
    body: "Multimillion-dollar budget, data-driven media mix, AI creative and MMM to lift return on marketing investment.",
  },
  {
    metric: "+20% activation",
    title: "PLG in SaaS (Kareo)",
    body: "Redesigned onboarding, simplified journeys, and bundled upsells to lift subscription activation and premium adoption.",
  },
  {
    metric: "Top 5 App Store",
    title: "CPG mobile first (Kraft)",
    body: "First CPG-branded native iPhone/Android apps, ~90% CRM opt-in, Ad Age / Clio recognition, $3M incremental revenue.",
  },
] as const;

export type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Vector CMO",
    role: "Fractional Product Marketing & GTM Advisor",
    period: "Feb 2026 – Present",
    location: "Los Angeles, CA",
    bullets: [
      "Fractional product marketing and GTM leadership for early- and growth-stage tech companies.",
      "Partnering with founders and executive teams while pursuing a full-time executive leadership opportunity.",
    ],
  },
  {
    company: "Platphorm, LLC",
    role: "Vice President, Product Marketing & Strategy",
    period: "Feb 2018 – Feb 2026 · 8 yrs",
    location: "San Francisco, CA",
    bullets: [
      "Scaled mobile + web marketplaces from $0 to 8-figure revenue; owned revenue-generation strategy end to end.",
      "Improved MER 47% via media-mix optimization, incrementality testing, AI creative, and MMM.",
      "Built/led PMM, growth, lifecycle, creative, content, analytics + agencies; owned multimillion-dollar budget.",
      "Deployed modern MarTech (GA4, GTM, MMP, CRM, CMS) for real-time attribution and full-funnel visibility.",
    ],
  },
  {
    company: "Platphorm, LLC",
    role: "Director, Product Marketing & Strategy",
    period: "Feb 2016 – Feb 2018 · 2 yrs",
    location: "San Francisco, CA",
    bullets: [
      "Led 0→1 launches; owned GTM across paid, owned, earned.",
      "Built lifecycle programs (email/push/SMS) lifting conversion, engagement, retention, and win-back.",
    ],
  },
  {
    company: "Kareo",
    role: "Senior Product / UX Designer",
    period: "May 2015 – Feb 2016",
    location: "San Francisco, CA",
    bullets: [
      "Led 0→1 product vision for patient-engagement and practice-marketing SaaS.",
      "+20% activation and premium adoption via onboarding redesign and bundled upsells.",
    ],
  },
  {
    company: "Independent Consultant",
    role: "Product + Digital Strategy Consultant",
    period: "Jul 2009 – May 2015",
    location: "Los Angeles",
    bullets: [
      "MaestroConference: +37% conversion via modular guided webinar flows.",
      "SkinMedica: +12% retention / subscription ARR via repositioning and integrated marketing.",
      "VCA/Antech SaaS: analytics + dashboard redesign for continuous optimization.",
    ],
  },
  {
    company: "Meredith Xcelerated Marketing",
    role: "Client Partner / Account Director",
    period: "Dec 2006 – Jul 2009",
    location: "Los Angeles, CA",
    bullets: [
      "Led Emerging Media practice for Warner Bros., Disney/ABC, Sony, Nestlé, Kraft (+$3M incremental).",
      "Launched first CPG native apps (Top 5 Lifestyle, ~90% opt-in, Clio); ABC National Bingo Night drove 3M+ downloads.",
    ],
  },
  {
    company: "Earlier leadership",
    role: "TANDBERG TV · UL · thinktank · KPMG · Kearney",
    period: "1998 – 2006",
    location: "Los Angeles / Chicago",
    bullets: [
      "Interactive TV/VOD for CBS, CNN, Discovery, G4 (+33% engagement, GSN).",
      "UL High Tech: +77% med-tech revenue via demand gen; CRM enablement for 5,000+ sellers.",
      "Kearney: +42% coverage, +59% top-tier placements (WSJ, NYT, Businessweek).",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "From an engineering perspective she was one of my favorite cross-functional partners. We were philosophically aligned on how to build products and grow the business, and I always valued her perspective and counsel. Melanie is a thoughtful leader who built and managed her marketing team carefully, and she always kept her eye on the bigger picture.",
    name: "Jim Edelstein",
    context: "Engineering partner · Platphorm, ~10 years",
  },
  {
    quote:
      "Melanie raises the bar on clarity, accountability, and execution across complex teams. She sets clear expectations and holds people to them. Ownership is explicit, follow-through is real, and risks are surfaced early. She moves fluidly between strategy and execution.",
    name: "Dan Sava",
    context: "Cross-functional executive",
  },
] as const;

export const education = [
  {
    school: "Northwestern University",
    detail: "Bachelor's degree, Communications",
  },
  {
    school: "General Assembly",
    detail: "User Experience Design Immersive",
  },
  {
    school: "Honors",
    detail: "CLIO Award · Ad Age recognition",
  },
] as const;

export const skills = [
  "Consumer Product Marketing",
  "Media Buying",
  "Social Media Optimization",
  "PLG",
  "Lifecycle",
  "GTM Strategy",
  "MarTech",
  "MMM",
] as const;
