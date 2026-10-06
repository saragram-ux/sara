import { ArrowUpRight } from '@phosphor-icons/react'

import { TransitionLink } from '@/components/navigation/transition-link'
import type { PlaygroundItem } from '@/data/types'
import { PlaygroundStack } from './playground-stack'
import { PlaygroundStatus } from './playground-status'

/** A playground entry as one cell of the home page's boxed grid; links to the full entry. */
export function PlaygroundCard({ item }: { item: PlaygroundItem }) {
  return (
    <TransitionLink
      to={`/playground#p-${item.id}`}
      className="group/entry flex h-full flex-col p-5 transition-colors duration-base hover:bg-paper-raised md:p-6"
    >
      <div className="flex items-center justify-between type-label text-ink-muted">
        <span className="tabular-nums">Playground / {item.id}</span>
        <PlaygroundStatus status={item.status} />
      </div>
      <h3 className="mt-10 type-display text-display-sm">{item.title}</h3>
      <p className="mt-3 text-small text-ink-muted">{item.description}</p>
      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
        <PlaygroundStack stack={item.stack} />
        <span
          aria-hidden
          className="grid size-9 shrink-0 place-items-center rounded-full border border-ink transition-colors duration-fast group-hover/entry:bg-ink group-hover/entry:text-paper"
        >
          <ArrowUpRight weight="bold" className="size-3.5" />
        </span>
      </div>
    </TransitionLink>
  )
}
