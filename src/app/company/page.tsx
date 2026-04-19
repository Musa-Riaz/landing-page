"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { ArchitecturalLines } from "@/components/Visuals";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

/* ── Values data ─────────────────────────────────────────── */
const VALUES = [
  {
    slug: "calm",
    title: "Calm over chaos",
    desc: "We build for the moments when something goes wrong — a boiler breaks at midnight, a tenant misses rent. Our software should make those moments manageable, not worse.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 28c7 0 12-5.4 12-12S23 4 16 4 4 9.4 4 16s5 12 12 12Z" />
        <path d="M12 18s1.5 2 4 2 4-2 4-2M12 13h.01M20 13h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "landlords",
    title: "Landlords first",
    desc: "Every feature exists because a real landlord asked for it. We don't build for demos. We build for the person managing 8 properties who just wants the software to work.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 28v-3a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v3M16 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      </svg>
    ),
  },
  {
    slug: "privacy",
    title: "Privacy by default",
    desc: "Tenant data is sensitive. We treat it that way — AES-256 encrypted at rest, daily backups, SOC 2 Type II compliant. Never sold. Never used for advertising.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4 6 8v8c0 6.6 4.4 12.8 10 14 5.6-1.2 10-7.4 10-14V8L16 4Z" />
        <path d="m12 16 3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "lasting",
    title: "Built to last",
    desc: "We'd rather ship one thing that works perfectly than five things that almost work. Reliability isn't a feature — it's the baseline expectation every user deserves.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="10" height="10" rx="1" />
        <rect x="18" y="4" width="10" height="10" rx="1" />
        <rect x="4" y="18" width="10" height="10" rx="1" />
        <rect x="18" y="18" width="10" height="10" rx="1" />
      </svg>
    ),
  },
];

/* ── Team data ───────────────────────────────────────────── */
const TEAM = [
  {
    name: "Oliver Webb",
    role: "Co-founder & CEO",
    initials: "OW",
    bio: "Former product lead at Zoopla. Owns 3 flats in South London and uses Castlery obsessively for all of them.",
    fact: "Has a collection of 40+ antique skeleton keys. The castle turret logo was his idea.",
    hue: "bg-brand-primary",
  },
  {
    name: "Rania Al-Farsi",
    role: "Co-founder & CTO",
    initials: "RA",
    bio: "10 years building distributed systems. Built the entire Castlery backend infrastructure solo in year one — in six months.",
    fact: "Solves a Rubik's cube in under 15 seconds. Says it relaxes her.",
    hue: "bg-brand-primary/80",
  },
  {
    name: "Marcus Chen",
    role: "Head of Design",
    initials: "MC",
    bio: "Ex-Monzo design team. Believes every pixel earns its place. Has printed and taped the WCAG contrast guidelines above his monitor.",
    fact: "Once lived in a tiny house he built from scratch over a summer.",
    hue: "bg-brand-success",
  },
  {
    name: "Aisha Patel",
    role: "Head of Customer Success",
    initials: "AP",
    bio: "Answers every support ticket personally. Set and holds the company record with a 4-minute average first response time.",
    fact: "Fluent in English, Hindi, Gujarati, French, and conversational Mandarin.",
    hue: "bg-brand-success/80",
  },
  {
    name: "Tom Nguyen",
    role: "Senior Engineer",
    initials: "TN",
    bio: "Built the e-signature module in a weekend. Nobody else has reviewed the code because it works perfectly and nobody wants to touch it.",
    fact: "Professional-grade landscape photographer. His Patagonia series sold out.",
    hue: "bg-brand-accent",
  },
  {
    name: "Fatima Okafor",
    role: "Growth Lead",
    initials: "FO",
    bio: "Grew Castlery from 200 to 2,400 landlords in 14 months. Entirely through organic content and word of mouth. Zero paid ads.",
    fact: "Has completed marathons on every continent except Antarctica. She's working on it.",
    hue: "bg-brand-accent/80",
  },
];

