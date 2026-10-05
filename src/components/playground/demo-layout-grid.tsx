import { Stack } from '@/components/layout/stack'
import { Kbd } from '@/components/ui/kbd'
import { useSite } from '@/lib/site-context'
import { cn } from '@/lib/utils'

const LAYOUTS = [
  { cols: 4, label: 'Phone' },
  { cols: 8, label: 'Tablet' },
  { cols: 12, label: 'Desktop' },
]

export function DemoLayoutGrid() {
  const { grid, toggleGrid } = useSite()
  return (
    <Stack gap="md">
      <div className="grid grid-cols-3 gap-3">
        {LAYOUTS.map((l) => (
          <div key={l.cols}>
            <div
              aria-hidden
              className="grid h-16 gap-[3px] rounded-xs border border-rule bg-paper p-1.5"
              style={{ gridTemplateColumns: `repeat(${l.cols}, 1fr)` }}
            >
              {Array.from({ length: l.cols }, (_, i) => (
                <span key={i} className="bg-ink/10" />
              ))}
            </div>
            <p className="mt-2 type-label text-ink-muted">
              {l.label} · {l.cols} col
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={toggleGrid}
          aria-pressed={grid}
          className={cn(
            'inline-flex h-9 cursor-pointer items-center gap-2 rounded-sm border px-3 type-label transition-colors',
            grid ? 'border-accent bg-accent text-ink' : 'border-rule-strong hover:border-ink',
          )}
        >
          {grid ? 'Hide grid' : 'Show grid'}
        </button>
        <span className="flex items-center gap-2 type-label text-ink-muted">
          or press <Kbd>G</Kbd> anywhere
        </span>
      </div>
    </Stack>
  )
}
