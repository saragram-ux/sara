import { StatusDot } from '@/components/common/status-dot'
import { currently } from '@/data/currently'
import { formatMonth } from '@/lib/utils'

/**
 * The currently board — a recurring sara lou device. Verb above, thing below,
 * like a little status board. Content lives in data/currently.ts.
 */
export function CurrentlyPanel() {
  return (
    <section aria-labelledby="currently-title" className="border border-ink bg-paper">
      {/* ink header bar, like the head of a spec table */}
      <header className="flex items-center justify-between bg-ink px-4 py-2.5 text-paper">
        <h3 id="currently-title" className="flex items-center gap-2 type-label">
          <StatusDot />
          Currently
        </h3>
        <span className="type-label text-paper/70">
          <time dateTime={currently.updated}>{formatMonth(currently.updated)}</time>
        </span>
      </header>
      <dl>
        {currently.items.map((item) => (
          <div key={item.verb + item.what} className="grid grid-cols-[6.5rem_1fr] border-t border-ink first:border-t-0">
            <dt className="flex items-center border-r border-ink px-4 py-2.5 type-meta text-ink-muted">{item.verb}</dt>
            <dd className="flex items-center px-4 py-2.5 text-small">
              <span>
                {item.what}
                {item.detail && <span className="text-ink-muted"> · {item.detail}</span>}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
