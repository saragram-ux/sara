import { useRef } from 'react'

import { Bracket } from '@/components/instrument/readout'
import { SectionTitle } from '@/components/instrument/section-title'
import { Section } from '@/components/layout/section'
import { AnimatedLink } from '@/components/motion/animated-link'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { PlaygroundCard } from '@/components/playground/playground-card'
import { pad3 } from '@/data/brand'
import { visiblePlayground } from '@/data/playground'

/** Home: the three latest playground entries. */
export function SectionPlayground() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  const items = visiblePlayground.slice(0, 3)
  const live = visiblePlayground.filter((x) => x.status === 'live').length
  return (
    <Section ref={ref} aria-labelledby="playground-title">
      <SectionTitle
        id="playground-title"
        descriptors={['Tools', 'Experiments', 'Exercises']}
        meta={<Bracket>03 · Things I build while learning to code</Bracket>}
        metaAside={
          <Bracket>
            {live} / {visiblePlayground.length} live
          </Bracket>
        }
      >
        playground
      </SectionTitle>

      <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.id} data-reveal className="overflow-hidden rounded-card border border-ink">
            <PlaygroundCard item={item} />
          </li>
        ))}
        <li data-reveal className="hidden min-h-56 items-end overflow-hidden rounded-card border border-dotted border-ink/60 bg-hatch p-5 md:flex md:p-6">
          <span className="rounded-full border border-ink/40 bg-paper px-3 py-1 type-label text-ink-muted tabular-nums">
            {pad3(Number(visiblePlayground[0]?.id ?? 0) + 1)} · not started
          </span>
        </li>
      </ol>

      <div data-reveal className="mt-8">
        <AnimatedLink href="/playground">See everything</AnimatedLink>
      </div>
    </Section>
  )
}
