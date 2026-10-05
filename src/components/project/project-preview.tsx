import type { Ref } from 'react'

import type { Project } from '@/data/types'
import { cn } from '@/lib/utils'
import { ProjectPlate } from './project-plate'

interface ProjectPreviewProps {
  ref?: Ref<HTMLDivElement>
  projects: Project[]
  /** index of the project whose plate is showing */
  active: number | null
}

/**
 * The floating plate that follows the cursor over the work index.
 * Positioning and motion live in ProjectList; this only renders the plates.
 */
export function ProjectPreview({ ref, projects, active }: ProjectPreviewProps) {
  return (
    <div
      ref={ref}
      data-preview
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 z-10 w-[min(26vw,380px)] overflow-hidden rounded-xs shadow-float"
    >
      {projects.map((project, i) => (
        <div
          key={project.slug}
          className={cn('transition-opacity duration-fast', active === i ? 'relative opacity-100' : 'absolute inset-0 opacity-0')}
        >
          <ProjectPlate project={project} index={i} />
        </div>
      ))}
    </div>
  )
}
