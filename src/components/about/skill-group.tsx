import { skillLevels } from '@/data/skills'
import type { SkillGroup as SkillGroupData } from '@/data/types'
import { cn } from '@/lib/utils'
import { skillLevelGlyph } from './skill-level'

/** One column of the stack: a heading and its tools, each marked with how at-home I am. */
export function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <>
      <h3 className="border-t border-ink pt-3 type-label">{group.label}</h3>
      <ul className="mt-4 grid gap-1.5">
        {group.items.map((skill) => (
          <li key={skill.name} className="flex items-baseline gap-2.5 text-small">
            {/* glyph size is optical: the marks read as dots, not letters */}
            <span aria-hidden className={cn('w-3 shrink-0 font-mono text-[0.7rem]', skill.level === 'fluent' ? 'text-ink' : 'text-ink-muted')}>
              {skillLevelGlyph[skill.level]}
            </span>
            <span className={skill.level === 'exploring' ? 'text-ink-muted' : ''}>{skill.name}</span>
            <span className="sr-only">({skillLevels[skill.level].label})</span>
          </li>
        ))}
      </ul>
    </>
  )
}
