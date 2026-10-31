import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onNavigateSection }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#292525] text-[#FBF7F5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#817575]/30">
          {/* Brand & Tagline */}
          <div className="space-y-3">
            <div className="font-serif text-3xl font-bold tracking-tight flex items-center gap-1">
              <span>Ruba</span>
              <span className="text-[#B98286]">.</span>
            </div>
            <p className="text-sm text-[#817575] font-light max-w-sm">
              Building at the intersection of AI, technology & product design.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-8 text-sm text-[#817575]">
            <button
              onClick={() => onNavigateSection('work')}
              className="hover:text-[#FBF7F5] transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => onNavigateSection('about')}
              className="hover:text-[#FBF7F5] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigateSection('skills')}
              className="hover:text-[#FBF7F5] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigateSection('contact')}
              className="hover:text-[#FBF7F5] transition-colors"
            >
              Contact
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FBF7F5] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FBF7F5] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#817575] font-light">
          <div>© 2026 Ruba. All rights reserved.</div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FBF7F5] transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B98286]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
