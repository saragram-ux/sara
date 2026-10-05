import { type ReactNode, useCallback, useEffect, useMemo, useRef } from 'react'
import { useLocation } from 'wouter'

import { Wordmark } from '@/components/brand/wordmark'
import { Container } from '@/components/layout/container'
import { workIndex } from '@/data/brand'
import { projects } from '@/data/projects'
import { duration, ease, gsap, prefersReducedMotion, revealGate, ScrollTrigger } from '@/lib/motion'
import { preloadRoute } from '@/routes'
import { TransitionContext } from './transition-context'

/** What the page turn says on its way to a route: an index line and a title, like a numbered page. */
function routeLabel(pathname: string): { index: string; title: string } {
  if (pathname === '/') return { index: 'Index / 000', title: 'Index' }
  const project = pathname.startsWith('/work/') ? projects.findIndex((p) => `/work/${p.slug}` === pathname) : -1
  if (project >= 0) return { index: workIndex(project), title: projects[project].title }
  if (pathname === '/playground') return { index: 'Playground', title: 'Small things' }
  if (pathname === '/about') return { index: 'About', title: 'About' }
  return { index: 'Error / 404', title: 'Nothing here' }
}

/** Re-measure scroll animations for the new page without restoring a stale scroll position. */
const refreshScroll = () => {
  ScrollTrigger.clearScrollMemory('manual')
  ScrollTrigger.refresh()
}

const nextFrame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))

/** Jump (or glide) to a #hash, or the top. Moves focus for keyboard and screen-reader users. */
function scrollToTarget(hash: string, smooth: boolean) {
  const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
  const behavior: ScrollBehavior = smooth && !prefersReducedMotion() ? 'smooth' : 'auto'
  if (el) {
    el.scrollIntoView({ behavior, block: 'start' })
    el.focus({ preventScroll: true })
  } else {
    window.scrollTo({ top: 0, behavior })
    if (!smooth) document.getElementById('main')?.focus({ preventScroll: true })
  }
}

/**
 * Page turns.
 * An ink sheet slides up over the old page, the next page loads and renders
 * underneath, then the sheet continues off the top. Scroll position is handled
 * here too: top (or #hash) on a new page, restored on back/forward.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const [pathname, navigate] = useLocation()
  const panel = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)
  const labelIndex = useRef<HTMLSpanElement>(null)
  const busy = useRef(false)
  const positions = useRef(new Map<string, number>())
  const popped = useRef(false)

  // Remember scroll per page so back/forward lands where you left.
  useEffect(() => {
    history.scrollRestoration = 'manual'
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => positions.current.set(window.location.pathname, window.scrollY))
    }
    const onPop = () => (popped.current = true)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('popstate', onPop)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('popstate', onPop)
    }
  }, [])

  // Back/forward: restore. First load with a #hash: go there.
  useEffect(() => {
    if (popped.current) {
      popped.current = false
      const y = positions.current.get(window.location.pathname) ?? 0
      requestAnimationFrame(() => {
        window.scrollTo(0, y)
        nextFrame().then(refreshScroll)
      })
    } else if (window.location.hash && !busy.current) {
      preloadRoute(pathname)
        .then(nextFrame)
        .then(() => {
          scrollToTarget(window.location.hash, false)
          return nextFrame().then(refreshScroll)
        })
    }
  }, [pathname])

  const go = useCallback(
    async (to: string) => {
      // `to` is an app path ('/about', '/#work') or a bare '#hash'; the base path is wouter's job.
      const url = to.startsWith('#') ? new URL(pathname + to, 'http://app') : new URL(to, 'http://app')
      if (url.pathname === pathname) {
        scrollToTarget(url.hash, true)
        return
      }
      if (busy.current) return
      busy.current = true

      if (prefersReducedMotion() || !panel.current) {
        await preloadRoute(url.pathname)
        navigate(url.pathname + url.hash)
        await nextFrame()
        scrollToTarget(url.hash, false)
        busy.current = false
        return
      }

      revealGate.close()
      const route = routeLabel(url.pathname)
      if (label.current) label.current.textContent = route.title
      if (labelIndex.current) labelIndex.current.textContent = route.index
      const el = panel.current

      // Cover — and fetch the next page at the same time.
      await Promise.all([
        gsap
          .timeline()
          .set(el, { yPercent: 100, visibility: 'visible' })
          .to(el, { yPercent: 0, duration: duration.page, ease: ease.inOut })
          .from(label.current, { yPercent: 120, duration: duration.base, ease: ease.out }, '-=0.18'),
        preloadRoute(url.pathname),
      ])

      navigate(url.pathname + url.hash)
      await nextFrame()
      scrollToTarget(url.hash, false)
      // one frame later ScrollTrigger has seen the new scroll position
      await nextFrame()
      refreshScroll()

      // Reveal.
      revealGate.open()
      await gsap.to(el, { yPercent: -100, duration: duration.page + 0.05, ease: ease.inOut })
      gsap.set(el, { visibility: 'hidden' })
      busy.current = false
    },
    [navigate, pathname],
  )

  const value = useMemo(() => ({ go }), [go])

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <div
        ref={panel}
        aria-hidden
        className="invisible fixed inset-0 z-[90] flex items-end bg-ink text-paper-raised will-change-transform"
      >
        <Container className="flex w-full items-end justify-between pb-[calc(var(--gutter)*1.25)]">
          <Wordmark className="text-paper-raised" />
          <span className="flex flex-col items-end gap-2">
            <span ref={labelIndex} className="type-label text-paper-raised/60 tabular-nums" />
            <span className="reveal-line">
              <span ref={label} className="block type-display text-display-sm" />
            </span>
          </span>
        </Container>
      </div>
    </TransitionContext.Provider>
  )
}
