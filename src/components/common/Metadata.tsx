import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface MetaRow {
  label: string
  value: ReactNode
}

/** A definition list styled like a spec sheet. */
export function Metadata({ rows, className, columns = 1 }: { rows: MetaRow[]; className?: string; columns?: 1 | 2 }) {
  return (
    <dl className={cn('grid gap-x-(--gutter)', columns === 2 && 'sm:grid-cols-2', className)}>
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-t border-rule py-2.5">
          <dt className="label-mono text-ink-muted">{row.label}</dt>
          <dd className="text-small">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
