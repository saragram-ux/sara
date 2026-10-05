import { gsap, revealGate, ScrollTrigger } from '@/lib/motion'

const SEEN_KEY = 'sg:intro'

/**
 * The intro is static HTML in index.html so it paints before any JS.
 * Its job is practical: cover the font swap. It counts while fonts load
 * (half a second, never more than one), can be skipped with any key or click, runs once
 * per session, and never runs with reduced motion.
 */
export function runIntro() {
  const el = document.getElementById('intro')
  const count = document.getElementById('intro-count')
  const bar = document.getElementById('intro-bar')

  const fontsReady = (document.fonts?.ready ?? Promise.resolve()).then(() => ScrollTrigger.refresh())

  if (!el || getComputedStyle(el).display === 'none') {
    el?.remove()
    return
  }

  revealGate.close()
  try {
    sessionStorage.setItem(SEEN_KEY, '1')
  } catch {
    /* private mode */
  }

  const progress = { v: 0 }
  const counter = gsap.to(progress, {
    v: 100,
    duration: 0.55,
    ease: 'power2.inOut',
    onUpdate: () => {
      if (count) count.textContent = String(Math.round(progress.v)).padStart(3, '0')
      if (bar) bar.style.transform = `scaleX(${progress.v / 100})`
    },
  })

  let done = false
  const exit = (fast = false) => {
    if (done) return
    done = true
    counter.kill()
    window.removeEventListener('keydown', skip)
    window.removeEventListener('pointerdown', skip)
    revealGate.open()
    gsap.to(el, {
      yPercent: -100,
      duration: fast ? 0.4 : 0.6,
      ease: 'power3.inOut',
      onComplete: () => el.remove(),
    })
  }
  const skip = () => exit(true)
  window.addEventListener('keydown', skip, { once: true })
  window.addEventListener('pointerdown', skip, { once: true })

  const minimum = new Promise((r) => setTimeout(r, 500))
  const maximum = new Promise((r) => setTimeout(r, 1000))
  Promise.race([Promise.all([fontsReady, minimum]), maximum]).then(() => exit())
}
