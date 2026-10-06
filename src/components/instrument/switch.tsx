import { cn } from '@/lib/utils'

/** An ON / OFF pill switch. A real control: role="switch", keyboard and screen-reader friendly. */
export function Switch({
  checked,
  onCheckedChange,
  label,
  className,
}: {
  checked: boolean
  onCheckedChange: (next: boolean) => void
  /** Accessible name — the thing being switched. */
  label: string
  className?: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        'relative inline-flex h-7 w-[3.75rem] shrink-0 cursor-pointer items-center rounded-full border border-ink transition-colors duration-base',
        checked ? 'bg-ink text-paper' : 'bg-transparent text-ink',
        className,
      )}
    >
      <span aria-hidden className={cn('absolute font-mono text-[0.625rem] font-medium tracking-[0.04em]', checked ? 'left-2.5' : 'right-2')}>
        {checked ? 'ON' : 'OFF'}
      </span>
      <span
        aria-hidden
        className={cn(
          'absolute top-1/2 size-[1.375rem] -translate-y-1/2 rounded-full border border-ink bg-paper-raised transition-[left] duration-base ease-out-soft',
          checked ? 'left-[calc(100%-1.5rem)]' : 'left-0.5',
        )}
      />
    </button>
  )
}
