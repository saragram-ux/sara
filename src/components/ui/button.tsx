import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap select-none',
    'rounded-full font-display font-extrabold uppercase tracking-[-0.005em] [word-spacing:0.12em]',
    'transition-[background-color,color,border-color,transform] duration-fast ease-out-soft',
    // a small, mechanical snap on press
    'active:translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        /** the one loud thing on a page: acid-green pill, ink caps */
        default: 'bg-accent text-[#161513] hover:bg-[color-mix(in_srgb,var(--accent)_82%,#161513)]',
        outline: 'border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-paper',
        ghost: 'text-ink hover:bg-paper-sunken',
        link: 'rounded-none font-mono font-normal text-ink link-underline-draw px-0! h-auto!',
      },
      size: {
        sm: 'h-9 px-4 text-small',
        default: 'h-12 px-6 text-body',
        lg: 'h-14 px-8 text-lead',
        icon: 'size-12',
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
