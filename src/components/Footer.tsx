import Link from "next/link";

const FooterLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/product" },
      { name: "Pricing", href: "/pricing" },
      { name: "Changelog", href: "/changelog" },
      { name: "Security", href: "#" },
      { name: "API", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/company" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Centre", href: "#" },
      { name: "Landlord Guides", href: "#" },
      { name: "Tax Templates", href: "#" },
      { name: "Community Forum", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-background border-t border-brand-border pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Logo Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-brand-primary text-white rounded-sm">
                 <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path d="M4 21v-4l2-3h12l2 3v4H4Z" />
                  <path d="M7 14V7l2-2h6l2 2v7" />
                  <circle cx="12" cy="10" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-brand-primary">
                Castlery
              </span>
            </Link>
            <p className="font-body text-brand-text-secondary text-[15px] leading-relaxed max-w-[240px]">
              The calm way to manage your rental portfolio. Designed for independent landlords.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-brand-border text-brand-text-secondary hover:text-brand-primary hover:border-brand-primary transition-all"
                  aria-label={social}
                >
                  <div className="w-4 h-4 bg-current rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FooterLinks.map((column) => (
            <div key={column.title} className="flex flex-col gap-6">
              <h4 className="font-body font-semibold text-brand-primary uppercase tracking-wider text-xs">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-[15px] text-brand-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-sm text-brand-text-secondary">
            © 2026 Castlery Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-sm text-brand-text-secondary hover:text-brand-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
