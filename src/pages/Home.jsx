import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import About from '../components/About';
import WhatIBuild from '../components/WhatIBuild';
import TechStack from '../components/TechStack';
import Education from '../components/Education';
import JourneyTimeline from '../components/JourneyTimeline';
import Contact from '../components/Contact';
import { projects } from '../data/projects';

export default function Home({ onSelectCaseStudy }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="space-y-12">
      {/* Hero Section */}
      <Hero
        onExploreClick={() => scrollToSection('work')}
        onAboutClick={() => scrollToSection('about')}
      />

      {/* Selected Work Section */}
      <section id="work" className="py-20 space-y-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B98286]">
              Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#292525] tracking-tight">
              Selected Work
            </h2>
            <p className="text-lg text-[#817575] font-light max-w-2xl">
              A collection of projects where technology meets real-world problems.
            </p>
          </motion.div>
        </div>

        {/* Project Cards Stack */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectCaseStudy={onSelectCaseStudy}
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
    </main>
  );
}
