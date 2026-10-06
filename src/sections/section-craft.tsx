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
      <Grid className="mt-8 gap-y-10">
        <div data-reveal className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-3">
          <p className="text-lead">
            Before screens, I made actual things. I designed and sewed accessories for a small Malmö store, worked in the costume
            department at Malmö Stadsteater and had my early days at Remake Sthlm.
          </p>
          <p className="mt-4 text-body text-ink-muted">
            That’s where I first made something from scratch and watched it reach a customer. Then I started Kreation Studio, my
            own small studio, and learned what it actually takes to make things work.
          </p>
        </div>
        <ul data-reveal className="col-span-4 self-start border-t border-ink md:col-span-3 lg:col-span-3 lg:col-start-10">
          {earlier.map((x) => (
            <li key={x.company} className="flex items-baseline justify-between gap-4 border-b border-dotted border-ink/60 py-2.5">
              <span className="text-small">{x.company}</span>
              <span className="type-label text-ink-muted tabular-nums">{x.start}</span>
            </li>
          ))}
        </ul>
      </Grid>
    </Section>
  )
}
