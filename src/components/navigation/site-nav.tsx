import { useLocation } from 'wouter'

import { StatusDot } from '@/components/common/status-dot'
import { isNavActive, navigation } from '@/data/navigation'
import { profile } from '@/data/profile'
import { CommandMenuTrigger } from './command-menu-trigger'
import { NavLink } from './nav-link'

/** Desktop navigation: page links, availability, ⌘K. (Mobile uses MobileNav.) */
export function SiteNav() {
  const [pathname] = useLocation()
  return (
    <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
      <ul className="flex items-center gap-1">
        {navigation.map((item, i) => (
          <li key={item.href}>
            <NavLink href={item.href} label={item.label} index={i + 1} tone={item.tone} active={isNavActive(item.href, pathname)} />
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 border-l border-rule pl-6">
        {profile.availability.open && (
          <span className="hidden items-center gap-2 type-label text-ink-muted lg:flex">
            <StatusDot />
            {profile.availability.label}
          </span>
        )}
        <CommandMenuTrigger />
      </div>
    </nav>
  )
}
