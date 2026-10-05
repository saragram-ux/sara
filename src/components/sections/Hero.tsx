import { ArrowDown } from '@phosphor-icons/react'
import { useRef } from 'react'

import { ArrowLink } from '@/components/common/ArrowLink'
import { StatusDot } from '@/components/common/StatusDot'
import { useEntrance } from '@/components/motion/useEntrance'
import { usePageTransition } from '@/components/motion/transition-context'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { useLocalTime } from '@/hooks/useLocalTime'
import { duration, ease } from '@/lib/motion'

/** The path so far — dates from the profile. */
const YEAR = new Date().getFullYear()

const trajectory = [
  { year: '2015', label: 'Graphic design' },
  { year: '2018', label: 'UX / UI design' },
  { year: '2020', label: 'Webflow development' },
  { year: '2026', label: 'Frontend development', current: true },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { go } = usePageTransition()
  const time = useLocalTime(profile.timeZone)

  useEntrance(ref, (tl) => {
    tl.from('[data-hero="meta"] > *', { autoAlpha: 0, y: 8, duration: duration.slow, ease: ease.out, stagger: 0.05 })
      .from('[data-hero="line"]', { yPercent: 105, duration: 1.1, ease: ease.out, stagger: 0.09 }, 0.05)
      .from('[data-hero="caret"]', { autoAlpha: 0, duration: 0.01 }, 0.7)
      .from('[data-hero="fade"]', { autoAlpha: 0, y: 16, duration: 0.9, ease: ease.out, stagger: 0.08 }, 0.45)
      .from('[data-hero="panel"]', { autoAlpha: 0, y: 24, duration: 1, ease: ease.out }, 0.55)
      .from('[data-hero="rule"]', { scaleX: 0, transformOrigin: 'left', duration: 1.2, ease: ease.inOut }, 0.6)
      .from('[data-hero="step"]', { autoAlpha: 0, y: 8, duration: 0.6, ease: ease.out, stagger: 0.07 }, 0.9)
  })

  return (
    <section ref={ref} aria-labelledby="hero-title" className="page pt-[clamp(2.5rem,1rem+5vw,5.5rem)] pb-(--space-block)">
      {/* Metadata strip */}
      <div data-hero="meta" className="page-grid gap-y-2 label-mono text-ink-muted">
        <span className="col-span-2 md:col-span-2">Index — {YEAR}</span>
        <span className="col-span-2 text-right md:col-span-3 md:text-left lg:col-span-6 lg:col-start-3">
          <span className="md:hidden">{profile.disciplines.join(' / ')}</span>
          <span className="hidden md:inline">{profile.titles.join(' · ')}</span>
        </span>
        <span className="hidden md:col-span-3 md:block md:text-right lg:col-span-4 lg:col-start-9">
          {profile.location} → Remote EU
        </span>
      </div>

      {/* Statement */}
      <h1 id="hero-title" className="mt-10 font-serif text-display-xl md:mt-14">
        <span className="sr-only">{profile.name}, </span>
        <span className="line-mask">
          <span data-hero="line" className="block">
            Designer
          </span>
        </span>
        <span className="line-mask">
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

      <div className="page-grid mt-12 gap-y-12 md:mt-16">
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
          <div data-hero="fade" className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button onClick={() => go('#work')}>
              Selected work
              <ArrowDown aria-hidden weight="bold" className="size-3.5 transition-transform group-hover/button:translate-y-0.5" />
            </Button>
            <ArrowLink href="#contact">Get in touch</ArrowLink>
          </div>
        </div>

        {/* Status panel — the one iOS-flavoured object on the page */}
        <aside
          data-hero="panel"
          aria-label="Status"
          className="col-span-4 self-start md:col-span-3 md:col-start-6 md:mt-1.5 lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10"
        >
          <div className="overflow-hidden rounded-lg border border-rule bg-paper-raised shadow-paper">
            <div className="flex items-center justify-between border-b border-rule px-4 py-3">
              <span className="label-mono text-ink-muted">Status</span>
              <span className="flex items-center gap-2 label-mono">
                <StatusDot />
                {profile.availability.label}
              </span>
            </div>
            <dl className="divide-y divide-rule px-4 text-small">
              {[
                ['Studio', profile.studio.name],
                ['Mode', profile.availability.detail],
                ['Reach', profile.availability.reach],
                [
                  'Local',
                  <span key="t" className="tabular-nums">
                    {time.hours}
                    <span className="animate-blink">:</span>
                    {time.minutes} {time.zone}
                  </span>,
                ],
              ].map(([label, value]) => (
                <div key={label as string} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="label-mono text-ink-muted">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      {/* Trajectory */}
      <div className="mt-(--space-block)">
        <div data-hero="rule" className="hairline bg-ink" />
        <ol aria-label="Path so far" className="grid grid-cols-2 gap-x-(--gutter) gap-y-5 pt-4 md:grid-cols-4">
          {trajectory.map((step, i) => (
            <li key={step.year} data-hero="step" className="flex flex-col gap-1">
              <span className="flex items-center gap-2 label-mono text-ink-muted tabular-nums">
                {step.year}
                {i < trajectory.length - 1 ? (
                  <span aria-hidden className="text-ink-faint">
                    →
                  </span>
                ) : (
                  <StatusDot tone="accent" />
                )}
              </span>
              <span className={step.current ? 'text-small text-accent-ink' : 'text-small'}>
                {step.label}
                {step.current && <span className="text-ink-muted"> — in progress</span>}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
