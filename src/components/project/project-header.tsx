import { ArrowLeft } from '@phosphor-icons/react'

import { PageHeader } from '@/components/layout/page-header'
import { TransitionLink } from '@/components/navigation/transition-link'
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
          <TransitionLink to="/#work" className="group/back -my-2 flex items-center gap-1.5 py-2 hover:text-ink">
            <ArrowLeft aria-hidden className="size-3 transition-transform group-hover/back:-translate-x-0.5" />
            Work
          </TransitionLink>
          <span className="tabular-nums">
            Case {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </>
      }
      title={project.title}
      lead={<p>{project.description}</p>}
      aside={<ProjectMeta project={project} />}
    />
  )
}
