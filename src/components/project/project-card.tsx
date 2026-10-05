import { ArrowRight } from '@phosphor-icons/react'
import type { PointerEventHandler } from 'react'

import { TransitionLink } from '@/components/navigation/transition-link'
import { pad3 } from '@/data/brand'
import type { Project } from '@/data/types'
import { cn } from '@/lib/utils'
import { ProjectPlate } from './project-plate'
import { ProjectTags } from './project-tags'

interface ProjectCardProps {
  project: Project
  /** 0-based position in the list */
  index: number
  /** highlighted while its preview is showing */
  active?: boolean
  /** show the plate inline (touch / no cursor preview) */
  showPlate?: boolean
  onPointerEnter?: PointerEventHandler<HTMLAnchorElement>
}

/**
 * One row of the work index: number, title + summary, role + disciplines, year.
 * On desktop the year rolls up and "View" rolls in on hover.
 */
export function ProjectCard({ project, index, active = false, showPlate = false, onPointerEnter }: ProjectCardProps) {
  return (
    <TransitionLink
      to={`/work/${project.slug}`}
      onPointerEnter={onPointerEnter}
      className={cn(
        'group/row grid-page relative items-baseline gap-y-3 py-7 transition-colors duration-base md:py-9',
        'focus-visible:outline-offset-[-2px]',
      )}
    >
      {showPlate && (
        <div className="col-span-4 mb-3 overflow-hidden rounded-xs md:col-span-8 lg:hidden">
          <ProjectPlate project={project} index={index} />
        </div>
      )}

      <span
        className={cn(
          'col-span-1 type-label tabular-nums transition-colors duration-base',
          active ? 'text-ink' : 'text-ink-muted group-hover/row:text-ink',
        )}
      >
        {pad3(index + 1)}
      </span>

      <span className="relative col-span-3 overflow-hidden text-right type-label text-ink-muted tabular-nums md:col-span-7 lg:order-last lg:col-span-1">
        <span className="block transition-transform duration-base ease-out-soft lg:group-hover/row:-translate-y-full lg:group-focus-visible/row:-translate-y-full">
          {project.year}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 hidden translate-y-full items-center justify-end gap-1 text-ink transition-transform duration-base ease-out-soft lg:flex lg:group-hover/row:translate-y-0 lg:group-focus-visible/row:translate-y-0"
        >
          View <ArrowRight weight="bold" className="size-3" />
        </span>
      </span>

      <span className="col-span-4 md:col-span-6 lg:col-span-5 lg:col-start-3">
        <span className="block font-serif text-display-md transition-transform duration-base ease-out-soft group-hover/row:translate-x-nudge">
          {project.title}
        </span>
        <span className="mt-2 block max-w-[34rem] text-small text-ink-muted">{project.summary}</span>
      </span>

      <span className="col-span-3 flex flex-col gap-1 md:col-span-2 lg:col-span-3 lg:col-start-9">
        <span className="text-small">{project.role}</span>
        <ProjectTags tags={project.disciplines} />
      </span>

      <span aria-hidden className="col-span-1 flex justify-end self-center md:col-start-8 lg:col-start-auto lg:hidden">
        <ArrowRight weight="bold" className="size-4" />
      </span>
    </TransitionLink>
  )
}
