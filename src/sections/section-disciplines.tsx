import { useRef } from 'react'

import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { disciplines } from '@/data/about'

/** About: graphic design + behavioural science + frontend, and the motto. */
export function SectionDisciplines() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} aria-labelledby="mix-title">
      <SectionLabel index="01" id="mix-title">
        Design + behaviour + code
      </SectionLabel>
      <Grid as="ol" className="mt-12 gap-y-12 md:mt-16">
        {disciplines.map((d, i) => (
          <li key={d.discipline} data-reveal className="relative col-span-4 md:col-span-8 lg:col-span-4">
            <div className="flex items-baseline justify-between type-label text-ink-muted">
              <span className="text-accent">{d.gives}</span>
              <span className="tabular-nums">{d.years}</span>
            </div>
            <h3 className="mt-6 font-serif text-display-sm">{d.discipline}</h3>
            <p className="mt-1 type-label text-ink-muted">{d.where}</p>
            <p className="mt-5 max-w-sm text-body">{d.text}</p>
            {i < disciplines.length - 1 && (
              // the + sits in the middle of the gutter between columns
              <span
                aria-hidden
                className="absolute top-14 -right-[calc(var(--gutter)/2)] hidden translate-x-1/2 font-serif text-display-sm text-ink-faint lg:block"
              >
                +
              </span>
            )}
          </li>
        ))}
      </Grid>
      <Grid as="figure" data-reveal className="mt-block-gap">
        <blockquote className="col-span-4 font-serif text-display-md md:col-span-7 lg:col-span-8 lg:col-start-3">
          “Details matter to me, but never more than <em className="text-accent">momentum.</em>”
        </blockquote>
      </Grid>
    </Section>
  )
}
