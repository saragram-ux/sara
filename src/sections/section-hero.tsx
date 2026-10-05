import { ArrowDown } from '@phosphor-icons/react'
import { useRef } from 'react'

import { CareerPath } from '@/components/about/career-path'
import { Wordmark } from '@/components/brand/wordmark'
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

/** Home, first screen: the brand, the person, what she does, where she's heading, how to say hi. */
export function SectionHero() {
  const ref = useRef<HTMLElement>(null)
  const { go } = usePageTransition()

  usePageEntrance(ref, (tl) => {
    tl.from('[data-hero="meta"] > *', { autoAlpha: 0, y: 8, duration: duration.slow, ease: ease.out, stagger: 0.05 })
      .from('[data-hero="line"]', { yPercent: 105, duration: 1.1, ease: ease.out, stagger: 0.09 }, 0.05)
      .from('[data-hero="fade"]', { autoAlpha: 0, y: 16, duration: 0.9, ease: ease.out, stagger: 0.08 }, 0.45)
      .from('[data-hero="panel"]', { autoAlpha: 0, y: 24, duration: 1, ease: ease.out }, 0.55)
      .from('[data-hero="rule"]', { scaleX: 0, transformOrigin: 'left', duration: 1.2, ease: ease.inOut }, 0.6)
      .from('[data-hero="step"]', { autoAlpha: 0, y: 8, duration: 0.6, ease: ease.out, stagger: 0.07 }, 0.9)
  })

  return (
    <Section ref={ref} spacing="hero" aria-labelledby="hero-title">
      {/* Metadata strip */}
      <Grid data-hero="meta" className="gap-y-2 type-label text-ink-muted">
        <span className="col-span-4 md:col-span-2">
          {profile.name}
          <span className="md:hidden"> · {profile.disciplines.join(' / ')}</span>
        </span>
        <span className="hidden md:col-span-3 md:block lg:col-span-6 lg:col-start-3">{profile.titles.join(' · ')}</span>
        <span className="hidden md:col-span-3 md:block md:text-right lg:col-span-4 lg:col-start-9">
          {profile.location} → Remote EU
        </span>
      </Grid>

      {/* The wordmark, then what she is. Line two's indent is art-directed: two columns at md+. */}
      <h1 id="hero-title" className="mt-10 font-serif text-display-xl md:mt-14">
        <span className="reveal-line">
          <span data-hero="line" className="block">
            <Wordmark size="inherit" />
          </span>
        </span>
        <span className="sr-only">, {profile.name} — </span>
        <span className="reveal-line">
          <span data-hero="line" className="block pl-[0.9em] text-display-lg md:pl-[16.666%]">
            designer who <em>builds.</em>
          </span>
        </span>
      </h1>

      <Grid className="mt-12 gap-y-12 md:mt-16">
        {/* Introduction */}
        <div className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-3">
          <p data-hero="fade" className="text-lead">
            I’m {profile.name}, a UI and product designer and co-founder of{' '}
            <span className="whitespace-nowrap">{profile.studio.name}</span>. I design interfaces, products and websites for
            startups and established brands across Europe, and then I build them.
          </p>
          <p data-hero="fade" className="mt-4 text-lead text-ink-muted">
            Now studying frontend development, so the gap between the design and the build keeps getting smaller.
          </p>
          <Cluster data-hero="fade" className="mt-8">
            <Button onClick={() => go('#work')}>
              Selected work
              <ArrowDown aria-hidden weight="bold" className="size-3.5 transition-transform group-hover/button:translate-y-0.5" />
            </Button>
            <AnimatedLink href="#contact">Say hi</AnimatedLink>
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
