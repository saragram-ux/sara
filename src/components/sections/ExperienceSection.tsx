import { useRef } from 'react'

import { ArrowLink } from '@/components/common/ArrowLink'
import { SectionLabel } from '@/components/common/SectionLabel'
import { useScrollReveal } from '@/components/motion/useEntrance'
import { experience } from '@/data/experience'
import { ExperienceList } from './ExperienceList'

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  const main = experience.filter((x) => !x.group)
  const earlier = experience.filter((x) => x.group === 'earlier')
  return (
    <section ref={ref} aria-labelledby="experience-title" className="page section-space">
      <SectionLabel index="04" id="experience-title" aside="2008—now">
        Experience
      </SectionLabel>
      <div className="mt-12 md:mt-16">
        <ExperienceList items={main} />
      </div>
      <div data-reveal className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
        <p className="text-small text-ink-muted">
          + {earlier.length} earlier roles in fashion, craft and theatre — where I learned to make things by hand.
        </p>
        <ArrowLink href="/about#experience">Full background</ArrowLink>
      </div>
    </section>
  )
}
