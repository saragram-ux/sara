import { CalendarDots, Compass, Hand, Needle } from '@phosphor-icons/react'
import type { Project } from './types'

/**
 * Selected work. Order here = order on the site.
 *
 * Everything below is taken from my profile. Sections marked `draft: true`
 * only show in development — they're prompts for things I haven't written
 * yet (outcomes, learnings). Add images by giving a figure a `src`
 * (drop files in /public/work/<slug>/).
 */
export const projects: Project[] = [
  {
    slug: 'myo',
    title: 'MYO',
    client: 'Make Your Own',
    via: 'Hellofolk',
    year: '2021—2024',
    role: 'Product Designer',
    location: 'Åre, Sweden',
    disciplines: ['UI design', 'Brand', 'Webflow', 'Design system'],
    summary: 'A craft brand in Åre. Identity, online store and a community platform, built in Webflow.',
    description:
      'Through Hellofolk, I did the UI, the brand work and the Webflow build for MYO. One identity that works on Shopify, Webflow and social, a new store and a community platform. It started with research and workshops, and a design system holds it all together.',
    tools: ['Figma', 'Webflow'],
    plate: { mark: 'MYO', icon: Needle, tone: 'sand' },
    status: 'shipped',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        title: 'Part shop, part learning space, part community.',
        body: [
          'Make Your Own (MYO) is a shop, a place to learn and a community, all in one. I worked with them from 2021 to 2024 through Hellofolk, on the UI, the brand and the Webflow build.',
        ],
        notes: { label: 'Scope', items: ['Visual identity refresh', 'Store experience', 'Community platform', 'Design system'] },
        figure: { alt: 'MYO overview', caption: 'MYO across store, community and social' },
      },
      {
        id: 'brief',
        label: 'The brief',
        title: 'Growing, without losing the handmade feel.',
        body: [
          'The identity had to work on Shopify, Webflow and social, and still feel handmade, since that’s what MYO is about.',
        ],
      },
      {
        id: 'thinking',
        label: 'Thinking',
        title: 'Ask first, design second.',
        body: [
          'It started with user research and workshops, so the store and the community platform were shaped by the people who’d actually use them, not by guesses.',
        ],
        notes: { label: 'Methods', items: ['User research', 'Workshops'] },
      },
      {
        id: 'design',
        label: 'Design',
        title: 'A store, a community, one system.',
        body: [
          'I redesigned the store and helped shape the new community platform. Underneath both: one design system, so it all stays consistent as it grows.',
        ],
        figure: { alt: 'MYO store redesign', caption: 'Store experience' },
      },
      {
        id: 'build',
        label: 'Build',
        title: 'Built in Webflow.',
        body: [
          'I also built it in Webflow, so the design and the build stayed close together.',
          'The store runs on Shopify. I designed it and worked with a development team who built it.',
        ],
        notes: { label: 'Built with', items: ['Webflow', 'Figma'] },
        figure: { alt: 'MYO design system components', caption: 'Design system, in use' },
      },
      {
        id: 'outcome',
        label: 'Outcome',
        draft: true,
        body: ['What changed for MYO? Only add outcomes I can stand behind — quotes, launches, numbers they shared.'],
      },
      {
        id: 'learned',
        label: 'What I learned',
        draft: true,
        body: ['One or two honest sentences. What would I do differently with three years of hindsight?'],
      },
    ],
  },
  {
    slug: 'coly',
    title: 'Coly',
    client: 'Coly',
    via: 'Hellofolk',
    year: '2021',
    role: 'UX/UI Designer',
    location: 'Stockholm, Sweden',
    disciplines: ['UI design', 'Brand', 'UI components', 'Webflow'],
    summary: 'An app for finding a roommate. Brand, UI components and a Webflow landing page.',
    description:
      'Through Hellofolk, I joined Coly while the product was finding its focus. I took the visual and UI side: stretched the brand, built out the UI components, and designed and built the landing page in Webflow.',
    tools: ['Figma', 'Webflow'],
    plate: { mark: 'Coly', icon: Compass, tone: 'paper' },
    status: 'shipped',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        title: 'Joining during a change of direction.',
        body: [
          'Coly does roommate matching. I came in while they were narrowing down what the product actually was, and someone had to own the visual and UI side in the meantime. For most of 2021, that was me.',
        ],
        notes: { label: 'Scope', items: ['Brand extension', 'UI components', 'Landing page'] },
        figure: { alt: 'Coly overview', caption: 'Coly, 2021' },
      },
      {
        id: 'problem',
        label: 'The problem',
        title: 'Making the brand match the product.',
        body: [
          'When a product changes direction, the brand and the website often lag behind. My job was to make what Coly said on the outside match where the product was actually going.',
        ],
      },
      {
        id: 'design',
        label: 'Design',
        title: 'Extend the brand, then build the parts.',
        body: ['I stretched the existing brand and built a set of UI components to carry it into the product.'],
        figure: { alt: 'Coly UI components', caption: 'UI components' },
      },
      {
        id: 'build',
        label: 'Build',
        title: 'Designed it, then built it.',
        body: ['I designed the landing page, then built it in Webflow myself.'],
        notes: { label: 'Built with', items: ['Webflow', 'Figma'] },
        figure: { alt: 'Coly landing page', caption: 'Landing page, built in Webflow' },
      },
      {
        id: 'learned',
        label: 'What I learned',
        draft: true,
        body: ['What did designing for a moving target teach me?'],
      },
    ],
  },
  {
    slug: 'handsdown',
    title: 'Handsdown',
    client: 'Handsdown Studio',
    year: '2025—now',
    role: 'Co-founder & Product Designer',
    location: 'Sweden · Remote',
    disciplines: ['Product design', 'Brand', 'Websites', 'Webflow'],
    summary: 'The studio I run with Daniel. Brands, websites and products, made by the two of us.',
    description:
      'Handsdown is me and Daniel. We’re basically your in-house designers, but without the stress. I do the design and the Webflow build.',
    tools: ['Figma', 'Webflow'],
    plate: { mark: 'Hd', icon: Hand, tone: 'ink' },
    status: 'ongoing',
    sections: [
      {
        id: 'why',
        label: 'Why',
        title: 'We don’t do the agency thing.',
        body: [
          'We kept seeing good teams slowed down by design that was hard to work with: too much process, too many layers. So it’s just the two of us. You tell us what’s up, and we move.',
        ],
      },
      {
        id: 'how',
        label: 'How',
        title: 'We slot in where your work happens.',
        body: [
          'Your work already lives in Notion, Figma and Slack. We join you there, skip the “can we jump on a call?” and send back something that actually helps. I do the design and the Webflow build, so nothing gets lost in between.',
        ],
        notes: { label: 'Practice', items: ['Figma', 'Webflow', '100% remote', 'Async'] },
        figure: { alt: 'Handsdown Studio', caption: 'Handsdown Studio' },
      },
      {
        id: 'work',
        label: 'Selected studio work',
        title: 'Stuff we made.',
        body: [
          'Brand and website for Minc, the startup house of Malmö, and for Perfect Event. More on handsdown.studio.',
        ],
        notes: { label: 'Studio work', items: ['Minc — brand + web', 'Perfect Event — brand + web'] },
      },
    ],
    links: [{ label: 'handsdown.studio', href: 'https://handsdown.studio' }],
  },
  {
    slug: 'simpliday',
    title: 'Simpliday',
    client: 'Simpliday',
    year: '2018',
    role: 'UX Designer',
    location: 'Malmö, Sweden',
    disciplines: ['UX design', 'Wireframes', 'Prototyping'],
    summary: 'An app for calendar, tasks and email. I worked on wireframes and prototypes.',
    description:
      'An early-stage startup with a big idea: calendar, tasks and email in one app. It reached 100k+ downloads and was part of SUP46. I worked on wireframes, prototypes and UX/UI.',
    tools: ['Wireframes', 'Prototypes'],
    plate: { mark: 'Sd', icon: CalendarDots, tone: 'paper' },
    status: 'archived',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        title: 'Calendar, tasks and email. One app.',
        body: [
          'Simpliday had a big idea for a small team: one app for your calendar, your tasks and your email. It went on to 100k+ downloads worldwide and was part of the SUP46 startup community.',
        ],
        notes: { label: 'Context', items: ['Early stage', '100k+ downloads', 'SUP46'] },
      },
      {
        id: 'role',
        label: 'My part',
        title: 'Wireframes, prototypes, UX/UI.',
        body: [
          'Summer 2018, Malmö. I worked on wireframes, prototypes and UX/UI design.',
        ],
        figure: { alt: 'Simpliday wireframes', caption: 'Wireframes and prototypes' },
      },
    ],
  },
]

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug)

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}
