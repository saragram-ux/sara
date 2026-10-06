import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ModuleProps<T extends ElementType> = {
  as?: T
  /** Small mono label, top left — "RADIATORS", "STUDIO". */
  label?: ReactNode
  /** Top right of the header row: a bracket count, a switch, a status. */
  aside?: ReactNode
  /** Quiet line under the label, like "Edit" or "Active" on the thermostat. */
  sub?: ReactNode
  /** paper: outlined. ink: inverted. peach: the one pastel module per page view (black on peach). */
  tone?: 'paper' | 'ink' | 'peach'
} & Omit<ComponentPropsWithRef<T>, 'as'>

/** A rounded, outlined panel — one instrument on the device. No fill, no shadow: a line and a radius. */
export function Module<T extends ElementType = 'div'>({ as, label, aside, sub, tone = 'paper', className, children, ...props }: ModuleProps<T>) {
  const Component: ElementType = as ?? 'div'
  return (
    <Component
      className={cn('rounded-card border border-ink p-5 md:p-6', tone === 'ink' && 'theme-inverse border-transparent', tone === 'peach' && 'theme-peach border-on-pastel', className)}
      {...props}
    >
      {(label || aside) && (
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            {label && <div className="type-label font-medium">{label}</div>}
            {sub && <p className="mt-0.5 text-small text-ink-muted">{sub}</p>}
          </div>
          {aside && <div className="flex shrink-0 items-center gap-2 type-label text-ink-muted">{aside}</div>}
        </div>
      )}
      {children}
    </Component>
  )
}
