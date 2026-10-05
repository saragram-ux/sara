import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithRef } from 'react'

import { cn } from '@/lib/utils'
import { Container } from './container'

const sectionVariants = cva('', {
  variants: {
    spacing: {
      /** section padding top and bottom */
      default: 'section-padding',
      /** follows another section directly: no top padding */
      'flush-top': 'section-padding pt-0',
      /** the first section of a page: page-top padding above, block gap below */
      hero: 'pt-page-top pb-block-gap',
      none: '',
    },
  },
  defaultVariants: { spacing: 'default' },
})

type SectionProps = ComponentPropsWithRef<'section'> &
  VariantProps<typeof sectionVariants> & {
    /** Wrap children in a Container (default). Turn off for full-bleed content. */
    contained?: boolean
    containerClassName?: string
  }

/** A page section: vertical rhythm outside, a Container inside. */
export function Section({ spacing, contained = true, className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ spacing }), className)} {...props}>
      {contained ? <Container className={containerClassName}>{children}</Container> : children}
    </section>
  )
}
