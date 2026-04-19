import Link from "next/link";
import { DashboardPreview, ArchitecturalLines, PropertyIcon } from "@/components/Visuals";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-12 overflow-hidden bg-brand-background paper-texture">
        {/* Faint architectural background */}
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-[0.035] pointer-events-none">
          <ArchitecturalLines />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 xl:gap-24 items-center relative z-10">

          {/* Left */}
          <div className="flex flex-col items-start gap-7">
            <ScrollReveal>
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-accent">
                Property management, simplified
              </span>
            </ScrollReveal>

            <ScrollReveal stagger={1}>
              <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl leading-[1.08] text-brand-primary max-w-xl">
                Your rental portfolio.<br />
                <em className="font-normal not-italic italic">Finally under control.</em>
              </h1>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <p className="font-body text-lg text-brand-text-secondary leading-relaxed max-w-[480px]">
                Castlery replaces the spreadsheets, the WhatsApp threads, and
                the missed renewal dates. One platform for everything — rent,
                tenants, maintenance, and money.
              </p>
            </ScrollReveal>

            <ScrollReveal stagger={3} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                id="hero-cta-primary"
                href="/signup"
                className="group inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-sm font-body font-semibold text-[15px] hover:bg-brand-primary/90 transition-all duration-200 shadow-warm-lg"
              >
                Start free — no credit card
                <svg aria-hidden="true" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link
                id="hero-cta-secondary"
                href="/product"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-body font-semibold text-[15px] text-brand-primary"
              >
                See a 2-minute demo
                <svg aria-hidden="true" className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
                <span className="absolute bottom-3 left-8 right-8 h-px bg-brand-primary/30 group-hover:bg-brand-primary transition-colors duration-200" />
              </Link>
            </ScrollReveal>

            <ScrollReveal stagger={4}>
              <div className="flex items-center gap-5 pt-2">
                <div role="img" aria-label="5 star rating" className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <div className="h-4 w-px bg-brand-border" />
                <span className="font-body text-sm text-brand-text-secondary">
                  <strong className="text-brand-primary font-semibold">4.9/5</strong> from 680 reviews · Trusted by 2,400+ landlords
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Dashboard Preview */}
          <ScrollReveal stagger={2} className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-2xl bg-brand-primary/5 blur-2xl" aria-hidden="true" />
            <div className="relative animate-breath">
              <DashboardPreview />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────── */}
      <section className="bg-brand-primary py-14 px-6 md:px-12" aria-label="Key metrics">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { val: "2,400+", label: "Landlords" },
            { val: "38,000+", label: "Units managed" },
            { val: "$420M+", label: "Rent collected" },
            { val: "99.7%", label: "Uptime" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col gap-2 text-white",
                i > 0 && "md:pl-10 md:border-l md:border-white/15"
              )}
            >
              <span className="font-mono text-3xl md:text-4xl font-bold tracking-tight">{stat.val}</span>
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM → SOLUTION ─────────────────────────── */}
      <section className="py-32 px-6 md:px-12 bg-white" aria-labelledby="problem-heading">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

          <div className="lg:w-5/12">
            <ScrollReveal>
              <h2 id="problem-heading" className="font-display text-4xl md:text-5xl text-brand-primary lg:-ml-16">
                Sound<br />familiar?
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:w-7/12 flex flex-col gap-10">
            {/* Problems */}
            <ul className="flex flex-col gap-5" aria-label="Common landlord problems">
              {[
                "Chasing rent via bank transfer screenshots",
                "Maintenance requests buried in WhatsApp",
                "Lease renewals missed until it's too late",
                "Tax time means exporting 12 months of transactions manually",
                "Tenant documents scattered across email and Google Drive",
              ].map((problem, i) => (
                <ScrollReveal key={problem} stagger={Math.min(i + 1, 5) as 1|2|3|4|5}>
                  <li className="flex items-start gap-4 group cursor-default">
                    <span className="text-brand-accent font-bold mt-0.5 text-lg select-none" aria-hidden="true">✗</span>
                    <span className="font-body text-lg text-brand-text-secondary leading-snug">{problem}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            {/* Divider */}
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-brand-border" />
            </div>

            {/* Solutions */}
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="font-display text-2xl md:text-3xl text-brand-primary">Here&apos;s what Castlery does instead</h3>
                <span className="text-brand-primary text-2xl" aria-hidden="true">→</span>
              </div>
            </ScrollReveal>
            <ul className="flex flex-col gap-5" aria-label="Castlery solutions">
              {[
                "Automated rent tracking with a live payment dashboard",
                "Centralised maintenance desk with photos and status",
                "90-day lease renewal pipeline with automatic alerts",
                "One-click annual tax-ready P&L summaries",
                "Digital document vault for every lease, ID, and reference",
              ].map((solution, i) => (
                <ScrollReveal key={solution} stagger={Math.min(i + 1, 5) as 1|2|3|4|5}>
                  <li className="flex items-start gap-4">
                    <span className="text-brand-success font-bold mt-0.5 text-lg select-none" aria-hidden="true">✓</span>
                    <span className="font-body text-lg text-brand-primary font-medium leading-snug">{solution}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FEATURE BENTO GRID ─────────────────────────── */}
      <section className="py-32 px-6 md:px-12 bg-brand-background" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 id="features-heading" className="font-display text-4xl md:text-5xl text-brand-primary mb-5">
                Designed for how you actually work.
              </h2>
            </ScrollReveal>
            <ScrollReveal stagger={1}>
              <p className="font-body text-lg text-brand-text-secondary leading-relaxed">
                Not enterprise real estate software. The tool a landlord with a real portfolio needs.
              </p>
            </ScrollReveal>
          </div>

          {/* Asymmetric bento: 7+5 / 4+4+4 / 5+7 */}
          <div className="grid grid-cols-12 gap-6">

            {/* Rent – large */}
            <ScrollReveal className="col-span-12 lg:col-span-7" stagger={1}>
              <FeatureCard
                icon={<PropertyIcon type="key" />}
                title="Rent Collection"
                desc="Automated reminders, live payment dashboard, and late fee automation — all linked to your lease terms."
                preview={<RentPreview />}
              />
            </ScrollReveal>

            {/* Tenant – medium */}
            <ScrollReveal className="col-span-12 lg:col-span-5" stagger={2}>
              <FeatureCard
                icon={<PropertyIcon type="building" />}
                title="Tenant Management"
                desc="Digital leases, e-signatures, document vault, and a portal for your tenants."
                preview={<TenantPreview />}
              />
            </ScrollReveal>

            {/* Row 2: 3 equal */}
            {([
              { icon: <PropertyIcon type="wrench" />, title: "Maintenance", desc: "Portal submissions, contractor assignment, real-time status tracking." },
              { icon: <PropertyIcon type="chart" />, title: "Financials", desc: "Per-property P&L, expense categories, and tax-ready annual summaries." },
              { icon: <PropertyIcon type="calendar" />, title: "Vacancy", desc: "Daily cost counter, one-click listing syndication to Zillow, Rightmove, and Bayut." },
            ] as const).map((f, i) => (
              <ScrollReveal key={f.title} className="col-span-12 sm:col-span-6 lg:col-span-4" stagger={(i + 1) as 1|2|3}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </ScrollReveal>
            ))}

            {/* Renewal callout – accent */}
            <ScrollReveal className="col-span-12 lg:col-span-5" stagger={1}>
              <FeatureCard
                icon={<PropertyIcon type="document" />}
                title="Lease Renewals"
                desc="Automatically identify expiring leases 90 days out. Send offers. Counter-sign digitally."
                preview={<RenewalPreview />}
              />
            </ScrollReveal>

            {/* Narrative card */}
            <ScrollReveal className="col-span-12 lg:col-span-7" stagger={2}>
              <div className="bg-brand-primary p-10 md:p-14 rounded-sm text-white flex flex-col justify-center gap-6 h-full min-h-[280px]">
                <h3 className="font-display text-3xl md:text-4xl italic font-normal leading-snug">
                  Everything connects, so nothing falls through the cracks.
                </h3>
                <p className="font-body text-white/75 text-lg leading-relaxed">
                  From move-in checklists to final tax returns, Castlery gives your portfolio the architectural structure it deserves.
                </p>
                <Link href="/product" className="font-body font-bold text-white text-sm uppercase tracking-[0.15em] border-b border-white/30 pb-1 self-start hover:border-white transition-colors duration-200">
                  Explore all features →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────── */}
      <section className="py-32 px-6 md:px-12 bg-white overflow-hidden" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-20 text-center">
            <h2 id="how-heading" className="font-display text-4xl md:text-5xl text-brand-primary">Up and running in minutes.</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              { n: "01", title: "Add your properties", body: "Import via address, add unit details, and upload existing leases and tenant info in minutes." },
              { n: "02", title: "Invite your tenants", body: "Tenants get a portal login to sign leases digitally, submit maintenance requests, and view payment history." },
              { n: "03", title: "Run your portfolio", body: "Collect rent automatically, manage issues, generate reports, and renew leases — all from one calm dashboard." },
            ].map((step, i) => (
              <ScrollReveal key={step.n} stagger={(i + 1) as 1|2|3} className="relative pt-16">
                <div className="watermark-num absolute -top-22 left-0 select-none" aria-hidden="true">
                  {step.n}
                </div>
                <h3 className="font-display text-2xl font-bold mb-5 text-brand-primary">{step.title}</h3>
                <p className="font-body text-brand-text-secondary leading-relaxed text-[17px]">{step.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────── */}
      <section className="py-32 px-6 md:px-12 bg-brand-background" aria-label="Customer testimonials">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Large quote */}
          <ScrollReveal className="lg:col-span-7">
            <figure className="bg-white p-10 md:p-14 shadow-warm border-l-4 border-brand-primary h-full flex flex-col justify-between gap-10">
              <blockquote className="font-display text-3xl md:text-4xl italic text-brand-primary leading-snug">
                &ldquo;I used to spend every Sunday sorting through bank statements to work out who&apos;d paid. Now Castlery does it in seconds. I genuinely don&apos;t know how I managed before.&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold font-body text-sm" aria-hidden="true">SM</div>
                <div>
                  <div className="font-body font-bold text-brand-primary">Sarah Miller</div>
                  <div className="font-body text-sm text-brand-text-secondary">Portfolio landlord · London</div>
                </div>
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* Two smaller quotes */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-16">
            {[
              { initials: "JK", quote: "The maintenance tracking alone is worth every penny. My contractors actually get briefed properly now.", name: "James Knight", meta: "12 units · Manchester" },
              { initials: "PD", quote: "My clients can see their portfolio performance in real time. It's made me look incredibly professional.", name: "Priya Das", meta: "Property manager · Dubai" },
            ].map((t, i) => (
              <ScrollReveal key={t.name} stagger={(i + 1) as 1|2} className={i === 1 ? "lg:ml-8" : ""}>
                <figure className="bg-white p-8 shadow-warm border border-brand-border flex flex-col gap-6">
                  <blockquote className="font-display text-xl italic text-brand-primary leading-snug">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs" aria-hidden="true">{t.initials}</div>
                    <div>
                      <div className="font-body font-bold text-brand-primary text-sm">{t.name}</div>
                      <div className="font-body text-xs text-brand-text-secondary">{t.meta}</div>
                    </div>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section className="py-40 px-6 md:px-12 bg-white text-center paper-texture" aria-label="Call to action">
        <ScrollReveal>
          <h2 className="font-display text-5xl md:text-6xl text-brand-primary mb-6">Start managing smarter.</h2>
          <p className="font-body text-xl text-brand-text-secondary mb-12 max-w-md mx-auto leading-relaxed">
            Free for up to 3 units. No credit card. No time limit.
          </p>
          <Link
            id="bottom-cta"
            href="/signup"
            className="group inline-flex items-center gap-3 bg-brand-primary text-white px-12 py-5 rounded-sm font-body font-bold text-lg hover:bg-brand-primary/90 transition-all duration-200 shadow-warm-lg"
          >
            Create your free account
            <svg aria-hidden="true" className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}

/* ── Sub-components ──────────────────────────────────────── */

function FeatureCard({
  icon,
  title,
  desc,
  preview,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  preview?: React.ReactNode;
}) {
  return (
    <article className="group bg-white p-8 md:p-10 rounded-sm shadow-warm border border-brand-border border-t-[3px] border-t-transparent hover:border-t-brand-primary transition-all duration-200 h-full flex flex-col">
      <div className="mb-7">{icon}</div>
      <h3 className="font-display text-2xl font-bold mb-3 text-brand-primary">{title}</h3>
      <p className="font-body text-brand-text-secondary leading-relaxed mb-6 flex-grow">{desc}</p>
      {preview && <div className="mt-auto">{preview}</div>}
    </article>
  );
}

function RentPreview() {
  return (
    <div className="bg-brand-background p-5 rounded-sm border border-brand-border">
      <div className="flex flex-col gap-3">
        {[
          { t: "Sarah M. · Flat 1", s: "Paid", c: "text-brand-success bg-brand-success/10" },
          { t: "James W. · Unit 2A", s: "Overdue", c: "text-brand-accent bg-brand-accent/10" },
          { t: "Liam O. · Room 3", s: "Paid", c: "text-brand-success bg-brand-success/10" },
        ].map((r) => (
          <div key={r.t} className="flex justify-between items-center text-xs">
            <span className="font-body text-brand-primary font-medium">{r.t}</span>
            <span className={cn("font-body font-bold px-2 py-0.5 rounded-full text-[10px]", r.c)}>{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TenantPreview() {
  return (
    <div className="flex items-center gap-4 bg-brand-background p-5 rounded-sm border border-brand-border">
      <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">SM</div>
      <div className="flex-1 min-w-0">
        <div className="font-body font-bold text-brand-primary text-sm truncate">Sarah Miller</div>
        <div className="font-body text-brand-text-secondary text-xs">Flat 1 · Lease active</div>
      </div>
      <span className="font-body text-[10px] font-bold text-brand-success bg-brand-success/10 px-2 py-0.5 rounded-full flex-shrink-0">Active</span>
    </div>
  );
}

function RenewalPreview() {
  return (
    <div className="flex flex-col gap-3 bg-brand-background p-5 rounded-sm border border-brand-border">
      {[
        { name: "Unit 3C · S. Ahmed", days: "87 days", c: "text-brand-success bg-brand-success/10" },
        { name: "Flat 1 · L. Brown", days: "34 days", c: "text-amber-600 bg-amber-50" },
        { name: "Unit 2A · J. Wilson", days: "12 days", c: "text-brand-accent bg-brand-accent/10" },
      ].map((r) => (
        <div key={r.name} className="flex justify-between items-center text-xs">
          <span className="font-body text-brand-primary font-medium">{r.name}</span>
          <span className={cn("font-mono font-bold px-2 py-0.5 rounded-full", r.c)}>{r.days}</span>
        </div>
      ))}
    </div>
  );
}
