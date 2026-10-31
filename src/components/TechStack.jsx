import { m } from 'framer-motion';
import { techStackData } from '../data/projects';

export default function TechStack() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Title */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Toolkit
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
            Tools I work with
          </h2>
        </m.div>

        {/* Clean Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(techStackData).map(([category, tools], idx) => (
            <m.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 bg-white border border-line rounded-2xl space-y-4 hover:border-blush-strong transition-colors duration-300 shadow-2xs"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-ink pb-2 border-b border-line">
                {category}
              </div>
              <div className="flex flex-col gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="text-sm font-medium text-ink flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blush-strong" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
