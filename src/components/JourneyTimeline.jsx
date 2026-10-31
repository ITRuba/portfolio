import React from 'react';
import { motion } from 'framer-motion';
import { journeyTimelineData } from '../data/projects';
import { Sparkles } from 'lucide-react';

export default function JourneyTimeline() {
  return (
    <section className="py-24 bg-[#FBF7F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B98286]">
            Current Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#292525]">
            Currently learning by building.
          </h2>
          <p className="text-lg text-[#817575] font-light max-w-2xl">
            A continuous loop of rapid prototyping, technical deep dives, and product iteration.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative pl-6 md:pl-10 border-l-2 border-[#E8C8CA]/60 space-y-12">
          {journeyTimelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative space-y-3 group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] border-4 border-[#B98286] group-hover:scale-125 transition-transform duration-300" />

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-serif font-bold text-[#292525]">
                  {item.title}
                </h3>
                <span className="px-3 py-1 bg-[#F7E8E8] text-[#B98286] text-xs font-medium rounded-full border border-[#E8C8CA]/60">
                  {item.subtitle}
                </span>
              </div>

              <p className="text-base text-[#817575] font-light max-w-3xl leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
