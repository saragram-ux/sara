import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import type { ComponentType } from 'react'

import { keepI } from '@/components/common/keep-i'
import { StatusDot } from '@/components/common/status-dot'
import { Grid } from '@/components/layout/grid'
import type { PlaygroundItem } from '@/data/types'
import { ledOnPastel } from '@/lib/pastel'
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
      className={cn('scroll-mt-sticky rounded-card border border-ink p-5 outline-none md:p-8', item.draft && 'border-dotted opacity-70')}
    >
      {/* status row */}
      <div data-reveal className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-dotted border-ink/60 pb-3 type-label">
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="tabular-nums">Playground / {item.id}</span>
          <time dateTime={item.date} className="text-ink-muted">
            {formatMonth(item.date)}
          </time>
          {item.draft && <span className="text-accent-ink">Draft · dev only</span>}
        </span>
        <PlaygroundStatus status={item.status} />
      </div>

      <Grid data-reveal className="mt-8 gap-y-6">
        <div className="col-span-4 md:col-span-5 lg:col-span-8">
          <h2 id={`p-${item.id}-title`} className="type-display text-display-md">
            {keepI(item.title)}
          </h2>
          <p className="mt-4 max-w-xl text-body text-ink-muted">{item.description}</p>
        </div>

        <div className="col-span-4 md:col-span-3 lg:col-span-4">
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
        <div data-reveal className="mt-8 rounded-cell border border-ink">
          <div className="flex items-center justify-between rounded-t-[calc(var(--radius-cell)-1px)] border-b border-ink bg-lilac px-4 py-3 type-label text-on-pastel">
            <span className="font-medium">Live demo</span>
            <span className="flex items-center gap-2">
              <StatusDot className={ledOnPastel} />
              Try it
            </span>
          </div>
          <div className="p-inset">
            <Demo />
          </div>
        </div>
      )}
    </article>
  )
}
