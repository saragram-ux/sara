import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionLabelProps {
  index: string
  children: ReactNode
  aside?: ReactNode
  className?: string
  id?: string
}

/** "[ 02 · SELECTED WORK ] ··· 2018—NOW". An archive bracket row over a dotted rule; opens a section. */
export function SectionLabel({ index, children, aside, className, id }: SectionLabelProps) {
  return (
    <div className={cn('flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-dotted border-ink/60 pb-3', className)}>
      <h2 id={id} className="type-label font-medium tabular-nums">
        <span aria-hidden>[ </span>
        {index} · {children}
        <span aria-hidden> ]</span>
      </h2>
      {aside && <span className="type-label text-ink-muted tabular-nums">{aside}</span>}
    </div>
  )
}
