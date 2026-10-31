import { ArrowUp } from 'lucide-react';
import { navSections, socialLinks } from '../data/navigation';
import { scrollToTop } from '../lib/scroll';

export default function Footer({ onNavigateSection }) {
  return (
    <footer className="bg-ink text-ivory pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-taupe/30">
          {/* Brand & Tagline */}
          <div className="space-y-3">
            <div className="font-serif text-3xl font-bold tracking-tight flex items-center gap-1">
              <span>Ruba</span>
              <span className="text-accent" aria-hidden="true">.</span>
            </div>
            <p className="text-sm text-footer-muted font-light max-w-sm">
              Building at the intersection of AI, technology & product design.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-8 gap-y-1 text-sm text-footer-muted">
            {navSections.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigateSection(link.id)}
                className="py-2.5 hover:text-ivory transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 hover:text-ivory transition-colors"
            >
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 hover:text-ivory transition-colors"
            >
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-footer-muted font-light">
          <div>© 2026 Ruba. All rights reserved.</div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 py-2.5 hover:text-ivory transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>
      </div>
    </footer>
  );
}
