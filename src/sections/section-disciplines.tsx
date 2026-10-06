import { useRef } from 'react'

import { StatusDot } from '@/components/common/status-dot'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { disciplines } from '@/data/about'
import { cn } from '@/lib/utils'

/** About: graphic design + behavioural science + frontend. What was studied, and whether it got finished. */
export function SectionDisciplines() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} aria-labelledby="mix-title">
      <SectionLabel index="01" id="mix-title">
        Design + behaviour + code
      </SectionLabel>
      {/* three instruments, joined by round + markers in the gaps */}
      <ol className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {disciplines.map((d, i) => {
          const status = d.gives === 'In progress' ? 'live' : d.gives === 'Finished' ? 'done' : 'open'
          return (
            <li key={d.discipline} data-reveal className="relative rounded-card border border-ink p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <span
                  className={cn(
                    'flex items-center gap-2 rounded-full px-3 py-1 type-label',
                    status === 'live' && 'bg-ink text-paper',
                    status === 'done' && 'border border-ink',
                    status === 'open' && 'border border-dotted border-ink/60 text-ink-muted',
                  )}
                >
                  {status === 'live' && <StatusDot />}
                  {d.gives}
                </span>
                <span className="font-mono text-small tabular-nums">{d.years}</span>
              </div>
              <h3 className="mt-10 type-display text-display-sm">{d.discipline}</h3>
              <p className="mt-1 type-label text-ink-muted">{d.where}</p>
              <p className="mt-5 max-w-sm text-body">{d.text}</p>
              {i < disciplines.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -bottom-[1.375rem] left-1/2 z-10 grid size-9 -translate-x-1/2 place-items-center rounded-full border border-ink bg-paper font-mono text-body leading-none lg:top-1/2 lg:-right-[1.375rem] lg:bottom-auto lg:left-auto lg:translate-x-0 lg:-translate-y-1/2"
                >
                  +
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
