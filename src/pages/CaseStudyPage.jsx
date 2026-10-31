import { m } from 'framer-motion';
import { ArrowLeft, Sparkles, Code2, AlertCircle, Lightbulb } from 'lucide-react';
import { projects } from '../data/projects';
import BilingualTitle from '../components/BilingualTitle';
import { projectPreviews } from '../components/projectPreviews';
import { homeHref, projectHref } from '../hooks/useHashRoute';

// "aiEngine" -> "AI Engine", "designSystem" -> "Design System"
const formatLabel = (key) =>
  key
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^ai\b/i, 'AI')
    .replace(/^./, (c) => c.toUpperCase());

export default function CaseStudyPage({ project }) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const Preview = projectPreviews[project.id];

  return (
    <article className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-16">
        {/* Back Button */}
        <m.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a
            href={homeHref}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-blush text-ink text-sm font-medium border border-line rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-accent" />
            <span>Back to All Projects</span>
          </a>
        </m.div>

        {/* Case Study Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 border-b border-line pb-12"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-serif text-2xl font-light text-accent-display">
              Project {project.number}
            </span>
            <span className="h-4 w-px bg-line" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              {project.category}
            </span>
          </div>

          <h1
            id="case-study-title"
            tabIndex={-1}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink tracking-tight outline-none"
          >
            <BilingualTitle text={project.title} />
          </h1>

          <p className="text-xl text-muted font-light leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.heroTags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blush text-accent-ink text-xs font-medium rounded-full border border-blush-strong/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </m.div>

        {/* 1. Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-ink flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <span>01. Overview</span>
          </h2>
          <p className="text-base text-muted font-light leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* 2 & 3. Problem & Idea Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="p-8 bg-white border border-line rounded-3xl space-y-3">
            <h2 className="flex items-center gap-2 text-accent-ink text-sm font-sans font-semibold">
              <AlertCircle className="w-4 h-4 text-accent" />
              <span>02. The Problem</span>
            </h2>
            <p className="text-sm text-muted font-light leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section className="p-8 bg-blush/50 border border-blush-strong rounded-3xl space-y-3">
            <h2 className="flex items-center gap-2 text-accent-ink text-sm font-sans font-semibold">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span>03. The Core Idea</span>
            </h2>
            <p className="text-sm text-ink font-light leading-relaxed">
              {project.idea}
            </p>
          </section>
        </div>

        {/* 4 & 5. Solution & Role */}
        <section className="space-y-6">
          <div className="p-8 bg-white border border-line rounded-3xl space-y-4">
            <h2 className="text-2xl font-serif font-bold text-ink">
              04. The Solution
            </h2>
            <p className="text-base text-muted font-light leading-relaxed">
              {project.solution}
            </p>
            <div className="pt-4 border-t border-line flex items-center gap-3">
              <span className="text-xs font-semibold text-muted uppercase tracking-wider">05. My Role:</span>
              <span className="px-3.5 py-1 bg-ink text-ivory text-xs font-medium rounded-full">
                {project.role}
              </span>
            </div>
          </div>
        </section>

        {/* 6. User Flow */}
        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-ink">
            06. User Flow Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.userFlow?.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-ivory border border-line rounded-2xl space-y-2"
              >
                <div className="text-xs font-mono font-bold text-accent-ink">{item.step}</div>
                <div className="text-sm font-bold font-serif text-ink">{item.title}</div>
                <p className="text-xs text-muted font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Interactive Design System & Live Mockup */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-ink">
              07. Design & Live Interactive Mockup
            </h2>
            <span className="text-xs text-muted font-mono">Interactive Component</span>
          </div>

          <div className="pt-2">
            {Preview && <Preview />}
          </div>
        </section>

        {/* 8. Technical Architecture */}
        <section className="p-8 bg-white border border-line rounded-3xl space-y-6">
          <h2 className="text-2xl font-serif font-bold text-ink flex items-center gap-2">
            <Code2 className="w-5 h-5 text-accent" />
            <span>08. Technical Architecture</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(project.technicalArchitecture || {}).map(([key, val]) => (
              <div key={key} className="p-4 bg-ivory border border-line rounded-xl space-y-1">
                <div className="text-xs font-semibold uppercase text-accent-ink tracking-wider">{formatLabel(key)}</div>
                <div className="text-sm text-ink font-mono">{val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 9 & 10. Challenges & What I Learned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="p-8 bg-white border border-line rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-ink">
              09. Key Challenges & Trade-offs
            </h2>
            <p className="text-sm text-muted font-light leading-relaxed">
              {project.challenges}
            </p>
          </section>

          <section className="p-8 bg-blush/60 border border-blush-strong rounded-3xl space-y-3">
            <h2 className="text-xl font-serif font-bold text-ink">
              10. What I Learned
            </h2>
            <p className="text-sm text-ink font-light leading-relaxed">
              {project.learnings}
            </p>
          </section>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="pt-12 border-t border-line flex items-center justify-between">
          <a
            href={projectHref(prevProject.id)}
            className="group flex flex-col text-left space-y-1"
          >
            <span className="text-xs text-muted">← Previous Project</span>
            <span className="font-serif font-bold text-lg text-ink group-hover:text-accent-ink transition-colors">
              <BilingualTitle text={prevProject.title} />
            </span>
          </a>

          <a
            href={projectHref(nextProject.id)}
            className="group flex flex-col text-right space-y-1"
          >
            <span className="text-xs text-muted">Next Project →</span>
            <span className="font-serif font-bold text-lg text-ink group-hover:text-accent-ink transition-colors">
              <BilingualTitle text={nextProject.title} />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
