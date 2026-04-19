"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";


const BILLING_CYCLES = [
  { id: "monthly", name: "Monthly" },
  { id: "annual", name: "Annual", discount: "save 20%" },
];

const PRICING_PLANS = [
  {
    name: "Free",
    description: "For landlords just getting started",
    price: { monthly: 0, annual: 0 },
    subtitle: "/month",
    features: [
      "Up to 3 units",
      "Rent tracking (manual)",
      "Tenant profiles (basic)",
      "Maintenance requests",
      "1GB document storage",
      "Email support",
    ],
    cta: "Start free — no card needed",
    href: "/signup",
  },
  {
    name: "Growth",
    description: "For landlords who want everything automated",
    price: { monthly: 15, annual: 12 },
    subtitle: "/unit /month",
    badge: "MOST POPULAR",
    features: [
      "Everything in Free, plus:",
      "Automated payment reminders",
      "E-signature lease management",
      "Financial reports + tax summaries",
      "Listing syndication (3 platforms)",
      "Lease renewal pipeline",
      "50GB document storage",
      "Priority support (< 4hr response)",
    ],
    cta: "Start 14-day free trial",
    href: "/signup",
    featured: true,
  },
  {
    name: "Portfolio",
    description: "For professional property managers",
    price: { monthly: "Custom", annual: "Custom" },
    subtitle: "",
    features: [
      "Everything in Growth, plus:",
      "Unlimited units",
      "White-label tenant portal (your brand)",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SSO / team permissions",
      "SLA uptime guarantee",
    ],
    cta: "Talk to our team",
    href: "/contact",
  },
];

