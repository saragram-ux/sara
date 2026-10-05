import type { ComponentProps } from 'react'

import { skillLevels } from '@/data/skills'
import type { SkillLevel } from '@/data/types'
import { cn } from '@/lib/utils'
import { skillLevelGlyph } from './skill-level'

/** Explains the ● ◐ ○ marks used in the skill groups. */
export function SkillLegend({ className, ...props }: ComponentProps<'ul'>) {
  return (
    <ul aria-label="Legend" className={cn('grid gap-1.5', className)} {...props}>
      {(Object.keys(skillLevels) as SkillLevel[]).map((level) => (
        <li key={level} className="flex items-baseline gap-3 type-meta">
          <span aria-hidden className={cn('w-3', level === 'fluent' ? 'text-ink' : 'text-accent-ink')}>
            {skillLevelGlyph[level]}
          </span>
          <span>{skillLevels[level].label}</span>
          <span className="text-ink-muted">— {skillLevels[level].description}</span>
        </li>
      ))}
    </ul>
  )
}
