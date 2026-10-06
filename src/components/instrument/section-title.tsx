import { ArrowDownRight } from '@phosphor-icons/react'
import type { ReactNode } from 'react'


interface SectionTitleProps {
  id: string
  /** The big lowercase word: "work". */
  children: ReactNode
  /** Spread across the width in caps under the word: what's in here. */
  descriptors?: string[]
  /** The bracket row under it: left label, right count. */
  meta?: ReactNode
  metaAside?: ReactNode
  className?: string
}

/** Snask-style section opener: one huge lowercase word, an arrow, caps spread under it, a bracket row. */
export function SectionTitle({ id, children, descriptors, meta, metaAside, className }: SectionTitleProps) {
  return (
    <header className={className}>
      <div className="flex items-start justify-between gap-6">
        <h2 id={id} className="type-display text-display-xl">
          {children}
        </h2>
        <ArrowDownRight aria-hidden weight="light" className="mt-[0.15em] size-[clamp(2rem,1.2rem+3vw,4.5rem)] shrink-0" />
      </div>
      {descriptors && (
        <p className="mt-4 flex flex-wrap justify-between gap-x-6 gap-y-1 font-sans text-[clamp(1rem,0.82rem+0.8vw,1.5rem)] leading-tight font-medium tracking-[-0.01em] uppercase">
          {descriptors.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </p>
      )}
      {(meta || metaAside) && (
        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-dotted border-ink/60 pb-3">
          <span>{meta}</span>
          <span>{metaAside}</span>
        </div>
      )}
    </header>
  )
}
