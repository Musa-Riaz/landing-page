import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const RELEASES = [
  {
    version: "v2.5.0",
    date: "April 2026",
    type: "major" as const,
    headline: "Lease renewal pipeline + listing syndication launch",
    items: [
      { type: "New" as const,         text: "Lease renewal pipeline — automatically identifies leases expiring within 90 days, creates a renewal task, and sends escalating reminders if no action is taken." },
      { type: "New" as const,         text: "Listing syndication — push your vacant unit listing to Zillow, Rightmove, and Bayut simultaneously with one click from within Castlery." },
      { type: "Improvement" as const, text: "Rent dashboard now shows a rolling 3-month income trend alongside the live payment status table." },
    ],
    visualLabel: "Renewal pipeline",
    visual: (
      <div className="bg-brand-background border border-brand-border rounded-sm p-5 mt-6 flex flex-col gap-3">
        {[
          { label: "S. Ahmed — Unit 3C", days: "87 days", cls: "text-brand-success bg-brand-success/10 border-brand-success/20" },
          { label: "L. Brown — Flat 1",  days: "34 days", cls: "text-amber-600 bg-amber-50 border-amber-200" },
          { label: "J. Wilson — Unit 2A", days: "12 days", cls: "text-brand-accent bg-brand-accent/10 border-brand-accent/20" },
        ].map(l => (
          <div key={l.label} className="flex justify-between items-center p-3 bg-white border border-brand-border rounded-sm text-xs">
            <span className="font-body font-medium text-brand-primary">{l.label}</span>
            <span className={cn("font-mono font-bold px-2.5 py-0.5 rounded-full border", l.cls)}>{l.days}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    version: "v2.4.0",
    date: "February 2026",
    type: "major" as const,
    headline: "Financial reporting overhaul + Xero integration",
    items: [
      { type: "New" as const,   text: "Per-property P&L with visual expense breakdown — mortgage, insurance, repairs, management fees, and miscellaneous tracked monthly." },
      { type: "New" as const,   text: "Xero two-way sync — push rent income and log expenses directly to your Xero account in real-time." },
      { type: "New" as const,   text: "Annual tax summary PDF generator — formatted specifically for UK self-assessment, with per-property net income breakdown." },
      { type: "Fix" as const,   text: "Partial payment amounts now correctly excluded from overdue balance calculations in financial reports." },
    ],
    visualLabel: "Financial summary card",
    visual: (
      <div className="bg-brand-background border border-brand-border rounded-sm p-5 mt-6">
        <div className="font-mono text-[10px] font-bold text-brand-primary mb-3 uppercase tracking-widest">14 Birch Lane — Net: £579/mo</div>
        <div className="w-full h-4 flex rounded-sm overflow-hidden gap-0.5">
          {[{ w: "45%", c: "bg-brand-primary" }, { w: "12%", c: "bg-brand-primary/50" }, { w: "8%", c: "bg-brand-success" }, { w: "35%", c: "bg-brand-border" }].map((s, i) => (
            <div key={i} style={{ width: s.w }} className={cn("h-full", s.c)} />
          ))}
        </div>
        <div className="flex gap-4 mt-3 text-[9px] text-brand-text-secondary uppercase">
          <span>Mortgage</span><span>Insurance</span><span>Repairs</span><span>Net</span>
        </div>
      </div>
    ),
  },
  {
    version: "v2.3.0",
    date: "December 2025",
    type: "minor" as const,
    headline: "Maintenance contractor management + mobile improvements",
    items: [
      { type: "New" as const,         text: "Saved contractor database — store preferred tradespeople with contact details, specialisations, and rate cards." },
      { type: "New" as const,         text: "Contractors now receive a formatted email brief automatically when assigned to a maintenance request." },
      { type: "Improvement" as const, text: "Maintenance status page rebuilt for mobile — full timeline and photo viewer now usable on all screen sizes." },
      { type: "Improvement" as const, text: "Photo upload now supports HEIC format natively, so iPhone photos no longer need conversion." },
      { type: "Fix" as const,         text: "Timezone edge case: due date reminders now correctly account for UTC offsets for properties managed outside the UK." },
    ],
  },
  {
    version: "v2.2.0",
    date: "October 2025",
    type: "minor" as const,
    headline: "Tenant portal public launch",
    items: [
      { type: "New" as const,         text: "Tenant portal — tenants can now log in securely to view their active lease, payment history, and submit maintenance requests." },
      { type: "New" as const,         text: "Bulk rent reminder — send a single SMS or email nudge to all tenants with outstanding balances in one action." },
      { type: "Improvement" as const, text: "Document storage limit on Growth plan increased from 10GB to 50GB — at no additional cost." },
      { type: "Fix" as const,         text: "Edge case where e-signature timestamp showed previous day for tenants in UTC+5 and above timezones." },
    ],
  },
];

const TYPE_CONFIG = {
  major: { dot: "bg-brand-success", badge: "bg-brand-success/10 text-brand-success border border-brand-success/20", label: "Major release" },
  minor: { dot: "bg-amber-400",     badge: "bg-amber-50 text-amber-600 border border-amber-200",                 label: "Minor release" },
  patch: { dot: "bg-brand-border",  badge: "bg-brand-background text-brand-text-secondary border border-brand-border", label: "Patch" },
} as const;

const ITEM_CONFIG = {
  New:         { cls: "text-brand-success", label: "New" },
  Improvement: { cls: "text-brand-primary", label: "Improvement" },
  Fix:         { cls: "text-brand-accent",  label: "Fix" },
} as const;

export default function ChangelogPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-44 pb-24 px-6 md:px-12 bg-white border-b border-brand-border paper-texture" aria-labelledby="changelog-heading">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-accent mb-6 block">
              Product Updates
            </span>
          </ScrollReveal>
          <ScrollReveal stagger={1}>
            <h1 id="changelog-heading" className="font-display text-5xl md:text-7xl text-brand-primary mb-8 max-w-3xl leading-[1.08]">
              Building for the <em className="italic font-normal">long term.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal stagger={2}>
            <p className="font-body text-xl text-brand-text-secondary max-w-xl leading-relaxed">
              Major improvements every two months. No bloat, no feature theatre — only what our landlords actually asked for.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="flex-1 px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto flex gap-16 lg:gap-24">

          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-32">
              <p className="font-body text-[10px] uppercase font-bold tracking-[0.2em] text-brand-text-secondary mb-6">Version history</p>
              <nav className="flex flex-col gap-1 border-l border-brand-border pl-4" aria-label="Version list">
                {RELEASES.map(r => (
                  <a
                    key={r.version}
                    href={`#${r.version}`}
                    className="group flex items-center gap-3 py-2 -ml-4 pl-3 border-l-2 border-transparent hover:border-brand-primary transition-all duration-200"
                  >
                    <div className={cn("w-2 h-2 rounded-full flex-shrink-0", TYPE_CONFIG[r.type].dot)} />
                    <div>
                      <div className="font-mono text-xs font-bold text-brand-text-secondary group-hover:text-brand-primary transition-colors">{r.version}</div>
                      <div className="font-body text-[10px] text-brand-text-secondary/60">{r.date}</div>
                    </div>
                  </a>
                ))}
              </nav>
              <div className="mt-10 pt-8 border-t border-brand-border">
                <p className="font-body text-[10px] text-brand-text-secondary mb-2 uppercase tracking-widest">Legend</p>
                {[
                  { dot: "bg-brand-success", label: "Major" },
                  { dot: "bg-amber-400",     label: "Minor" },
                  { dot: "bg-brand-border",  label: "Patch" },
                ].map(l => (
                  <div key={l.label} className="flex items-center gap-2 mb-2">
                    <div className={cn("w-2 h-2 rounded-full", l.dot)} />
                    <span className="font-body text-[11px] text-brand-text-secondary">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-0 min-w-0">
            {RELEASES.map((release, i) => (
              <ScrollReveal
                key={release.version}
                id={release.version}
                className="scroll-mt-36 pb-24 mb-0 border-b border-brand-border last:border-0"
              >
                {/* Version header */}
                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  <span className="font-mono text-sm font-bold text-brand-primary">{release.version}</span>
                  <div className="h-px w-8 bg-brand-border" />
                  <span className="font-body text-sm text-brand-text-secondary italic">{release.date}</span>
                  <span className={cn("font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full", TYPE_CONFIG[release.type].badge)}>
                    {TYPE_CONFIG[release.type].label}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-display text-3xl md:text-4xl text-brand-primary leading-tight mb-10 max-w-2xl">
                  {release.headline}
                </h2>

                {/* Two-column: items + optional visual */}
                <div className={cn("grid grid-cols-1 gap-10", release.visual && "lg:grid-cols-[1fr_280px]")}>
                  <ul className="flex flex-col gap-6" aria-label="Release notes">
                    {release.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <span className={cn("font-body font-bold text-[10px] uppercase tracking-widest mt-1 flex-shrink-0 w-20 text-right", ITEM_CONFIG[item.type].cls)}>
                          {ITEM_CONFIG[item.type].label}
                        </span>
                        <div className="w-px h-5 bg-brand-border mt-1 flex-shrink-0" />
                        <p className="font-body text-[15px] text-brand-text-secondary leading-relaxed">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                  {release.visual && (
                    <div className="lg:self-start">
                      <p className="font-body text-[10px] uppercase tracking-widest text-brand-text-secondary mb-2">{release.visualLabel}</p>
                      {release.visual}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Email subscription ── */}
      <section className="py-28 px-6 md:px-12 bg-brand-background border-t border-brand-border">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-8">
          <ScrollReveal>
            <h3 className="font-display text-3xl text-brand-primary italic">Never miss an update.</h3>
            <p className="font-body text-brand-text-secondary mt-4 leading-relaxed">
              Release notes delivered to your inbox every two months. Product info only — no marketing.
            </p>
          </ScrollReveal>
          <ScrollReveal stagger={1} className="w-full flex flex-col sm:flex-row gap-2">
            <label htmlFor="changelog-email" className="sr-only">Your email address</label>
            <input
              id="changelog-email"
              type="email"
              placeholder="you@example.com"
              className="flex-grow bg-white border border-brand-border px-6 py-4 rounded-sm font-body text-sm placeholder:text-brand-text-secondary/50"
            />
            <button
              type="submit"
              className="bg-brand-primary text-white px-8 py-4 rounded-sm font-body font-bold text-sm hover:bg-brand-primary/90 transition-colors duration-200 flex-shrink-0"
            >
              Subscribe
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
