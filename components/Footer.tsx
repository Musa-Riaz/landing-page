import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-surface text-text-primary">
      <div className="divider" />

      <div className="max-w-site mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M16 4L8 12V28H24V12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 12V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="16" cy="18" r="2" fill="currentColor"/>
              <path d="M12 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-playfair text-xl font-bold">Castlery</span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed">
            The calm way to manage your rental portfolio.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'YouTube'].map(platform => (
              <a key={platform} href="#" className="text-text-secondary hover:text-primary transition-colors cursor-pointer">
                <span className="text-xs font-medium">{platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Product */}
        <div className="flex flex-col gap-4">
          <h4 className="font-playfair text-lg font-medium">Product</h4>
          <ul className="flex flex-col gap-3">
            {['Features', 'Pricing', 'Changelog', 'Security', 'API'].map(link => (
              <li key={link}>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-sm cursor-pointer">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-playfair text-lg font-medium">Company</h4>
          <ul className="flex flex-col gap-3">
            {['About', 'Blog', 'Careers', 'Press', 'Contact'].map(link => (
              <li key={link}>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-sm cursor-pointer">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className="flex flex-col gap-4">
          <h4 className="font-playfair text-lg font-medium">Resources</h4>
          <ul className="flex flex-col gap-3">
            {['Help Centre', 'Landlord Guides', 'Tax Templates', 'Community Forum'].map(link => (
              <li key={link}>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors text-sm cursor-pointer">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 lg:px-20 py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary text-xs">
          © 2026 Castlery Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms', 'Cookies'].map(link => (
            <Link key={link} href="#" className="text-text-secondary hover:text-primary transition-colors text-xs cursor-pointer">{link}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
