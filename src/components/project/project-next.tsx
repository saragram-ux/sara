import { ArrowRight } from '@phosphor-icons/react'

import { Container } from '@/components/layout/container'
import { TransitionLink } from '@/components/navigation/transition-link'
import { workIndex } from '@/data/brand'
import type { Project } from '@/data/types'

/** The large "next" link at the end of a case study. */
export function ProjectNext({ project, index }: { project: Project; index: number }) {
  return (
    <Container as="nav" aria-label="Next case study">
      <TransitionLink to={`/work/${project.slug}`} className="group/next block border-t border-ink pt-3">
        <span className="flex items-baseline justify-between type-label text-ink-muted">
          <span className="tabular-nums">Next / {workIndex(index)}</span>
          <span className="tabular-nums">{project.year}</span>
        </span>
        <span className="mt-8 flex items-end justify-between gap-6 pb-4">
          <span className="type-display text-display-lg transition-transform duration-base ease-out-soft group-hover/next:translate-x-1">
            {project.title}
          </span>
          <ArrowRight
            aria-hidden
            className="mb-[0.4em] size-[clamp(1.5rem,1rem+2vw,3rem)] shrink-0 text-ink transition-transform duration-base ease-out-soft group-hover/next:translate-x-2"
          />
        </span>
      </TransitionLink>
    </Container>
  )
}
