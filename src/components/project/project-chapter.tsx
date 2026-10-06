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
      className={cn('scroll-mt-sticky outline-none', chapter.draft && 'rounded-card border border-dashed border-accent/60 p-5')}
    >
      <div data-reveal className="grid gap-y-6 md:grid-cols-9 md:gap-x-gutter">
        <div className="md:col-span-6">
          <h2 id={`${chapter.id}-label`} className="border-b border-dotted border-ink/60 pb-3 type-label font-medium">
            <span aria-hidden>[ </span>
            <span className="tabular-nums">{String(number).padStart(2, '0')}</span> · {chapter.label}
            <span aria-hidden> ]</span>
            {chapter.draft && <span className="ml-2 text-accent-ink">(draft · dev only)</span>}
          </h2>
          {chapter.title && <p className="mt-5 type-display text-display-sm">{chapter.title}</p>}
          <div className="type-prose mt-5">
            {chapter.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        {chapter.notes && (
          <aside className="md:col-span-3 md:pt-9" aria-label={chapter.notes.label}>
            <div className="rounded-cell border border-ink p-4">
              <p className="type-label font-medium">{chapter.notes.label}</p>
              <ul className="mt-3 border-t border-ink type-meta">
                {chapter.notes.items.map((note) => (
                  <li key={note} className="flex gap-2 border-b border-dotted border-ink/60 py-2 last:border-b-0">
                    <span aria-hidden className="text-accent-ink">
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
          <div className="overflow-hidden rounded-cell">
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
