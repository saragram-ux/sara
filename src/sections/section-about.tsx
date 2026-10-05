import { useRef } from 'react'

import { CurrentlyPanel } from '@/components/about/currently-panel'
import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { AnimatedLink } from '@/components/motion/animated-link'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { profile } from '@/data/profile'

/** Home: positioning in a few lines, plus what I'm doing right now. */
export function SectionAbout() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} aria-labelledby="about-title">
      <SectionLabel index="02" id="about-title">
        About
      </SectionLabel>

      <Grid className="mt-12 gap-y-14 md:mt-16">
        <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-3">
          <p data-reveal className="type-display text-display-md">
            I started in graphic design. Then interfaces happened. Now I’m learning to build the whole thing.
          </p>
          <div data-reveal className="mt-10 grid gap-5 text-body md:grid-cols-2 md:gap-gutter">
            <p>
              These days I run Handsdown Studio with Daniel. Just the two of us, on purpose. No layers, no account managers, no
              babysitting a design team.
            </p>
            <p className="text-ink-muted">{profile.voice.approach}</p>
          </div>
          <div data-reveal className="mt-10">
            <AnimatedLink href="/about">The longer story</AnimatedLink>
          </div>
        </div>

        <div data-reveal className="col-span-4 md:col-span-5 lg:col-span-3 lg:col-start-10">
          <div className="lg:sticky lg:top-sticky">
            <CurrentlyPanel />
          </div>
        </div>
      </Grid>
    </Section>
  )
}
