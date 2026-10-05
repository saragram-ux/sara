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
      'Same distance, same duration, different curve. A small tool for feeling the difference between eases before choosing one.',
    stack: ['React', 'TypeScript', 'GSAP'],
    status: 'live',
    date: '2026-10',
    embed: 'easing-lab',
  },
  {
    id: '003',
    title: 'Type specimen',
    description:
      'The site’s type scale rendered from its own design tokens. Change a token in CSS and the specimen updates — documentation that can’t go out of date.',
    stack: ['CSS custom properties', 'Tailwind CSS', 'React'],
    status: 'live',
    date: '2026-10',
    embed: 'type-specimen',
  },
  {
    id: '002',
    title: 'Layout grid',
    description:
      'A 4 / 8 / 12 column grid that every page snaps to. Press G anywhere on the site to see it. Designers have guides in Figma; this is the same thing, in the browser.',
    stack: ['CSS Grid', 'React'],
    status: 'live',
    date: '2026-10',
    embed: 'grid',
  },
  {
    id: '001',
    title: 'This portfolio',
    description:
      'Built from scratch with React and TypeScript. Typed content, a small token-based design system, a numbered index.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GSAP', 'Radix'],
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
