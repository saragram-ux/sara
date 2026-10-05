import { useRef } from 'react'

import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { ProjectList } from '@/components/project/project-list'
import { pad3 } from '@/data/brand'
import { projects } from '@/data/projects'

/** Home: the selected-work index. */
export function SectionProjects() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} id="work" tabIndex={-1} aria-labelledby="work-title" className="outline-none">
      <SectionLabel index="01" id="work-title" aside={`001 — ${pad3(projects.length)}`}>
        Work
      </SectionLabel>
      <Grid className="mt-10 mb-6 md:mt-14">
        <p data-reveal className="col-span-4 text-lead text-ink-muted md:col-span-6 lg:col-span-6 lg:col-start-3">
          Brands, stores and products. Usually designed and built by me.
        </p>
      </Grid>
      <ProjectList projects={projects} />
    </Section>
  )
}
