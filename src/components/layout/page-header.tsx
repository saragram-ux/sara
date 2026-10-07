import { type ReactNode, useRef } from 'react'

import { Module } from '@/components/instrument/module'
import { usePageEntrance } from '@/components/motion/use-reveal'
import { duration, ease } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { Container } from './container'
import { Grid } from './grid'

interface PageHeaderProps {
  eyebrow: ReactNode
  title: ReactNode
  lead?: ReactNode
  aside?: ReactNode
  /** xl for a word or a name ("myo"), lg for a sentence. */
  titleSize?: 'xl' | 'lg'
}

/**
 * The top of an inner page, built like the home hero: one rounded device panel with a status
 * row, a huge lowercase title, then the lead and an aside (meta, legend) side by side.
 */
export function PageHeader({ eyebrow, title, lead, aside, titleSize = 'lg' }: PageHeaderProps) {
  const ref = useRef<HTMLElement>(null)
  usePageEntrance(ref, (tl) => {
    tl.from('[data-page-header="eyebrow"]', { autoAlpha: 0, y: 8, duration: duration.slow, ease: ease.out })
      .from('[data-page-header="title"]', { yPercent: 105, duration: 0.62, ease: ease.out, clearProps: 'transform' }, 0.04)
      .from('[data-page-header="fade"]', { autoAlpha: 0, y: 10, duration: 0.5, ease: ease.out, stagger: 0.05 }, 0.22)
  })
  return (
    <Container as="header" ref={ref} className="pt-6 md:pt-10">
      <Module className="p-5 md:p-8 lg:p-10">
        <div data-page-header="eyebrow" className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 type-label text-ink-muted">
          {eyebrow}
        </div>
        <h1 className={cn('mt-10 type-display md:mt-14', titleSize === 'xl' ? 'text-display-xl' : 'text-display-lg')}>
          <span className="reveal-line">
            <span data-page-header="title" className="block">
              {title}
            </span>
          </span>
        </h1>
        {(lead || aside) && (
          <Grid className="mt-10 gap-y-10 md:mt-14">
            {lead && (
              <div data-page-header="fade" className="col-span-4 text-lead md:col-span-8 lg:col-span-7">
                {lead}
              </div>
            )}
            {aside && (
              <div data-page-header="fade" className="col-span-4 md:col-span-6 lg:col-span-4 lg:col-start-9">
                {aside}
              </div>
            )}
          </Grid>
        )}
      </Module>
    </Container>
  )
}