const FAQS = [
  { q: "Can I really use Castlery free forever for 3 units?", a: "Yes. Our Free plan is truly free forever for up to 3 units. We believe independent landlords starting out deserve professional tools. You only pay when you scale beyond your third unit." },
  { q: "How does per-unit pricing work for Growth?", a: "Growth pricing is based on the total number of active units in your portfolio. If you have 10 units, and pay annually, it's $120/month. We only count active units—if a property is marked as 'inactive' or 'sold', it doesn't count towards your quota." },
  { q: "What happens if I go over my unit limit?", a: "If you're on the Free plan and try to add a 4th unit, you'll be prompted to upgrade to Growth. If you're on Growth, you can add units instantly; your billing will adjust automatically on your next cycle." },
  { q: "Is my data secure?", a: "Security is our baseline. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We perform daily backups and are SOC 2 Type II compliant. Your data is your own—we never sell it." },
  { q: "Can I export all my data if I leave?", a: "Absolutely. We don't believe in data lock-in. You can export your full rent history, tenant data, and document vault as a structured ZIP file (CSV and PDF) at any time with one click." },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [units, setUnits] = useState(10);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculateTotal = (val: number) => {
    const rate = billingCycle === "monthly" ? 15 : 12;
    return val * rate;
  };

  return (
    <div className="flex flex-col">
      {/* Editorial Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 bg-white paper-texture">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <ScrollReveal>
             <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent mb-6 block">Pricing</span>
          </ScrollReveal>
          <ScrollReveal stagger={1}>
            <h1 className="font-display text-5xl md:text-7xl text-brand-primary mb-8 max-w-4xl">
              Pay for what you use. <br />
              <span className="italic font-normal">Nothing more.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal stagger={2}>
            <p className="font-body text-xl text-brand-text-secondary max-w-2xl leading-relaxed mb-12">
              Free for small portfolios. Scales as you grow. No hidden fees, no set-up costs.
            </p>
          </ScrollReveal>

          {/* Billing Toggle */}
          <ScrollReveal stagger={3} className="bg-brand-background p-1.5 rounded-sm border border-brand-border flex gap-1 relative z-10">
            {BILLING_CYCLES.map((cycle) => (
              <button
                key={cycle.id}
                onClick={() => setBillingCycle(cycle.id)}
                className={cn(
                  "px-8 py-2.5 rounded-sm font-body font-bold text-sm transition-all flex items-center gap-2",
                  billingCycle === cycle.id
                    ? "bg-brand-primary text-white shadow-lg"
                    : "text-brand-text-secondary hover:text-brand-primary"
                )}
              >
                {cycle.name}
                {cycle.discount && (
                  <span className={cn("text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest", billingCycle === cycle.id ? "bg-white/20 text-white" : "bg-brand-success/10 text-brand-success")}>
                    {cycle.discount}
                  </span>
                )}
              </button>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-20 border-t border-brand-border">
          {PRICING_PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} stagger={i+1} className="h-full">
              <div className={cn(
                "h-full p-10 rounded-sm flex flex-col transition-all duration-500",
                plan.featured 
                  ? "bg-white border-[1.5px] border-brand-primary shadow-[0_20px_50px_rgba(27,67,50,0.1)] lg:scale-105 relative z-20" 
                  : "bg-brand-background/40 border border-brand-border hover:bg-white hover:border-brand-primary/30"
              )}>
                {plan.badge && (
                  <span className="absolute top-0 right-10 -translate-y-1/2 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                )}
                
                <div className="mb-10">
                  <h3 className="font-display text-2xl font-bold text-brand-primary mb-2">{plan.name}</h3>
                  <p className="font-body text-sm text-brand-text-secondary">{plan.description}</p>
                </div>

                <div className="mb-8 items-baseline">
                  <span className="font-mono text-5xl font-bold text-brand-primary tracking-tighter">
                    {typeof plan.price[billingCycle as 'monthly' | 'annual'] === 'number' 
                      ? `$${plan.price[billingCycle as 'monthly' | 'annual']}`
                      : plan.price[billingCycle as 'monthly' | 'annual']}
                  </span>
                  <span className="font-body text-sm text-brand-text-secondary ml-2 uppercase tracking-widest font-semibold">{plan.subtitle}</span>
                </div>

                <ul className="flex flex-col gap-4 mb-12 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={f} className={cn("flex items-start gap-3", j === 0 && f.includes("plus") && "font-bold text-xs uppercase tracking-widest text-brand-primary pt-4 border-t border-brand-border/20")}>
                      <span className="text-brand-success text-sm pt-0.5">✓</span>
                      <span className="font-body text-[15px] text-brand-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={cn(
                    "w-full py-4 rounded-sm font-body font-bold text-center transition-all",
                    plan.featured 
                      ? "bg-brand-primary text-white hover:bg-brand-primary/90" 
                      : "bg-white border border-brand-border text-brand-primary hover:border-brand-primary"
                  )}
                >
                  {plan.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Unit Calculator */}
      <section className="py-32 px-6 md:px-12 bg-brand-background border-y border-brand-border">
         <div className="max-w-4xl mx-auto flex flex-col items-center">
            <ScrollReveal className="text-center mb-16">
               <h2 className="font-display text-4xl text-brand-primary mb-4">How much will Castlery cost for my portfolio?</h2>
               <p className="font-body text-brand-text-secondary">Slide to your actual unit count for accurate pricing.</p>
            </ScrollReveal>
            
            <ScrollReveal className="w-full bg-white p-12 rounded-sm shadow-warm border border-brand-border flex flex-col items-center gap-12">
               <div className="w-full space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="font-body font-bold text-brand-primary uppercase tracking-widest text-xs">Portfolio Size</span>
                    <span className="font-mono text-3xl font-bold text-brand-primary">{units} <span className="text-sm uppercase tracking-normal">units</span></span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={units} 
                    onChange={(e) => setUnits(parseInt(e.target.value))}
                    className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                  <div className="flex justify-between text-[10px] text-brand-text-secondary font-mono">
                    <span>01</span>
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>40</span>
                    <span>50+</span>
                  </div>
               </div>

               <div className="h-px w-20 bg-brand-border" />

               <div className="text-center">
                  <p className="font-body text-brand-text-secondary mb-4">
                    At <span className="font-bold text-brand-primary text-lg">{units} units</span>, Castlery Growth costs:
                  </p>
                  <p className="font-mono text-6xl font-bold text-brand-primary mb-4 tracking-tighter">
                    ${calculateTotal(units)}<span className="text-lg">/mo</span>
                  </p>
                  <p className="font-body text-xs text-brand-text-secondary uppercase tracking-[0.2em] font-semibold">
                    ({billingCycle} billing) — that&apos;s ${billingCycle === 'monthly' ? 15 : 12} per unit.
                  </p>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* Feature Comparison (Simplified for demo) */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-20">
            <h2 className="font-display text-4xl text-brand-primary border-b border-brand-border pb-8">Compare capabilities</h2>
          </ScrollReveal>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-brand-border">
                  <th className="py-6 font-display font-bold text-brand-primary text-xl">Core Features</th>
                  <th className="py-6 px-4 font-body font-bold text-brand-primary text-center">Free</th>
                  <th className="py-6 px-4 font-body font-bold text-brand-primary text-center">Growth</th>
                  <th className="py-6 px-4 font-body font-bold text-brand-primary text-center">Portfolio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: "Payment tracking", free: "✓", growth: "✓", portfolio: "✓" },
                  { f: "Automated reminders", free: "✗", growth: "✓", portfolio: "✓" },
                  { f: "E-signatures", free: "—", growth: "✓", portfolio: "✓" },
                  { f: "Financial P&L", free: "—", growth: "✓", portfolio: "✓" },
                  { f: "Global syndication", free: "—", growth: "✓", portfolio: "✓" },
                  { f: "API Access", free: "—", growth: "—", portfolio: "✓" },
                  { f: "Support", free: "Email", growth: "Priority", portfolio: "Dedicated" },
                ].map((row, i) => (
                  <tr key={row.f} className="border-b border-brand-border/50 even:bg-brand-background/30 text-[15px]">
                    <td className="py-6 font-body font-medium text-brand-primary">{row.f}</td>
                    <td className={cn("py-6 px-4 text-center font-mono", row.free === "✓" ? "text-brand-success" : "text-brand-text-secondary opacity-40")}>{row.free}</td>
                    <td className={cn("py-6 px-4 text-center font-mono", row.growth === "✓" ? "text-brand-success" : "text-brand-text-secondary opacity-40")}>{row.growth}</td>
                    <td className={cn("py-6 px-4 text-center font-mono", row.portfolio === "✓" ? "text-brand-success" : "text-brand-text-secondary opacity-40")}>{row.portfolio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-32 px-6 md:px-12 bg-brand-background">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="font-display text-4xl text-brand-primary">Frequently asked questions</h2>
          </ScrollReveal>
          
          <div className="flex flex-col gap-6">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} className="bg-white border border-brand-border rounded-sm overflow-hidden" stagger={i}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-brand-background/50 transition-colors"
                >
                  <span className="font-display font-bold text-lg text-brand-primary">{faq.q}</span>
                  <span className={cn("text-2xl transition-transform duration-300", openFaq === i ? "rotate-45" : "rotate-0")}>+</span>
                </button>
                <div 
                  className={cn(
                    "px-8 overflow-hidden transition-all duration-500 ease-in-out",
                    openFaq === i ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="font-body text-brand-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Overlay */}
      <section className="py-40 px-6 md:px-12 bg-white text-center paper-texture">
         <ScrollReveal>
            <h2 className="font-display text-5xl text-brand-primary mb-8 italic">Ready to scale your portfolio?</h2>
            <Link
              href="/signup"
              className="inline-block bg-brand-primary text-white px-12 py-5 rounded-sm font-body font-bold text-lg hover:bg-brand-accent transition-colors shadow-xl"
            >
              Get started for free
            </Link>
         </ScrollReveal>
      </section>
    </div>
  );
}
