import { ArrowRight } from '@phosphor-icons/react'

import { TransitionLink } from '@/components/navigation/TransitionLink'
import { formatRange } from '@/data/experience'
import type { ExperienceItem } from '@/data/types'
import { cn } from '@/lib/utils'

/** Compact editorial timeline. `detailed` adds descriptions. */
export function ExperienceList({ items, detailed = false }: { items: ExperienceItem[]; detailed?: boolean }) {
  return (
    <ol className="border-t border-rule">
      {items.map((item) => {
        const row = (
          <div className="page-grid items-baseline gap-y-1 py-4 md:py-5">
            <span className="col-span-4 label-mono text-ink-muted tabular-nums md:col-span-2">{formatRange(item.start, item.end)}</span>
            <span className={cn('col-span-4 md:col-span-3 lg:col-span-4', detailed ? 'text-title' : 'text-body font-medium')}>
              {item.company}
            </span>
            <span className="col-span-4 text-small text-ink-muted md:col-span-3 lg:col-span-4">
              {item.role}
              {item.projectSlug && <span className="sr-only"> — read the case study</span>}
              {detailed && <span className="mt-2 block text-ink">{item.description}</span>}
            </span>
            <span className="hidden items-center justify-end gap-2 label-mono text-ink-muted lg:col-span-2 lg:flex">
              {item.location}
              {item.projectSlug && (
                <ArrowRight aria-hidden weight="bold" className="size-3 text-accent transition-transform group-hover/xp:translate-x-1" />
              )}
            </span>
          </div>
        )
        return (
          <li key={`${item.company}-${item.start}`} data-reveal className="border-b border-rule">
            {item.projectSlug ? (
              <TransitionLink
                to={`/work/${item.projectSlug}`}
                className="group/xp block transition-colors hover:bg-paper-raised/70"
              >
                {row}
              </TransitionLink>
            ) : (
              row
            )}
          </li>
        )
      })}
    </ol>
  )
}
