# sara lou — design system

> **Status: locked.** Agreed 2026-10-06 and live on the site. This is *the* design.
> Pastels and light/dark mode added 2026-10-06.
> Change it on purpose (see [Changing the design](#changing-the-design)), never by drift.
>
> Voice and copy rules live in [BRAND.md](BRAND.md). The tokens live in `src/styles/globals.css`.
> If this file and the code disagree, fix one of them so they match again.

## The idea

**A device for browsing an archive.**

Two references set it:

1. **A thermostat app**: a calm instrument. Pale cool paper, thin ink lines, rounded outlined modules, big mono readouts under tiny labels, ON/OFF switches, a schedule table.
2. **Snask's works index**: an archive. One huge lowercase word, caps spread under it, bracket counts like `[ 4 / 4 ]`, filter chips, numbered rows with dotted rules and tags, a running ticker.

The device gives it calm and structure; the archive gives it numbers, order and a bit of attitude.

## The ten rules

1. **Lines do the work.** Outlines and rules, no fills, no shadows on things that don't float.
2. **Solid ink for structure, dotted ink for rows.** Module outlines and table heads are solid; rows between items are dotted.
3. **Containers are rounded, details are square.** Modules, inner panels, pills, switches and menus are rounded. Chips, tags, keys and icon tiles stay square.
4. **Pastels mean something.** Lavender = work, taffy = playground, peach = you / contact. Always a fill with black text and a black outline; never text, never white on them, never faded text on them. Acid green is only the live LED.
5. **Big words are lowercase.** Page titles and section words in Familjen Grotesk Bold, lowercase, tight.
6. **Small words are mono caps.** Labels, brackets, buttons and numbers in Geist Mono uppercase.
7. **Values are readouts.** A fact worth showing gets a tiny label above a big mono value.
8. **Everything is numbered.** `INDEX / 000`, `WORK / 001`, `[ 01 · PROJECT(S) ]`, `[ 3 / 4 ]`.
9. **Only real facts.** Readouts, counts and tags come from `src/data/`. Never invent numbers to fill a module.
10. **Pastel means "you can press this" or "this is the moment".** Pastel buttons, chips and pills are clickable or active. A status that isn't clickable is an outline pill. A whole module may be pastel (only contact), and then everything inside it is black: mono, nothing faded, its button solid black (`Button variant="ink"`).

## Colour

Two layers: **paper and lines**, which flip between light and dark, and **pastels and the LED**, which never change.

### Paper and lines

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--paper` | `#e8ebe4` | `#141414` | page background |
| `--paper-raised` | `#f2f4ef` | `#1e1f1d` | hover on rows and cards, inner tiles |
| `--paper-sunken` | `#dde1d8` | `#0d0d0d` | rare recessed areas |
| `--ink` | `#161513` | `#e8ebe4` | text, outlines, solid rules |
| `--ink-muted` | `#53574f` | `#a3a99d` | secondary text (6.1:1 / 7.7:1) |
| `--ink-faint` | `#5d6259` | `#8a9085` | quietest text (≥ 4.5:1 / 5.6:1) |
| `--accent-ink` | `#4a6400` | `#9dc21b` | the rare green *text* |

Dotted rows use `border-dotted border-ink/60`. `theme-inverse` (the contact module) is dark in light mode and light in dark mode.

### Pastels and the LED (same in both modes)

| Token | Value | Means | Where |
| --- | --- | --- | --- |
| `--lavender` | `#bdb4ff` | work | "see the work" button, active Work filter + matching tags, Work nav pill, text selection |
| `--taffy` | `#edb5f7` | playground | LIVE pills, live-demo header strip, Playground nav pill |
| `--peach` | `#ffb985` | you / contact | the contact module (`theme-peach`), About + Contact nav pills |
| `--on-pastel` | `#141414` | — | the only text and outline colour on a pastel (9.8–11:1) |
| `--accent` | `#9dc21b` | live | the **round** blinking LED only (status, wordmark, favicon); on a pastel it gets a black ring (`ledOnPastel`) |

A pastel **module** uses `Module tone="peach"` or the `theme-peach` utility: it sets paper to peach and every ink token to black, so buttons, links, readouts and labels inside turn mono by themselves.

Use `pastelFill` from `src/lib/pastel.ts` (and `Button variant="taffy" | "peach"`, default lavender) rather than writing pastel classes by hand. White on a pastel fails (≈1.7:1). A pastel on our light paper is only ~1.5:1, which is why it always has an outline.

### Light / dark mode

- `<html data-theme="light|dark">` is set before first paint by a script in `index.html`: a saved choice (`localStorage` `sg:theme`) wins, else the system setting.
- `useTheme` (`src/hooks/use-theme.ts`) keeps React in sync; `ThemeToggle` in the header and a ⌘K action switch it.
- Never hard-code ink or paper hex in components. Use tokens, or `on-pastel` for text on a fixed colour.

## Type

| Role | Font | Class | Notes |
| --- | --- | --- | --- |
| Page title / section word | Familjen Grotesk 700 | `type-display text-display-xl` | lowercase, line-height 0.9, tracking −0.04em |
| Sentence titles | Familjen Grotesk 700 | `text-display-lg` / `-md` / `-sm` | same voice, one step down |
| Readout value | Geist Mono 400 | `type-readout` | "16:27 CEST", "2028"; tabular numbers |
| Label / bracket | Geist Mono, caps | `type-label` | 11px, tracking 0.06em |
| Button | Geist Mono 500, caps | `Button` | tracking 0.04em |
| Descriptors under a section word | Geist 500, caps | in `SectionTitle` | spread across the full width |
| Reading text | Geist | `text-lead`, `text-body`, `text-small` | sentence case |

Familjen Grotesk is a free stand-in for Mabry Bold. Swapping needs a web licence, and the repo is public, so check the licence covers that.

## Shape

| Token | Value | For |
| --- | --- | --- |
| `rounded-card` | 1.375rem | modules (every section, page header, footer, command menu) |
| `rounded-cell` | 0.875rem | a panel inside a module (readout card, live demo, notes, images) |
| `rounded-full` | pill | buttons, switches, status pills, nav tabs, round arrow buttons |
| square | none | chips, tags, keys, icon tiles, filter chips |

## Components

All in `src/components/`. Use these before inventing anything new.

| Component | File | What it is |
| --- | --- | --- |
| `Module` | `instrument/module.tsx` | the rounded outlined panel: label + sub top left, aside top right. `tone="ink"` inverted, `tone="peach"` the pastel moment |
| `Readout`, `Readouts` | `instrument/readout.tsx` | tiny label over a big mono value |
| `Bracket` | `instrument/readout.tsx` | `[ … ]` around a label or count (brackets are hidden from screen readers) |
| `Switch` | `instrument/switch.tsx` | real ON/OFF control (`role="switch"`) |
| `Ticker` | `instrument/ticker.tsx` | running band of words between squares; stops for reduced motion |
| `SectionTitle` | `instrument/section-title.tsx` | huge lowercase word + arrow, caps descriptors, bracket row with a count |
| `SectionLabel` | `layout/section-label.tsx` | `[ 02 · SECTION ]` over a dotted rule (inner pages) |
| `PageHeader` | `layout/page-header.tsx` | inner page top: one module with status row, huge title, lead + aside |
| `ProjectIndex` | `project/project-index.tsx` | work list: filter chips, live count, numbered dotted rows |
| `MetaList` | `common/meta-list.tsx` | label / value schedule rows |
| `StatusDot` | `common/status-dot.tsx` | the round acid LED |
| `ThemeToggle` | `navigation/theme-toggle.tsx` | light / dark button in the header |
| `pastelFill`, `ledOnPastel` | `lib/pastel.ts` | the pastel fill classes and the LED ring |
| `Button` | `ui/button.tsx` | mono pill; default = lavender, `taffy`, `peach`, `ink` (inside a pastel module), `outline`, `ghost`, `link` |

## Page anatomy

- **Every page** opens with one device panel: a status row (index left, context right), a huge lowercase title, then the lead and an aside (meta readouts or a legend).
- **Home:** hero device (status row with the grid switch, headline, readout bar with live local time, Studio and Studying modules, the career schedule) → ticker → `work` index with filters → About module with the Currently table → `playground` modules → Experience module → Contact.
- **Sections** open with `SectionTitle` on the home page and `SectionLabel` on inner pages.
- **Contact** closes every page: the peach module (same in both modes), email set large in mono, a solid black "Email me", an outline "Open for work" status, a readout card for local time.
- **Footer** is a module too: wordmark, index, elsewhere, colophon, then a dotted bottom bar.

## Motion

Quick and mechanical. Durations 120 / 200 / 360 ms, `power4.out` arrivals, 10–12 px travel. Headlines rise out of a mask; panels fade up and stagger. The round LED blinks in steps. The ticker runs at 38 s per loop. Everything decorative stops under `prefers-reduced-motion`.

## Accessibility (non-negotiable)

- All text ≥ 4.5:1 on its background **in both modes**. Re-check light and dark when any colour changes.
- Bracket characters are `aria-hidden`; headings stay in order (h1 → h2 → h3).
- Real controls for real behaviour: the grid switch is a switch, filters are `aria-pressed` buttons, the count is `aria-live`.
- No sideways scroll from 320 px up.

## Tried and dropped

So nobody brings these back by accident:

- **Warm cream paper with a serif** (v1–v2): too soft, read as a 2020 creative director.
- **Bold uppercase Archivo:** too wide.
- **Fully square ink boxes everywhere:** too stiff once everything was a box.
- **A single framed sheet with black header bars:** clearer, but heavy.
- **Folder tabs / file drawer:** charming but fussy, and fought the content.
- **Neo-brutalism (pink/lime/purple, offset shadows):** template-like and shouts over the work.
- **Char-truth #EAFC88 and Cool Whip #FFFEEC** from the 80s palette: the first vanishes on our paper and clashes with the acid LED; the second is the warm cream we dropped.
- **Acid-green buttons and filters:** the pastels took those jobs; acid green is only the live LED now.
- **Square LEDs:** round reads as a status light more clearly.
- **A peach "Open for work" pill:** it looked clickable and wasn't. Status is an outline pill; the whole module goes peach instead.

## Changing the design

1. Mock it on a **local branch** (never push mock branches) and compare screenshots against the live site.
2. Check desktop, tablet and phone, accessibility on every page, no sideways scroll, and a GitHub Pages build.
3. Merge to `master` only when the whole site matches. Never ship half a style.
4. Update this file in the same commit, and add a line to *Tried and dropped* if something was rejected.
