# sara lou — brand notes (v3)

> A small, very well-made corner of the internet belonging to Sara Gramstad.
> A little precise. A little strange. Not trying to impress you.

**v3:** the serif is gone. Instrument Serif read as "2020 soft creative director", so display type is now **Familjen Grotesk Bold, uppercase** (a free stand-in for Mabry Bold; Archivo was tried first and was too wide), taking its cue from Designlab's CTA blocks without the blue. The contact section is a solid ink block with an acid pill button. And every line on the site went through a bullshit audit (see Voice).

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

crisp · dry · precise · slightly odd · independent · technical · understated · a little deadpan

It is not: friendly-designer-next-door, boutique studio, lifestyle brand, developer portfolio, "warm independent creative".

## Voice

Matter-of-fact. Say the thing and stop. A deadpan line is allowed once per page, and it's usually the headline. The facts underneath stay serious. Never explain the brand, never say "passionate", and no slogans.

**The bullshit test.** Read every line as a blunt founder would. If he'd say "that's bullshit", rewrite it as the plain fact or cut it. Usual offenders: anything about "making things clearer", "easy to work alongside", pull quotes of yourself, rhyming labels, and "on purpose".

| Use | Instead of |
| --- | --- |
| I design interfaces. Then I build them. | Designer. Builder. Detail person. |
| One person for the design and the Webflow build. Fewer handoffs. | I slot into your team and focus on making things clearer… |
| Brand, UI components and a Webflow site while the product changed direction. | Making the outside of a product match where the inside was heading |
| Studied it, didn't finish it, still use it. | The why. Interfaces are made of decisions, after all. |
| Designer by trade. Builder by increasingly frequent necessity. | Hi, I'm Sara! |
| I started in graphic design. Then interfaces happened. Now I'm learning to build the whole thing. | Graphic design taught me to see… |
| Small things. Big rabbit holes. What I'm building while I learn. Some of it works. | Unfinished, on purpose. |
| Inbox open. | Let's make something / say hi |
| Freelance and contract work. Remote, across Europe. | Always happy to chat! |

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
