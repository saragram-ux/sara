import { StatusDot } from '@/components/common/status-dot'
import { careerPath } from '@/data/profile'

/**
 * Graphic design → UX/UI → Webflow → frontend, as a ruled timeline.
 * data-hero attributes are animation hooks for SectionHero's entrance.
 */
export function CareerPath() {
  return (
    <div>
      <div data-hero="rule" className="divider bg-ink" />
      <ol aria-label="Path so far" className="grid grid-cols-2 gap-x-gutter gap-y-5 pt-4 md:grid-cols-4">
        {careerPath.map((step, i) => {
          const current = 'current' in step && step.current
          return (
            <li key={step.year} data-hero="step" className="flex flex-col gap-1">
              <span className="flex items-center gap-2 type-label text-ink-muted tabular-nums">
                {step.year}
                {i < careerPath.length - 1 ? (
                  <span aria-hidden className="text-ink-faint">
                    →
                  </span>
                ) : (
                  <StatusDot tone="accent" />
                )}
              </span>
              <span className={current ? 'text-small text-accent-ink' : 'text-small'}>
                {step.label}
                {current && <span className="text-ink-muted"> — in progress</span>}
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
