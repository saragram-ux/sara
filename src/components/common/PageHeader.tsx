import { type ReactNode, useRef } from 'react'

import { useEntrance } from '@/components/motion/useEntrance'
import { duration, ease } from '@/lib/motion'

interface Props {
  eyebrow: ReactNode
  title: ReactNode
  lead?: ReactNode
  aside?: ReactNode
}

/** The top of an inner page: mono eyebrow, large serif title, a lead. */
export function PageHeader({ eyebrow, title, lead, aside }: Props) {
  const ref = useRef<HTMLElement>(null)
  useEntrance(ref, (tl) => {
    tl.from('[data-ph="eyebrow"]', { autoAlpha: 0, y: 8, duration: duration.slow, ease: ease.out })
      .from('[data-ph="title"]', { yPercent: 105, duration: 1.05, ease: ease.out }, 0.05)
      .from('[data-ph="fade"]', { autoAlpha: 0, y: 16, duration: 0.9, ease: ease.out, stagger: 0.08 }, 0.35)
  })
  return (
    <header ref={ref} className="page pt-[clamp(2.5rem,1rem+5vw,5.5rem)]">
      <div data-ph="eyebrow" className="flex items-baseline justify-between gap-4 border-t border-ink pt-3 label-mono text-ink-muted">
        {eyebrow}
      </div>
      <h1 className="mt-10 font-serif text-display-lg md:mt-14">
        <span className="line-mask">
          <span data-ph="title" className="block">
            {title}
          </span>
        </span>
      </h1>
      {(lead || aside) && (
        <div className="page-grid mt-10 gap-y-10 md:mt-14">
          {lead && (
            <div data-ph="fade" className="col-span-4 text-lead md:col-span-6 lg:col-span-6 lg:col-start-3">
              {lead}
            </div>
          )}
          {aside && (
            <div data-ph="fade" className="col-span-4 md:col-span-6 lg:col-span-3 lg:col-start-10">
              {aside}
            </div>
          )}
        </div>
      )}
    </header>
  )
}
