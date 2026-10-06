import { ArrowLeft } from '@phosphor-icons/react'

import { PageHeader } from '@/components/layout/page-header'
import { TransitionLink } from '@/components/navigation/transition-link'
import { pad3, workIndex } from '@/data/brand'
import type { Project } from '@/data/types'
import { ProjectMeta } from './project-meta'

interface ProjectHeaderProps {
  project: Project
  /** 0-based position among all projects */
  index: number
  total: number
}

/** Top of a case study: back link + case number, title, description, spec sheet. */
export function ProjectHeader({ project, index, total }: ProjectHeaderProps) {
  return (
    <PageHeader
      eyebrow={
        <>
          <TransitionLink to="/#work" className="group/back -my-1 flex items-center gap-1.5 rounded-full border border-ink/40 px-3 py-1 text-ink transition-colors hover:border-ink">
            <ArrowLeft aria-hidden className="size-3 transition-transform group-hover/back:-translate-x-0.5" />
            Work
          </TransitionLink>
          <span className="tabular-nums">
            {workIndex(index)} <span className="text-ink-faint">/ {pad3(total)}</span>
          </span>
        </>
      }
      title={project.title}
      titleSize="xl"
      lead={<p>{project.description}</p>}
      aside={<ProjectMeta project={project} />}
    />
  )
}
