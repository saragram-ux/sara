import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

import { TransitionLink } from '@/components/navigation/TransitionLink'
import { cn, isExternal } from '@/lib/utils'

interface Props {
  href: string
  children: ReactNode
  className?: string
  /** 'mono' = small uppercase label; 'text' = inherits size */
  variant?: 'mono' | 'text'
}

/** A link whose underline draws in and whose arrow nudges toward where it goes. */
export function ArrowLink({ href, children, className, variant = 'mono' }: Props) {
  const external = isExternal(href)
  const Icon = external ? ArrowUpRight : ArrowRight
  const classes = cn(
    'group/arrow inline-flex items-center gap-1.5 py-1 transition-colors hover:text-accent-ink',
    variant === 'mono' && 'label-mono',
    className,
  )
  const inner = (
    <>
      <span className="link-draw pb-px">{children}</span>
      <Icon
        aria-hidden
        weight="bold"
        className={cn(
          'size-[1em] shrink-0 transition-transform duration-(--dur-base) ease-out-soft',
          external ? 'group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5' : 'group-hover/arrow:translate-x-1',
        )}
      />
    </>
  )
  if (external) {
    const isWeb = href.startsWith('http')
    return (
      <a href={href} className={classes} {...(isWeb ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {inner}
        {isWeb && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    )
  }
  return (
    <TransitionLink to={href} className={classes}>
      {inner}
    </TransitionLink>
  )
}
