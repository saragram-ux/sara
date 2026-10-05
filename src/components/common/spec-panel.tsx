import type { ElementType, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface SpecPanelRow {
  key: string
  label: ReactNode
  value: ReactNode
}

interface SpecPanelProps {
  title: ReactNode
  /** Heading element for the title; a plain span where a heading would break the outline. */
  titleAs?: ElementType
  titleId?: string
  /** Right side of the header bar. */
  aside?: ReactNode
  rows: SpecPanelRow[]
  /** Type for the label column — uppercase mono by default. */
  labelClassName?: string
  className?: string
}

/**
 * A small ruled table under an ink header bar, like the head of a spec sheet.
 * Used for the status and currently panels so they always match.
 */
export function SpecPanel({ title, titleAs: Title = 'span', titleId, aside, rows, labelClassName = 'type-label', className }: SpecPanelProps) {
  return (
    <div className={cn('border border-ink bg-paper', className)}>
      <div className="flex items-center justify-between gap-4 bg-ink px-4 py-2.5 text-paper">
        <Title id={titleId} className="flex items-center gap-2 type-label">
          {title}
        </Title>
        {aside && <span className="flex items-center gap-2 type-label">{aside}</span>}
      </div>
      <dl>
        {rows.map((row) => (
          <div key={row.key} className="grid grid-cols-[6.5rem_1fr] border-t border-ink first:border-t-0">
            <dt className={cn('flex items-center border-r border-ink px-4 py-2.5 text-ink-muted', labelClassName)}>{row.label}</dt>
            <dd className="flex items-center px-4 py-2.5 text-small">
              <span>{row.value}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
