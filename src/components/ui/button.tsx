import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap select-none',
    'rounded-full border border-ink font-mono font-medium uppercase tracking-[0.04em]',
    'transition-[background-color,color,border-color,transform] duration-fast ease-out-soft',
    // a small, mechanical snap on press
    'active:translate-y-px active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        /** the loud one: lilac, the primary pastel */
        default: 'border-on-pastel bg-lilac text-on-pastel hover:bg-[color-mix(in_srgb,var(--lilac)_80%,#141414)]',
        /** secondary pastel, rarely */
        peach: 'border-on-pastel bg-peach text-on-pastel hover:bg-[color-mix(in_srgb,var(--peach)_80%,#141414)]',
        /** solid ink: the loud button inside a pastel module */
        ink: 'border-ink bg-ink text-paper hover:bg-[color-mix(in_srgb,var(--ink)_82%,var(--paper))]',
        outline: 'bg-transparent text-ink hover:bg-ink hover:text-paper',
        ghost: 'border-transparent text-ink hover:bg-paper-sunken',
        link: 'rounded-none border-0 font-normal normal-case tracking-normal text-ink link-underline-draw px-0! h-auto!',
      },
      size: {
        sm: 'h-9 px-4 text-[0.75rem]',
        default: 'h-11 px-5 text-[0.8125rem]',
        lg: 'h-13 px-7 text-small',
        icon: 'size-11',
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
