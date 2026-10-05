import { type ComponentProps, forwardRef, type MouseEvent } from 'react'

import { usePageTransition } from '@/components/motion/transition-context'

type Props = Omit<ComponentProps<'a'>, 'href'> & { to: string }

/**
 * An internal link that turns the page instead of cutting to it.
 * It's a real <a href>, so ⌘-click, middle-click and "copy link" all work.
 */
export const TransitionLink = forwardRef<HTMLAnchorElement, Props>(function TransitionLink({ to, onClick, ...props }, ref) {
  const { go } = usePageTransition()
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    go(to)
  }
  return <a ref={ref} href={to} onClick={handleClick} {...props} />
})
