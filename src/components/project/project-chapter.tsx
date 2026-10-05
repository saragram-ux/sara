import type { CaseSection, Project } from '@/data/types'
import { cn } from '@/lib/utils'
import { ProjectPlate } from './project-plate'

interface ProjectChapterProps {
  chapter: CaseSection
  /** 1-based chapter number */
  number: number
  project: Project
  projectIndex: number
  /** running figure number across the case study */
  figureIndex: number
}

/** One chapter of a case study: label, title, text, side notes and an optional figure. */
export function ProjectChapter({ chapter, number, project, projectIndex, figureIndex }: ProjectChapterProps) {
  return (
    <section
      id={chapter.id}
      tabIndex={-1}
      aria-labelledby={`${chapter.id}-label`}
      className={cn('scroll-mt-sticky outline-none', chapter.draft && 'rounded-md border border-dashed border-accent/60 p-5')}
    >
      <div data-reveal className="grid gap-y-6 md:grid-cols-9 md:gap-x-gutter">
        <div className="md:col-span-6">
          <h2 id={`${chapter.id}-label`} className="type-label text-ink-muted">
            <span className="text-accent tabular-nums">{String(number).padStart(2, '0')}</span> — {chapter.label}
            {chapter.draft && <span className="ml-2 text-accent">(draft · dev only)</span>}
          </h2>
          {chapter.title && <p className="mt-5 font-serif text-display-sm">{chapter.title}</p>}
          <div className="type-prose mt-5">
            {chapter.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        {chapter.notes && (
          <aside className="md:col-span-3 md:pt-9" aria-label={chapter.notes.label}>
            <div className="border-t border-rule pt-3">
              <p className="type-label text-ink-muted">{chapter.notes.label}</p>
              <ul className="mt-3 grid gap-1 type-meta">
                {chapter.notes.items.map((note) => (
                  <li key={note} className="flex gap-2">
                    <span aria-hidden className="text-accent">
                      ›
                    </span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
      {chapter.figure && (
        <figure data-reveal className="mt-10">
          <div className="overflow-hidden rounded-xs">
            <ProjectPlate project={project} index={projectIndex} figure={chapter.figure} figureIndex={figureIndex} />
          </div>
          <figcaption className="mt-3 type-label text-ink-muted">
            Fig. {String(figureIndex).padStart(2, '0')} — {chapter.figure.caption}
          </figcaption>
        </figure>
      )}
    </section>
  )
}
