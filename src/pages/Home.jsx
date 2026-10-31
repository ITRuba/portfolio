import { m } from 'framer-motion';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import About from '../components/About';
import WhatIBuild from '../components/WhatIBuild';
import TechStack from '../components/TechStack';
import Education from '../components/Education';
import JourneyTimeline from '../components/JourneyTimeline';
import Contact from '../components/Contact';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
<Hero />

      {/* Selected Work Section */}
      <section id="work" className="py-20 space-y-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
              Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
              Selected Work
            </h2>
            <p className="text-lg text-muted font-light max-w-2xl">
              A collection of projects where technology meets real-world problems.
            </p>
          </m.div>
        </div>

        {/* Project Cards Stack */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* What I Build Section */}
      <WhatIBuild />

      {/* Tools / Tech Stack */}
      <TechStack />

      {/* Education */}
      <Education />

      {/* Currently Learning Journey Timeline */}
      <JourneyTimeline />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
