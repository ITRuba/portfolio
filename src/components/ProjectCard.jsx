import { ArrowUpRight, Sparkles } from 'lucide-react';
import { m } from 'framer-motion';
import BilingualTitle from './BilingualTitle';
import { projectPreviews } from './projectPreviews';
import { projectHref } from '../hooks/useHashRoute';

export default function ProjectCard({ project }) {
  const Preview = projectPreviews[project.id];

  return (
    <m.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white border border-line hover:border-blush-strong rounded-3xl p-6 sm:p-10 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Subtle Blush Radial Glow on Hover */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-0" aria-hidden="true" />

      <div className="relative z-10 space-y-8">
        {/* Top Meta Line: Number + Category */}
        <div className="flex items-center justify-between border-b border-line/70 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl font-light text-muted group-hover:text-accent-display transition-colors duration-300">
              {project.number}
            </span>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-muted uppercase">
              {project.category}
            </span>
          </div>

          {/* Highlight Badge */}
          {project.highlight && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-blush text-accent-ink text-xs font-medium rounded-full border border-blush-strong/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.highlight}</span>
            </span>
          )}
        </div>

        {/* Project Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink tracking-tight group-hover:text-accent-display transition-colors duration-300">
              <BilingualTitle text={project.title} />
            </h3>
            <p className="text-base text-muted leading-relaxed font-light">
              {project.shortDescription}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href={projectHref(project.id)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ivory group-hover:bg-ink text-ink group-hover:text-ivory font-medium text-sm rounded-full border border-line group-hover:border-ink transition-all duration-300 shadow-2xs"
            >
              <span>View case study</span>
              <span className="sr-only">: {project.title}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Embedded Dynamic Preview Component */}
        <div className="pt-2">
          {Preview && <Preview />}
        </div>
      </div>
    </m.article>
  );
}
