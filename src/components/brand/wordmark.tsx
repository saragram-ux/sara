import { cva, type VariantProps } from 'class-variance-authority'

import { brand } from '@/data/brand'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const wordmarkVariants = cva('inline-flex items-baseline font-mono leading-none tracking-[0.01em] whitespace-nowrap', {
  variants: {
    size: {
      /** header, mobile menu, page turn */
      sm: 'text-[0.9375rem]',
      /** footer */
      md: 'text-lead',
      /** inherits the surrounding size */
      inherit: '',
    },
  },
  defaultVariants: { size: 'sm' },
})

type WordmarkProps = VariantProps<typeof wordmarkVariants> & { className?: string }

/**
 * sara lou▪ — set like a product label: lowercase mono, a tiny acid-green LED after it.
 * The LED blinks while Sara is open for work.
 */
export function Wordmark({ size, className }: WordmarkProps) {
  return (
    <span className={cn(wordmarkVariants({ size }), className)}>
      {brand.name}
      <span
        aria-hidden
        className={cn(
          'ml-[0.3em] inline-block size-[0.36em] shrink-0 translate-y-[-0.02em] rounded-full bg-accent',
          profile.availability.open && 'animate-pulse-dot',
        )}
      />
    </span>
  )
}
