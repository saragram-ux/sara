import { useEffect, useState } from 'react'

import { MobileNavTrigger } from '@/components/navigation/mobile-nav-trigger'
import { SiteNav } from '@/components/navigation/site-nav'
import { TransitionLink } from '@/components/navigation/transition-link'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { Container } from './container'
import { SiteLogo } from './site-logo'

/** The sticky top bar: logo + name, desktop nav, mobile menu button. */
export function SiteHeader() {
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
        'sticky top-0 z-40 h-header border-b transition-[background-color,border-color] duration-base',
        scrolled ? 'border-rule bg-paper/92 backdrop-blur-[6px]' : 'border-transparent bg-paper',
      )}
    >
      <Container className="flex h-full items-center justify-between gap-6">
        <TransitionLink to="/" className="group/home -m-1 flex items-center gap-3 p-1">
          <SiteLogo className="transition-transform duration-base ease-out-soft group-hover/home:-rotate-6" />
          <span className="text-small font-medium tracking-[-0.01em]">{profile.name}</span>
          <span className="hidden type-label text-ink-muted xl:inline">{profile.disciplines.join(' / ')}</span>
        </TransitionLink>

        <SiteNav />
        <MobileNavTrigger />
      </Container>
    </header>
  )
}
