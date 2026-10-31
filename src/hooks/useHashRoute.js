import { useEffect, useState } from 'react';

/*
 * Minimal hash router (no dependency).
 *
 *   #/                -> { name: 'home' }
 *   #/projects/:id    -> { name: 'project', id }
 *
 * Hash URLs are used deliberately: they work on any static host (GitHub Pages,
 * Netlify, Vercel, plain file servers) without server rewrite rules, and the
 * browser handles Back/Forward natively through the `hashchange` event.
 */

export const homeHref = '#/';
export const projectHref = (id) => `#/projects/${encodeURIComponent(id)}`;

export function parseHash(hash) {
  const path = hash.replace(/^#/, '') || '/';
  const match = path.match(/^\/projects\/([^/?#]+)\/?$/);
  if (match) return { name: 'project', id: decodeURIComponent(match[1]) };
  return { name: 'home' };
}

export function navigate(href, { replace = false } = {}) {
  if (replace) {
    window.history.replaceState(window.history.state, '', href);
    // replaceState does not fire hashchange; notify listeners manually.
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  } else {
    window.location.hash = href.replace(/^#/, '');
  }
}

/**
 * Returns a stable id for the current history entry (stored in history.state),
 * creating one if needed. Used to remember scroll positions per entry, so
 * Back/Forward return to where the visitor was on that specific entry.
 */
export function currentEntryKey() {
  const state = window.history.state;
  if (state && typeof state.entryKey === 'string') return state.entryKey;
  const entryKey = Math.random().toString(36).slice(2);
  window.history.replaceState({ ...(state || {}), entryKey }, '');
  return entryKey;
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    currentEntryKey();
    const onChange = () => {
      currentEntryKey(); // new entries get a key as soon as they appear
      setRoute(parseHash(window.location.hash));
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
