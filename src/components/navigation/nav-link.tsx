import { TransitionLink } from '@/components/navigation/transition-link'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  label: string
  /** 1-based position, shown as 01, 02 … */
  index: number
  active: boolean
}

/** A main-navigation link: index number + uppercase mono label with a drawing underline. The active index is the one green thing in the header. */
export function NavLink({ href, label, index, active }: NavLinkProps) {
  return (
    <TransitionLink
      to={href}
      aria-current={active ? 'page' : undefined}
      className="group/nav flex items-baseline gap-1.5 py-2 font-mono text-meta tracking-[0.04em] uppercase"
    >
      <span
        className={cn(
          'text-nano tabular-nums transition-colors duration-fast',
          active ? 'text-accent-ink' : 'text-ink-faint group-hover/nav:text-ink',
        )}
      >
        0{index}
      </span>
      <span className={cn('link-underline-draw', active && 'bg-size-[100%_1px]')}>{label}</span>
    </TransitionLink>
  )
}
