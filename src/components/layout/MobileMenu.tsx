import { ArrowUpRight, X } from '@phosphor-icons/react'
import { useRef } from 'react'
import { useLocation } from 'wouter'

import { StatusDot } from '@/components/common/StatusDot'
import { usePageTransition } from '@/components/motion/transition-context'
import { TransitionLink } from '@/components/navigation/TransitionLink'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle } from '@/components/ui/sheet'
import { isNavActive, navigation } from '@/data/navigation'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { Monogram } from './Monogram'

/** The mobile menu sheet. Lazy-loaded on first tap (see MobileNav). */
export default function MobileMenu({ open, onOpenChange: setOpen }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [pathname] = useLocation()
  const { go } = usePageTransition()
  // Navigate only once the sheet has fully closed and released its scroll lock.
  const pending = useRef<string | null>(null)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="top"
        className="max-h-dvh overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]"
        onCloseAutoFocus={(e) => {
          if (!pending.current) return
          e.preventDefault()
          go(pending.current)
          pending.current = null
        }}
      >
        <div className="page flex h-(--header-h) items-center justify-between">
          <span className="flex items-center gap-3">
            <Monogram />
            <SheetTitle className="text-small font-medium">{profile.name}</SheetTitle>
          </span>
          <SheetClose className="-mr-2 flex h-11 cursor-pointer items-center gap-2 px-2 label-mono">
            Close
            <X aria-hidden className="size-4" />
          </SheetClose>
        </div>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>

        <nav aria-label="Main" className="page mt-6">
          <ul className="border-t border-ink">
            {navigation.map((item, i) => {
              const active = isNavActive(item.href, pathname)
              return (
                <li key={item.href} className="border-b border-rule">
                  <TransitionLink
                    to={item.href}
                    onClick={(e) => {
                      if (e.metaKey || e.ctrlKey || e.shiftKey) return
                      e.preventDefault()
                      pending.current = item.href
                      setOpen(false)
                    }}
                    aria-current={active ? 'page' : undefined}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span className="font-serif text-display-sm">{item.label}</span>
                    <span className={cn('label-mono tabular-nums', active ? 'text-accent' : 'text-ink-faint')}>0{i + 1}</span>
                  </TransitionLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="page mt-8 grid gap-4">
          <div className="flex items-center gap-2 label-mono text-ink-muted">
            <StatusDot />
            {profile.availability.label} — {profile.availability.reach}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${profile.email}`} className="link-underlined text-small">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-small">
              LinkedIn <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
