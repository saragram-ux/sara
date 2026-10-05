import { ArrowDown } from '@phosphor-icons/react'
import { useRef } from 'react'

import { CareerPath } from '@/components/about/career-path'
import { StatusPanel } from '@/components/about/status-panel'
import { Cluster } from '@/components/layout/cluster'
import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { AnimatedLink } from '@/components/motion/animated-link'
import { usePageTransition } from '@/components/motion/transition-context'
import { usePageEntrance } from '@/components/motion/use-reveal'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { duration, ease } from '@/lib/motion'

const YEAR = new Date().getFullYear()

/** Home, first screen: who I am, what I do, where I'm heading, how to reach me. */
export function SectionHero() {
  const ref = useRef<HTMLElement>(null)
  const { go } = usePageTransition()

  usePageEntrance(ref, (tl) => {
    tl.from('[data-hero="meta"] > *', { autoAlpha: 0, y: 8, duration: duration.slow, ease: ease.out, stagger: 0.05 })
      .from('[data-hero="line"]', { yPercent: 105, duration: 1.1, ease: ease.out, stagger: 0.09 }, 0.05)
      .from('[data-hero="caret"]', { autoAlpha: 0, duration: 0.01 }, 0.7)
      .from('[data-hero="fade"]', { autoAlpha: 0, y: 16, duration: 0.9, ease: ease.out, stagger: 0.08 }, 0.45)
      .from('[data-hero="panel"]', { autoAlpha: 0, y: 24, duration: 1, ease: ease.out }, 0.55)
      .from('[data-hero="rule"]', { scaleX: 0, transformOrigin: 'left', duration: 1.2, ease: ease.inOut }, 0.6)
      .from('[data-hero="step"]', { autoAlpha: 0, y: 8, duration: 0.6, ease: ease.out, stagger: 0.07 }, 0.9)
  })

  return (
    <Section ref={ref} spacing="hero" aria-labelledby="hero-title">
      {/* Metadata strip */}
      <Grid data-hero="meta" className="gap-y-2 type-label text-ink-muted">
        <span className="col-span-2 md:col-span-2">Index — {YEAR}</span>
        <span className="col-span-2 text-right md:col-span-3 md:text-left lg:col-span-6 lg:col-start-3">
          <span className="md:hidden">{profile.disciplines.join(' / ')}</span>
          <span className="hidden md:inline">{profile.titles.join(' · ')}</span>
        </span>
        <span className="hidden md:col-span-3 md:block md:text-right lg:col-span-4 lg:col-start-9">
          {profile.location} → Remote EU
        </span>
      </Grid>

      {/* Statement. The indent of line two is art-directed: two columns at md+. */}
      <h1 id="hero-title" className="mt-10 font-serif text-display-xl md:mt-14">
        <span className="sr-only">{profile.name}, </span>
        <span className="reveal-line">
          <span data-hero="line" className="block">
            Designer
          </span>
        </span>
        <span className="reveal-line">
          <span data-hero="line" className="block pl-[0.9em] md:pl-[16.666%]">
            who <em>builds.</em>
            <span
              data-hero="caret"
              aria-hidden
              className="ml-[0.08em] inline-block h-[0.66em] w-[0.045em] animate-blink bg-accent align-baseline"
            />
          </span>
        </span>
      </h1>

      <Grid className="mt-12 gap-y-12 md:mt-16">
        {/* Introduction */}
        <div className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-3">
          <p data-hero="fade" className="text-lead">
            I’m Sara — a UI and product designer, and co-founder of{' '}
            <span className="whitespace-nowrap">{profile.studio.name}</span>. I design and build for startups and established
            brands across Europe.
          </p>
          <p data-hero="fade" className="mt-4 text-lead text-ink-muted">
            Now I’m studying frontend development, so the distance between the design and the build keeps getting shorter.
          </p>
          <Cluster data-hero="fade" className="mt-8">
            <Button onClick={() => go('#work')}>
              Selected work
              <ArrowDown aria-hidden weight="bold" className="size-3.5 transition-transform group-hover/button:translate-y-0.5" />
            </Button>
            <AnimatedLink href="#contact">Get in touch</AnimatedLink>
          </Cluster>
        </div>

        <aside
          data-hero="panel"
          aria-label="Status"
          className="col-span-4 self-start md:col-span-3 md:col-start-6 md:mt-1.5 lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10"
        >
          <StatusPanel />
        </aside>
      </Grid>

      <div className="mt-block-gap">
        <CareerPath />
      </div>
    </Section>
  )
}
