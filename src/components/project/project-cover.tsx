import { useRef } from 'react'

import { Container } from '@/components/layout/container'
import type { Project } from '@/data/types'
import { gsap, MOTION_OK, useGSAP } from '@/lib/motion'
import { ProjectPlate } from './project-plate'
import { ProjectTags } from './project-tags'

/** The full-width cover of a case study, with a gentle parallax and the disciplines below. */
export function ProjectCover({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  // The plate drifts a little slower than the page.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          '[data-plate-inner]',
          { yPercent: -4, scale: 1.06 },
          {
            yPercent: 4,
            scale: 1.06,
            ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
    },
    { scope: ref },
  )

  return (
    <Container ref={ref} className="mt-block-gap">
      <div className="overflow-hidden">
        <ProjectPlate project={project} index={index} className="aspect-[4/3]! md:aspect-[16/8]!" />
      </div>
      <ProjectTags tags={project.disciplines} density="relaxed" as="p" className="mt-3" />
    </Container>
  )
}
