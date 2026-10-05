import { useEffect, useState } from 'react'

import { Wordmark } from '@/components/brand/wordmark'
import { MobileNavTrigger } from '@/components/navigation/mobile-nav-trigger'
import { SiteNav } from '@/components/navigation/site-nav'
import { TransitionLink } from '@/components/navigation/transition-link'
import { brand } from '@/data/brand'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { Container } from './container'

/** The sticky top bar: wordmark (+ Sara's full name on wide screens), desktop nav, mobile menu button. */
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
        <TransitionLink to="/" className="group/home -m-1 flex items-baseline gap-4 p-1" aria-label={`${brand.name}, ${profile.name} — home`}>
          <Wordmark className="transition-colors duration-base group-hover/home:text-accent-ink" />
          <span className="hidden type-label text-ink-muted xl:inline">
            {profile.name} · {profile.disciplines.join(' / ')}
          </span>
        </TransitionLink>

        <SiteNav />
        <MobileNavTrigger />
      </Container>
    </header>
  )
}
