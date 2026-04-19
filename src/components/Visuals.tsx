import { cn } from "@/lib/utils";

/**
 * A browser frame containing a simplified Castlery dashboard preview.
 */
export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div className={cn("bg-white rounded-lg shadow-2xl overflow-hidden border border-brand-border flex flex-col h-[500px] w-full", className)}>
      {/* Browser Bar */}
      <div className="bg-[#F1F1F0] px-4 py-3 flex items-center gap-2 border-b border-brand-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="mx-auto bg-white rounded-md px-3 py-1 flex items-center justify-center min-w-[200px] border border-brand-border/50">
          <span className="text-[10px] text-brand-text-secondary font-body">app.castlery.com/portfolio</span>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-brand-background border-r border-brand-border p-4 flex flex-col gap-6 hidden md:flex">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-brand-primary rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full opacity-20" />
            </div>
            <span className="font-display font-bold text-sm text-brand-primary">Castlery</span>
          </div>
          <div className="flex flex-col gap-3">
            {["Portfolio", "Rent", "Tenants", "Maintenance", "Financials"].map((item, i) => (
              <div key={item} className="flex items-center gap-2 group cursor-pointer">
                <div className={cn("w-4 h-4 rounded-sm", i === 0 ? "bg-brand-primary/10 border border-brand-primary/20" : "bg-gray-200")} />
                <span className={cn("text-xs font-medium", i === 0 ? "text-brand-primary" : "text-brand-text-secondary")}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white overflow-hidden">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="font-display text-xl font-bold text-brand-primary mb-1">Portfolio Overview</h3>
              <p className="font-body text-xs text-brand-text-secondary italic">May 2026 — 12 active units</p>
            </div>
            <div className="bg-brand-background px-3 py-1.5 rounded border border-brand-border flex items-center gap-2">
              <span className="text-[10px] font-mono text-brand-primary">Export PDF</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Rent Collected", val: "£14,250", color: "brand-primary" },
              { label: "Overdue", val: "£1,200", color: "brand-accent" },
              { label: "Occupancy", val: "94%", color: "brand-success" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-sm border border-brand-border bg-brand-background/30">
                <p className="text-[10px] text-brand-text-secondary uppercase tracking-wider mb-2">{stat.label}</p>
                <p className={cn("font-mono text-lg font-bold", `text-${stat.color}`)}>{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-brand-border">
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Active Properties</span>
              <span className="text-[10px] text-brand-text-secondary">Sorted by status</span>
            </div>
            {[
              { addr: "14 Birch Lane, Flat 1", tenant: "Sarah Miller", amt: "£1,450", status: "Paid", color: "text-brand-success bg-brand-success/10" },
              { addr: "22 Grove Street, Unit 2A", tenant: "James Wilson", amt: "£1,200", status: "Overdue", color: "text-brand-accent bg-brand-accent/10" },
              { addr: "80 High Street, Flat 4B", tenant: "Priya Das", amt: "£950", status: "Pending", color: "text-amber-600 bg-amber-50" },
            ].map((prop) => (
              <div key={prop.addr} className="flex items-center justify-between py-2 group hover:bg-brand-background/50 transition-colors rounded-sm px-2 -mx-2">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-brand-primary">{prop.addr}</span>
                  <span className="text-[10px] text-brand-text-secondary">{prop.tenant}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs font-medium">{prop.amt}</span>
                  <span className={cn("text-[10px] px-2 py-0.5 rounded-full font-medium", prop.color)}>{prop.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Abstract property icons built from SVG geometric shapes.
 */
export function PropertyIcon({ type, className }: { type: 'key' | 'building' | 'wrench' | 'chart' | 'calendar' | 'document', className?: string }) {
  const baseClass = cn("w-12 h-12 flex items-center justify-center rounded-sm bg-brand-background border border-brand-border text-brand-primary", className);
  
  switch (type) {
    case 'key':
      return (
        <div className={baseClass}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 2l-2 2m-7.61 7a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778ZM12 7l.347 16" />
            <path d="M12 7h4v4h-4z" />
          </svg>
        </div>
      );
    case 'building':
      return (
        <div className={baseClass}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14M8 9h2M14 9h2M8 13h2M14 13h2M8 17h2M14 17h2" />
          </svg>
        </div>
      );
    case 'wrench':
      return (
        <div className={baseClass}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path d="m20.1 3.9-1.3 1.3c-.5.5-.5 1.3 0 1.8l2.6 2.6c.5.5 1.3.5 1.8 0l1.3-1.3c1.5-1.5 1.5-3.9 0-5.4s-3.9-1.5-5.4 0Zm-7.7 7.7L2.5 21.5a1.5 1.5 0 0 0 1.9 1.9l9.9-9.9" />
          </svg>
        </div>
      );
    case 'chart':
      return (
        <div className={baseClass}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18M3 17l6-6 4 4 8-8" />
          </svg>
        </div>
      );
    case 'calendar':
      return (
        <div className={baseClass}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        </div>
      );
    case 'document':
      return (
        <div className={baseClass}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6M16 13H8M16 17H8" />
          </svg>
        </div>
      );
  }
}

/**
 * Geometric background patterns for heroes.
 */
export function ArchitecturalLines({ className }: { className?: string }) {
  return (
    <svg className={cn("absolute inset-0 w-full h-full text-brand-primary opacity-5 pointer-events-none", className)} viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0V800M200 0V800M350 0V800M500 0V800M650 0V800M800 0V800" stroke="currentColor" strokeWidth="1" />
      <path d="M0 50H800M0 200H800M0 350H800M0 500H800M0 650H800M0 800H800" stroke="currentColor" strokeWidth="1" />
      <path d="M200 200L500 500M200 500L500 200" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}
