import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithRef, ElementType } from 'react'

import { cn } from '@/lib/utils'

/** Gaps follow Tailwind's 4px spacing scale. */
const stackVariants = cva('grid', {
  variants: {
    gap: {
      '2xs': 'gap-1', // 4px
      xs: 'gap-1.5', // 6px
      sm: 'gap-3', // 12px
      md: 'gap-6', // 24px
      lg: 'gap-10', // 40px
    },
  },
  defaultVariants: { gap: 'sm' },
})

type StackProps<T extends ElementType> = { as?: T } & VariantProps<typeof stackVariants> & Omit<ComponentPropsWithRef<T>, 'as'>

/** Children stacked vertically with an even gap. */
export function Stack<T extends ElementType = 'div'>({ as, gap, className, ...props }: StackProps<T>) {
  const Component: ElementType = as ?? 'div'
  return <Component className={cn(stackVariants({ gap }), className)} {...props} />
}
