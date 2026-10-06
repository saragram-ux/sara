import { useRef } from 'react'

import { SkillGroup } from '@/components/about/skill-group'
import { SkillLegend } from '@/components/about/skill-legend'
import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { skills } from '@/data/skills'

/** About: the honest stack — what's daily, what I'm building with, what I'm exploring. */
export function SectionCapabilities() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} spacing="flush-top" aria-labelledby="stack-title">
      <SectionLabel index="04" id="stack-title">
        Built with
      </SectionLabel>
      <Grid className="mt-8 gap-y-6">
        <p data-reveal className="col-span-4 text-lead md:col-span-5 lg:col-span-5 lg:col-start-3">
          I’ve used Figma and Webflow every day for years. The code side I’m still learning, a bit more every week.
        </p>
        <SkillLegend data-reveal className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-10" />
      </Grid>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <li key={group.label} data-reveal className="rounded-card border border-ink p-5">
            <SkillGroup group={group} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
