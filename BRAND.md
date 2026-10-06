# sara lou — brand notes (v5)

> **The visual design system is locked in [DESIGN.md](DESIGN.md).** This file covers the name, voice and copy.

> A small, very well-made corner of the internet belonging to Sara Gramstad.
> A little precise. A little strange. Not trying to impress you.

**v5: instrument + archive.** The look now comes from two references: a thermostat app (a calm device: pale cool paper, thin ink lines, rounded modules, big mono readouts with tiny labels, ON/OFF switches, a schedule table) and Snask's works index (an archive: a huge lowercase word, caps spread under it, bracket counts, filter chips, numbered rows with dotted rules and tags, a ticker). Together: *a device for browsing an archive.* Square blocks, folders and full-bleed sheets were all tried and dropped.

**v4:** the copy now speaks in the Handsdown tone: warm, direct, talks to you (see Voice). Headlines and buttons went lowercase to match; the mono system labels stay uppercase.

**v3:** the serif is gone. Instrument Serif read as "2020 soft creative director", so display type is now **Familjen Grotesk Bold, uppercase** (a free stand-in for Mabry Bold; Archivo was tried first and was too wide), taking its cue from Designlab's CTA blocks without the blue. The contact section is a solid ink block with an acid pill button. And every line on the site went through a bullshit audit.

**v2 was a correction.** v1 drifted soft: a cute serif wordmark, a pastel dot, slogans ("details, yes · ceremony, no"), a sign-off like a café menu. v2 returns to what was actually distinctive, the intro screen:

```
sara lou ▪                          UI / PRODUCT / FRONTEND


SARA GRAMSTAD                                   000 / 100
```

Everything else follows from that screen. **Rule of thumb: for the visuals, pick the stranger, sharper option. For words, pick the clearer one.**

---

## Name

**sara lou** is the public name, **Sara Gramstad** the person. The name stands there without explanation. Nothing on the site says what "sara lou" means or why it exists.

The interesting part is the **tension in the lockup**: a personal name next to a technical one. Don't resolve it.

```
sara lou ▪   UI / PRODUCT / FRONTEND
```

Sara Gramstad is always present as plain metadata: the index strip, About, the footer, page titles and structured data.

## Domain

**saralou.co** for the site and email, with **saragramstad.com** registered and redirecting to it. (Checked 2026-10: saralou.com is taken, and saralou.co / saragramstad.com don't resolve, so they're probably free; confirm at a registrar.) The domain isn't the brand; the site is.

## The idea

**A public notebook belonging to a designer who codes.** Notepad + design system + internet artifact: indexes, numbers, statuses and unfinished things, all extremely polished.

Roughly 70% editorial, 20% technical notebook, 10% internet artifact.

## Personality

direct · warm · a little cheeky · plain-spoken · precise underneath · independent

It is not: corporate, "passionate", boutique-studio polish, LinkedIn.

The look stays strict (mono, caps, numbers, one LED); the words loosen up. That contrast is the point.

## Voice

**v4: the Handsdown tone.** Sara's studio, Handsdown, talks like a person: "we're basically your in-house designers, but without the stress", "you tell us what's up, and we move", "no layers. No handoffs." The portfolio speaks the same way, as "I", with "we" only when Handsdown is talking.

- **Talk to "you".** Say what working with Sara is like for the reader.
- **Never smug, never showing off.** No "I do it all", no "built by me too", no lines that set Sara up as the clever one. Modest and helpful, like "we're basically your in-house designers".
- **Never so clever it's unclear.** If a stranger would have to stop and decode it ("small things, big rabbit holes", "mid-pivot", "same hands"), say the plain thing instead.
- **Asides are allowed, sparingly.** "So, here's the short version." Once per page at most.
- **Every casual line sits on a fact:** dates, clients, tools, what she actually did.
- **Never:** "passionate", "solutions", "elevate", made-up metrics.

**The test:** read each line aloud to someone who has never met Sara. Is it clear? Does it sound like her talking to them, rather than about herself? If not, rewrite it.

| Use | Instead of | Why |
| --- | --- | --- |
| Hi, I'm Sara. I design websites and products. | I design it. I build it. You skip the handoff. | smug |
| A few projects I've worked on, mostly through Hellofolk and Handsdown. | Okay, the fun part. …designed by me and usually built by me too. | showing off |
| Things I build while learning to code. | Small things. Big rabbit holes. | unclear |
| An app for finding a roommate. | Roommate matching, mid-pivot. | jargon |
| It's just the two of us, so you always talk to the people doing the work. | No layers, no account managers, no babysitting a design team. | performative |
| I'm a designer who's learning to code. | Designer by trade. Builder by increasingly frequent necessity. | too clever |
| Say hi. Tell me what's up. | Inbox open. / Let's make something together | |

