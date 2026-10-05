import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithRef, ElementType } from 'react'

import { cn } from '@/lib/utils'

const clusterVariants = cva('flex flex-wrap', {
  variants: {
    gap: {
      sm: 'gap-x-3 gap-y-1',
      md: 'gap-x-6 gap-y-3',
      none: '',
    },
    align: {
      center: 'items-center',
      baseline: 'items-baseline',
      start: '',
    },
  },
  defaultVariants: { gap: 'md', align: 'center' },
})

type ClusterProps<T extends ElementType> = { as?: T } & VariantProps<typeof clusterVariants> &
  Omit<ComponentPropsWithRef<T>, 'as'>

/** Items in a row that wraps when it runs out of room: buttons, links, tags. */
export function Cluster<T extends ElementType = 'div'>({ as, gap, align, className, ...props }: ClusterProps<T>) {
  const Component: ElementType = as ?? 'div'
  return <Component className={cn(clusterVariants({ gap, align }), className)} {...props} />
}
