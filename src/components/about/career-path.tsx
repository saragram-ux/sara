import { careerPath, careerPathEnd } from '@/data/profile'
import { cn } from '@/lib/utils'

/** A diagram node: an ink dot inside a ring. Open (no dot) for a point not reached yet. */
function Node({ open = false, className }: { open?: boolean; className?: string }) {
  return (
    <span aria-hidden className={cn('relative z-10 grid size-[15px] place-items-center rounded-full border-[1.5px] border-ink bg-paper', className)}>
      {!open && <span className="size-[7px] rounded-full bg-ink" />}
    </span>
  )
}

/** How far through the current step today is, 0–1. */
function progressNow() {
  const now = new Date()
  const t = now.getFullYear() + now.getMonth() / 12
  const { startYear, year } = careerPathEnd
  return Math.min(1, Math.max(0, (t - startYear) / (year - startYear)))
}

/**
 * Graphic design → UX/UI → Webflow → frontend, drawn as a line with nodes.
 * The last step is still running, so its pipe is "live" and ends in an open node at 2028,
 * with the status LED at today's position. Horizontal from md, a vertical rail below.
 * data-hero attributes are animation hooks for SectionHero's entrance.
 */
export function CareerPath() {
  const last = careerPath.length - 1
  return (
    <ol aria-label="Path so far" className="grid grid-cols-1 gap-y-7 md:grid-cols-4 md:gap-x-gutter">
      {careerPath.map((step, i) => {
        const current = i === last
        return (
          <li
            key={step.year}
            className={cn('relative pl-9 md:pt-9 md:pl-0', current && 'pb-24 md:pb-0')}
            style={current ? ({ '--f': progressNow() } as React.CSSProperties) : undefined}
          >
            <Node className="absolute top-0.5 left-0 md:top-0" />

            {/* the line on to the next node */}
            {!current && (
              <span
                data-hero="pipe"
                aria-hidden
                className="pipe absolute top-2 left-[5.5px] h-[calc(100%_+_1.75rem)] w-1 md:top-[5.5px] md:left-2 md:h-1 md:w-[calc(100%_+_var(--gutter))]"
              />
            )}

            {/* still running: a live pipe to an open node at the end year, with the LED at today */}
            {current && (
              <>
                <span
                  data-hero="pipe"
                  aria-hidden
                  className="pipe-live absolute top-2 bottom-2 left-[4.5px] w-1.5 md:top-[4.5px] md:right-2 md:bottom-auto md:left-2 md:h-1.5 md:w-auto"
                />
                <Node open className="absolute bottom-0 left-0 md:top-0 md:right-0 md:bottom-auto md:left-auto" />
                <span
                  data-hero="step"
                  className="absolute bottom-0.5 left-9 type-label text-ink-muted tabular-nums md:-top-6 md:right-0 md:bottom-auto md:left-auto"
                >
                  {careerPathEnd.year}
                </span>
                <span
                  data-hero="step"
                  aria-hidden
                  className="absolute top-[calc(4.5rem_+_var(--f)_*_(100%_-_6.5rem))] left-[3px] flex items-center gap-2 md:-top-[1px] md:left-[calc(0.5rem_+_var(--f)_*_(100%_-_1rem))]"
                >
                  <span className="relative z-10 size-[9px] animate-pulse-dot border border-ink bg-accent" />
                  <span className="type-label md:absolute md:-top-6 md:left-1/2 md:-translate-x-1/2">now</span>
                </span>
              </>
            )}

            <span data-hero="step" className="flex flex-col gap-1">
              <span className="type-label text-ink-muted tabular-nums">{step.year}</span>
              <span className="text-small">
                {step.label}
                {current && <span className="text-ink-muted"> — in progress</span>}
              </span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}
