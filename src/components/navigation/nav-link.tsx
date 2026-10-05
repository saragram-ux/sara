import { TransitionLink } from '@/components/navigation/transition-link'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  label: string
  /** 1-based position, shown as 01, 02 … */
  index: number
  active: boolean
}

/** A main-navigation link: small index number + label with a drawing underline. */
export function NavLink({ href, label, index, active }: NavLinkProps) {
  return (
    <TransitionLink
      to={href}
      aria-current={active ? 'page' : undefined}
      className="group/nav flex items-baseline gap-1.5 py-2 text-small transition-colors hover:text-accent-ink"
    >
      <span
        className={cn(
          'font-mono text-nano tabular-nums transition-colors',
          active ? 'text-accent-ink' : 'text-ink-faint group-hover/nav:text-accent-ink',
        )}
      >
        0{index}
      </span>
      <span className={cn('link-underline-draw', active && 'bg-size-[100%_1px]')}>{label}</span>
    </TransitionLink>
  )
}
