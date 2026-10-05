import { useRef } from 'react'

import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
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
  return (
    <Section ref={ref} aria-labelledby="playground-title">
      <SectionLabel index="03" id="playground-title" aside={`001 — ${visiblePlayground[0]?.id ?? '000'}`}>
        Playground
      </SectionLabel>

      <Grid className="mt-12 gap-y-6 md:mt-16">
        <h3 data-reveal className="col-span-4 type-display text-display-md md:col-span-6 lg:col-span-5 lg:col-start-3">
          Things I build while learning to code.
        </h3>
        <p data-reveal className="col-span-4 text-lead text-ink-muted md:col-span-5 lg:col-span-4 lg:col-start-3">
          Small tools and experiments from my frontend studies. Some are finished, some aren’t yet.
        </p>
      </Grid>

      {/* Boxed cells with shared edges: the grid made visible. The empty cell is hatched: not there yet. */}
      <ol className="mt-14 grid grid-cols-1 border-t border-l border-ink md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.id} data-reveal className="border-r border-b border-ink">
            <PlaygroundCard item={item} />
          </li>
        ))}
        <li data-reveal className="hidden min-h-56 items-end border-r border-b border-ink bg-hatch p-5 md:flex md:p-6">
          <span className="bg-paper px-2 py-1 type-label text-ink-muted tabular-nums">
            Playground / {pad3(Number(visiblePlayground[0]?.id ?? 0) + 1)} · not started yet
          </span>
        </li>
      </ol>

      <div data-reveal className="mt-12">
        <AnimatedLink href="/playground">See everything</AnimatedLink>
      </div>
    </Section>
  )
}
