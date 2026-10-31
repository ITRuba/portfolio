const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

/** Scroll smoothly to a section by id, honouring reduced-motion. */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  return true;
}

/** Scroll smoothly to the top of the page, honouring reduced-motion. */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}

/** Jump instantly to a vertical position (used on route changes). */
export function jumpTo(top) {
  // `instant` bypasses the global `scroll-behavior: smooth` on <html>.
  window.scrollTo({ top, left: 0, behavior: 'instant' });
}
