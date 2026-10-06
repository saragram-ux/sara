import { ArrowRight } from '@phosphor-icons/react'

import { Container } from '@/components/layout/container'
import { TransitionLink } from '@/components/navigation/transition-link'
import { workIndex } from '@/data/brand'
import type { Project } from '@/data/types'

/** The "next" link at the end of a case study: one rounded module, the whole thing clickable. */
export function ProjectNext({ project, index }: { project: Project; index: number }) {
  return (
    <Container as="nav" aria-label="Next case study">
      <TransitionLink
        to={`/work/${project.slug}`}
        className="group/next block rounded-card border border-ink p-5 transition-colors duration-base hover:bg-paper-raised md:p-8"
      >
        <span className="flex items-baseline justify-between border-b border-dotted border-ink/60 pb-3 type-label">
          <span className="tabular-nums">Next / {workIndex(index)}</span>
          <span className="text-ink-muted tabular-nums">{project.year}</span>
        </span>
        <span className="mt-8 flex items-end justify-between gap-6">
          <span className="type-display text-display-lg transition-transform duration-base ease-out-soft group-hover/next:translate-x-1">
            {project.title}
          </span>
          <span
            aria-hidden
            className="mb-[0.3em] grid size-[clamp(2.75rem,2rem+2vw,4rem)] shrink-0 place-items-center rounded-full border border-ink transition-colors duration-base group-hover/next:bg-ink group-hover/next:text-paper"
          >
            <ArrowRight className="size-1/2" />
          </span>
        </span>
      </TransitionLink>
    </Container>
  )
}
