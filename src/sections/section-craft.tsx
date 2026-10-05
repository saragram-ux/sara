import { useRef } from 'react'

import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { experience } from '@/data/experience'

/** About: the hands-on roots — fashion, craft and theatre — before screens. */
export function SectionCraft() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  const earlier = experience.filter((x) => x.group === 'earlier')
  return (
    <Section ref={ref} spacing="flush-top" aria-labelledby="hand-title">
      <SectionLabel index="02" id="hand-title">
        Made by hand, first
      </SectionLabel>
      <Grid className="mt-12 gap-y-10 md:mt-16">
        <div data-reveal className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-3">
          <p className="text-lead">
            Before screens, I made things with my hands: designing and sewing accessories for a small Malmö store, working in the
            costume department at Malmö Stadsteater, early days at Remake Sthlm.
          </p>
          <p className="mt-4 text-body text-ink-muted">
            My first taste of making something from scratch and seeing it reach a customer. Then Kreation Studio, my own small
            studio — where I learned what it actually takes to make things work.
          </p>
        </div>
        <ul data-reveal className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-10">
          {earlier.map((x) => (
            <li key={x.company} className="flex items-baseline justify-between gap-4 border-t border-rule py-2.5">
              <span className="text-small">{x.company}</span>
              <span className="type-label text-ink-muted tabular-nums">{x.start}</span>
            </li>
          ))}
        </ul>
      </Grid>
    </Section>
  )
}
