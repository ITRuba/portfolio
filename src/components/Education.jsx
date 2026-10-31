import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 bg-[#FFFFFF] border-y border-[#E8DEDA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 space-y-2"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B98286]">
              Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#292525]">
              Education
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 p-8 bg-[#FBF7F5] border border-[#E8DEDA] rounded-3xl flex flex-wrap items-center justify-between gap-6 hover:border-[#E8C8CA] transition-colors"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#F7E8E8] text-[#B98286] flex items-center justify-center shrink-0 shadow-2xs">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="text-xl font-serif font-bold text-[#292525]">
                  Bachelor of Information Technology
                </div>
                <div className="text-sm text-[#817575] font-light">
                  Qassim University · College of Computer Science
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFFF] border border-[#E8DEDA] rounded-full text-xs text-[#817575] font-medium">
              <Award className="w-4 h-4 text-[#B98286]" />
              <span>Specializing in AI & Digital Products</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
