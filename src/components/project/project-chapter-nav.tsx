import type { CaseSection } from '@/data/types'
import { cn } from '@/lib/utils'

/** The sticky chapter index beside a case study (desktop only). */
export function ProjectChapterNav({ chapters, active }: { chapters: CaseSection[]; active: string }) {
  return (
    <nav aria-label="Sections" className="hidden lg:col-span-2 lg:block">
      <ol className="sticky top-sticky grid gap-1">
        {chapters.map((chapter, i) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className={cn(
                'flex items-baseline gap-3 rounded-full border px-3 py-1.5 type-label transition-colors',
                active === chapter.id ? 'border-ink bg-ink text-paper' : 'border-transparent text-ink-muted hover:border-ink/40 hover:text-ink',
              )}
            >
              <span className="tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              {chapter.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
