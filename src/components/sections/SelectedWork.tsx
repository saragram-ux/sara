import { useRef } from 'react'

import { SectionLabel } from '@/components/common/SectionLabel'
import { useScrollReveal } from '@/components/motion/useEntrance'
import { ProjectIndex } from '@/components/project/ProjectIndex'
import { projects } from '@/data/projects'

export function SelectedWork() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <section ref={ref} id="work" tabIndex={-1} aria-labelledby="work-title" className="page section-space outline-none">
      <SectionLabel index="01" id="work-title" aside={`(${String(projects.length).padStart(2, '0')})`}>
        Selected work
      </SectionLabel>
      <div className="page-grid mt-10 mb-6 md:mt-14">
        <p data-reveal className="col-span-4 text-lead text-ink-muted md:col-span-6 lg:col-span-6 lg:col-start-3">
          Brands, stores and products — usually designed <em className="font-serif text-[1.15em] text-ink">and</em> built by
          me.
        </p>
      </div>
      <ProjectIndex projects={projects} />
    </section>
  )
}
