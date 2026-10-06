import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface MetaListRow {
  label: string
  value: ReactNode
}

/** A definition list styled like the thermostat schedule: label | value, dotted rows. */
export function MetaList({ rows, className, columns = 1 }: { rows: MetaListRow[]; className?: string; columns?: 1 | 2 }) {
  return (
    <dl className={cn('grid gap-x-gutter border-t border-ink', columns === 2 && 'sm:grid-cols-2', className)}>
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-b border-dotted border-ink/60 py-2.5">
          <dt className="type-label text-ink-muted">{row.label}</dt>
          <dd className="text-small">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
