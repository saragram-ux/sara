import type { ComponentPropsWithRef, ElementType } from 'react'

import { cn } from '@/lib/utils'

type ContainerProps<T extends ElementType> = { as?: T } & Omit<ComponentPropsWithRef<T>, 'as'>

/** Max width + side padding. The frame every row of content sits in. */
export function Container<T extends ElementType = 'div'>({ as, className, ...props }: ContainerProps<T>) {
  const Component: ElementType = as ?? 'div'
  return <Component className={cn('container-page', className)} {...props} />
}
