import { ArrowDown, Sparkles, Cpu, Layers, Database } from 'lucide-react';
import { m } from 'framer-motion';
import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-36 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-blush/60 rounded-full filter blur-3xl opacity-70 pointer-events-none -z-10 animate-pulse duration-[10000ms]" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blush-strong/30 rounded-full filter blur-3xl opacity-50 pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Text Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Metadata Pill */}
            <m.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-line rounded-full text-xs font-semibold tracking-wider text-muted uppercase shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>AI · Product Design · Data · Technology</span>
            </m.div>

            {/* Editorial Headline */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-ink leading-[1.15] tracking-tight"
            >
              I turn ideas into <br className="hidden sm:inline" />
              <span className="italic font-normal text-accent-display">intelligent digital</span> experiences.
            </m.h1>

            {/* Supporting Paragraph */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted font-light max-w-2xl leading-relaxed"
            >
              Information Technology student exploring AI, product design, data, and the systems behind meaningful digital experiences.
            </m.p>

            {/* CTAs */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                type="button"
                onClick={() => scrollToSection('work')}
                className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-ink text-ivory font-medium text-sm rounded-full overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:bg-accent-ink"
              >
                <span>View my work</span>
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-blush text-ink font-medium text-sm rounded-full border border-line transition-all duration-300 shadow-2xs"
              >
                About me
              </button>
            </m.div>
          </div>

          {/* Abstract Elegant AI/Data Visual Column */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 relative flex justify-center items-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-sm aspect-square bg-white border border-line rounded-3xl p-8 shadow-sm flex flex-col justify-between overflow-hidden group hover:border-blush-strong transition-colors duration-500">
              {/* Background Geometric Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#E8C8CA_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-0" />

              {/* Top Node Card */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blush flex items-center justify-center text-accent-ink">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-ink">AI Reasoning</div>
                    <div className="text-[10px] text-muted">Agent & Tool Engine</div>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
              </div>

              {/* Middle Flow Graphic */}
              <div className="relative z-10 my-6 space-y-3">
                <div className="p-3 bg-ivory border border-line rounded-xl flex items-center justify-between text-xs text-ink group-hover:border-blush-strong transition-colors">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    <span>Product UI/UX Flow</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted">Intent Met</span>
                </div>

                {/* Animated Connecting Line */}
                <div className="w-full flex items-center justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-accent to-blush-strong" />
                </div>

                <div className="p-3 bg-ivory border border-line rounded-xl flex items-center justify-between text-xs text-ink group-hover:border-blush-strong transition-colors">
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-accent" />
                    <span>Data Telemetry & APIs</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted">Validated</span>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="relative z-10 pt-3 border-t border-line/70 flex items-center justify-between text-[11px] text-muted">
                <span>Creative Technologist</span>
                <span className="font-serif italic text-accent-ink">Ruba</span>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
