import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/** Motion tokens — mirror the CSS variables in globals.css. Seconds, for GSAP. */
export const duration = {
  fast: 0.12,
  base: 0.2,
  slow: 0.36,
  /** one half of a page turn */
  page: 0.42,
} as const

export const ease = {
  /** arrivals: fast start, short landing */
  out: 'power4.out',
  /** things that travel across the screen */
  inOut: 'power3.inOut',
  /** small, quiet adjustments */
  soft: 'power2.out',
} as const

/** Media query used with gsap.matchMedia() — animations only exist inside it. */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * The reveal gate.
 * While the intro or a page transition covers the screen, the gate is closed.
 * Page entrance animations wait for it, so they play when they can be seen.
 */
let release: (() => void) | null = null
let gate: Promise<void> = Promise.resolve()

export const revealGate = {
  close() {
    if (release) return
    gate = new Promise<void>((resolve) => (release = resolve))
  },
  open() {
    release?.()
    release = null
  },
  wait: () => gate,
}

export { gsap, ScrollTrigger, useGSAP }
