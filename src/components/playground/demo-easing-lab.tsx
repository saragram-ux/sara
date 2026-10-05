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
        <div role="radiogroup" aria-label="Duration" className="inline-flex rounded-md bg-paper-sunken p-0.5">
          {DURATIONS.map((d) => (
            <button
              key={d}
              type="button"
              role="radio"
              aria-checked={dur === d}
              onClick={() => setDur(d)}
              className={cn(
                'h-8 cursor-pointer rounded-[6px] px-3 type-label tabular-nums transition-[background-color,box-shadow]',
                dur === d ? 'bg-paper-raised shadow-paper' : 'text-ink-muted hover:text-ink',
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
          className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-sm bg-ink px-3 type-label text-paper-raised transition-colors hover:bg-ink/85 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Play aria-hidden weight="fill" className="size-3" />
          {motionOk ? 'Play' : 'Reduced motion is on'}
        </button>
      </div>

      <ul className="grid gap-3">
        {EASES.map((e, i) => (
          <li key={e.name} className="grid grid-cols-[4rem_1fr] items-center gap-4 sm:grid-cols-[4rem_9rem_1fr]">
            <svg viewBox="0 0 64 40" className="h-10 w-16 rounded-xs border border-rule bg-paper" aria-hidden>
              <path d={paths[i]} fill="none" stroke="var(--accent)" strokeWidth="1.25" />
            </svg>
            <div className="hidden sm:block">
              <p className="type-meta">{e.name}</p>
              <p className="text-small text-ink-muted">{e.note}</p>
            </div>
            <div className="relative h-10 border-b border-rule">
              <span className="absolute bottom-0 left-0 block sm:hidden type-meta text-ink-muted">{e.name}</span>
              <span data-dot={i} className="absolute top-1/2 left-0 block size-3 -translate-y-1/2 rounded-xs bg-ink" />
            </div>
          </li>
        ))}
      </ul>
    </Stack>
  )
}
