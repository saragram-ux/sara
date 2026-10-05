import type { CSSProperties } from 'react'

import { workIndex } from '@/data/brand'
import type { Figure, Project } from '@/data/types'
import { withBase } from '@/lib/base'
import { cn } from '@/lib/utils'

const tones = {
  paper: { bg: 'var(--paper-raised)', fg: 'var(--ink)', line: 'rgb(22 21 19 / 0.055)', pill: 'var(--ink)', pillFg: 'var(--paper-raised)' },
  sand: { bg: '#e6ddcb', fg: 'var(--ink)', line: 'rgb(22 21 19 / 0.07)', pill: 'var(--ink)', pillFg: '#e6ddcb' },
  ink: { bg: '#1d1c19', fg: '#efebe2', line: 'rgb(239 235 226 / 0.07)', pill: '#efebe2', pillFg: '#1d1c19' },
} as const

const CropMarks = () => (
  <>
    {['top-2.5 left-2.5 border-t border-l', 'top-2.5 right-2.5 border-t border-r', 'bottom-2.5 left-2.5 border-b border-l', 'bottom-2.5 right-2.5 border-b border-r'].map(
      (pos) => (
        <span key={pos} aria-hidden className={cn('absolute size-2.5 border-current opacity-40', pos)} />
      ),
    )}
  </>
)

interface PlateProps {
  project: Project
  index: number
  /** When set, the plate stands in for a case-study image. */
  figure?: Figure
  figureIndex?: number
  className?: string
}

/**
 * A typeset "spec sheet" for a project — the visual used until real images exist.
 * If the figure (or project cover) has a `src`, the image is shown instead.
 */
export function ProjectPlate({ project, index, figure, figureIndex, className }: PlateProps) {
  const image = figure ?? project.cover
  const aspect = image?.aspect ?? (figure ? '16 / 10' : '4 / 3')
  // Placeholder figures stay neutral so they recede; covers carry the project's tone.
  const tone = figure ? tones.paper : tones[project.plate.tone]
  const Icon = project.plate.icon

  if (image?.src) {
    return (
      <div className={cn('relative overflow-hidden bg-paper-sunken', className)} style={{ aspectRatio: aspect }}>
        <img
          src={withBase(image.src)}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          data-plate-inner
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    )
  }

  const style = {
    aspectRatio: aspect,
    backgroundColor: tone.bg,
    color: tone.fg,
    backgroundImage: `linear-gradient(to right, ${tone.line} 1px, transparent 1px), linear-gradient(to bottom, ${tone.line} 1px, transparent 1px)`,
    backgroundSize: 'calc(100% / 8) 100%, 100% calc(100% / 6)',
  } satisfies CSSProperties

  return (
    <div
      role="img"
      aria-label={figure ? `${figure.alt} (image placeholder)` : `${project.title} — ${project.disciplines.join(', ')}`}
      className={cn('@container relative overflow-hidden select-none', className)}
      style={style}
    >
      <CropMarks />
      <div data-plate-inner className="absolute inset-0 flex flex-col justify-between p-[max(1rem,4.5cqw)]">
        <div className="flex items-start justify-between gap-4 type-label">
          <span>{figure ? `Fig. ${String(figureIndex ?? 1).padStart(2, '0')}` : workIndex(index)}</span>
          <span className="text-right opacity-70">
            {project.title} / {project.year}
          </span>
        </div>

        {figure ? (
          <div className="flex flex-col items-center gap-[2cqw] text-center">
            <svg aria-hidden viewBox="0 0 40 40" className="w-[7cqw] min-w-6 opacity-60" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="20" cy="20" r="11" />
              <path d="M20 2v36M2 20h36" />
            </svg>
            <span className="font-serif text-[max(1.25rem,6cqw)] leading-none">{figure.caption}</span>
            <span className="type-label opacity-60">[ image pending ]</span>
          </div>
        ) : (
          <div className="flex items-end gap-[3cqw]">
            <span className="font-serif text-[22cqw] leading-[0.8] tracking-[-0.03em]">{project.plate.mark}</span>
            <Icon aria-hidden weight="light" className="mb-[1.5cqw] size-[9cqw] shrink-0" />
          </div>
        )}

        <div className="flex flex-col gap-[2.2cqw]">
          {!figure && (
            <span
              className="self-start rounded-xs px-2 py-1 type-label"
              style={{ backgroundColor: tone.pill, color: tone.pillFg }}
            >
              ( {project.disciplines.slice(0, 3).join(' / ')} )
            </span>
          )}
          <div className="flex items-center justify-between border-t border-current/25 pt-[1.6cqw] type-label">
            <span>{project.via ? `Via ${project.via}` : project.role}</span>
            <span className="flex items-center gap-2">
              {project.location?.split(',')[0]}
              <span aria-hidden className="size-1.5 rounded-full bg-current" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
