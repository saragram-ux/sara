import { cn } from '@/lib/utils'

/**
 * A tiny status dot. `live` is the brand's matcha dot (pulses unless motion is reduced),
 * `accent` the same dot standing still, `ink` solid, `muted` an empty ring.
 */
export function StatusDot({ tone = 'live', className }: { tone?: 'live' | 'accent' | 'ink' | 'muted'; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'inline-block size-[7px] shrink-0 rounded-full',
        tone === 'live' && 'animate-pulse-dot bg-live',
        tone === 'accent' && 'bg-accent',
        tone === 'ink' && 'bg-ink',
        tone === 'muted' && 'border border-ink-faint',
        className,
      )}
    />
  )
}
