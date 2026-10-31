import { useEffect, useRef, useState } from 'react';
import { m } from 'framer-motion';
import { Mail, Copy, Check, Sparkles } from 'lucide-react';
import { socialLinks } from '../data/navigation';

const emailAddress = 'ruba.it.dev@gmail.com';

async function celebrate() {
  // Loaded on demand so the confetti library is not part of the initial bundle.
  const { default: confetti } = await import('canvas-confetti');
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.8 },
    colors: ['#B98286', '#E8C8CA', '#F7E8E8'],
    disableForReducedMotion: true,
  });
}

export default function Contact() {
  // 'idle' | 'copied' | 'failed'
  const [copyState, setCopyState] = useState('idle');
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleCopyEmail = async () => {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyState('copied');
      celebrate().catch(() => {});
    } catch {
      // Clipboard API unavailable (e.g. insecure context) or permission denied.
      setCopyState('failed');
    }
    resetTimer.current = setTimeout(() => setCopyState('idle'), 2500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-blush via-ivory to-blush-strong/40 border border-blush-strong rounded-3xl p-8 sm:p-14 overflow-hidden grain-overlay shadow-sm space-y-10"
        >
          {/* Top Decorative Sparkle */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-blush-strong rounded-full text-xs font-semibold text-accent-ink w-fit shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Collaboration & Roles</span>
          </div>

          {/* Main Editorial Callout */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink leading-[1.1] tracking-tight">
              Let's build something <br className="hidden sm:inline" />
              <span className="italic font-normal text-accent-display">meaningful.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted font-light leading-relaxed">
              Have an idea, project, or opportunity? I'd love to hear about it.
            </p>
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Direct Mailto Button */}
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-ink hover:bg-accent-ink text-ivory font-medium text-base rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Mail className="w-5 h-5 text-blush-strong" />
              <span>Email me</span>
            </a>

            {/* Quick Copy Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label={`Copy email address ${emailAddress}`}
              className="inline-flex items-center gap-2 px-5 py-4 bg-white hover:bg-blush text-ink font-medium text-sm rounded-full border border-line transition-all duration-200 shadow-2xs"
            >
              {copyState === 'copied' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span className="text-emerald-700 font-semibold">Email Copied!</span>
                </>
              ) : copyState === 'failed' ? (
                <>
                  <Copy className="w-4 h-4 text-muted" />
                  <span>Copy unavailable: {emailAddress}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted" />
                  <span>{emailAddress}</span>
                </>
              )}
            </button>

            {/* Announces the copy result to screen readers */}
            <span className="sr-only" role="status" aria-live="polite">
              {copyState === 'copied' ? 'Email address copied to clipboard.' : copyState === 'failed' ? 'Could not copy. The email address is ' + emailAddress : ''}
            </span>

            {/* Social Links */}
            <div className="flex items-center gap-3 ml-auto">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white hover:bg-ink text-ink hover:text-white rounded-full border border-line transition-all duration-300 shadow-2xs group"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 1.63 1.63a1.63 1.63 0 0 0-1.63-1.63Z"/>
                </svg>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-white hover:bg-ink text-ink hover:text-white rounded-full border border-line transition-all duration-300 shadow-2xs group"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                </svg>
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
