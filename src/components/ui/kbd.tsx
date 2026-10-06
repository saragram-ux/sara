import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

/** The keycap look, shared with other header controls (the theme toggle) so they read as one set. */
export const keycap = 'border border-ink/40 bg-paper-raised text-ink shadow-[0_2px_0_var(--rule-strong)]'

const kbdVariants = cva('inline-flex items-center justify-center font-mono leading-none', {
  variants: {
    size: {
      /** inline hints: footer, command menu */
      sm: 'h-5 min-w-5 rounded-md border border-ink/40 bg-paper-raised px-1 text-nano text-ink-muted shadow-[0_1px_0_var(--rule-strong)]',
      /** header controls: optically matched to the 32px round theme toggle (a square reads bigger, so 28px, tighter corners) */
      lg: cn('size-7 rounded-[5px] text-[0.6875rem]', keycap),
    },
  },
  defaultVariants: { size: 'sm' },
})

/** A keycap. */
function Kbd({ className, size, ...props }: React.ComponentProps<'kbd'> & VariantProps<typeof kbdVariants>) {
  return <kbd data-slot="kbd" className={cn(kbdVariants({ size }), className)} {...props} />
}

export { Kbd }
