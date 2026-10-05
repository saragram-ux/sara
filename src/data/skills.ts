import type { SkillGroup, SkillLevel } from './types'

/**
 * Honest stack. Move things from `exploring` → `building` → `fluent`
 * as they become true.
 */
export const skillLevels: Record<SkillLevel, { label: string; description: string }> = {
  fluent: { label: 'Daily', description: 'Years of client work' },
  building: { label: 'Building', description: 'Using it, getting better' },
  exploring: { label: 'Exploring', description: 'Early days, poking at it' },
}

export const skills: SkillGroup[] = [
  {
    label: 'Design',
    items: [
      { name: 'UI design', level: 'fluent' },
      { name: 'UX design', level: 'fluent' },
      { name: 'Product design', level: 'fluent' },
      { name: 'Design systems', level: 'fluent' },
      { name: 'Brand identity', level: 'fluent' },
      { name: 'Prototyping', level: 'fluent' },
      { name: 'Research & workshops', level: 'fluent' },
      { name: 'Figma', level: 'fluent' },
    ],
  },
  {
    label: 'Build',
    items: [
      { name: 'Webflow', level: 'fluent' },
      { name: 'HTML', level: 'fluent' },
      { name: 'CSS', level: 'fluent' },
      { name: 'JavaScript', level: 'building' },
      { name: 'TypeScript', level: 'building' },
      { name: 'React', level: 'building' },
      { name: 'Vite', level: 'building' },
      { name: 'Tailwind CSS', level: 'building' },
    ],
  },
  {
    label: 'Backend & data',
    items: [
      { name: 'Express', level: 'exploring' },
      { name: 'SQLite', level: 'exploring' },
      { name: 'PostgreSQL', level: 'exploring' },
      { name: 'Supabase', level: 'exploring' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', level: 'building' },
      { name: 'GitHub', level: 'building' },
      { name: 'VS Code', level: 'building' },
      { name: 'Shopify', level: 'fluent' },
    ],
  },
]
