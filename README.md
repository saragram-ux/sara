# sara lou — Sara Gramstad

UI Designer · Product Designer · Frontend Developer. **sara lou** is the brand, **Sara Gramstad** is the person: see [`BRAND.md`](BRAND.md) for the name, voice, vocabulary, colour and wordmark decisions.
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
| `brand.ts` | The brand: name, descriptor (UI / Product / Frontend), index helpers (`pad3`, `workIndex`), page titles |
| `profile.ts` | Name, email, LinkedIn, location, availability, career path, languages, the lines of your own voice used around the site |
| `projects.ts` | Case studies: metadata, sections, notes, figures. Order = order on the site |
| `currently.ts` | The **Currently** panel. Bump `updated` when you edit it |
| `playground.ts` | Lab-notebook entries. `embed` renders a live demo; `draft: true` hides an entry in production |
| `experience.ts` | Roles and education. `group: 'earlier'` folds the early roles into one line on the home page |
| `skills.ts` | The honest stack: `fluent` → `building` → `exploring` |
| `about.ts` | The About page's design + behaviour + code trio |
| `navigation.ts` | Main nav |

**Adding images to a case study:** drop files in `public/work/<slug>/` and give a figure a `src`:

```ts
figure: { src: '/work/myo/store.webp', alt: 'MYO product page on mobile', caption: 'Store experience', aspect: '16 / 10' }
```

