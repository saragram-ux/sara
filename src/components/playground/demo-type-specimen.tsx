import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

const SCALE = [
  { token: 'display-xl', cls: 'type-display text-display-xl', sample: 'Aa' },
  { token: 'display-lg', cls: 'type-display text-display-lg', sample: 'Inbox open' },
  { token: 'display-md', cls: 'type-display text-display-md', sample: 'Work / 001' },
  { token: 'display-sm', cls: 'type-display text-display-sm', sample: 'Small things' },
  { token: 'lead', cls: 'text-lead', sample: 'Freelance and contract work.' },
  { token: 'body', cls: 'text-body', sample: 'Readable, calm, unhurried copy.' },
  { token: 'small', cls: 'text-small', sample: 'Captions, roles and notes.' },
  { token: 'meta', cls: 'type-meta', sample: 'Metadata · 2026' },
  { token: 'micro', cls: 'type-label', sample: 'Labels / Index' },
]

/** The type scale, rendered from the live tokens. Resize the window — the numbers follow. */
export function DemoTypeSpecimen() {
  const ref = useRef<HTMLUListElement>(null)
  const [sizes, setSizes] = useState<string[]>([])

  useEffect(() => {
    const measure = () => {
      const nodes = ref.current?.querySelectorAll<HTMLElement>('[data-sample]') ?? []
      setSizes(Array.from(nodes, (n) => `${Math.round(parseFloat(getComputedStyle(n).fontSize))}px`))
    }
    measure()
    document.fonts?.ready.then(measure)
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <ul ref={ref} className="divide-y divide-rule">
      {SCALE.map((s, i) => (
        <li key={s.token} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 py-3 sm:grid-cols-[7rem_1fr_3.5rem]">
          <span className="type-label text-ink-muted">{s.token}</span>
          <span data-sample className={cn('min-w-0 truncate', s.cls, i === 0 && 'leading-none')}>
            {s.sample}
          </span>
          <span className="hidden text-right type-meta text-ink-muted tabular-nums sm:block">{sizes[i]}</span>
        </li>
      ))}
    </ul>
  )
}
