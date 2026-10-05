import { ArrowRight } from '@phosphor-icons/react'

import { TransitionLink } from '@/components/navigation/transition-link'
import { formatRange } from '@/data/experience'
import type { ExperienceEntry } from '@/data/types'
import { cn } from '@/lib/utils'

interface ExperienceItemProps {
  entry: ExperienceEntry
  /** compact: one line per role. detailed: adds the description, larger company name. */
  variant?: 'compact' | 'detailed'
}

/** One role on the timeline. Links to its case study when there is one. */
export function ExperienceItem({ entry, variant = 'compact' }: ExperienceItemProps) {
  const detailed = variant === 'detailed'
  const row = (
    <div className="grid-page items-baseline gap-y-1 py-4 md:py-5">
      <span className="col-span-4 type-label text-ink-muted tabular-nums md:col-span-2">{formatRange(entry.start, entry.end)}</span>
      <span className={cn('col-span-4 md:col-span-3 lg:col-span-4', detailed ? 'text-title' : 'text-body font-medium')}>
        {entry.company}
      </span>
      <span className="col-span-4 text-small text-ink-muted md:col-span-3 lg:col-span-4">
        {entry.role}
        {entry.projectSlug && <span className="sr-only"> — read the case study</span>}
        {detailed && <span className="mt-2 block text-ink">{entry.description}</span>}
      </span>
      <span className="hidden items-center justify-end gap-2 type-label text-ink-muted lg:col-span-2 lg:flex">
        {entry.location}
        {entry.projectSlug && (
          <ArrowRight aria-hidden weight="bold" className="size-3 text-accent transition-transform group-hover/xp:translate-x-1" />
        )}
      </span>
    </div>
  )

  if (!entry.projectSlug) return row
  return (
    <TransitionLink to={`/work/${entry.projectSlug}`} className="group/xp block transition-colors hover:bg-paper-raised/70">
      {row}
    </TransitionLink>
  )
}
