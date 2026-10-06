import { Play } from '@phosphor-icons/react'
import { useMemo, useRef, useState } from 'react'

import { Stack } from '@/components/layout/stack'
import { useMediaQuery } from '@/hooks/use-media-query'
import { gsap, MOTION_OK, useGSAP } from '@/lib/motion'
import { cn } from '@/lib/utils'

const EASES = [
  { name: 'none', note: 'Linear. Mechanical.' },
  { name: 'power2.out', note: 'Quiet arrival.' },
  { name: 'expo.out', note: 'Fast start, long landing.' },
  { name: 'power3.inOut', note: 'Travelling across.' },
  { name: 'back.out(1.6)', note: 'A little overshoot.' },
]
const DURATIONS = [0.6, 1.2, 2.4]

function curvePath(ease: string, w = 64, h = 40) {
  const fn = gsap.parseEase(ease)
  const pts = Array.from({ length: 41 }, (_, i) => {
    const t = i / 40
    return `${(t * w).toFixed(2)},${(h - fn(t) * h * 0.8 - h * 0.1).toFixed(2)}`
  })
  return `M${pts.join(' L')}`
}

export function DemoEasingLab() {
  const ref = useRef<HTMLDivElement>(null)
  const [dur, setDur] = useState(1.2)
  const motionOk = useMediaQuery(MOTION_OK)
  const paths = useMemo(() => EASES.map((e) => curvePath(e.name)), [])

  const { contextSafe } = useGSAP({ scope: ref })
  const play = contextSafe(() => {
    gsap.killTweensOf('[data-dot]')
    EASES.forEach((e, i) => {
      gsap.fromTo(`[data-dot="${i}"]`, { left: '0%', xPercent: 0 }, { left: '100%', xPercent: -100, duration: dur, ease: e.name })
    })
  })

  return (
    <Stack ref={ref} gap="md">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="radiogroup" aria-label="Duration" className="inline-flex overflow-hidden rounded-full border border-ink">
          {DURATIONS.map((d) => (
            <button
              key={d}
              type="button"
              role="radio"
              aria-checked={dur === d}
              onClick={() => setDur(d)}
              className={cn(
                'h-8 cursor-pointer border-r border-ink px-3.5 type-label tabular-nums transition-colors last:border-r-0',
                dur === d ? 'bg-ink text-paper' : 'text-ink-muted hover:bg-paper-sunken hover:text-ink',
              )}
            >
              {d}s
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={play}
          disabled={!motionOk}
          className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border border-ink bg-ink px-4 type-label text-paper transition-colors hover:bg-paper hover:text-ink disabled:cursor-not-allowed disabled:border-rule-strong disabled:bg-transparent disabled:text-ink-muted"
        >
          <Play aria-hidden weight="fill" className="size-3" />
          {motionOk ? 'Play' : 'Reduced motion is on'}
        </button>
      </div>

      <ul className="grid gap-3">
        {EASES.map((e, i) => (
          <li key={e.name} className="grid grid-cols-[4rem_1fr] items-center gap-4 sm:grid-cols-[4rem_9rem_1fr]">
            <svg viewBox="0 0 64 40" className="h-10 w-16 rounded-md border border-ink/40 bg-paper-raised" aria-hidden>
              <path d={paths[i]} fill="none" stroke="var(--ink)" strokeWidth="1.25" />
            </svg>
            <div className="hidden sm:block">
              <p className="type-meta">{e.name}</p>
              <p className="text-small text-ink-muted">{e.note}</p>
            </div>
            <div className="relative h-10 border-b border-rule">
              <span className="absolute top-0 right-0 block type-meta text-ink-muted sm:hidden">{e.name}</span>
              <span data-dot={i} className="absolute top-1/2 left-0 block size-3 -translate-y-1/2 bg-ink" />
            </div>
          </li>
        ))}
      </ul>
    </Stack>
  )
}
