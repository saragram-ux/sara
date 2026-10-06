import type { ExperienceEntry } from '@/data/types'
import { ExperienceItem } from './experience-item'

/** The ruled timeline of roles. */
export function ExperienceList({
  entries,
  variant = 'compact',
  dotted = false,
}: {
  entries: ExperienceEntry[]
  variant?: 'compact' | 'detailed'
  /** Schedule-style dotted rules, for inside a module. */
  dotted?: boolean
}) {
  return (
    <ol className={dotted ? 'border-t border-ink' : 'border-t border-rule'}>
      {entries.map((entry) => (
        <li key={`${entry.company}-${entry.start}`} data-reveal className={dotted ? 'border-b border-dotted border-ink/60' : 'border-b border-rule'}>
          <ExperienceItem entry={entry} variant={variant} />
        </li>
      ))}
    </ol>
  )
}
