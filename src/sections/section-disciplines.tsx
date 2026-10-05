import { useRef } from 'react'

import { StatusDot } from '@/components/common/status-dot'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { disciplines } from '@/data/about'

/** About: graphic design + behavioural science + frontend. What was studied, and whether it got finished. */
export function SectionDisciplines() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <Section ref={ref} aria-labelledby="mix-title">
      <SectionLabel index="01" id="mix-title">
        Design + behaviour + code
      </SectionLabel>
      {/* Boxed cells with shared edges; the + sits on the border it joins, like a node on a line */}
      <ol className="mt-12 grid grid-cols-1 border-t border-l border-ink md:mt-16 lg:grid-cols-3">
        {disciplines.map((d, i) => (
          <li key={d.discipline} data-reveal className="relative border-r border-b border-ink px-5 pt-10 pb-8 md:px-6 md:pt-11 md:pb-10 lg:pt-6">
            <div className="flex items-center justify-between type-label text-ink-muted">
              <span className="flex items-center gap-2 text-ink">
                {d.gives === 'In progress' && <StatusDot />}
                {d.gives}
              </span>
              <span className="tabular-nums">{d.years}</span>
            </div>
            <h3 className="mt-10 type-display text-display-sm">{d.discipline}</h3>
            <p className="mt-1 type-label text-ink-muted">{d.where}</p>
            <p className="mt-5 max-w-sm text-body">{d.text}</p>
            {i < disciplines.length - 1 && (
              <span
                aria-hidden
                className="absolute -bottom-[18px] left-5 z-10 grid size-9 place-items-center border border-ink bg-paper type-display text-[1.25rem] leading-none md:left-6 lg:top-14 lg:-right-[18px] lg:bottom-auto lg:left-auto"
              >
                +
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
