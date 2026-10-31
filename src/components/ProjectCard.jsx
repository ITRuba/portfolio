import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import WafeerPreview from './WafeerPreview';
import AfiahPreview from './AfiahPreview';
import AgentWorkflow from './AgentWorkflow';
import ParkoPreview from './ParkoPreview';

export default function ProjectCard({ project, onSelectCaseStudy }) {
  const renderPreviewComponent = () => {
    switch (project.id) {
      case 'wafeer':
        return <WafeerPreview />;
      case 'afiah':
        return <AfiahPreview />;
      case 'ai-agent':
        return <AgentWorkflow />;
      case 'parko':
        return <ParkoPreview />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group relative bg-[#FFFFFF] border border-[#E8DEDA] hover:border-[#E8C8CA] rounded-3xl p-6 sm:p-10 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Subtle Blush Radial Glow on Hover */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7E8E8]/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-0" />

      <div className="relative z-10 space-y-8">
        {/* Top Meta Line: Number + Category */}
        <div className="flex items-center justify-between border-b border-[#E8DEDA]/70 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl font-light text-[#817575] group-hover:text-[#B98286] transition-colors duration-300">
              {project.number}
            </span>
            <span className="h-4 w-px bg-[#E8DEDA]" />
            <span className="text-xs font-semibold tracking-wider text-[#817575] uppercase">
              {project.category}
            </span>
          </div>

          {/* Highlight Badge */}
          {project.highlight && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-[#F7E8E8] text-[#B98286] text-xs font-medium rounded-full border border-[#E8C8CA]/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.highlight}</span>
            </span>
          )}
        </div>

        {/* Project Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292525] tracking-tight group-hover:text-[#B98286] transition-colors duration-300">
              {project.title}
            </h2>
            <p className="text-base text-[#817575] leading-relaxed font-light">
              {project.shortDescription}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => onSelectCaseStudy(project.id)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FBF7F5] group-hover:bg-[#292525] text-[#292525] group-hover:text-[#FBF7F5] font-medium text-sm rounded-full border border-[#E8DEDA] group-hover:border-[#292525] transition-all duration-300 shadow-2xs"
            >
              <span>View case study</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Embedded Dynamic Preview Component */}
        <div className="pt-2">
          {renderPreviewComponent()}
        </div>
      </div>
    </motion.div>
  );
}
