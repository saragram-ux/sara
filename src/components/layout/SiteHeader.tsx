import { Command } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

import { StatusDot } from '@/components/common/StatusDot'
import { TransitionLink } from '@/components/navigation/TransitionLink'
import { Kbd } from '@/components/ui/kbd'
import { isNavActive, navigation } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useSite } from '@/lib/site-context'
import { cn } from '@/lib/utils'
import { MobileNav } from './MobileNav'
import { Monogram } from './Monogram'

export function SiteHeader() {
  const [pathname] = useLocation()
  const { openCommand } = useSite()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 h-(--header-h) border-b transition-[background-color,border-color] duration-(--dur-base)',
        scrolled ? 'border-rule bg-paper/92 backdrop-blur-[6px]' : 'border-transparent bg-paper',
      )}
    >
      <div className="page flex h-full items-center justify-between gap-6">
        <TransitionLink to="/" className="group/home -m-1 flex items-center gap-3 p-1">
          <Monogram className="transition-transform duration-(--dur-base) ease-out-soft group-hover/home:-rotate-6" />
          <span className="text-small font-medium tracking-[-0.01em]">{profile.name}</span>
          <span className="hidden label-mono text-ink-muted xl:inline">{profile.disciplines.join(' / ')}</span>
        </TransitionLink>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navigation.map((item, i) => {
              const active = isNavActive(item.href, pathname)
              return (
                <li key={item.href}>
                  <TransitionLink
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    className="group/nav flex items-baseline gap-1.5 py-2 text-small transition-colors hover:text-accent-ink"
                  >
                    <span
                      className={cn(
                        'font-mono text-[0.625rem] tabular-nums transition-colors',
                        active ? 'text-accent' : 'text-ink-faint group-hover/nav:text-accent',
                      )}
                    >
                      0{i + 1}
                    </span>
                    <span className={cn('link-draw', active && 'bg-size-[100%_1px]')}>{item.label}</span>
                  </TransitionLink>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3 border-l border-rule pl-6">
            {profile.availability.open && (
              <span className="hidden items-center gap-2 label-mono text-ink-muted lg:flex">
                <StatusDot />
                {profile.availability.label}
              </span>
            )}
            <button
              type="button"
              onClick={openCommand}
              aria-keyshortcuts="Meta+K Control+K"
              className="group/cmd relative flex h-8 cursor-pointer items-center gap-1 rounded-sm px-1.5 text-ink-muted transition-colors hover:bg-paper-sunken hover:text-ink"
            >
              <Kbd>
                <Command aria-hidden className="size-2.5" />
              </Kbd>
              <Kbd>K</Kbd>
              <span className="sr-only">Open command menu</span>
              <span
                aria-hidden
                className="pointer-events-none absolute top-full right-0 mt-2 rounded-xs bg-ink px-2 py-1.5 whitespace-nowrap label-mono text-paper-raised opacity-0 shadow-lift transition-[opacity,translate] duration-(--dur-fast) -translate-y-1 group-hover/cmd:translate-y-0 group-hover/cmd:opacity-100 group-hover/cmd:delay-300"
              >
                Jump anywhere
              </span>
            </button>
          </div>
        </nav>

        <MobileNav />
      </div>
    </header>
  )
}
