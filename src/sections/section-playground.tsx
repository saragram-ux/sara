import { useRef } from 'react'

import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { AnimatedLink } from '@/components/motion/animated-link'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { PlaygroundCard } from '@/components/playground/playground-card'
import { visiblePlayground } from '@/data/playground'

/** Home: the three latest playground entries. */
export function SectionPlayground() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  const items = visiblePlayground.slice(0, 3)
  return (
    <Section ref={ref} aria-labelledby="playground-title">
      <SectionLabel index="03" id="playground-title" aside={`001 — ${visiblePlayground[0]?.id ?? '000'}`}>
        Playground
      </SectionLabel>

      <Grid className="mt-12 gap-y-6 md:mt-16">
        <h3 data-reveal className="col-span-4 type-display text-display-md md:col-span-6 lg:col-span-5 lg:col-start-3">
          Small things. Big rabbit holes.
        </h3>
        <p data-reveal className="col-span-4 text-lead text-ink-muted md:col-span-5 lg:col-span-4 lg:col-start-3">
          What I’m building while I learn. Some of it works.
        </p>
      </Grid>

      <Grid as="ol" className="mt-14 gap-y-10">
        {items.map((item) => (
          <li key={item.id} data-reveal className="col-span-4 md:col-span-4 lg:col-span-4">
            <PlaygroundCard item={item} />
          </li>
        ))}
      </Grid>

      <div data-reveal className="mt-12">
        <AnimatedLink href="/playground">Open the playground</AnimatedLink>
      </div>
    </Section>
  )
}