## Credibility layer

The personality sits on top of plain facts, stated early: designing interfaces since 2018, five years at Hellofolk, co-founder of Handsdown Studio, design systems, Webflow, BA in Graphic Design, frontend development studies. The brand makes Sara memorable; it must never make her look less experienced.

## Vocabulary

**System words (UPPERCASE MONO):** INDEX · WORK · PLAYGROUND · ABOUT · CONTACT · CURRENTLY · OPEN FOR WORK · LIVE · BUILDING · IDEA · NEXT · SINCE

**Numbers:**
- `000 / 100`: the intro count
- `INDEX / 000`: the home page
- `WORK / 001` – `004`: projects, on plates, case headers and the "next" link
- `PLAYGROUND / 004`: experiments, newest first
- `01 / 02 / 03`: sections of a page
- `FIG. 02`: figures

**Notebook words (lowercase, only inside the currently board):** learning · building · using · studying · exploring · thinking about

## Colour

| Role | Token | Value |
| --- | --- | --- |
| Paper (cool, pale sage) | `--paper` / `-raised` / `-sunken` | #e8ebe4 / #f2f4ef / #dde1d8 |
| Ink | `--ink` / `-muted` / `-faint` | #161513 / #53574f / #5d6259 (all ≥ 4.5:1 on every paper) |
| Accent (acid green) | `--accent` | #9dc21b: the live LED only. Never text on paper |
| Pastels | `--lilac` (primary) / `--peach` (secondary) | fills with black text; see DESIGN.md |
| Accent for text | `--accent-ink` | #4a6400 |

Lines do the work: solid ink for module outlines and table heads, dotted ink for rows. No fills, no shadows on static things.

## Typography

- **Familjen Grotesk 700, lowercase** (`type-display`): page titles and section words ("work", "playground", "myo"). Tight tracking. A free stand-in for Mabry Bold
- **Geist Mono:** labels and brackets in UPPERCASE (`type-label`), big instrument values (`type-readout`: "16:27 CEST", "2028"), numbers, buttons, tags
- **Geist:** reading, and the spread caps descriptors under a section word

## Components

- **Module:** a rounded (`rounded-card`), outlined panel. Tiny label + quiet sub-line top left, a bracket or status top right. Every section and page header is one.
- **Readout:** tiny label above a big mono value. Use real facts only.
- **Switch:** an ON/OFF pill (the grid overlay). A real control.
- **Section title:** one huge lowercase word, an arrow, caps descriptors spread across, a `[ 01 · PROJECT(S) ]` row with a count.
- **Index rows:** `001`, an icon tile, title, dotted square tags, year, ↗. Dotted rules between.
- **Filters:** square dotted chips; the active one is acid with ☒, and the bracket count updates.
- **Buttons:** mono uppercase pills with an ink outline. The acid one is the loud one; use it once per screen.
- **Shape rule:** containers are rounded (modules, cells, pills, the command menu); chips, tags and keys stay square-ish.
- **Contact:** an ink module with the email set large in mono and a readout card for local time.

## Wordmark

`sara lou•`: Geist Mono, lowercase, with a tiny round acid-green LED after it that blinks (on/off, not breathing) while Sara is open for work. There's no logo and no monogram; the favicon is `sl•` on ink.

## Brand devices

1. **The index.** Everything is numbered like an archive: `000`, `WORK / 001`, `PLAYGROUND / 004`, `FIG. 02`. The page turn shows the destination's number before its title.
2. **The LED.** One tiny round dot of acid green, in the same shape everywhere: after the name, beside "open for work", on live experiments, on the currently board.
3. **The lockup.** `sara lou / UI / PRODUCT / FRONTEND` appears in the intro, the header and the footer.

## Motion

Quick, exact, slightly mechanical. Short durations (120 / 200 / 360 ms), `power4.out` arrivals, small distances (10–12px), and the cursor preview follows rather than floats (no tilt). The status LED blinks in steps. Nothing breathes, bounces or drifts.

## The test

Cover the name. Is it still recognisable? It should be, by the mono lockup, the numbering and brackets, the LED, the rounded outlined modules with mono readouts, and the big lowercase words over hard facts.
