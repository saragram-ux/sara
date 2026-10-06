import { useRef } from 'react'

import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { education, formatRange } from '@/data/experience'
import { certifications, languages } from '@/data/profile'

/** About: schools and courses, certification, languages. */
export function SectionEducation() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} spacing="flush-top" aria-labelledby="edu-title">
      <SectionLabel index="05" id="edu-title">
        Education
      </SectionLabel>
      <ol className="mt-8 border-t border-ink">
        {education.map((e) => (
          <Grid as="li" key={e.programme} data-reveal className="items-baseline gap-y-1 border-b border-dotted border-ink/60 py-4 md:py-5">
            <span className="col-span-4 type-label text-ink-muted tabular-nums md:col-span-2">{formatRange(e.start, e.end)}</span>
            <span className="col-span-4 text-body font-medium md:col-span-3 lg:col-span-4">{e.programme}</span>
            <span className="col-span-4 text-small text-ink-muted md:col-span-3 lg:col-span-4">{e.school}</span>
            <span className="hidden text-right type-label text-ink-muted lg:col-span-2 lg:block">{e.note}</span>
          </Grid>
        ))}
      </ol>
      <Grid className="mt-12 gap-y-8">
        <div data-reveal className="col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-3">
          <h3 className="type-label text-ink-muted">Certification</h3>
          {certifications.map((c) => (
            <p key={c} className="mt-3 text-small">
              {c}
            </p>
          ))}
        </div>
        <div data-reveal className="col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-8">
          <h3 className="type-label text-ink-muted">Languages</h3>
          <ul className="mt-3 grid gap-1 text-small">
            {languages.map((l) => (
              <li key={l.name} className="flex justify-between gap-4">
                <span>{l.name}</span>
                <span className="type-label text-ink-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </Section>
  )
}
