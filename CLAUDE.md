# Working on this repo

Sara Gramstad's portfolio, **sara lou**. Vite + React + TypeScript + Tailwind v4, deployed to GitHub Pages from `master`.

## Before any visual or UI change

**Read [DESIGN.md](DESIGN.md) first.** The design is locked: instrument + archive, cool sage paper (dark mode too), rounded outlined modules, mono readouts, dotted rows, lowercase display type, three meaningful pastels and one acid LED. Build with the existing components in `src/components/instrument/` and the tokens in `src/styles/globals.css`. Don't introduce new colours, fonts, radii or shadows without Sara asking for a design change.

## Before any copy change

**Read [BRAND.md](BRAND.md).** Talk to "you", warm and direct. Never smug or showing off, never so clever it's unclear.

## Hard rules

- **No invented facts.** Clients, numbers, dates and results come from `src/data/` (sourced from Sara's LinkedIn). Use placeholders or ask.
- **No phone number** on the site.
- **Content lives in `src/data/`**, not in components.
- Accessibility: text ≥ 4.5:1, headings in order, no sideways scroll from 320 px.

## Workflow

- Design experiments go on a **local** branch with screenshots; merge to `master` only when the whole site matches. Never push mock branches.
- Before pushing: `npx tsc -b`, `npm run lint`, `npm run build`.
- Push with `git push origin master`; GitHub Pages deploys automatically.
