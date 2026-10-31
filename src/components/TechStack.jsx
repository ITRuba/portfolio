import React from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../data/projects';

export default function TechStack() {
  return (
    <section className="py-20 bg-[#FBF7F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#817575]">
            Toolkit
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292525]">
            Tools I work with
          </h2>
        </motion.div>

        {/* Clean Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(techStackData).map(([category, tools], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 bg-[#FFFFFF] border border-[#E8DEDA] rounded-2xl space-y-4 hover:border-[#E8C8CA] transition-colors duration-300 shadow-2xs"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-[#B98286] pb-2 border-b border-[#E8DEDA]">
                {category}
              </div>
              <div className="flex flex-col gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="text-sm font-medium text-[#292525] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8C8CA]" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
