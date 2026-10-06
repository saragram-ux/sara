import { ArrowDown } from '@phosphor-icons/react'
import { useRef } from 'react'

import { LocalTime } from '@/components/common/local-time'
import { StatusDot } from '@/components/common/status-dot'
import { Module } from '@/components/instrument/module'
import { Readout, Readouts } from '@/components/instrument/readout'
import { Switch } from '@/components/instrument/switch'
import { Cluster } from '@/components/layout/cluster'
import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { AnimatedLink } from '@/components/motion/animated-link'
import { usePageTransition } from '@/components/motion/transition-context'
import { usePageEntrance } from '@/components/motion/use-reveal'
import { Button } from '@/components/ui/button'
import { brand } from '@/data/brand'
import { currently } from '@/data/currently'
import { careerPath, careerPathEnd, profile } from '@/data/profile'
import { ledOnPastel } from '@/lib/pastel'
import { useSite } from '@/lib/site-context'
import { cn } from '@/lib/utils'

/** Home, first screen: the device. Status row, headline, a readout bar, two instruments, the schedule. */
export function SectionHero() {
  const ref = useRef<HTMLElement>(null)
  const { go } = usePageTransition()
  const { grid, toggleGrid } = useSite()

  usePageEntrance(ref, (tl) => {
    tl.from('[data-hero="meta"] > *', { autoAlpha: 0, duration: 0.12, ease: 'none', stagger: 0.06 })
      .from('[data-hero="line"]', { yPercent: 105, duration: 0.6, ease: 'power4.out', stagger: 0.07 }, 0.08)
      .from('[data-hero="fade"]', { autoAlpha: 0, y: 10, duration: 0.45, ease: 'power4.out', stagger: 0.05 }, 0.3)
      .from('[data-hero="panel"]', { autoAlpha: 0, y: 12, duration: 0.5, ease: 'power4.out', stagger: 0.07 }, 0.38)
      .from('[data-hero="step"]', { autoAlpha: 0, duration: 0.12, ease: 'none', stagger: 0.06 }, 0.6)
  })

  const lines = ['hi, i’m sara.', 'i design websites', 'and products.']

  return (
    <Section ref={ref} spacing="hero" aria-labelledby="hero-title" className="pt-6 md:pt-10">
      <Module className="p-5 md:p-8 lg:p-10">
        {/* status row, like the top of a phone */}
        <div data-hero="meta" className="flex items-center justify-between gap-4 type-label">
          <span className="tabular-nums">Index / 000</span>
          <span className="hidden text-ink-muted md:block">{profile.name}</span>
          <span className="flex items-center gap-2.5">
            <span className="text-ink-muted">Grid</span>
            <Switch checked={grid} onCheckedChange={toggleGrid} label="Layout grid overlay" />
          </span>
        </div>

        <h1 id="hero-title" className="mt-10 type-display text-display-xl md:mt-14">
          <span className="sr-only">
            {brand.name} — {profile.name}.{' '}
          </span>
          {lines.map((line) => (
            <span key={line} className="reveal-line">
              <span data-hero="line" className="block">
                {line}
              </span>
            </span>
          ))}
        </h1>

        {/* the readout bar: −  19.0°C  +  ·  heating up to desired temperature… */}
        <div
          data-hero="panel"
          className="theme-peach mt-10 flex flex-col gap-4 rounded-cell border border-on-pastel p-4 md:mt-14 md:flex-row md:items-center md:gap-8 md:rounded-full md:py-3 md:pr-3 md:pl-7"
        >
          <span className="type-readout text-[clamp(2rem,1.5rem+2vw,3.25rem)]">
            <LocalTime mutedZone />
          </span>
          <p className="max-w-md text-small md:flex-1">
            {profile.location}. Open for freelance and contract work, remote across Europe.
          </p>
          <span className="flex items-center gap-2 self-start rounded-full border border-ink px-4 py-2.5 type-label md:self-auto">
            <StatusDot className={ledOnPastel} />
            {profile.availability.label}
          </span>
        </div>

        <Grid className="mt-6 gap-y-6">
          <div className="col-span-4 md:col-span-8 lg:col-span-5 lg:pt-4 lg:pr-6">
            <p data-hero="fade" className="text-lead">
              I’ve designed interfaces since 2018 and built websites in Webflow since 2020, for startups and established brands
              around Europe. These days I run <span className="whitespace-nowrap">{profile.studio.name}</span> with Daniel.
            </p>
            <p data-hero="fade" className="mt-4 text-lead text-ink-muted">
              I’m also studying frontend development, so I’m learning to build more of it in code.
            </p>
            <Cluster data-hero="fade" className="mt-8">
              <Button onClick={() => go('#work')}>
                See the work
                <ArrowDown aria-hidden weight="bold" className="size-3.5 transition-transform duration-fast group-hover/button:translate-y-0.5" />
              </Button>
              <AnimatedLink href="#contact">Say hi</AnimatedLink>
            </Cluster>
          </div>

          <Module data-hero="panel" label="Studio" sub={profile.studio.name} className="col-span-4 rounded-cell lg:col-span-3 lg:col-start-6">
            <Readouts className="grid-cols-2">
              <Readout label="Since" value="2025" />
              <Readout label="Team" value="2" />
              <Readout label="Build" value="Webflow" className="col-span-2" />
            </Readouts>
          </Module>

          <Module data-hero="panel" label="Studying" sub="Frontend · EC Utbildning" className="col-span-4 rounded-cell lg:col-span-4 lg:col-start-9">
            <Readouts className="grid-cols-2">
              <Readout label="Since" value={String(careerPathEnd.startYear)} />
              <Readout label="Until" value={String(careerPathEnd.year)} />
              <Readout label={`Now ${currently.items[0].verb}`} value={currently.items[0].what} className="col-span-2" />
            </Readouts>
          </Module>
        </Grid>

        {/* the schedule: the path so far, one dotted row each */}
        <div className="mt-12">
          <p data-hero="step" className="type-label text-ink-muted">
            Path so far
          </p>
          <ol aria-label="Path so far" className="mt-3 border-t border-ink">
            {careerPath.map((step) => {
              const current = 'current' in step && step.current
              return (
                <li
                  key={step.year}
                  data-hero="step"
                  className={cn(
                    'grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 border-b border-dotted border-ink/60 py-3 md:grid-cols-[8rem_1fr_auto]',
                    current && 'font-medium',
                  )}
                >
                  <span className="font-mono text-small tabular-nums">{step.year}</span>
                  <span className="font-mono text-small uppercase">{step.label}</span>
                  {current ? (
                    <span className="rounded-full bg-ink px-3 py-1 type-label text-paper">In progress</span>
                  ) : (
                    <span className="rounded-full border border-ink/40 px-3 py-1 type-label text-ink-muted">Since {step.year}</span>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </Module>
    </Section>
  )
}
