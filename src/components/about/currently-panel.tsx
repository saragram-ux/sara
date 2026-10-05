import { StatusDot } from '@/components/common/status-dot'
import { currently } from '@/data/currently'
import { formatMonth } from '@/lib/utils'

/**
 * The currently board — a recurring sara lou device. Verb above, thing below,
 * like a little status board. Content lives in data/currently.ts.
 */
export function CurrentlyPanel() {
  return (
    <section aria-labelledby="currently-title" className="overflow-hidden rounded-lg border border-rule bg-paper-raised shadow-paper">
      <header className="flex items-center justify-between border-b border-rule px-4 py-3">
        <h3 id="currently-title" className="flex items-center gap-2 type-label">
          <StatusDot />
          Currently
        </h3>
        <span className="type-label text-ink-muted">
          <time dateTime={currently.updated}>{formatMonth(currently.updated)}</time>
        </span>
      </header>
      <ul className="divide-y divide-rule">
        {currently.items.map((item) => (
          <li key={item.verb + item.what} className="px-4 py-2.5">
            <span className="block type-meta text-ink-muted">{item.verb}</span>
            <span className="block text-body">
              {item.what}
              {item.detail && <span className="text-small text-ink-muted"> · {item.detail}</span>}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
