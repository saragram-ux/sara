import { ArrowUp } from '@phosphor-icons/react'

import { TransitionLink } from '@/components/navigation/TransitionLink'
import { Kbd } from '@/components/ui/kbd'
import { navigation } from '@/data/navigation'
import { profile } from '@/data/profile'
import { prefersReducedMotion } from '@/lib/motion'
import { Monogram } from './Monogram'

const year = new Date().getFullYear()

export function SiteFooter() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <footer className="border-t border-rule bg-paper-sunken/50">
      <div className="page page-grid gap-y-10 py-14">
        <div className="col-span-4 md:col-span-3 lg:col-span-4">
          <div className="flex items-center gap-3">
            <Monogram />
            <span className="text-small font-medium">{profile.name}</span>
          </div>
          <p className="mt-4 label-mono text-ink-muted">{profile.disciplines.join(' / ')}</p>
          <p className="mt-1 label-mono text-ink-muted">{profile.location}</p>
        </div>

        <nav aria-label="Footer" className="col-span-2 md:col-span-2 lg:col-span-2">
          <h2 className="label-mono text-ink-muted">Index</h2>
          <ul className="mt-4 grid gap-1.5 text-small">
            <li>
              <TransitionLink to="/" className="link-draw">
                Home
              </TransitionLink>
            </li>
            {navigation.map((item) => (
              <li key={item.href}>
                <TransitionLink to={item.href} className="link-draw">
                  {item.label}
                </TransitionLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <h2 className="label-mono text-ink-muted">Elsewhere</h2>
          <ul className="mt-4 grid gap-1.5 text-small">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-draw">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="link-draw">
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <h2 className="label-mono text-ink-muted">Colophon</h2>
          <p className="mt-4 max-w-sm text-small text-ink-muted">
            Designed and built in the browser. Set in <span className="font-serif text-[1.1em] text-ink italic">Instrument Serif</span>,
            Geist and <span className="font-mono text-[0.9em] text-ink">Geist Mono</span>. Made with React, TypeScript, Vite,
            Tailwind and a little GSAP.
          </p>
        </div>
      </div>

      <div className="page flex flex-wrap items-center justify-between gap-4 border-t border-rule py-5 label-mono text-ink-muted">
        <span>
          © {year} {profile.name}
        </span>
        <span className="hidden items-center gap-2 md:flex">
          <Kbd>G</Kbd> grid
          <span className="mx-1 text-ink-faint">·</span>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd> menu
        </span>
        <button type="button" onClick={toTop} className="group/top -m-2 flex cursor-pointer items-center gap-1.5 p-2 hover:text-ink">
          Back to top
          <ArrowUp aria-hidden className="size-3 transition-transform duration-(--dur-base) group-hover/top:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  )
}
