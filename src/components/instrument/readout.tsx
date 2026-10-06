import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/** A labelled value, thermostat-style: tiny label, big mono number. */
export function Readout({ label, value, unit, className }: { label: string; value: ReactNode; unit?: ReactNode; className?: string }) {
  return (
    <div className={cn('min-w-0', className)}>
      <dt className="type-label text-ink-muted">{label}</dt>
      <dd className="mt-1.5 truncate type-readout">
        {value}
        {unit && <span className="text-ink-muted">{unit}</span>}
      </dd>
    </div>
  )
}

/** Wraps Readouts in a definition list. */
export function Readouts({ className, children }: { className?: string; children: ReactNode }) {
  return <dl className={cn('grid gap-x-6 gap-y-5', className)}>{children}</dl>
}

/** "[ 4 / 4 ]" — counts and section labels in brackets, archive-style. */
export function Bracket({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('type-label whitespace-nowrap tabular-nums', className)}>
      <span aria-hidden>[ </span>
      {children}
      <span aria-hidden> ]</span>
    </span>
  )
}
