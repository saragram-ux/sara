import { useRef } from 'react'

import { Bracket } from '@/components/instrument/readout'
import { SectionTitle } from '@/components/instrument/section-title'
import { Section } from '@/components/layout/section'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { ProjectIndex } from '@/components/project/project-index'
import { projects } from '@/data/projects'

/** Home: the selected-work index. */
export function SectionProjects() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} id="work" tabIndex={-1} aria-labelledby="work-title" className="outline-none">
      <SectionTitle
        id="work-title"
        descriptors={['Brands', 'Websites', 'Online stores', 'Apps']}
        meta={<Bracket>01 · Project(s)</Bracket>}
        metaAside={<span className="type-label text-ink-muted">Mostly via Hellofolk + Handsdown</span>}
      >
        work
      </SectionTitle>
      <ProjectIndex projects={projects} />
    </Section>
  )
}
