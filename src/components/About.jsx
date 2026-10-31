import React from 'react';
import { motion } from 'framer-motion';
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B98286]">
              Personal Perspective
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#292525]">
              A little about me.
            </h2>
          </motion.div>

          {/* Editorial Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-lg md:text-xl text-[#817575] font-light leading-relaxed border-l-2 border-[#E8C8CA] pl-6 md:pl-8"
          >
            <p>
              I'm Ruba, an Information Technology student interested in the intersection of AI, data, technology, and product design.
            </p>
            <p>
              I enjoy turning complex ideas into simple digital experiences — whether that's building an AI-powered product, designing an intuitive interface, or working with data and intelligent systems.
            </p>
            <p className="text-[#292525] font-normal italic">
              "I'm especially interested in building technology that doesn't just work, but feels understandable and useful to the people using it."
            </p>
          </motion.div>

          {/* Visual Timeline Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 pt-4"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-[#817575]">
              My Product Philosophy Timeline
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-[#FFFFFF] border border-[#E8DEDA] hover:border-[#E8C8CA] rounded-2xl space-y-2 transition-colors duration-300 shadow-2xs group"
                  >
                    <div className="flex items-center justify-between text-xs text-[#817575]">
                      <span className="font-mono text-[#B98286]">0{idx + 1}</span>
                      <IconComponent className="w-4 h-4 text-[#B98286] group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="font-serif font-bold text-lg text-[#292525]">{step.title}</div>
                    <p className="text-xs text-[#817575] leading-relaxed font-light">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
