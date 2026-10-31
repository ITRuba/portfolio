import { m } from 'framer-motion';
import { Compass, Hammer, BookOpen, RefreshCw } from 'lucide-react';

export default function About() {
  const steps = [
    { title: 'Explore', desc: 'Understanding core user needs, data inputs & system constraints', icon: Compass },
    { title: 'Build', desc: 'Engineering AI workflows, clean backend schemas & interface UI', icon: Hammer },
    { title: 'Learn', desc: 'Measuring real utility impact, feedback & validation telemetry', icon: BookOpen },
    { title: 'Improve', desc: 'Iterating code, prompt architectures & interaction details', icon: RefreshCw },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl space-y-12">
          {/* Section Heading */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
              Personal Perspective
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink">
              A little about me.
            </h2>
          </m.div>

          {/* Editorial Paragraphs */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-lg md:text-xl text-muted font-light leading-relaxed border-l-2 border-blush-strong pl-6 md:pl-8"
          >
            <p>
              I'm Ruba, an Information Technology student interested in the intersection of AI, data, technology, and product design.
            </p>
            <p>
              I enjoy turning complex ideas into simple digital experiences — whether that's building an AI-powered product, designing an intuitive interface, or working with data and intelligent systems.
            </p>
            <p className="text-ink font-normal italic">
              "I'm especially interested in building technology that doesn't just work, but feels understandable and useful to the people using it."
            </p>
          </m.div>

          {/* Visual Timeline Bar */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 pt-4"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-muted">
              My Product Philosophy Timeline
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-line hover:border-blush-strong rounded-2xl space-y-2 transition-colors duration-300 shadow-2xs group"
                  >
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span className="font-mono text-accent-ink">0{idx + 1}</span>
                      <IconComponent className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="font-serif font-bold text-lg text-ink">{step.title}</div>
                    <p className="text-xs text-muted leading-relaxed font-light">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
