import type { PlaygroundItem } from './types'

/**
 * The lab notebook. Newest first. IDs are just running numbers.
 * Items with `embed` render a live demo from src/components/playground.
 * Items with `draft: true` only show in development.
 */
export const playground: PlaygroundItem[] = [
  {
    id: '004',
    title: 'Easing lab',
    description:
      'Same distance, same duration, different curve. Click around and feel the difference before you pick an ease.',
    stack: ['React', 'TypeScript', 'GSAP'],
    status: 'live',
    date: '2026-10',
    embed: 'easing-lab',
  },
  {
    id: '003',
    title: 'Type specimen',
    description:
      'The site’s type scale, rendered straight from its own design tokens. Change a token and this updates too. Documentation that can’t go out of date.',
    stack: ['CSS custom properties', 'Tailwind CSS', 'React'],
    status: 'live',
    date: '2026-10',
    embed: 'type-specimen',
  },
  {
    id: '002',
    title: 'Layout grid',
    description:
      'The 4 / 8 / 12 column grid everything here snaps to. Press G anywhere to see it. Basically Figma guides, but in the browser.',
    stack: ['CSS Grid', 'React'],
    status: 'live',
    date: '2026-10',
    embed: 'grid',
  },
  {
    id: '001',
    title: 'This portfolio',
    description:
      'Designed and directed by me, coded with Claude Code. I made the calls, it wrote most of the code. Typed content, a small design system, everything numbered.',
    stack: ['Claude Code', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GSAP'],
    status: 'building',
    date: '2026-10',
    // repoUrl: 'https://github.com/saragram-ux/sara', // uncomment once the repo is public
  },
  {
    id: '00X',
    title: 'Supabase experiment',
    description: 'Placeholder — swap for a real React + Supabase/PostgreSQL experiment when one exists.',
    stack: ['React', 'Supabase', 'PostgreSQL'],
    status: 'idea',
    date: '2026-11',
    draft: true,
  },
]

export const visiblePlayground = playground.filter((item) => !item.draft || import.meta.env.DEV)
