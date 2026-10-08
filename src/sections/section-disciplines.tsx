import { useRef } from 'react'

import { StatusDot } from '@/components/common/status-dot'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { disciplines } from '@/data/about'
import { cn } from '@/lib/utils'

/** About: graphic design + behavioural science + frontend. What I studied, and what it gave me. */
export function SectionDisciplines() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} aria-labelledby="mix-title">
      <SectionLabel index="01" id="mix-title">
        Design + behaviour + code
      </SectionLabel>
      <ol className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {disciplines.map((d) => {
          const live = d.gives === 'In progress'
          return (
            <li key={d.discipline} data-reveal className="rounded-card border border-ink p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <span
                  className={cn(
                    'flex items-center gap-2 rounded-full px-3 py-1 type-label',
                    live ? 'bg-ink text-paper' : 'border border-ink',
                  )}
                >
                  {live && <StatusDot />}
                  {d.gives}
                </span>
                <span className="font-mono text-small tabular-nums">{d.years}</span>
              </div>
              <h3 className="mt-10 type-display text-display-sm">{d.discipline}</h3>
              <p className="mt-1 type-label text-ink-muted">{d.where}</p>
              <p className="mt-5 max-w-sm text-body">{d.text}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
