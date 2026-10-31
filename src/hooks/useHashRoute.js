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

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
