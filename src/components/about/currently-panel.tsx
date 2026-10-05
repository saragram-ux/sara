import { SpecPanel } from '@/components/common/spec-panel'
import { StatusDot } from '@/components/common/status-dot'
import { currently } from '@/data/currently'
import { formatMonth } from '@/lib/utils'

/**
 * The currently board — a recurring sara lou device. Verb | thing, as a ruled table.
 * Content lives in data/currently.ts.
 */
export function CurrentlyPanel() {
  return (
    <section aria-labelledby="currently-title">
      <SpecPanel
        titleAs="h3"
        titleId="currently-title"
        title={
          <>
            <StatusDot />
            Currently
          </>
        }
        aside={
          <time dateTime={currently.updated} className="text-paper/70">
            {formatMonth(currently.updated)}
          </time>
        }
        labelClassName="type-meta"
        rows={currently.items.map((item) => ({
          key: item.verb + item.what,
          label: item.verb,
          value: (
            <>
              {item.what}
              {item.detail && <span className="text-ink-muted"> · {item.detail}</span>}
            </>
          ),
        }))}
      />
    </section>
  )
}
