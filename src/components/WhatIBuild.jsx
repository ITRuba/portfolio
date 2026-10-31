import { useState } from 'react';
import { m } from 'framer-motion';
import { Cpu, Layout, Database, Sparkles } from 'lucide-react';
import { whatIBuildData } from '../data/projects';

export default function WhatIBuild() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const getCategoryIcon = (idx) => {
    switch (idx) {
      case 0:
        return Cpu;
      case 1:
        return Layout;
      case 2:
        return Database;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white/60 border-y border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
            Capabilities & Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink">
            What I Build
          </h2>
          <p className="text-lg text-muted font-light max-w-2xl">
            Bridging technical depth with thoughtful design across three core pillars.
          </p>
        </m.div>

        {/* 3 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatIBuildData.map((item, idx) => {
            const IconComp = getCategoryIcon(idx);
            const isHovered = hoveredIdx === idx;

            return (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between space-y-8 ${
                  isHovered
                    ? 'bg-blush/70 border-accent shadow-lg -translate-y-2'
                    : 'bg-ivory border-line hover:border-blush-strong'
                }`}
              >
                {/* Top Bar: Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-light text-accent-display">
                    {item.number}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      isHovered ? 'bg-accent text-white' : 'bg-white text-muted border border-line'
                    }`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-ink tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Tags List */}
                <div className="space-y-2 pt-4 border-t border-line/80">
                  <span className="text-[10px] uppercase tracking-wider text-muted font-semibold">
                    Core Specializations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                          isHovered
                            ? 'bg-white text-ink border border-blush-strong'
                            : 'bg-white text-muted border border-line'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
