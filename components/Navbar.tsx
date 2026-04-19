import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-warm' : 'bg-transparent'
    }`}>
      <div className="max-w-site mx-auto px-6 lg:px-20 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M16 4L8 12V28H24V12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="18" r="2" fill="currentColor"/>
            <path d="M12 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="font-playfair text-2xl font-bold text-text-primary">Castlery</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {['Product', 'Pricing', 'Changelog', 'Resources'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/signin" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium cursor-pointer">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="cta-button bg-primary text-white px-5 py-2.5 rounded-sm text-sm font-medium flex items-center gap-2 cursor-pointer"
          >
            Start free — 3 units free forever
            <span className="arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text-primary cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[60] transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-80 bg-surface shadow-xl p-8 flex flex-col gap-8">
          <button
            className="self-end p-2 text-text-primary cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-6 mt-8">
            {['Product', 'Pricing', 'Changelog', 'Resources'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-text-primary text-xl font-playfair hover:text-primary transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <Link
              href="/signin"
              className="text-text-secondary text-center py-3 border border-border cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="cta-button bg-primary text-white text-center py-3 rounded-sm font-medium cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
