import { type ReactNode, useRef } from 'react'

import { usePageEntrance } from '@/components/motion/use-reveal'
import { duration, ease } from '@/lib/motion'
import { Container } from './container'
import { Grid } from './grid'

interface PageHeaderProps {
  eyebrow: ReactNode
  title: ReactNode
  lead?: ReactNode
  aside?: ReactNode
}

/** The top of an inner page: mono eyebrow, large serif title, a lead. */
export function PageHeader({ eyebrow, title, lead, aside }: PageHeaderProps) {
  const ref = useRef<HTMLElement>(null)
  usePageEntrance(ref, (tl) => {
    tl.from('[data-page-header="eyebrow"]', { autoAlpha: 0, y: 8, duration: duration.slow, ease: ease.out })
      .from('[data-page-header="title"]', { yPercent: 105, duration: 1.05, ease: ease.out }, 0.05)
      .from('[data-page-header="fade"]', { autoAlpha: 0, y: 16, duration: 0.9, ease: ease.out, stagger: 0.08 }, 0.35)
  })
  return (
    <Container as="header" ref={ref} className="pt-page-top">
      <div data-page-header="eyebrow" className="flex items-baseline justify-between gap-4 border-t border-ink pt-3 type-label text-ink-muted">
        {eyebrow}
      </div>
      <h1 className="mt-10 font-serif text-display-lg md:mt-14">
        <span className="reveal-line">
          <span data-page-header="title" className="block">
            {title}
          </span>
        </span>
      </h1>
      {(lead || aside) && (
        <Grid className="mt-10 gap-y-10 md:mt-14">
          {lead && (
            <div data-page-header="fade" className="col-span-4 text-lead md:col-span-6 lg:col-span-6 lg:col-start-3">
              {lead}
            </div>
          )}
          {aside && (
            <div data-page-header="fade" className="col-span-4 md:col-span-6 lg:col-span-3 lg:col-start-10">
              {aside}
            </div>
          )}
        </Grid>
      )}
    </Container>
  )
}
