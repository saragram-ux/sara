import type { ExperienceEntry } from '@/data/types'
import { ExperienceItem } from './experience-item'

/** The ruled timeline of roles. */
export function ExperienceList({ entries, variant = 'compact' }: { entries: ExperienceEntry[]; variant?: 'compact' | 'detailed' }) {
  return (
    <ol className="border-t border-rule">
      {entries.map((entry) => (
        <li key={`${entry.company}-${entry.start}`} data-reveal className="border-b border-rule">
          <ExperienceItem entry={entry} variant={variant} />
        </li>
      ))}
    </ol>
  )
}
