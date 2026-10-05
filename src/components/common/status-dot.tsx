import { cn } from '@/lib/utils'

/** A tiny live indicator. Pulses gently unless motion is reduced. */
export function StatusDot({ tone = 'live', className }: { tone?: 'live' | 'accent' | 'muted'; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'inline-block size-[7px] shrink-0 rounded-full',
        tone === 'live' && 'animate-pulse-dot bg-live',
        tone === 'accent' && 'bg-accent',
        tone === 'muted' && 'border border-ink-faint',
        className,
      )}
    />
  )
}
