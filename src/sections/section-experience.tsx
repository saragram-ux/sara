import { useRef } from 'react'

import { ExperienceList } from '@/components/experience/experience-list'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { AnimatedLink } from '@/components/motion/animated-link'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { experience } from '@/data/experience'

interface SectionExperienceProps {
  /** summary (home): compact list + a pointer to the rest. full (about): every role, with descriptions. */
  variant?: 'summary' | 'full'
  /** section number shown in the label, e.g. '04' */
  index: string
}

/** The career timeline. */
export function SectionExperience({ variant = 'summary', index }: SectionExperienceProps) {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  const roles = experience.filter((x) => !x.group)
  const earlier = experience.filter((x) => x.group === 'earlier')

  if (variant === 'full') {
    return (
      <Section ref={ref} id="experience" tabIndex={-1} spacing="flush-top" aria-labelledby="xp-title" className="outline-none">
        <SectionLabel index={index} id="xp-title" aside="2018—now">
          Experience
        </SectionLabel>
        <div className="mt-12 md:mt-16">
          <ExperienceList entries={roles} variant="detailed" />
        </div>
      </Section>
    )
  }

  return (
    <Section ref={ref} aria-labelledby="experience-title">
      <SectionLabel index={index} id="experience-title" aside="2008—now">
        Experience
      </SectionLabel>
      <div className="mt-12 md:mt-16">
        <ExperienceList entries={roles} />
      </div>
      <div data-reveal className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
        <p className="text-small text-ink-muted">
          + {earlier.length} earlier roles in fashion, craft and theatre. I made things by hand long before I made them on screens.
        </p>
        <AnimatedLink href="/about#experience">The long version</AnimatedLink>
      </div>
    </Section>
  )
}
