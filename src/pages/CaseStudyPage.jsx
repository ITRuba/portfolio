import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, CheckCircle2, Cpu, Code2, Layers, AlertCircle, Lightbulb } from 'lucide-react';
import { projects } from '../data/projects';

import WafeerPreview from '../components/WafeerPreview';
import AfiahPreview from '../components/AfiahPreview';
import AgentWorkflow from '../components/AgentWorkflow';
import ParkoPreview from '../components/ParkoPreview';

export default function CaseStudyPage({ projectId, onBack, onNavigateProject }) {
  const project = projects.find((p) => p.id === projectId) || projects[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const renderInteractiveMockup = () => {
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
    <article className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFFFF] hover:bg-[#F7E8E8] text-[#292525] text-sm font-medium border border-[#E8DEDA] rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#B98286]" />
            <span>Back to All Projects</span>
          </button>
        </motion.div>

        {/* Case Study Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 border-b border-[#E8DEDA] pb-12"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-serif text-2xl font-light text-[#B98286]">
              Project {project.number}
            </span>
            <span className="h-4 w-px bg-[#E8DEDA]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#817575]">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#292525] tracking-tight">
            {project.title}
          </h1>

          <p className="text-xl text-[#817575] font-light leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.heroTags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#F7E8E8] text-[#B98286] text-xs font-medium rounded-full border border-[#E8C8CA]/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 1. Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#292525] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#B98286]" />
            <span>01. Overview</span>
          </h2>
          <p className="text-base text-[#817575] font-light leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* 2 & 3. Problem & Idea Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="p-8 bg-[#FFFFFF] border border-[#E8DEDA] rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-rose-800 text-sm font-semibold">
              <AlertCircle className="w-4 h-4 text-[#B98286]" />
              <span>02. The Problem</span>
            </div>
            <p className="text-sm text-[#817575] font-light leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section className="p-8 bg-[#F7E8E8]/50 border border-[#E8C8CA] rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-[#B98286] text-sm font-semibold">
              <Lightbulb className="w-4 h-4 text-[#B98286]" />
              <span>03. The Core Idea</span>
            </div>
            <p className="text-sm text-[#292525] font-light leading-relaxed">
              {project.idea}
            </p>
          </section>
        </div>

        {/* 4 & 5. Solution & Role */}
        <section className="space-y-6">
          <div className="p-8 bg-[#FFFFFF] border border-[#E8DEDA] rounded-3xl space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#292525]">
              04. The Solution
            </h2>
            <p className="text-base text-[#817575] font-light leading-relaxed">
              {project.solution}
            </p>
            <div className="pt-4 border-t border-[#E8DEDA] flex items-center gap-3">
              <span className="text-xs font-semibold text-[#817575] uppercase tracking-wider">05. My Role:</span>
              <span className="px-3.5 py-1 bg-[#292525] text-[#FBF7F5] text-xs font-medium rounded-full">
                {project.role}
              </span>
            </div>
          </div>
        </section>

        {/* 6. User Flow */}
        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-[#292525]">
            06. User Flow Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.userFlow?.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#FBF7F5] border border-[#E8DEDA] rounded-2xl space-y-2"
              >
                <div className="text-xs font-mono font-bold text-[#B98286]">{item.step}</div>
                <div className="text-sm font-bold font-serif text-[#292525]">{item.title}</div>
                <p className="text-xs text-[#817575] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Interactive Design System & Live Mockup */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-[#292525]">
              07. Design & Live Interactive Mockup
            </h2>
            <span className="text-xs text-[#817575] font-mono">Interactive Component</span>
          </div>

          <div className="pt-2">
            {renderInteractiveMockup()}
          </div>
        </section>

        {/* 8. Technical Architecture */}
        <section className="p-8 bg-[#FFFFFF] border border-[#E8DEDA] rounded-3xl space-y-6">
          <h2 className="text-2xl font-serif font-bold text-[#292525] flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#B98286]" />
            <span>08. Technical Architecture</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(project.technicalArchitecture || {}).map(([key, val]) => (
              <div key={key} className="p-4 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl space-y-1">
                <div className="text-xs font-semibold uppercase text-[#B98286] tracking-wider">{key}</div>
                <div className="text-sm text-[#292525] font-mono">{val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 9 & 10. Challenges & What I Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="p-8 bg-[#FFFFFF] border border-[#E8DEDA] rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#292525]">
              09. Key Challenges & Trade-offs
            </h2>
            <p className="text-sm text-[#817575] font-light leading-relaxed">
              {project.challenges}
            </p>
          </section>

          <section className="p-8 bg-[#F7E8E8]/60 border border-[#E8C8CA] rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#292525]">
              10. What I Learned
            </h2>
            <p className="text-sm text-[#292525] font-light leading-relaxed">
              {project.learnings}
            </p>
          </section>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="pt-12 border-t border-[#E8DEDA] flex items-center justify-between">
          <button
            onClick={() => onNavigateProject(prevProject.id)}
            className="group flex flex-col text-left space-y-1"
          >
            <span className="text-xs text-[#817575]">← Previous Project</span>
            <span className="font-serif font-bold text-lg text-[#292525] group-hover:text-[#B98286] transition-colors">
              {prevProject.title}
            </span>
          </button>

          <button
            onClick={() => onNavigateProject(nextProject.id)}
            className="group flex flex-col text-right space-y-1"
          >
            <span className="text-xs text-[#817575]">Next Project →</span>
            <span className="font-serif font-bold text-lg text-[#292525] group-hover:text-[#B98286] transition-colors">
              {nextProject.title}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
