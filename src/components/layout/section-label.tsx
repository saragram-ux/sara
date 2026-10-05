import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Grid } from './grid'

interface SectionLabelProps {
  index: string
  children: ReactNode
  aside?: ReactNode
  className?: string
  id?: string
}

/** "02 — Selected work ··· (04)". A ruled index line that opens a section. */
export function SectionLabel({ index, children, aside, className, id }: SectionLabelProps) {
  return (
    <Grid className={cn('items-baseline border-t border-ink pt-3', className)}>
      <span className="type-label text-ink-muted tabular-nums">{index}</span>
      <h2 id={id} className="col-span-2 type-label md:col-span-4 lg:col-span-6 lg:col-start-3">
        {children}
      </h2>
      {aside && (
        <span className="col-start-4 justify-self-end type-label text-ink-muted md:col-start-8 lg:col-start-12">{aside}</span>
      )}
    </Grid>
  )
}
