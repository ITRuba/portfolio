import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Sparkles } from 'lucide-react';

export default function Navbar({ activeCaseStudy, onBackToHome, onNavigateSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (activeCaseStudy) {
      onBackToHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF7F5]/90 backdrop-blur-md border-b border-[#E8DEDA]/80 shadow-xs py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (activeCaseStudy) onBackToHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group text-2xl font-serif font-bold text-[#292525] tracking-tight flex items-center gap-1.5 focus:outline-none"
          >
            <span>Ruba</span>
            <span className="text-[#B98286] group-hover:rotate-12 transition-transform duration-300">.</span>
          </button>

          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#F7E8E8]/70 border border-[#E8C8CA]/50 rounded-full text-xs text-[#817575] font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B98286] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B98286]"></span>
            </span>
            <span>Exploring AI & Intelligent Systems</span>
          </div>
        </div>

        {/* Case Study Back Link OR Main Links */}
        {activeCaseStudy ? (
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFFFF] hover:bg-[#F7E8E8] text-[#292525] text-sm font-medium border border-[#E8DEDA] rounded-full transition-all duration-200 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#B98286]" />
            <span>Back to All Projects</span>
          </button>
        ) : (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#817575]">
            <button
              onClick={() => handleNavClick('work')}
              className="hover:text-[#292525] transition-colors duration-200 focus:outline-none"
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#292525] transition-colors duration-200 focus:outline-none"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('skills')}
              className="hover:text-[#292525] transition-colors duration-200 focus:outline-none"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 bg-[#292525] text-[#FBF7F5] hover:bg-[#B98286] rounded-full transition-all duration-300 shadow-xs"
            >
              Contact
            </button>
          </nav>
        )}

        {/* Mobile Hamburger Button */}
        {!activeCaseStudy && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#292525] hover:text-[#B98286] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && !activeCaseStudy && (
        <div className="md:hidden bg-[#FBF7F5] border-b border-[#E8DEDA] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F7E8E8]/70 border border-[#E8C8CA]/50 rounded-full text-xs text-[#817575] font-medium w-fit mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B98286] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B98286]"></span>
            </span>
            <span>Exploring AI & Intelligent Systems</span>
          </div>

          <div className="flex flex-col gap-4 text-base font-medium text-[#292525]">
            <button
              onClick={() => handleNavClick('work')}
              className="text-left py-2 border-b border-[#E8DEDA]/50 hover:text-[#B98286]"
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-[#E8DEDA]/50 hover:text-[#B98286]"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('skills')}
              className="text-left py-2 border-b border-[#E8DEDA]/50 hover:text-[#B98286]"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-2 w-full text-center py-3 bg-[#292525] text-[#FBF7F5] rounded-full font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
