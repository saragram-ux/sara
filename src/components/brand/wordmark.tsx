import { cva, type VariantProps } from 'class-variance-authority'

import { brand } from '@/data/brand'
import { cn } from '@/lib/utils'

const wordmarkVariants = cva('inline-block font-display font-bold leading-none tracking-[0.005em] whitespace-nowrap lowercase', {
  variants: {
    size: {
      /** header, mobile menu, page turn */
      sm: 'text-[1.5rem]',
      /** footer */
      md: 'text-[2.25rem]',
      /** inherits the surrounding size */
      inherit: '',
    },
  },
  defaultVariants: { size: 'sm' },
})

type WordmarkProps = VariantProps<typeof wordmarkVariants> & { className?: string }

/**
 * sara lou — the name set in the display face: Right Grotesk Compact Black, lowercase, nothing else.
 * Same voice as the big words on the page; the open-for-work status lives in the nav, not the logo.
 */
export function Wordmark({ size, className }: WordmarkProps) {
  return <span className={cn(wordmarkVariants({ size }), className)}>{brand.name}</span>
}