/* ── 3D Flip Card ────────────────────────────────────────── */
function TeamCard({ member }: { member: typeof TEAM[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-80 perspective-1000 cursor-pointer"
      onClick={() => setFlipped(f => !f)}
      onKeyDown={(e) => e.key === "Enter" && setFlipped(f => !f)}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`${member.name} — click to reveal fun fact`}
    >
      <div
        className={cn(
          "relative w-full h-full preserve-3d transition-transform duration-700 ease-in-out",
          flipped && "rotate-y-180"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white border border-brand-border shadow-warm rounded-sm backface-hidden flex flex-col items-center justify-center gap-5 p-8 text-center">
          <div className={cn("w-16 h-16 rounded-full text-white flex items-center justify-center font-bold font-body text-xl flex-shrink-0", member.hue)}>
            {member.initials}
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-brand-primary mb-1">{member.name}</h3>
            <div className="font-body text-xs text-brand-accent font-semibold uppercase tracking-[0.15em]">{member.role}</div>
          </div>
          <p className="font-body text-sm text-brand-text-secondary leading-relaxed max-w-[220px]">{member.bio}</p>
          <div className="text-[10px] text-brand-text-secondary/50 font-body uppercase tracking-widest">Click to reveal</div>
        </div>

        {/* Back */}
        <div className={cn("absolute inset-0 rounded-sm backface-hidden rotate-y-180 flex flex-col items-center justify-center gap-6 p-8 text-center text-white", member.hue)}>
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
          </svg>
          <div>
            <div className="font-body text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">Fun fact</div>
            <p className="font-display text-lg italic leading-snug">&ldquo;{member.fact}&rdquo;</p>
          </div>
          <div className="border-t border-white/20 w-16 pt-4">
            <div className="font-body font-bold text-sm">{member.name}</div>
          </div>
          <div className="text-[10px] text-white/50 font-body uppercase tracking-widest">Click to flip back</div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function CompanyPage() {
  return (
    <div className="flex flex-col bg-[#FBF9F6]">

      {/* ── Mission band ── */}
      <section className="relative bg-brand-primary pt-44 pb-32 px-6 md:px-12 text-white overflow-hidden" aria-label="Company mission">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
          <ArchitecturalLines />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <ScrollReveal>
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">Our mission</span>
          </ScrollReveal>
          <ScrollReveal stagger={1}>
            <h1 className="font-display text-4xl md:text-6xl italic leading-tight">
              &ldquo;Landlords shouldn&apos;t need a finance degree and three spreadsheets to run their rental portfolio.&rdquo;
            </h1>
          </ScrollReveal>
          <ScrollReveal stagger={2}>
            <p className="font-body text-xl text-white/65 max-w-xl leading-relaxed">
              We started Castlery to bring calm, architectural order to the chaos of property management — and to build tools that make landlords feel in control, not overwhelmed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-32 px-6 md:px-12" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-28">
          <div className="lg:w-5/12">
            <ScrollReveal>
              <h2 id="story-heading" className="font-display text-4xl md:text-5xl text-brand-primary lg:-ml-10 leading-tight">
                How<br />Castlery<br />started.
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:w-7/12 flex flex-col gap-8">
            <ScrollReveal>
              <p className="font-body text-xl text-brand-primary leading-relaxed font-medium">
                Castlery was started in 2022 by two friends — one a software engineer, one an accidental landlord who inherited three Victorian flats from his grandfather and promptly spent six months drowning in spreadsheets.
              </p>
            </ScrollReveal>
            <ScrollReveal stagger={1} className="flex flex-col gap-6">
              <p className="font-body text-[17px] text-brand-text-secondary leading-relaxed">
                What started as a personal tool for tracking rent payments became something 40 landlords were using within three months — purely by word of mouth. We realised the problem was everywhere: landlords are running real businesses with real financial and legal complexity, and the tools available to them were either built for billion-dollar REITs, or were just polished spreadsheet templates with nicer colours.
              </p>
              <p className="font-body text-[17px] text-brand-text-secondary leading-relaxed">
                Castlery is our answer to that gap. Today we manage over 38,000 units across the UK, Europe, and UAE. We remain a small, independent team with a single focus: building the best property management software for the independent landlord.
              </p>
            </ScrollReveal>

            {/* Stats mini-row */}
            <ScrollReveal stagger={2}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-border">
                {[
                  { val: "2022", label: "Founded" },
                  { val: "38k+", label: "Units managed" },
                  { val: "4 yrs", label: "Profitable" },
                ].map(s => (
                  <div key={s.label}>
                    <div className="font-mono text-2xl font-bold text-brand-primary">{s.val}</div>
                    <div className="font-body text-xs uppercase tracking-widest text-brand-text-secondary mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Values grid ── */}
      <section className="py-28 px-6 md:px-12 bg-white border-y border-brand-border paper-texture" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16 text-center">
            <h2 id="values-heading" className="font-display text-4xl md:text-5xl text-brand-primary">What we believe.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.slug} stagger={(i + 1) as 1|2|3|4} className="flex flex-col gap-5">
                <div className="w-14 h-14 bg-brand-background border border-brand-border rounded-sm flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-brand-primary">{v.title}</h3>
                <p className="font-body text-brand-text-secondary leading-relaxed text-[15px]">{v.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team section ── */}
      <section className="py-32 px-6 md:px-12" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <ScrollReveal>
              <h2 id="team-heading" className="font-display text-4xl md:text-5xl text-brand-primary italic">Meet the team.</h2>
            </ScrollReveal>
          </div>
          <ScrollReveal stagger={1} className="text-center mb-16">
            <p className="font-body text-brand-text-secondary text-lg">Small by design. Every person here is irreplaceable.</p>
            <p className="font-body text-sm text-brand-text-secondary mt-2 italic">Click any card to reveal a fun fact.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} stagger={((i % 3) + 1) as 1|2|3}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investors ── */}
      <section className="py-20 px-6 md:px-12 bg-white border-t border-brand-border" aria-label="Investors">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <ScrollReveal className="mb-10">
            <p className="font-body text-[11px] uppercase font-bold tracking-[0.25em] text-brand-text-secondary/50">Backed by</p>
          </ScrollReveal>
          <ScrollReveal stagger={1}>
            <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6 opacity-25 hover:opacity-50 transition-opacity duration-500">
              {["Y Combinator", "Seedcamp", "LocalGlobe", "Index Ventures"].map(brand => (
                <span key={brand} className="font-display text-2xl font-bold text-brand-primary tracking-tight">{brand}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Open roles CTA ── */}
      <section className="py-40 px-6 md:px-12 bg-[#FBF9F6] text-center border-t border-brand-border paper-texture" aria-label="Join the team">
        <ScrollReveal className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-display text-5xl md:text-6xl text-brand-primary leading-tight">
            We&apos;re building something people genuinely love using.
          </h2>
          <p className="font-body text-xl text-brand-text-secondary leading-relaxed">
            We&apos;re a small team. Every hire matters enormously.
            We&apos;re always looking for designers and engineers who care about
            precision, clarity, and craft.
          </p>
          <Link
            href="/careers"
            className="group inline-flex items-center gap-2 font-display text-2xl text-brand-primary border-b-2 border-brand-border pb-1 hover:border-brand-primary transition-all duration-200 mt-4"
          >
            See open roles at Castlery
            <span className="transition-transform duration-200 group-hover:translate-x-2">→</span>
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}
