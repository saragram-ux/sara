import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import type { ComponentType } from 'react'

import { Grid } from '@/components/layout/grid'
import type { PlaygroundItem } from '@/data/types'
import { cn, formatMonth } from '@/lib/utils'
import { DemoEasingLab } from './demo-easing-lab'
import { DemoLayoutGrid } from './demo-layout-grid'
import { DemoTypeSpecimen } from './demo-type-specimen'
import { PlaygroundStack } from './playground-stack'
import { PlaygroundStatus } from './playground-status'

/** Live demos an entry can embed, keyed by `embed` in data/playground.ts. */
const demos: Record<NonNullable<PlaygroundItem['embed']>, ComponentType> = {
  'easing-lab': DemoEasingLab,
  'type-specimen': DemoTypeSpecimen,
  grid: DemoLayoutGrid,
}

/** A full lab-notebook entry: meta column, title + notes, stack, links, and the live demo if it has one. */
export function PlaygroundEntry({ item }: { item: PlaygroundItem }) {
  const Demo = item.embed ? demos[item.embed] : null
  return (
    <article
      id={`p-${item.id}`}
      tabIndex={-1}
      aria-labelledby={`p-${item.id}-title`}
      className={cn('scroll-mt-sticky outline-none', item.draft && 'opacity-70')}
    >
      <Grid data-reveal className="gap-y-6 border-t border-ink pt-3">
        <div className="col-span-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 type-label text-ink-muted md:col-span-8 lg:col-span-2 lg:flex-col lg:justify-start lg:gap-2">
          <span className="text-ink">Playground / {item.id}</span>
          <time dateTime={item.date}>{formatMonth(item.date)}</time>
          <PlaygroundStatus status={item.status} />
          {item.draft && <span className="text-accent">Draft · dev only</span>}
        </div>

        <div className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-3">
          <h2 id={`p-${item.id}-title`} className="font-serif text-display-md">
            {item.title}
          </h2>
          <p className="mt-4 max-w-xl text-body text-ink-muted">{item.description}</p>
        </div>

        <div className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-10">
          <p className="type-label text-ink-muted">Stack</p>
          <PlaygroundStack stack={item.stack} variant="chips" className="mt-2" />
          {(item.demoUrl || item.repoUrl) && (
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {item.demoUrl && (
                <a href={item.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 type-label link-underline-draw">
                  Demo <ArrowUpRight aria-hidden className="size-3" />
                </a>
              )}
              {item.repoUrl && (
                <a href={item.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 type-label link-underline-draw">
                  <GithubLogo aria-hidden className="size-3.5" /> Source
                </a>
              )}
            </div>
          )}
        </div>
      </Grid>

      {Demo && (
        <Grid data-reveal className="mt-10">
          <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-3">
            <div className="rounded-lg border border-rule bg-paper-raised p-inset shadow-paper">
              <Demo />
            </div>
          </div>
        </Grid>
      )}
    </article>
  )
}
