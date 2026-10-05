import { TransitionLink } from '@/components/navigation/transition-link'
import type { PlaygroundItem } from '@/data/types'
import { PlaygroundStack } from './playground-stack'
import { PlaygroundStatus } from './playground-status'

/** A compact playground entry for the home page; links to the full entry. */
export function PlaygroundCard({ item }: { item: PlaygroundItem }) {
  return (
    <TransitionLink to={`/playground#p-${item.id}`} className="group/entry block border-t border-ink pt-4">
      <div className="flex items-center justify-between type-label text-ink-muted">
        <span>Playground / {item.id}</span>
        <PlaygroundStatus status={item.status} />
      </div>
      <h4 className="mt-6 type-display text-display-sm transition-transform duration-slow ease-out-soft group-hover/entry:translate-x-nudge">
        {item.title}
      </h4>
      <p className="mt-3 max-w-sm text-small text-ink-muted">{item.description}</p>
      <PlaygroundStack stack={item.stack} className="mt-5" />
    </TransitionLink>
  )
}
