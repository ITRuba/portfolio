import { m } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 bg-white border-y border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 space-y-2"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
              Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
              Education
            </h2>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 p-8 bg-ivory border border-line rounded-3xl flex flex-wrap items-center justify-between gap-6 hover:border-blush-strong transition-colors"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blush text-accent-ink flex items-center justify-center shrink-0 shadow-2xs">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="text-xl font-serif font-bold text-ink">
                  Bachelor of Information Technology
                </div>
                <div className="text-sm text-muted font-light">
                  Qassim University · College of Computer Science
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-line rounded-full text-xs text-muted font-medium">
              <Award className="w-4 h-4 text-accent" />
              <span>Specializing in AI & Digital Products</span>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
