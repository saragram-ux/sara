import { StatusDot } from '@/components/common/status-dot'
import { currently } from '@/data/currently'
import { formatMonth } from '@/lib/utils'

/** A small, living status list. Content lives in data/currently.ts. */
export function CurrentlyPanel() {
  return (
    <section aria-labelledby="currently-title" className="overflow-hidden rounded-lg border border-rule bg-paper-raised shadow-paper">
      <header className="flex items-center justify-between border-b border-rule px-4 py-3">
        <h3 id="currently-title" className="flex items-center gap-2 type-label">
          <StatusDot tone="accent" />
          Currently
        </h3>
        <span className="type-label text-ink-muted">
          Updated <time dateTime={currently.updated}>{formatMonth(currently.updated)}</time>
        </span>
      </header>
      <ul className="divide-y divide-rule">
        {currently.items.map((item) => (
          <li key={item.what} className="grid grid-cols-[5.25rem_1fr] items-baseline gap-3 px-4 py-3">
            <span className="type-label text-ink-muted">{item.verb}</span>
            <span>
              <span className="block text-small">{item.what}</span>
              {item.detail && <span className="block type-meta text-ink-muted">{item.detail}</span>}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
