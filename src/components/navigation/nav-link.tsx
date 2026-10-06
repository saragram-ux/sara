import { TransitionLink } from '@/components/navigation/transition-link'
import { pastelFill } from '@/lib/pastel'
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
      className={cn(
        'group/nav flex items-baseline gap-1.5 rounded-full border px-3 py-1.5 font-mono text-meta tracking-[0.04em] uppercase transition-colors duration-fast',
        active ? pastelFill.lilac : 'border-transparent hover:border-ink/40',
      )}
    >
      <span
        className={cn(
          'text-nano tabular-nums transition-colors duration-fast',
          active ? 'text-on-pastel' : 'text-ink-faint group-hover/nav:text-ink',
        )}
      >
        0{index}
      </span>
      <span>{label}</span>
    </TransitionLink>
  )
}
