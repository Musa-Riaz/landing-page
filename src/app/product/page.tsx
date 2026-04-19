import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";
import { ArchitecturalLines } from "@/components/Visuals";
import Link from "next/link";

/* ── Shared mini-panel wrapper ───────────────────────────── */
function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "bg-white rounded-sm border border-brand-border shadow-warm overflow-hidden h-full",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ── UI Preview: Rent Dashboard ──────────────────────────── */
function RentDashboard() {
  const rows = [
    { unit: "Flat 1", addr: "14 Birch Lane", tenant: "Sarah M.", due: "01 May", amt: "£1,450", status: "Paid", cls: "text-brand-success bg-brand-success/10" },
    { unit: "Unit 2A", addr: "22 Grove St.", tenant: "James W.", due: "01 May", amt: "£1,200", status: "Overdue — 3 days", cls: "text-brand-accent bg-brand-accent/10" },
    { unit: "Flat 4B", addr: "8 Park Rd.", tenant: "Priya D.", due: "01 May", amt: "£950", status: "Paid", cls: "text-brand-success bg-brand-success/10" },
    { unit: "Room 3", addr: "7 Mill St.", tenant: "Liam O.", due: "05 May", amt: "£600", status: "Pending", cls: "text-amber-600 bg-amber-50" },
  ];
  return (
    <Panel>
      <div className="flex justify-between items-center px-6 py-4 border-b border-brand-border bg-brand-background/60">
        <span className="font-mono text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Live Rent Roll — May 2026</span>
        <span className="font-body text-[10px] text-brand-text-secondary italic">4 active units</span>
      </div>
      <table className="w-full text-[11px]">
        <thead>
          <tr className="border-b border-brand-border/50">
            {["Unit", "Tenant", "Due", "Amount", "Status"].map(h => (
              <th key={h} className="py-3 px-4 text-left font-body font-bold text-brand-text-secondary uppercase tracking-wider text-[9px]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.unit} className="border-b border-brand-border/30 hover:bg-brand-background/40 transition-colors">
              <td className="py-3 px-4">
                <div className="font-bold text-brand-primary">{r.unit}</div>
                <div className="text-brand-text-secondary text-[9px]">{r.addr}</div>
              </td>
              <td className="py-3 px-4 font-body text-brand-primary">{r.tenant}</td>
              <td className="py-3 px-4 font-mono text-brand-text-secondary">{r.due}</td>
              <td className="py-3 px-4 font-mono font-bold text-brand-primary">{r.amt}</td>
              <td className="py-3 px-4">
                <span className={cn("px-2 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wide", r.cls)}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

/* ── UI Preview: Tenant Profile ──────────────────────────── */
function TenantProfile() {
  return (
    <Panel>
      {/* Header */}
      <div className="px-6 py-5 border-b border-brand-border flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-base flex-shrink-0">SM</div>
        <div>
          <div className="font-display font-bold text-brand-primary text-lg">Sarah Miller</div>
          <div className="font-body text-xs text-brand-text-secondary">Flat 1 · 14 Birch Lane · <span className="text-brand-success font-semibold">Active</span></div>
        </div>
        <div className="ml-auto text-[10px] font-body text-brand-text-secondary text-right">
          <div>Lease expires</div>
          <div className="font-mono font-bold text-brand-primary">31 Mar 2027</div>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex border-b border-brand-border">
        {["Documents", "Payments", "Maintenance", "Notes"].map((tab, i) => (
          <button key={tab} className={cn("px-5 py-3 text-[10px] font-bold uppercase tracking-widest font-body transition-colors", i === 0 ? "text-brand-primary border-b-2 border-brand-primary -mb-px" : "text-brand-text-secondary hover:text-brand-primary")}>
            {tab}
          </button>
        ))}
      </div>
      {/* Document list */}
      <div className="p-5 flex flex-col gap-3">
        {[
          { name: "Lease Agreement.pdf", date: "12 Apr 2026", size: "842 KB" },
          { name: "Photo ID — Passport.jpg", date: "10 Apr 2026", size: "1.2 MB" },
          { name: "Reference Letter.pdf", date: "09 Apr 2026", size: "256 KB" },
          { name: "Move-In Checklist.pdf", date: "15 Apr 2026", size: "4.1 MB" },
        ].map(f => (
          <div key={f.name} className="flex items-center gap-3 p-3 border border-brand-border rounded-sm hover:bg-brand-background transition-colors cursor-pointer group">
            <div className="w-8 h-8 bg-brand-primary/8 rounded-sm flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-body text-[11px] font-semibold text-brand-primary truncate">{f.name}</div>
              <div className="font-body text-[9px] text-brand-text-secondary">{f.size}</div>
            </div>
            <div className="font-mono text-[9px] text-brand-text-secondary">{f.date}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* ── UI Preview: Maintenance Request ─────────────────────── */
function MaintenanceRequest() {
  const steps = [
    { label: "Submitted", date: "14 May · 09:12", done: true },
    { label: "Assigned", date: "14 May · 10:45", done: true },
    { label: "In Progress", date: "15 May · 08:30", done: true, current: true },
    { label: "Resolved", date: "—", done: false },
  ];
  return (
    <Panel>
      <div className="p-6 border-b border-brand-border flex items-start justify-between gap-4">
        <div>
          <div className="font-display font-bold text-brand-primary text-lg mb-1">Boiler not heating — Flat 3B</div>
          <div className="font-body text-xs text-brand-text-secondary">Reported by: James Wilson · 14 May 2026</div>
        </div>
        <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">Urgent</span>
      </div>
      <div className="p-6 flex flex-col gap-5">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-start gap-4">
            <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
              <div className={cn(
                "w-3 h-3 rounded-full border-2 transition-all",
                s.done ? "bg-brand-primary border-brand-primary" : "bg-white border-brand-border"
              )} />
              {i < steps.length - 1 && <div className="w-px flex-1 bg-brand-border mt-1" style={{ height: "28px" }} />}
            </div>
            <div className={cn("flex flex-col pb-1", s.current && "bg-brand-background border border-brand-border rounded-sm px-3 py-2 -mx-1")}>
              <span className={cn("font-body text-sm font-semibold", s.done ? "text-brand-primary" : "text-brand-text-secondary")}>{s.label}</span>
              <span className="font-mono text-[10px] text-brand-text-secondary">{s.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 pb-6 border-t border-brand-border pt-5 flex justify-between items-center">
        <div>
          <div className="font-body text-[9px] uppercase text-brand-text-secondary tracking-widest mb-1">Assigned contractor</div>
          <div className="font-body text-sm font-bold text-brand-primary">Pete&apos;s Heating Services</div>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-widest text-brand-primary border border-brand-border px-4 py-2 hover:border-brand-primary transition-colors">View Invoice</button>
      </div>
    </Panel>
  );
}

/* ── UI Preview: Financial Summary ───────────────────────── */
function FinancialSummary() {
  const bars = [
    { label: "Mortgage", pct: 45, color: "bg-brand-primary" },
    { label: "Insurance", pct: 12, color: "bg-brand-primary/50" },
    { label: "Repairs", pct: 8, color: "bg-brand-success" },
    { label: "Other", pct: 5, color: "bg-brand-border" },
  ];
  return (
    <Panel>
      <div className="p-6 border-b border-brand-border">
        <div className="font-display font-bold text-brand-primary text-xl mb-1">14 Birch Lane</div>
        <div className="font-body text-xs text-brand-text-secondary italic">Financial Year 2025 / 26</div>
      </div>
      <div className="p-6 flex flex-col gap-6">
        <div>
          <div className="flex justify-between items-baseline mb-3">
            <span className="font-body text-[11px] text-brand-text-secondary uppercase tracking-widest">Monthly Income</span>
            <span className="font-mono text-2xl font-bold text-brand-primary">£1,450</span>
          </div>
          {/* Stacked bar */}
          <div className="w-full h-5 flex rounded-sm overflow-hidden gap-0.5 mb-4">
            {bars.map(b => (
              <div key={b.label} className={cn("h-full", b.color)} style={{ width: `${b.pct}%` }} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {bars.map(b => (
              <div key={b.label} className="flex items-center gap-1.5 text-[9px] text-brand-text-secondary uppercase tracking-wide">
                <div className={cn("w-2 h-2 rounded-full", b.color)} />
                {b.label}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-brand-background border border-brand-border rounded-sm p-5 text-center">
          <div className="font-body text-[10px] text-brand-text-secondary uppercase tracking-widest mb-2">Net income / month</div>
          <div className="font-mono text-3xl font-bold text-brand-primary">£579.42</div>
          <button className="mt-4 font-body text-[10px] font-bold uppercase tracking-widest text-brand-accent border-b border-brand-accent/30 hover:border-brand-accent transition-colors pb-0.5">Download Annual Summary →</button>
        </div>
      </div>
    </Panel>
  );
}

/* ── UI Preview: Vacancy Card ────────────────────────────── */
function VacancyCard() {
  return (
    <Panel>
      <div className="p-6 border-b border-brand-border">
        <div className="flex justify-between items-start mb-1">
          <div className="font-display font-bold text-brand-primary text-xl">Unit 2A — 22 Grove Street</div>
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-brand-accent/10 text-brand-accent rounded-full border border-brand-accent/20">Vacant</span>
        </div>
        <div className="font-body text-xs text-brand-text-secondary">Vacant since: <strong className="text-brand-primary">14 days ago</strong> · Daily cost: <strong className="font-mono text-brand-accent">£48.39</strong></div>
      </div>
      <div className="p-6 flex flex-col gap-5">
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-body text-[10px] text-brand-text-secondary uppercase tracking-widest">Listing live on 3 platforms</span>
            <span className="font-mono text-[10px] font-bold text-brand-success">Active</span>
          </div>
          <div className="w-full h-1.5 bg-brand-border rounded-full overflow-hidden">
            <div className="h-full bg-brand-success w-[100%] rounded-full" />
          </div>
          <div className="flex gap-4 mt-3">
            {["Zillow", "Rightmove", "Bayut"].map(p => (
              <span key={p} className="font-body text-[9px] font-bold text-brand-primary uppercase tracking-wider">{p}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="font-body text-[10px] text-brand-text-secondary uppercase tracking-widest mb-3">Applicants — 4 enquiries</div>
          {[
            { name: "Marcus T.", date: "18 May", badge: "Viewing scheduled", cls: "text-brand-success bg-brand-success/10" },
            { name: "Kate M.",   date: "19 May", badge: "New enquiry",       cls: "text-brand-primary bg-brand-primary/8" },
            { name: "Ali R.",    date: "20 May", badge: "New enquiry",       cls: "text-brand-primary bg-brand-primary/8" },
          ].map(a => (
            <div key={a.name} className="flex justify-between items-center py-2 border-b border-brand-border/50 last:border-0">
              <div>
                <div className="font-body text-[11px] font-semibold text-brand-primary">{a.name}</div>
                <div className="font-mono text-[9px] text-brand-text-secondary">{a.date}</div>
              </div>
              <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded-full", a.cls)}>{a.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ── UI Preview: Renewal Pipeline ────────────────────────── */
function RenewalPipeline() {
  const leases = [
    { tenant: "S. Ahmed",  addr: "Unit 3C", exp: "15 Aug 2026", days: 87, cls: "text-brand-success bg-brand-success/10" },
    { tenant: "L. Brown",  addr: "Flat 1",  exp: "17 Jul 2026", days: 34, cls: "text-amber-600 bg-amber-50" },
    { tenant: "J. Wilson", addr: "Unit 2A", exp: "02 Jun 2026", days: 12, cls: "text-brand-accent bg-brand-accent/10" },
  ];
  return (
    <Panel>
      <div className="px-6 py-4 border-b border-brand-border bg-brand-background/60">
        <span className="font-mono text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Renewal Pipeline — 90-day view</span>
      </div>
      <div className="flex flex-col">
        {leases.map((l, i) => (
          <div key={l.tenant} className={cn("flex items-center justify-between px-6 py-5", i < leases.length - 1 && "border-b border-brand-border/60")}>
            <div>
              <div className="font-body text-sm font-bold text-brand-primary">{l.tenant} · {l.addr}</div>
              <div className="font-mono text-[10px] text-brand-text-secondary">Expires {l.exp}</div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className={cn("font-mono font-bold text-sm px-3 py-1 rounded-full", l.cls)}>{l.days} days</span>
              {l.days <= 12 && (
                <span className="flex items-center gap-1 text-[9px] text-brand-accent font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-dot" />
                  Offer sent — awaiting sig.
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* ── Feature sections data ───────────────────────────────── */
const FEATURES = [
  {
    eyebrow: "Rent collection",
    title: "Know who's paid. The moment they pay.",
    body: [
      "No more WhatsApp screenshots. Castlery tracks payments in real-time and updates your dashboard the instant a payment lands.",
      "Automated reminders go out at 7, 3, and 1 day before the due date — dramatically reducing late payments without you lifting a finger.",
      "Partial payments are logged with reason notes. Late fees are calculated automatically based on your exact lease terms.",
    ],
    bullets: ["Automated SMS & email reminders", "Live payment dashboard", "Partial payment logging", "Late fee automation", "Full PDF payment history"],
    visual: <RentDashboard />,
  },
  {
    eyebrow: "Tenant profiles",
    title: "A complete record for every tenant.",
    body: [
      "Every tenant gets a dedicated digital vault: signed lease, scanned ID, references, pet and vehicle details, and a full communication log.",
      "Move-in and move-out photo checklists are linked directly to the tenancy, creating a defensible audit trail.",
      "The Tenant Portal lets renters view their own documents, payment history, and submit requests — reducing inbound messages by 70%.",
    ],
    bullets: ["Digital lease storage", "Built-in e-signatures", "ID & document vault", "Timestamped communication log", "Self-service tenant portal"],
    visual: <TenantProfile />,
  },
  {
    eyebrow: "Maintenance",
    title: "From request to resolved. Nothing lost.",
    body: [
      "Tenants submit requests through their portal with photos. You're notified instantly — no more texts buried in your personal phone.",
      "Assign to your saved contractor database with one click. Contractors receive a professional email brief automatically.",
      "Every invoice and job photo is stored permanently against the property. Add internal notes invisible to the tenant.",
    ],
    bullets: ["Tenant portal submissions", "Saved contractor database", "Status tracking timeline", "Permanent invoice storage", "Internal notes"],
    visual: <MaintenanceRequest />,
  },
  {
    eyebrow: "Financials",
    title: "Tax time shouldn't be stressful.",
    body: [
      "Per-property monthly P&L with expense categories: mortgage, insurance, repairs, management fees, utilities, and miscellaneous.",
      "Annual tax-ready PDF summarises net rental income per property — formatted specifically for self-assessment.",
      "One-click export to CSV for your accountant, or share access directly with your bookkeeper.",
    ],
    bullets: ["Monthly P&L per property", "Expense categorisation", "Annual tax summaries", "CSV & PDF export", "Income trend charts"],
    visual: <FinancialSummary />,
  },
  {
    eyebrow: "Vacancies",
    title: "Empty units cost money every day.",
    body: [
      "Vacant units are flagged on your dashboard with a live daily cost counter so you always know the urgency.",
      "Create a listing from within Castlery — photos, description, asking rent, available date — and push it to Zillow, Rightmove, and Bayut with one click.",
      "Track all applicants, schedule viewings, mark preferred candidates, and generate offer letters without leaving the platform.",
    ],
    bullets: ["Daily vacancy cost counter", "One-click listing creation", "Zillow, Rightmove & Bayut sync", "Applicant tracking", "Offer letter generation"],
    visual: <VacancyCard />,
  },
  {
    eyebrow: "Lease renewals",
    title: "Never miss a renewal again.",
    body: [
      "Castlery automatically identifies leases expiring in the next 90 days and creates a renewal task in your dashboard.",
      "Send a digital renewal offer from a template in one click. Tenants counter-sign without printing a single page.",
      "If no action is taken, escalating reminders go out automatically. Mark a unit as 'not renewing' to trigger the vacancy workflow instantly.",
    ],
    bullets: ["90-day expiry pipeline", "One-click renewal offers", "Digital counter-signing", "Escalating auto-reminders", "Vacancy workflow integration"],
    visual: <RenewalPipeline />,
  },
];

/* ── Page Component ──────────────────────────────────────── */
export default function ProductPage() {
  return (
    <div className="flex flex-col">

      {/* ── Editorial hero ── */}
      <section className="pt-44 pb-28 px-6 md:px-12 bg-white paper-texture border-b border-brand-border" aria-labelledby="product-hero-heading">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <ScrollReveal>
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-accent mb-6 block">
              The platform
            </span>
          </ScrollReveal>
          <ScrollReveal stagger={1}>
            <h1 id="product-hero-heading" className="font-display text-5xl md:text-7xl text-brand-primary mb-8 max-w-4xl leading-[1.08]">
              Every part of your rental business. One place.
            </h1>
          </ScrollReveal>
          <ScrollReveal stagger={2}>
            <p className="font-body text-xl text-brand-text-secondary max-w-2xl leading-relaxed">
              Six core tools, built to work together — so nothing falls through the cracks.
              No separate subscriptions. No integrations that break.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Feature deep-dives ── */}
      {FEATURES.map((feature, i) => (
        <section
          key={feature.eyebrow}
          id={feature.eyebrow.toLowerCase().replace(/\s+/g, "-")}
          className={cn(
            "py-28 md:py-36 px-6 md:px-12 relative",
            i % 2 === 0 ? "bg-white" : "bg-brand-background"
          )}
          aria-labelledby={`feature-${i}-heading`}
        >
          {/* Architectural top rule */}
          <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 max-w-7xl mx-auto h-px bg-brand-border" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Text column */}
            <div className={cn("flex flex-col gap-7", i % 2 === 1 && "lg:order-2")}>
              <ScrollReveal>
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-accent">
                  {feature.eyebrow}
                </span>
              </ScrollReveal>
              <ScrollReveal stagger={1}>
                <h2 id={`feature-${i}-heading`} className="font-display text-4xl md:text-5xl text-brand-primary leading-tight">
                  {feature.title}
                </h2>
              </ScrollReveal>
              <ScrollReveal stagger={2} className="flex flex-col gap-5">
                {feature.body.map((p, j) => (
                  <p key={j} className="font-body text-[17px] text-brand-text-secondary leading-relaxed">{p}</p>
                ))}
              </ScrollReveal>
              <ScrollReveal stagger={3}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2" aria-label="What's included">
                  {feature.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="text-brand-success flex-shrink-0" aria-hidden="true">✓</span>
                      <span className="font-body font-medium text-brand-primary text-[15px]">{b}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Visual column */}
            <ScrollReveal
              className={cn("relative group", i % 2 === 1 && "lg:order-1")}
              stagger={1}
            >
              <div className="absolute -inset-8 bg-brand-primary/4 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
              <div className="relative transition-transform duration-500 group-hover:scale-[1.01]">
                {feature.visual}
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ── Integration logos ── */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-brand-border" aria-label="Integrations">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display text-3xl text-brand-primary">Connects with the tools you already use</h2>
          </ScrollReveal>
          <ScrollReveal stagger={1}>
            <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8 opacity-35 hover:opacity-60 transition-opacity duration-500">
              {["Stripe", "Xero", "QuickBooks", "Zapier", "DocuSign", "Zillow", "Rightmove", "Slack", "Google Calendar"].map(logo => (
                <span key={logo} className="font-display text-xl font-bold text-brand-primary tracking-tight">{logo}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Bottom CTA band ── */}
      <section className="relative bg-brand-primary py-28 md:py-36 px-6 md:px-12 text-white overflow-hidden" aria-label="Call to action">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <ArchitecturalLines />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-5xl mb-4">Ready to see it in action?</h2>
            </ScrollReveal>
            <ScrollReveal stagger={1}>
              <p className="font-body text-xl text-white/70">A 20-minute demo. No sales pressure. Just the product.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal stagger={2} className="flex flex-col sm:flex-row items-center gap-6 flex-shrink-0">
            <Link
              href="/demo"
              className="px-10 py-4 bg-white text-brand-primary font-body font-bold rounded-sm border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200"
            >
              Book a 20-minute demo
            </Link>
            <Link
              href="/signup"
              className="font-body font-bold text-white/80 hover:text-white uppercase tracking-[0.15em] text-sm border-b border-white/30 pb-0.5 hover:border-white transition-all duration-200"
            >
              or start free →
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
