import React from 'react';
import { ArrowDown, Sparkles, Cpu, Layers, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onExploreClick, onAboutClick }) {
  return (
    <section className="relative min-h-[90vh] pt-36 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#F7E8E8]/60 rounded-full filter blur-3xl opacity-70 pointer-events-none -z-10 animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E8C8CA]/30 rounded-full filter blur-3xl opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Text Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Metadata Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFFF] border border-[#E8DEDA] rounded-full text-xs font-semibold tracking-wider text-[#817575] uppercase shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B98286]" />
              <span>AI · Product Design · Data · Technology</span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#292525] leading-[1.15] tracking-tight"
            >
              I turn ideas into <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B98286]">intelligent digital</span> experiences.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-[#817575] font-light max-w-2xl leading-relaxed"
            >
              Information Technology student exploring AI, product design, data, and the systems behind meaningful digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-[#292525] text-[#FBF7F5] font-medium text-sm rounded-full overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#B98286]"
              >
                <span>View my work</span>
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </button>

              <button
                onClick={onAboutClick}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#FFFFFF] hover:bg-[#F7E8E8] text-[#292525] font-medium text-sm rounded-full border border-[#E8DEDA] transition-all duration-300 shadow-2xs"
              >
                About me
              </button>
            </motion.div>
          </div>

          {/* Abstract Elegant AI/Data Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm aspect-square bg-[#FFFFFF] border border-[#E8DEDA] rounded-3xl p-8 shadow-sm flex flex-col justify-between overflow-hidden group hover:border-[#E8C8CA] transition-colors duration-500">
              {/* Background Geometric Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#E8C8CA_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-0" />

              {/* Top Node Card */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F7E8E8] flex items-center justify-center text-[#B98286]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#292525]">AI Reasoning</div>
                    <div className="text-[10px] text-[#817575]">Agent & Tool Engine</div>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#B98286] animate-ping" />
              </div>

              {/* Middle Flow Graphic */}
              <div className="relative z-10 my-6 space-y-3">
                <div className="p-3 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl flex items-center justify-between text-xs text-[#292525] group-hover:border-[#E8C8CA] transition-colors">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#B98286]" />
                    <span>Product UI/UX Flow</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#817575]">Intent Met</span>
                </div>

                {/* Animated Connecting Line */}
                <div className="w-full flex items-center justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-[#B98286] to-[#E8C8CA]" />
                </div>

                <div className="p-3 bg-[#FBF7F5] border border-[#E8DEDA] rounded-xl flex items-center justify-between text-xs text-[#292525] group-hover:border-[#E8C8CA] transition-colors">
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-[#B98286]" />
                    <span>Data Telemetry & APIs</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#817575]">Validated</span>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="relative z-10 pt-3 border-t border-[#E8DEDA]/70 flex items-center justify-between text-[11px] text-[#817575]">
                <span>Creative Technologist</span>
                <span className="font-serif italic text-[#B98286]">Ruba</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
