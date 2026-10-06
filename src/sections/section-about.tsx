import { useRef } from 'react'

import { StatusDot } from '@/components/common/status-dot'
import { Module } from '@/components/instrument/module'
import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { AnimatedLink } from '@/components/motion/animated-link'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { currently } from '@/data/currently'
import { profile } from '@/data/profile'
import { formatMonth } from '@/lib/utils'

/** Home: positioning in a few lines, plus what I'm doing right now. */
export function SectionAbout() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} aria-labelledby="about-title">
      <Module
        label={
          <span id="about-title" role="heading" aria-level={2}>
            02 · About
          </span>
        }
        sub="Graphic design → interfaces → code"
        className="p-5 md:p-8 lg:p-10"
      >
        <Grid className="gap-y-10">
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <p data-reveal className="type-display text-display-md">
              I started in graphic design, moved into interfaces, and now I’m learning to code.
            </p>
            <div data-reveal className="mt-10 grid gap-5 text-body md:grid-cols-2 md:gap-gutter">
              <p>
                These days I run Handsdown Studio with Daniel. It’s just the two of us, so you always talk to the people doing the
                work.
              </p>
              <p className="text-ink-muted">{profile.voice.approach}</p>
            </div>
            <div data-reveal className="mt-10">
              <AnimatedLink href="/about">The longer story</AnimatedLink>
            </div>
          </div>

          {/* currently: a little schedule inside the panel */}
          <section
            data-reveal
            aria-labelledby="currently-title"
            className="col-span-4 self-start rounded-cell border border-ink p-4 md:col-span-8 lg:col-span-5 lg:col-start-8"
          >
            <div className="flex items-center justify-between">
              <h3 id="currently-title" className="flex items-center gap-2 type-label font-medium">
                <StatusDot />
                Currently
              </h3>
              <time dateTime={currently.updated} className="type-label text-ink-muted">
                {formatMonth(currently.updated)}
              </time>
            </div>
            <dl className="mt-3 border-t border-ink">
              {currently.items.map((item) => (
                <div key={item.verb + item.what} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-3 border-b border-dotted border-ink/60 py-2.5 last:border-b-0">
                  <dt className="type-label text-ink-muted">{item.verb}</dt>
                  <dd className="font-mono text-small">{item.what}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Grid>
      </Module>
    </Section>
  )
}
