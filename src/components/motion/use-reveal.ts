import type { RefObject } from 'react'

import { duration, ease, gsap, MOTION_OK, revealGate, ScrollTrigger, useGSAP } from '@/lib/motion'

/**
 * Build a page-entrance timeline. It is created paused (so starting states
 * apply before paint) and plays once nothing is covering the page.
 * Skipped entirely when the user prefers reduced motion.
 */
export function usePageEntrance(scope: RefObject<HTMLElement | null>, build: (tl: gsap.core.Timeline) => void) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia(scope.current ?? undefined)
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ paused: true })
        build(tl)
        let live = true
        revealGate.wait().then(() => {
          if (live) tl.play()
        })
        return () => {
          live = false
        }
      })
      return () => mm.revert()
    },
    { scope },
  )
}

/**
 * Quiet scroll reveals for anything marked `data-reveal` inside scope.
 * Blocks, not individual words — whitespace stays whitespace.
 */
export function useScrollReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia(scope.current ?? undefined)
      mm.add(MOTION_OK, () => {
        const items = Array.from(scope.current?.querySelectorAll<HTMLElement>('[data-reveal]') ?? [])
        if (!items.length) return
        gsap.set(items, { autoAlpha: 0, y: 24 })
        ScrollTrigger.batch(items, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            revealGate.wait().then(() =>
              gsap.to(batch, { autoAlpha: 1, y: 0, duration: duration.slow + 0.3, ease: ease.out, stagger: 0.08, overwrite: true }),
            ),
        })
      })
      return () => mm.revert()
    },
    { scope },
  )
}

