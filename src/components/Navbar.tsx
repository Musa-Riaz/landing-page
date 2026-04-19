"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLinks = [
  { name: "Product", href: "/product" },
  { name: "Pricing", href: "/pricing" },
  { name: "Changelog", href: "/changelog" },
  { name: "Company", href: "/company" },
];

const CastleryLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Castle battlements */}
    <rect x="4" y="12" width="24" height="16" rx="1" fill="white" opacity="0.95"/>
    <rect x="4" y="8" width="5" height="8" rx="1" fill="white"/>
    <rect x="13.5" y="8" width="5" height="8" rx="1" fill="white"/>
    <rect x="23" y="8" width="5" height="8" rx="1" fill="white"/>
    {/* Gate arch */}
    <path d="M13 28V22a3 3 0 0 1 6 0v6H13z" fill="#1B4332"/>
    {/* Key bow */}
    <circle cx="16" cy="17" r="3" stroke="#1B4332" strokeWidth="1.5" fill="none"/>
    {/* Key teeth */}
    <path d="M16 20v4M14 22h2M14 24h2" stroke="#1B4332" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "navbar-scrolled py-3" : "py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Castlery home">
            <div className="w-9 h-9 bg-brand-primary rounded-sm overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <CastleryLogo />
            </div>
            <span
              className={cn(
                "font-display text-[22px] font-bold tracking-tight transition-colors",
                isScrolled ? "text-brand-primary" : "text-brand-primary"
              )}
            >
              Castlery
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="listitem"
                className={cn(
                  "font-body text-[15px] font-medium relative transition-colors duration-200 group",
                  pathname === link.href
                    ? "text-brand-primary"
                    : "text-brand-text-secondary hover:text-brand-primary"
                )}
              >
                {link.name}
                {/* active underline */}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/signin"
              className="font-body text-[15px] font-medium text-brand-text-secondary hover:text-brand-primary transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              id="navbar-cta"
              className="group flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-sm font-body text-[14px] font-semibold hover:bg-brand-primary/90 transition-all duration-200 shadow-sm"
            >
              Start free
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-sm hover:bg-brand-background transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block w-5 h-0.5 bg-brand-primary transition-all duration-300 origin-center",
                isMobileMenuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 bg-brand-primary transition-all duration-300",
                isMobileMenuOpen && "opacity-0 scale-x-0"
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 bg-brand-primary transition-all duration-300 origin-center",
                isMobileMenuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 bg-white z-[60] md:hidden flex flex-col transition-transform duration-500 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
            <div className="w-9 h-9 bg-brand-primary rounded-sm overflow-hidden">
              <CastleryLogo />
            </div>
            <span className="font-display text-xl font-bold text-brand-primary">Castlery</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-sm hover:bg-brand-background transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex-1 overflow-auto px-6 py-10 flex flex-col gap-1">
          {NavLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "font-display text-4xl font-bold py-4 transition-colors border-b border-brand-border/30",
                pathname === link.href ? "text-brand-primary" : "text-brand-primary/50 hover:text-brand-primary"
              )}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile CTAs */}
        <div className="px-6 pb-10 flex flex-col gap-3">
          <Link
            href="/signin"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-4 text-center font-body font-semibold text-brand-primary border-2 border-brand-border rounded-sm hover:border-brand-primary transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-4 text-center bg-brand-primary text-white font-body font-semibold rounded-sm"
          >
            Start free — 3 units forever
          </Link>
        </div>
      </div>
    </>
  );
}
