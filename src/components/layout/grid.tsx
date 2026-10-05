import type { ComponentPropsWithRef, ElementType } from 'react'

import { cn } from '@/lib/utils'

type GridProps<T extends ElementType> = { as?: T } & Omit<ComponentPropsWithRef<T>, 'as'>

/** The 4 / 8 / 12 column page grid. Children place themselves with col-span-*. */
export function Grid<T extends ElementType = 'div'>({ as, className, ...props }: GridProps<T>) {
  const Component: ElementType = as ?? 'div'
  return <Component className={cn('grid-page', className)} {...props} />
}
