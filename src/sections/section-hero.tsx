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
import { brand } from '@/data/brand'
import { profile } from '@/data/profile'
import { duration, ease } from '@/lib/motion'
import { cn } from '@/lib/utils'

/** Home, first screen. The index page of the notebook: 000. */
export function SectionHero() {
  const ref = useRef<HTMLElement>(null)
  const { go } = usePageTransition()

  usePageEntrance(ref, (tl) => {
    tl.from('[data-hero="meta"] > *', { autoAlpha: 0, duration: duration.fast, ease: 'none', stagger: 0.06 })
      .from('[data-hero="line"]', { yPercent: 105, duration: 0.6, ease: ease.out, stagger: 0.07 }, 0.08)
      .from('[data-hero="fade"]', { autoAlpha: 0, y: 10, duration: 0.45, ease: ease.out, stagger: 0.05 }, 0.32)
      .from('[data-hero="panel"]', { autoAlpha: 0, y: 12, duration: 0.5, ease: ease.out }, 0.38)
      .from('[data-hero="rule"]', { scaleX: 0, transformOrigin: 'left', duration: 0.7, ease: ease.inOut }, 0.4)
      .from('[data-hero="step"]', { autoAlpha: 0, duration: duration.fast, ease: 'none', stagger: 0.06 }, 0.62)
  })

  // What she does, in the order she does it. The second sentence steps in two columns.
  const lines = [
    { text: 'I design', indent: '' },
    { text: 'interfaces.', indent: '' },
    { text: 'Then I build', indent: 'md:pl-[16.666%]' },
    { text: 'them.', indent: 'md:pl-[16.666%]' },
  ]

  return (
    <Section ref={ref} spacing="hero" aria-labelledby="hero-title">
      {/* Index strip — the same line the intro ends on */}
      <Grid data-hero="meta" className="gap-y-2 type-label text-ink-muted">
        <span className="col-span-2 tabular-nums md:col-span-2">Index / 000</span>
        <span className="col-span-2 text-right md:col-span-3 md:text-left lg:col-span-4 lg:col-start-3">{profile.name}</span>
        <span className="hidden md:col-span-3 md:block md:text-right lg:col-span-4 lg:col-start-9">
          {profile.location}
        </span>
      </Grid>

      <h1 id="hero-title" className="mt-10 type-display text-display-xl md:mt-14">
        <span className="sr-only">
          {brand.name} — {profile.name}.{' '}
        </span>
        {lines.map((line) => (
          <span key={line.text} className="reveal-line">
            <span data-hero="line" className={cn('block', line.indent)}>
              {line.text}
            </span>
          </span>
        ))}
      </h1>

      <Grid className="mt-12 gap-y-12 md:mt-16">
        <div className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-3">
          <p data-hero="fade" className="text-lead">
            Designing interfaces since 2018. Co-founder of{' '}
            <span className="whitespace-nowrap">{profile.studio.name}</span>. UI, product design and design systems for
            startups and established brands across Europe. Designed in Figma, built in Webflow.
          </p>
          <p data-hero="fade" className="mt-4 text-lead text-ink-muted">
            Currently learning to build the rest of it in code.
          </p>
          <Cluster data-hero="fade" className="mt-8">
            <Button onClick={() => go('#work')}>
              Work
              <ArrowDown aria-hidden weight="bold" className="size-3.5 transition-transform duration-fast group-hover/button:translate-y-0.5" />
            </Button>
            <AnimatedLink href="#contact">Contact</AnimatedLink>
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
