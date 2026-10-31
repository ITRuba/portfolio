import { useEffect, useLayoutEffect, useRef } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';
import { projects } from './data/projects';
import { currentEntryKey, homeHref, navigate, useHashRoute } from './hooks/useHashRoute';
import { jumpTo, scrollToSection, scrollToTop } from './lib/scroll';

const BASE_TITLE = document.title;

export default function App() {
  const route = useHashRoute();
  const project = route.name === 'project' ? projects.find((p) => p.id === route.id) : null;
  const isProjectPage = Boolean(project);

  const mainRef = useRef(null);
  const homeScrollY = useRef(0);       // last position on Home (fallback for new Home entries)
  const entryScroll = useRef(new Map()); // history entry key -> scrollY
  const renderedEntry = useRef(null);    // key of the entry currently on screen
  const onProjectPage = useRef(isProjectPage);
  onProjectPage.current = isProjectPage;
  const pendingSection = useRef(null); // section to reveal after returning Home
  const isFirstRender = useRef(true);

  // We restore scroll positions ourselves on route changes.
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // Unknown project ids fall back to Home without leaving a broken history entry.
  useEffect(() => {
    if (route.name === 'project' && !project) navigate(homeHref, { replace: true });
  }, [route, project]);

  // Remember the scroll position of each history entry so Back/Forward return
  // the visitor to the exact spot they left on that entry.
  useEffect(() => {
    const onScroll = () => {
      // Attribute the position to the entry that is actually displayed. Scroll
      // events can arrive after the URL changed but before React re-rendered.
      if (renderedEntry.current) entryScroll.current.set(renderedEntry.current, window.scrollY);
      if (!onProjectPage.current) homeScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Route change side effects: scroll position, document title, focus.
  useLayoutEffect(() => {
    const firstRender = isFirstRender.current;
    isFirstRender.current = false;

    const entryKey = currentEntryKey();
    const saved = entryScroll.current.get(entryKey);
    renderedEntry.current = entryKey;

    if (isProjectPage) {
      document.title = `${project.title} — Case Study · Ruba`;
      jumpTo(saved ?? 0);
      if (!firstRender) document.getElementById('case-study-title')?.focus({ preventScroll: true });
      return;
    }

    document.title = BASE_TITLE;
    if (firstRender) return;

    const target = pendingSection.current;
    pendingSection.current = null;
    if (target === 'top') {
      jumpTo(0);
    } else if (target) {
      jumpTo(homeScrollY.current);
      scrollToSection(target);
    } else {
      // Back/Forward to a known entry -> its own position; a fresh Home entry
      // (e.g. "Back to All Projects") -> where the visitor last was on Home.
      jumpTo(saved ?? homeScrollY.current);
    }
    mainRef.current?.focus({ preventScroll: true });
  }, [isProjectPage, project]);

  const goToSection = (sectionId) => {
    if (!isProjectPage) {
      if (sectionId === 'top') scrollToTop();
      else scrollToSection(sectionId);
      return;
    }
    pendingSection.current = sectionId;
    navigate(homeHref);
  };

  const skipToContent = (event) => {
    event.preventDefault(); // keep the hash route intact
    mainRef.current?.focus();
  };

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div className="min-h-screen bg-ivory text-ink flex flex-col font-sans selection:bg-blush selection:text-accent-ink">
          <a href="#main" className="skip-link" onClick={skipToContent}>
            Skip to content
          </a>

          <Navbar onNavigateSection={goToSection} />

          <main id="main" ref={mainRef} tabIndex={-1} className="flex-1 outline-none">
            {isProjectPage ? <CaseStudyPage project={project} /> : <Home />}
          </main>

          <Footer onNavigateSection={goToSection} />
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
