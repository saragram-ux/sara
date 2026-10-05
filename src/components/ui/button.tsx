import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap select-none',
    // text-body: the size this button has always rendered at (a merge bug used to drop text-meta)
    'font-mono text-body uppercase tracking-[0.04em]',
    'transition-[background-color,color,border-color,box-shadow,transform] duration-base ease-out-soft',
    'active:translate-y-px disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        default: 'bg-ink text-paper-raised hover:bg-[color-mix(in_srgb,var(--ink)_86%,var(--accent))] shadow-paper',
        outline: 'border border-rule-strong bg-paper-raised/60 text-ink hover:border-ink hover:bg-paper-raised',
        ghost: 'text-ink hover:bg-paper-sunken',
        link: 'text-ink link-underline-draw px-0! h-auto!',
      },
      size: {
        sm: 'h-8 rounded-sm px-3',
        default: 'h-11 rounded-sm px-4',
        lg: 'h-12 rounded-sm px-5',
        icon: 'size-11 rounded-sm',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'button'
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
