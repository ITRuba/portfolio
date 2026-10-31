import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navSections } from '../data/navigation';

function StatusBadge({ className = '' }) {
  return (
    <div className={`items-center gap-2 bg-blush/70 border border-blush-strong/50 rounded-full text-xs text-muted font-medium ${className}`}>
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
      </span>
      <span>Exploring AI & Intelligent Systems</span>
    </div>
  );
}

export default function Navbar({ onNavigateSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  const links = navSections.filter((s) => s.id !== 'contact');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-ivory/90 backdrop-blur-md border-b border-line/80 shadow-xs py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => handleNavClick('top')}
            aria-label="Ruba — back to top of home page"
            className="group text-2xl font-serif font-bold text-ink tracking-tight flex items-center gap-1.5"
          >
            <span>Ruba</span>
            <span className="text-accent group-hover:rotate-12 transition-transform duration-300" aria-hidden="true">.</span>
          </button>

          <StatusBadge className="hidden lg:flex px-3 py-1" />
        </div>

        {/* Desktop Links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="py-2 hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 bg-ink text-ivory hover:bg-accent-ink rounded-full transition-all duration-300 shadow-xs"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden p-2 -mr-2 text-ink hover:text-accent-ink"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden bg-ivory border-b border-line px-6 py-6 space-y-4"
        >
          <StatusBadge className="flex px-3 py-1.5 w-fit mb-4" />

          <div className="flex flex-col gap-4 text-base font-medium text-ink">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2 border-b border-line/50 hover:text-accent-ink"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="mt-2 w-full text-center py-3 bg-ink text-ivory rounded-full font-medium"
            >
              Contact Me
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
