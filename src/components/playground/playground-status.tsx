import { StatusDot } from '@/components/common/status-dot'
import type { PlaygroundItemStatus } from '@/data/types'

const tones: Record<PlaygroundItemStatus, 'live' | 'accent' | 'muted'> = {
  live: 'live',
  building: 'accent',
  idea: 'muted',
  paused: 'muted',
}

export function PlaygroundStatus({ status }: { status: PlaygroundItemStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 type-label">
      <StatusDot tone={tones[status]} className={status === 'live' ? '' : 'animate-none'} />
      {status}
    </span>
  )
}
