import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface Props {
  index: string
  children: ReactNode
  aside?: ReactNode
  className?: string
  id?: string
}

/** "02 — Selected work ··· (04)". A ruled index line that opens a section. */
export function SectionLabel({ index, children, aside, className, id }: Props) {
  return (
    <div className={cn('page-grid items-baseline border-t border-ink pt-3', className)}>
      <span className="label-mono text-ink-muted tabular-nums">{index}</span>
      <h2 id={id} className="col-span-2 label-mono md:col-span-4 lg:col-span-6 lg:col-start-3">
        {children}
      </h2>
      {aside && (
        <span className="col-start-4 justify-self-end label-mono text-ink-muted md:col-start-8 lg:col-start-12">{aside}</span>
      )}
    </div>
  )
}
