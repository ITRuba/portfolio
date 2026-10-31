import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const handleNavigateSection = (sectionId) => {
    setActiveCaseStudy(null);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FBF7F5] text-[#292525] flex flex-col font-sans selection:bg-[#F7E8E8] selection:text-[#B98286]">
      {/* Sticky Navigation */}
      <Navbar
        activeCaseStudy={activeCaseStudy}
        onBackToHome={() => setActiveCaseStudy(null)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {activeCaseStudy ? (
          <CaseStudyPage
            projectId={activeCaseStudy}
            onBack={() => setActiveCaseStudy(null)}
            onNavigateProject={(id) => setActiveCaseStudy(id)}
          />
        ) : (
          <Home onSelectCaseStudy={(id) => setActiveCaseStudy(id)} />
        )}
      </div>

      {/* Footer */}
      <Footer onNavigateSection={handleNavigateSection} />
    </div>
  );
}
