import * as React from 'react'

import { cn } from '@/lib/utils'

/** A small keycap. */
function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'inline-flex h-5 min-w-5 items-center justify-center rounded-xs border border-rule-strong bg-paper-raised px-1',
        'font-mono text-[0.625rem] leading-none text-ink-muted shadow-[0_1px_0_var(--rule-strong)]',
        className,
      )}
      {...props}
    />
  )
}

export { Kbd }
