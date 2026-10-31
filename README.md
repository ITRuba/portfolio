# Ruba — Portfolio

Personal portfolio built with React 19, Vite and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev       # development server
npm run lint      # oxlint
npm run build     # production build -> dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  App.jsx                 routing, scroll/focus handling, motion config
  hooks/useHashRoute.js   tiny hash router (#/ and #/projects/:id)
  lib/scroll.js           reduced-motion-aware scrolling helpers
  data/projects.js        all project and section content
  data/navigation.js      nav sections and social links
  pages/                  Home, CaseStudyPage
  components/             sections, project cards and interactive previews
  index.css               design tokens (@theme) and global styles
```

## Notes

- **Routing:** project pages live at `#/projects/<id>` (for example `#/projects/wafeer`).
  Hash URLs work on any static host without server rewrite rules, and browser
  Back/Forward work natively.
- **Colors:** use the theme tokens (`text-ink`, `text-muted`, `bg-ivory`,
  `text-accent-ink`, …) defined in `src/index.css` instead of hex values.
  `accent` is for decoration; use `accent-ink` for small text and
  `accent-display` for large text so contrast stays at WCAG AA.
- **Motion:** animations use framer-motion's `m` components inside `LazyMotion`,
  and respect the visitor's reduced-motion setting.
