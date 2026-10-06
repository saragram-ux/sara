import { StatusDot } from '@/components/common/status-dot'
import type { PlaygroundItemStatus } from '@/data/types'
import { ledOnPastel, pastelFill } from '@/lib/pastel'
import { cn } from '@/lib/utils'

const tones: Record<PlaygroundItemStatus, 'live' | 'ink' | 'muted'> = {
  live: 'live',
  building: 'ink',
  idea: 'muted',
  paused: 'muted',
}

/** live (green, blinking) · building (ink) · idea / paused (empty square) */
export function PlaygroundStatus({ status }: { status: PlaygroundItemStatus }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 type-label',
        status === 'live' ? pastelFill.taffy : 'border-ink/40',
      )}
    >
      <StatusDot tone={tones[status]} className={status === 'live' ? ledOnPastel : 'animate-none'} />
      {status}
    </span>
  )
}
