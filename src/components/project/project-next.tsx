import { ArrowRight } from '@phosphor-icons/react'

import { Container } from '@/components/layout/container'
import { TransitionLink } from '@/components/navigation/transition-link'
import type { Project } from '@/data/types'

/** The large "Next case" link at the end of a case study. */
export function ProjectNext({ project }: { project: Project }) {
  return (
    <Container as="nav" aria-label="Next case study">
      <TransitionLink to={`/work/${project.slug}`} className="group/next block border-t border-ink pt-3">
        <span className="flex items-baseline justify-between type-label text-ink-muted">
          <span>Next case</span>
          <span className="tabular-nums">{project.year}</span>
        </span>
        <span className="mt-8 flex items-end justify-between gap-6 pb-4">
          <span className="font-serif text-display-lg transition-transform duration-slow ease-out-soft group-hover/next:translate-x-1">
            {project.title}
          </span>
          <ArrowRight
            aria-hidden
            className="mb-[0.4em] size-[clamp(1.5rem,1rem+2vw,3rem)] shrink-0 text-accent transition-transform duration-slow ease-out-soft group-hover/next:translate-x-2"
          />
        </span>
      </TransitionLink>
    </Container>
  )
}
