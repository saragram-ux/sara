# sara lou — brand notes (v4)

> A small, very well-made corner of the internet belonging to Sara Gramstad.
> A little precise. A little strange. Not trying to impress you.

**v4:** the copy now speaks in the Handsdown tone: warm, direct, talks to you (see Voice). The visual system is unchanged.

**v3:** the serif is gone. Instrument Serif read as "2020 soft creative director", so display type is now **Familjen Grotesk Bold, uppercase** (a free stand-in for Mabry Bold; Archivo was tried first and was too wide), taking its cue from Designlab's CTA blocks without the blue. The contact section is a solid ink block with an acid pill button. And every line on the site went through a bullshit audit.

**v2 was a correction.** v1 drifted soft: a cute serif wordmark, a pastel dot, slogans ("details, yes · ceremony, no"), a sign-off like a café menu. v2 returns to what was actually distinctive, the intro screen:

```
sara lou ▪                          UI / PRODUCT / FRONTEND


SARA GRAMSTAD                                   000 / 100
```

Everything else follows from that screen. **Rule of thumb: when unsure, pick the stranger, sharper, more specific option.**

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

- **Talk to "you".** Say what working with Sara means for the reader, not what Sara is.
- **Asides are allowed.** "So, here's the short version." "Okay, the fun part." "Basically." Once per section, not every line.
- **Taglines can turn.** "X, without the Y", "from A to B", "that feels human". One per project.
- **Short, then a fact.** Every casual line sits on something true: dates, clients, tools, what she did.
- **Never:** "passionate", "solutions", "elevate", made-up metrics, or a joke that hides what she actually did.

**The bullshit test still applies,** but the target changed: casual is fine, vague isn't. If a line could be on anyone's site, rewrite it with a real detail.

| Use | Instead of |
| --- | --- |
| I design it. I build it. You skip the handoff. | I design interfaces. Then I build them. |
| The person who designs it is the person who builds it, so nothing gets lost in a handoff. | One person for the design and the Webflow build. Fewer handoffs. |
| Roommate matching that feels human. Brand, UI components and a Webflow site, mid-pivot. | Brand, UI components and a Webflow site while the product changed direction. |
| From craft kits to a Webflow platform. | Identity, online store and community platform for a craft brand. |
| Just the two of us, on purpose. No layers, no account managers. | Too much process, too many layers. |
| So, here's the short version. | (straight into the CV) |
| Stuff I build while learning to code. Some of it even works. | What I'm building while I learn. |
| Say hi. Tell me what's up. | Inbox open. / Let's make something together |

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
| Paper | `--paper` / `-raised` / `-sunken` | #f3f0e8 / #faf8f3 / #e9e5da |
| Ink | `--ink` / `-muted` / `-faint` | #161513 / #5c574e / #6f695e |
| Accent (acid green) | `--accent` | #9dc21b: status LEDs, the wordmark LED, text selection, the grid tool. Never text on paper |
| Accent for text | `--accent-ink` | #4a6400: the active nav index, link hover. That's it |

The green should feel almost accidental: a tiny LED, one active state, one hover underline. Headlines, numbers, arrows and rules are ink.

## Typography

- **Familjen Grotesk, 700, UPPERCASE** (`type-display`): headlines, project titles, buttons. Bold, slightly odd, notched corners. To switch to Mabry Bold with a web licence, change `--font-display` and the font import
- **Geist Mono:** the name, the system voice, every number
- **Geist:** reading

No serif. No italics in headlines. It's bold + mono, worn in rather than precious.

## Buttons and the contact block

- **Primary button:** a fat acid-green pill with ink caps (`Button` default). It's the one loud thing; use it once per screen.
- **Secondary:** an outline pill.
- **Contact block** (`theme-inverse`): ink background, with the tokens flipped so every component inverts by itself. A big caps headline, the email set like a form field (label, address, heavy underline), then the pills.

## Wordmark

`sara lou▪`: Geist Mono, lowercase, with a tiny square acid-green LED after it that blinks (on/off, not breathing) while Sara is open for work. There's no logo and no monogram; the favicon is `sl▪` on ink.

## Brand devices

1. **The index.** Everything is numbered like an archive: `000`, `WORK / 001`, `PLAYGROUND / 004`, `FIG. 02`. The page turn shows the destination's number before its title.
2. **The LED.** One tiny square of acid green, in the same shape everywhere: after the name, beside "open for work", on live experiments, on the currently board.
3. **The lockup.** `sara lou / UI / PRODUCT / FRONTEND` appears in the intro, the header and the footer.

## Motion

Quick, exact, slightly mechanical. Short durations (120 / 200 / 360 ms), `power4.out` arrivals, small distances (10–12px), and the cursor preview follows rather than floats (no tilt). The status LED blinks in steps. Nothing breathes, bounces or drifts.

## The test

Cover the name. Is it still recognisable? It should be, by the mono lockup, the numbering, the LED, the ink page turn with an index on it, and the bold caps headline over hard facts.
