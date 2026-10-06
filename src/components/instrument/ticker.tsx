import { cn } from '@/lib/utils'

/** A running band of words between squares — "SARA LOU ■ OPEN FOR WORK ■ …". Decorative; stops for reduced motion. */
export function Ticker({ items, className }: { items: string[]; className?: string }) {
  const run = (key: string) => (
    <span key={key} className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6">{item}</span>
          <span className="size-2 bg-ink" />
        </span>
      ))}
    </span>
  )
  return (
    <div aria-hidden className={cn('overflow-hidden border-y border-dotted border-ink/60 py-3 type-label select-none', className)}>
      <div className="flex w-max animate-ticker">
        {run('a')}
        {run('b')}
      </div>
    </div>
  )
}
