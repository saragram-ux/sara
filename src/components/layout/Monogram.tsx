import { cn } from '@/lib/utils'

/** The SG block — a tiny stamp, like a label on a box. */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'inline-grid size-7 shrink-0 place-items-center rounded-xs bg-ink font-mono text-[0.625rem] leading-none font-medium tracking-[0.02em] text-paper-raised',
        className,
      )}
    >
      SG
    </span>
  )
}