Projects without images show a typeset "plate" (a spec sheet built from the project's own data), so the layout never breaks. A project `cover` works the same way.

**Drafts:** case-study sections and playground items with `draft: true` show in `npm run dev` (dashed red outline) and never in production. Use them as prompts for things still to write.

---

## Architecture: Client-First, adapted to React

Borrowed from Relume / Finsweet Client-First: predictable names, a clear hierarchy, global decisions kept global. Not borrowed: Webflow class names in JSX. The code is meant to be boringly clear so the interface can be opinionated.

```
Design tokens      styles/globals.css            colour, type, spacing, radius, shadow, motion
      ↓
Layout primitives  components/layout/           Container · Section · Grid · Stack · Cluster
      ↓
UI primitives      components/ui/               shadcn: Button · Sheet · Dialog · Command · Kbd
      ↓
Components         components/<domain>/         ProjectIndex · ExperienceItem · PlaygroundCard · ContactLinks …
      ↓
Sections           sections/section-*.tsx       SectionHero · SectionProjects · SectionContact …
      ↓
Pages              pages/*-page.tsx             HomePage · ProjectPage · PlaygroundPage · AboutPage
```

A page reads like its table of contents:

```tsx
<HomePage>
  <SectionHero />
  <SectionProjects />
  <SectionAbout />
  <SectionPlayground />
  <SectionExperience variant="summary" index="04" />
  <SectionContact />
</HomePage>
```

### Where things live

| Looking for… | Go to |
| --- | --- |
| The brand (name, voice, wordmark, colour) | `BRAND.md`, `src/data/brand.ts`, `components/brand/wordmark.tsx` |
| Colours, type scale, spacing, radius, shadows | `src/styles/globals.css` (tokens at the top) |
| Animation timings and eases | `globals.css` (`--dur-*`, `--ease-*`) and `src/lib/motion.ts` (the GSAP mirror) |
| Page width, gutters, the grid | `container-page` / `grid-page` in `globals.css`; `Container` / `Grid` in `components/layout/` |
| The header and navigation | `components/layout/site-header.tsx` → `components/navigation/site-nav.tsx`, `nav-link.tsx`, `mobile-nav*.tsx` |
| How a page is put together | `src/pages/*-page.tsx` |
| One section of a page | `src/sections/section-*.tsx` |
| Projects, roles, playground entries, skills | `src/data/*.ts` |
| shadcn components | `src/components/ui/` (unchanged shadcn conventions) |
| Page transitions, intro, reveals | `src/components/motion/` |
| Routes | `src/routes.tsx` |

### Folders

```
src/
├── styles/globals.css         design tokens + utilities
├── data/                      all content, typed (types.ts)
├── components/
│   ├── ui/                    shadcn primitives — never renamed or branded
│   ├── brand/                 Wordmark (sara lou▪ — mono, with an LED that blinks while open for work)
│   ├── layout/                Container, Section, Grid, Stack, Cluster; SiteLayout, SiteHeader, SiteFooter,
│   │                          PageHeader, SectionLabel, GridOverlay
│   ├── navigation/            SiteNav, NavLink, MobileNav, MobileNavTrigger, CommandMenu(+Trigger),
│   │                          TransitionLink, SkipLink
│   ├── motion/                PageTransition, AnimatedLink, intro, use-reveal (usePageEntrance, useScrollReveal)
│   ├── instrument/            Module, Readout(s), Bracket, Switch, Ticker, SectionTitle — the device + archive kit
│   ├── project/               ProjectIndex (filters + rows), ProjectPlate, ProjectTags,
│   │                          ProjectHeader, ProjectMeta, ProjectCover, ProjectContent, ProjectChapter(+Nav), ProjectNext
│   ├── playground/            PlaygroundList, PlaygroundEntry, PlaygroundCard, PlaygroundStatus(+Legend),
│   │                          PlaygroundStack, Demo* (the live demos)
│   ├── experience/            ExperienceList, ExperienceItem
│   ├── contact/               ContactLinks, CopyEmailButton
│   ├── about/                 AboutIntro, SkillGroup, SkillLegend
│   └── common/                small shared bits: MetaList, StatusDot, LocalTime
├── sections/                  section-*.tsx — one file per page section
├── pages/                     *-page.tsx — one file per route
├── hooks/                     use-*.ts
├── lib/                       utils (cn), motion (GSAP setup), base (GitHub Pages path), site-context
└── routes.tsx
```

### Naming rules

- **Files are kebab-case**, components are PascalCase: `project-index.tsx` exports `ProjectIndex`.
- **Name what it is, then its role**: `ProjectIndex`, `ProjectChapterNav`, `PlaygroundStatusLegend`, never `Showcase`, `WorkThing`, `Wrapper2`.
- **Sections are `Section<Name>`**, pages are `<Name>Page`, live demos are `Demo<Name>`, hooks are `use<Name>`.
- **Variants, not copies.** One component with a prop instead of near-duplicates: `<SectionExperience variant="summary" | "full">`, `<ExperienceItem variant="compact" | "detailed">`, `<PlaygroundStack variant="inline" | "chips">`, `<ProjectTags density="compact" | "relaxed">`, `<Section spacing="default" | "flush-top" | "hero">`, `<Button variant>` (cva).
- **shadcn stays shadcn.** `components/ui/` keeps shadcn's names and APIs; portfolio components compose them.
- **Content stays in `data/`.** Components receive it as props (`<ProjectIndex projects={projects} />`).
- **The naming test:** if someone saw the name without opening the file, would they know what it does? If not, rename it.

### Utility classes

Custom utilities follow the same idea, *what it is → its role*:

| Utility | Does |
| --- | --- |
| `container-page` | max width + side padding (what `Container` renders) |
| `grid-page` | the 4 / 8 / 12 column grid (what `Grid` renders) |
| `section-padding` | a section's vertical rhythm (what `Section` renders) |
| `type-label` | small mono uppercase label |
| `type-meta` | mono metadata, sentence case |
| `type-prose` | editorial body copy |
| `reveal-line` | a clipped line text slides up into (GSAP reveals) |
| `link-underline` / `link-underline-draw` | quiet underline / underline that draws on hover |
| `divider` | a 1px rule |
| `duration-fast` / `-base` / `-slow` | motion durations as utilities |

### Spacing

Small steps use Tailwind's 4px scale (`gap-1.5` = 6px, `mt-10` = 40px …). The editorial whitespace uses named, fluid tokens, so the same idea is always the same size:

| Token | Utility example | Used for |
| --- | --- | --- |
| `--space-section` | `section-padding` | top and bottom of every section |
| `--space-block` | `mt-block-gap` | between large blocks inside a section |
| `--space-entry` | `gap-entry` | between case-study chapters and playground entries |
| `--space-page-top` | `pt-page-top` | above the first heading of a page |
| `--space-inset` | `p-inset` | inside framed panels |
| `--gutter` | `gap-x-gutter` | page side padding and column gap |
| `--sticky-top` | `top-sticky`, `scroll-mt-sticky` | where sticky elements and anchor jumps stop under the header |
| `--nudge` | `translate-x-nudge` | how far a title moves on hover |

Arbitrary values (`text-[…]`, `pl-[…]`) are kept only where they're art-directed (the hero's indent, the contact email's size) and carry a comment saying so. If a value starts repeating, it becomes a token.

When adding a custom token, also add it to `extendTailwindMerge` in `src/lib/utils.ts`, so `cn()` knows `text-nano` is a size and not a colour. And avoid naming spacing tokens after Tailwind keywords: `--spacing-block` would turn every `inline-block` into a width.

## Design tokens

- **Colour:** `paper`, `paper-raised`, `paper-sunken`, `ink`, `ink-muted`, `ink-faint`, `rule`, `rule-strong`, and one acid-green `accent` for status LEDs and selection, plus `accent-ink` for the rare accent *text*. Never put text in `accent` on paper. All text tokens are ≥ 4.5:1 on paper, raised and sunken. Paper is a cool pale sage (#e8ebe4).
- **Type:** three families with fixed roles. *Familjen Grotesk* (bold lowercase, via `type-display`; a free stand-in for Mabry Bold) for display, *Geist* for reading, *Geist Mono* for metadata. A fluid scale: `text-display-xl/lg/md/sm`, `text-title`, `text-lead`, `text-body`, `text-small`, `text-meta`, `text-micro`, `text-nano`.
- **Radius / shadow:** containers are rounded like a device: `rounded-card` (modules) and `rounded-cell` (panels inside them), `rounded-full` for pills and switches. Chips, tags and keys stay square. Shadows only on things that float (the command menu, the mobile menu).

shadcn/ui components in use: **Button, Sheet** (mobile menu), **Dialog + Command** (⌘K menu), plus a small `Kbd`. `components.json` is set up, so `npx shadcn@latest add <component>` works.

## Motion

GSAP only where it explains something:

- **Intro** (`components/motion/intro.ts`): static HTML in `index.html` that covers the font swap. 0.5–1 s, skippable with any key or click, once per session, never with reduced motion, and it hides itself if the JavaScript never loads.
- **Page turns** (`components/motion/page-transition.tsx`): an ink sheet covers the page while the next page's code loads, then lifts. In-page anchors scroll smoothly instead. Back/forward restores scroll.
- **Entrances** (`usePageEntrance`) and **scroll reveals** (`useScrollReveal`, any element with `data-reveal`), both in `components/motion/use-reveal.ts`. Both wait for the "reveal gate" so nothing animates behind a cover.
- **Work index:** the project plate follows the cursor (fine pointers only); the year rolls over to "View".
- Everything decorative is inside `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`. CSS transitions are neutralised for reduced motion too.

Routing is [wouter](https://github.com/molefrog/wouter) (~2 KB) rather than React Router (~90 KB minified for four routes). Inner pages are code-split and preloaded during the page turn.

## Quality checks (at time of build)

- axe (WCAG 2.1 AA + best practices): 0 violations on every route, desktop and mobile
- Lighthouse, mobile, throttled, intro included: Performance 92–94 · Accessibility 100 · Best practices 100 · SEO 100 · CLS 0
- Keyboard: skip link, visible focus, ⌘K, G, focus moves to the new page after navigation

## Later, if needed

There's no server. If a contact form, analytics or playground data ever need one, add an `server/` Express app and point a small `src/lib/api.ts` at it. Nothing in the front end needs to change shape for that.
