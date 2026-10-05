import { StatusDot } from '@/components/common/StatusDot'
import type { PlaygroundStatus } from '@/data/types'

const tones: Record<PlaygroundStatus, 'live' | 'accent' | 'muted'> = {
  live: 'live',
  building: 'accent',
  idea: 'muted',
  paused: 'muted',
}

export function StatusTag({ status }: { status: PlaygroundStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 label-mono">
      <StatusDot tone={tones[status]} className={status === 'live' ? '' : 'animate-none'} />
      {status}
    </span>
  )
}
