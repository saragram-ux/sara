import { cn } from '@/lib/utils'

/**
 * A tiny square status LED — the same mark that sits after the wordmark.
 * `live` acid green and blinking (steady with reduced motion), `accent` green and steady,
 * `ink` solid, `muted` an empty square.
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
