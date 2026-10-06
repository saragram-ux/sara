import * as React from 'react'

import { cn } from '@/lib/utils'

/** A small keycap. */
function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'inline-flex h-5 min-w-5 items-center justify-center rounded-md border border-ink/40 bg-paper-raised px-1',
        'font-mono text-nano leading-none text-ink-muted shadow-[0_1px_0_var(--rule-strong)]',
        className,
      )}
      {...props}
    />
  )
}

export { Kbd }
