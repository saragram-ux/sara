import type { PlaygroundItemStatus } from '@/data/types'
import { PlaygroundStatus } from './playground-status'

const legend: { status: PlaygroundItemStatus; text: string }[] = [
  { status: 'live', text: 'Works, try it' },
  { status: 'building', text: 'Still building' },
  { status: 'idea', text: 'Next up' },
]

/** What the status dots on playground entries mean. */
export function PlaygroundStatusLegend() {
  return (
    <ul className="grid gap-2 border-t border-rule pt-3">
      {legend.map((l) => (
        <li key={l.status} className="flex items-center justify-between">
          <PlaygroundStatus status={l.status} />
          <span className="text-small text-ink-muted">{l.text}</span>
        </li>
      ))}
    </ul>
  )
}
