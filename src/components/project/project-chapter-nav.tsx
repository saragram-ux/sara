import type { CaseSection } from '@/data/types'
import { cn } from '@/lib/utils'

/** The sticky chapter index beside a case study (desktop only). */
export function ProjectChapterNav({ chapters, active }: { chapters: CaseSection[]; active: string }) {
  return (
    <nav aria-label="Sections" className="hidden lg:col-span-2 lg:block">
      <ol className="sticky top-sticky grid gap-1.5">
        {chapters.map((chapter, i) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={cn(
                'flex items-baseline gap-3 py-0.5 type-label transition-colors',
                active === chapter.id ? 'text-ink' : 'text-ink-faint hover:text-ink-muted',
              )}
            >
              <span className={cn('tabular-nums', active === chapter.id && 'text-accent')}>{String(i + 1).padStart(2, '0')}</span>
              {chapter.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
