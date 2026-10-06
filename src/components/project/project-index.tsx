import { ArrowUpRight } from '@phosphor-icons/react'
import { useMemo, useState } from 'react'

import { Bracket } from '@/components/instrument/readout'
import { TransitionLink } from '@/components/navigation/transition-link'
import { pad3 } from '@/data/brand'
import type { Project } from '@/data/types'
import { cn } from '@/lib/utils'

/** Disciplines that more than one project shares — the ones worth filtering by. */
function sharedDisciplines(projects: Project[]) {
  const count = new Map<string, number>()
  for (const p of projects) for (const d of p.disciplines) count.set(d, (count.get(d) ?? 0) + 1)
  return [...count].filter(([, n]) => n > 1).map(([d]) => d)
}

/**
 * The work index, archive-style: filter chips with a live count, then one dotted row per
 * project — number, mark, title, tags, year.
 */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<string | null>(null)
  const filters = useMemo(() => sharedDisciplines(projects), [projects])
  const shown = filter ? projects.filter((p) => p.disciplines.includes(filter)) : projects

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-dotted border-ink/60 py-4">
        <span className="type-label font-medium">Filters</span>
        <ul className="flex flex-1 flex-wrap gap-2" aria-label="Filter by discipline">
          {[null, ...filters].map((f) => {
            const on = filter === f
            return (
              <li key={f ?? 'all'}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'flex cursor-pointer items-center gap-1.5 border px-2 py-1 type-label transition-colors duration-fast',
                    on ? 'border-ink bg-accent text-[#161513]' : 'border-dotted border-ink/60 hover:border-solid hover:border-ink',
                  )}
                >
                  {f ?? 'All'}
                  {on && f && <span aria-hidden>☒</span>}
                </button>
              </li>
            )
          })}
        </ul>
        <span aria-live="polite">
          <Bracket>
            {shown.length} / {projects.length}
          </Bracket>
        </span>
      </div>

      <ol>
        {shown.map((project) => {
          const index = projects.indexOf(project)
          const Icon = project.plate.icon
          return (
            <li key={project.slug} data-reveal className="border-b border-dotted border-ink/60">
              <TransitionLink
                to={`/work/${project.slug}`}
                className="group/row grid grid-cols-[3rem_2.5rem_1fr_auto] items-center gap-x-4 py-4 transition-colors duration-base hover:bg-paper-raised md:grid-cols-[4rem_2.75rem_minmax(0,1fr)_auto_5.5rem_1.5rem] md:py-5"
              >
                <span className="font-mono text-body tabular-nums">{pad3(index + 1)}</span>
                <span aria-hidden className="grid size-9 place-items-center border border-ink bg-paper-raised md:size-10">
                  <Icon weight="light" className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block type-display text-display-sm transition-transform duration-base ease-out-soft group-hover/row:translate-x-nudge">
                    {project.title}
                  </span>
                  <span className="mt-1 block truncate text-small text-ink-muted max-md:hidden">{project.summary}</span>
                </span>
                <span className="hidden flex-wrap justify-end gap-1.5 md:flex">
                  {project.disciplines.slice(0, 2).map((d) => (
                    <span key={d} className={cn('border border-dotted border-ink/60 px-1.5 py-0.5 type-label', d === filter && 'border-solid border-ink bg-accent')}>
                      {d}
                    </span>
                  ))}
                </span>
                <span className="text-right font-mono text-small text-ink-muted tabular-nums">{project.year}</span>
                <ArrowUpRight aria-hidden weight="bold" className="hidden size-4 transition-transform duration-fast group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5 md:block" />
              </TransitionLink>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
