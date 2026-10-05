import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { type ComponentType, useRef } from 'react'

import { PageHeader } from '@/components/common/PageHeader'
import { useScrollReveal } from '@/components/motion/useEntrance'
import { EasingLab } from '@/components/playground/EasingLab'
import { GridDemo } from '@/components/playground/GridDemo'
import { StatusTag } from '@/components/playground/StatusTag'
import { TypeSpecimen } from '@/components/playground/TypeSpecimen'
import { visiblePlayground } from '@/data/playground'
import type { PlaygroundItem, PlaygroundStatus } from '@/data/types'
import { cn, formatMonth } from '@/lib/utils'

const embeds: Record<NonNullable<PlaygroundItem['embed']>, ComponentType> = {
  'easing-lab': EasingLab,
  'type-specimen': TypeSpecimen,
  grid: GridDemo,
}

const legend: { status: PlaygroundStatus; text: string }[] = [
  { status: 'live', text: 'Works, try it' },
  { status: 'building', text: 'In progress' },
  { status: 'idea', text: 'Next up' },
]

export default function Playground() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)

  return (
    <>
      <title>Playground — Sara Gramstad</title>
      <PageHeader
        eyebrow={
          <>
            <span>Playground</span>
            <span className="tabular-nums">({String(visiblePlayground.length).padStart(2, '0')} entries)</span>
          </>
        }
        title={
          <>
            A lab <em>notebook.</em>
          </>
        }
        lead={
          <>
            <p>What I’m building and learning while I study frontend development. Some of it works. Some of it is an idea.</p>
            <p className="mt-4 text-ink-muted">The live ones run right here on the page — no screenshots.</p>
          </>
        }
        aside={
          <ul className="grid gap-2 border-t border-rule pt-3">
            {legend.map((l) => (
              <li key={l.status} className="flex items-center justify-between">
                <StatusTag status={l.status} />
                <span className="text-small text-ink-muted">{l.text}</span>
              </li>
            ))}
          </ul>
        }
      />

      <div ref={ref} className="page section-space grid gap-[clamp(4rem,3rem+4vw,7rem)]">
        {visiblePlayground.map((item) => (
          <Entry key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

function Entry({ item }: { item: PlaygroundItem }) {
  const Embed = item.embed ? embeds[item.embed] : null
  return (
    <article
      id={`p-${item.id}`}
      tabIndex={-1}
      aria-labelledby={`p-${item.id}-title`}
      className={cn('scroll-mt-[calc(var(--header-h)+2rem)] outline-none', item.draft && 'opacity-70')}
    >
      <div data-reveal className="page-grid gap-y-6 border-t border-ink pt-3">
        <div className="col-span-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 label-mono text-ink-muted md:col-span-8 lg:col-span-2 lg:flex-col lg:justify-start lg:gap-2">
          <span className="text-ink">Playground / {item.id}</span>
          <time dateTime={item.date}>{formatMonth(item.date)}</time>
          <StatusTag status={item.status} />
          {item.draft && <span className="text-accent">Draft · dev only</span>}
        </div>

        <div className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-3">
          <h2 id={`p-${item.id}-title`} className="font-serif text-display-md">
            {item.title}
          </h2>
          <p className="mt-4 max-w-xl text-body text-ink-muted">{item.description}</p>
        </div>

        <div className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-10">
          <p className="label-mono text-ink-muted">Stack</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {item.stack.map((s) => (
              <li key={s} className="rounded-xs border border-rule bg-paper-raised px-1.5 py-0.5 meta-mono">
                {s}
              </li>
            ))}
          </ul>
          {(item.demoUrl || item.repoUrl) && (
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {item.demoUrl && (
                <a href={item.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 label-mono link-draw">
                  Demo <ArrowUpRight aria-hidden className="size-3" />
                </a>
              )}
              {item.repoUrl && (
                <a href={item.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 label-mono link-draw">
                  <GithubLogo aria-hidden className="size-3.5" /> Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {Embed && (
        <div data-reveal className="page-grid mt-10">
          <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-3">
            <div className="rounded-lg border border-rule bg-paper-raised p-[clamp(1rem,0.5rem+2vw,2rem)] shadow-paper">
              <Embed />
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
