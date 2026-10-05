import { ArrowUp } from '@phosphor-icons/react'

import { Wordmark } from '@/components/brand/wordmark'
import { StatusDot } from '@/components/common/status-dot'
import { TransitionLink } from '@/components/navigation/transition-link'
import { Kbd } from '@/components/ui/kbd'
import { brand } from '@/data/brand'
import { currently } from '@/data/currently'
import { navigation } from '@/data/navigation'
import { profile } from '@/data/profile'
import { prefersReducedMotion } from '@/lib/motion'
import { Container } from './container'
import { Grid } from './grid'
import { Stack } from './stack'

const year = new Date().getFullYear()

/**
 * Footer: the label (sara lou / UI / PRODUCT / FRONTEND / Sara Gramstad / Sweden), index,
 * elsewhere, colophon; then the first line of the currently board, keyboard hints, back to top.
 */
export function SiteFooter() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <footer className="border-t border-rule bg-paper-sunken/50">
      <Container className="py-14">
        <Grid className="gap-y-10">
        <div className="col-span-4 md:col-span-3 lg:col-span-4">
          <Wordmark size="md" />
          <p className="mt-4 grid gap-1 type-label text-ink-muted">
            <span>{brand.descriptor}</span>
            <span className="text-ink">{profile.name}</span>
            <span>{brand.country}</span>
          </p>
        </div>

        <nav aria-label="Footer" className="col-span-2 md:col-span-2 lg:col-span-2">
          <h2 className="type-label text-ink-muted">Index</h2>
          <Stack as="ul" gap="xs" className="mt-4 text-small">
            <li>
              <TransitionLink to="/" className="link-underline-draw">
                Index
              </TransitionLink>
            </li>
            {navigation.map((item) => (
              <li key={item.href}>
                <TransitionLink to={item.href} className="link-underline-draw">
                  {item.label}
                </TransitionLink>
              </li>
            ))}
          </Stack>
        </nav>

        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <h2 className="type-label text-ink-muted">Elsewhere</h2>
          <Stack as="ul" gap="xs" className="mt-4 text-small">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline-draw">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="link-underline-draw">
                Email
              </a>
            </li>
          </Stack>
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <h2 className="type-label text-ink-muted">Colophon</h2>
          <p className="mt-4 max-w-sm text-small text-ink-muted">
            Built with React, TypeScript, Vite, Tailwind and a little GSAP. Set in{' '}
            <span className="font-display font-extrabold text-ink uppercase">Archivo</span>, Geist and{' '}
            <span className="font-mono text-[0.9em] text-ink">Geist Mono</span>.
          </p>
        </div>
        </Grid>
      </Container>

      <Container className="flex flex-wrap items-center justify-between gap-4 border-t border-rule py-5 type-label text-ink-muted">
        <span>
          © {year} {profile.name}
        </span>
        <span className="hidden items-center gap-2 md:flex">
          <StatusDot tone="accent" />
          <span className="normal-case">
            currently {currently.items[0].verb} {currently.items[0].what}
          </span>
        </span>
        <span className="hidden items-center gap-2 lg:flex">
          <Kbd>G</Kbd> grid
          <span className="mx-1 text-ink-faint">·</span>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd> menu
        </span>
        <button type="button" onClick={toTop} className="group/top -m-2 flex cursor-pointer items-center gap-1.5 p-2 hover:text-ink">
          Back to top
          <ArrowUp aria-hidden className="size-3 transition-transform duration-base group-hover/top:-translate-y-0.5" />
        </button>
      </Container>
    </footer>
  )
}
