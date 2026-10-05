# Sara Gramstad — portfolio

UI Designer · Product Designer · Frontend Developer.
A small, fast, static site: **Vite + React + TypeScript + Tailwind v4**, shadcn/ui on Radix primitives, Phosphor icons and a little GSAP. No backend, no database, no CMS.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build → dist/
npm run preview   # serve the build
npm run lint      # oxlint
```

### Deploying

- **GitHub Pages** (current): every push to `master` runs `.github/workflows/deploy.yml`, which builds with `BASE_PATH=/sara/` (the repo name) and publishes `dist/`. A copy of `index.html` is saved as `404.html` so deep links like `/sara/about` work. In the repo settings, **Pages → Source** must be **GitHub Actions**.
- **Vercel / Netlify / a custom domain**: build without `BASE_PATH` (the site lives at `/`). `vercel.json` already rewrites routes to `index.html`.

Internal links go through `withBase()` (`src/lib/base.ts`) and wouter's `<Router base>`, so the same code works at `/` and at `/sara/`.

---

## Editing content (no JSX needed)

Everything you'd want to update lives in `src/data/`:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, email, LinkedIn, location, availability, the lines of your own voice used around the site |
| `projects.ts` | Case studies: metadata, sections, notes, figures. Order = order on the site |
| `now.ts` | The **Currently** panel. Bump `updated` when you edit it |
| `playground.ts` | Lab-notebook entries. `embed` renders a live demo; `draft: true` hides an entry in production |
| `experience.ts` | Roles and education. `group: 'earlier'` folds the early roles into one line on the home page |
| `skills.ts` | The honest stack: `fluent` → `building` → `exploring` |
| `navigation.ts` | Main nav |

**Adding images to a case study:** drop files in `public/work/<slug>/` and give a figure a `src`:

```ts
figure: { src: '/work/myo/store.webp', alt: 'MYO product page on mobile', caption: 'Store experience', aspect: '16 / 10' }
```

Projects without images show a typeset "plate" (a spec sheet built from the project's own data), so the layout never breaks. A project `cover` works the same way.

**Drafts:** case-study sections and playground items with `draft: true` show in `npm run dev` (dashed red outline) and never in production. Use them as prompts for things still to write.

---

## Design system

All tokens are CSS variables in `src/styles/globals.css`, exposed to Tailwind through `@theme`:

- **Colour:** `paper`, `paper-raised`, `paper-sunken`, `ink`, `ink-muted`, `ink-faint`, `rule`, `rule-strong`, one `accent` (+ `accent-ink` for small accent text). All text tokens are ≥ 4.5:1 on paper.
- **Type:** three families with fixed roles. *Instrument Serif* for display, *Geist* for reading, *Geist Mono* for metadata. A fluid scale: `text-display-xl/lg/md/sm`, `text-lead`, `text-body`, `text-small`, plus `label-mono` and `meta-mono`.
- **Layout:** `page` (container + gutter) and `page-grid` (4 / 8 / 12 columns). Press **G** anywhere to see the grid.
- **Radius / shadow / motion:** `rounded-xs…xl`, `shadow-paper/lift/float`, `--dur-*` and `--ease-*` (mirrored for GSAP in `src/lib/motion.ts`).

shadcn/ui components used: **Button, Sheet** (mobile menu), **Dialog + Command** (⌘K menu), plus a small `Kbd`. They're in `src/components/ui/` and `components.json` is set up, so `npx shadcn@latest add <component>` works.

## Motion

GSAP only where it explains something:

- **Intro** (`components/motion/intro.ts`): static HTML in `index.html` that covers the font swap. 0.5–1 s, skippable with any key or click, once per session, never with reduced motion.
- **Page turns** (`components/motion/PageTransition.tsx`): an ink sheet covers the page while the next page's code loads, then lifts. In-page anchors scroll smoothly instead. Back/forward restores scroll.
- **Entrances** (`useEntrance`) and **scroll reveals** (`useScrollReveal`, any element with `data-reveal`). Both wait for the "reveal gate" so nothing animates behind a cover.
- **Work index:** the project plate follows the cursor (fine pointers only); the year rolls over to "View".
- Everything decorative is inside `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`. CSS transitions are neutralised for reduced motion too.

## Structure

```
src/
  components/
    ui/          shadcn primitives (button, sheet, dialog, command, kbd)
    layout/      header, mobile menu, footer, grid overlay, root layout
    navigation/  TransitionLink, ⌘K menu
    motion/      page transitions, intro, entrance/reveal hooks
    project/     work index, plates
    sections/    hero, selected work, about teaser, currently, playground teaser, experience, contact
    playground/  live demos (easing lab, type specimen, grid)
    common/      section label, metadata list, arrow link, status dot, copy email, page header
  data/          all content (typed)
  pages/         Home, Project, Playground, About, NotFound
  hooks/  lib/   small utilities, GSAP setup
  routes.tsx     routes + preloading (wouter)
```

Routing is [wouter](https://github.com/molefrog/wouter) (~2 KB) rather than React Router (~90 KB minified for four routes). Inner pages are code-split and preloaded during the page turn.

## Quality checks (at time of build)

- axe (WCAG 2.1 AA + best practices): 0 violations on every route, desktop and mobile
- Lighthouse, mobile, throttled, intro included: Performance 92–94 · Accessibility 100 · Best practices 100 · SEO 100 · CLS 0
- Keyboard: skip link, visible focus, ⌘K, G, focus moves to the new page after navigation

## Later, if needed

There's no server. If a contact form, analytics or playground data ever need one, add an `server/` Express app and point a small `src/lib/api.ts` at it. Nothing in the front end needs to change shape for that.
