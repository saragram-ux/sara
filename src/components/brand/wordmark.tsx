import { cva, type VariantProps } from 'class-variance-authority'

import { brand } from '@/data/brand'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const wordmarkVariants = cva('inline-flex items-baseline font-serif leading-none tracking-[-0.02em] whitespace-nowrap', {
  variants: {
    size: {
      /** header, mobile menu */
      sm: 'text-[1.5rem]',
      /** footer sign-off */
      md: 'text-display-sm',
      /** inherits the surrounding size (the hero) */
      inherit: '',
    },
  },
  defaultVariants: { size: 'sm' },
})

type WordmarkProps = VariantProps<typeof wordmarkVariants> & { className?: string }

/**
 * sara lou● — the wordmark. Lowercase Instrument Serif, and a matcha dot where
 * the period would be. The dot pulses while Sara is open for work.
 */
export function Wordmark({ size, className }: WordmarkProps) {
  return (
    <span className={cn(wordmarkVariants({ size }), className)}>
      {brand.name}
      <span
        aria-hidden
        className={cn(
          'ml-[0.06em] inline-block size-[max(0.16em,5px)] shrink-0 rounded-full bg-accent',
          profile.availability.open && 'animate-pulse-dot',
        )}
      />
    </span>
  )
}
