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
    client: 'MYO — Make Your Own',
    via: 'Hellofolk',
    year: '2021—2024',
    role: 'Product Designer',
    location: 'Åre, Sweden',
    disciplines: ['UI design', 'Brand', 'Webflow', 'Design system'],
    summary: 'Identity, online store and community platform for a craft brand in Åre.',
    description:
      'Working through Hellofolk, I led UI design, brand work and Webflow development for MYO. A visual identity that holds up across Shopify, Webflow and social, a redesigned store, and a new community platform: built on research, shaped in workshops, held together by a design system.',
    tools: ['Figma', 'Webflow', 'Shopify'],
    plate: { mark: 'MYO', icon: Needle, tone: 'sand' },
    status: 'shipped',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        title: 'Part shop, part learning space, part community.',
        body: [
          'MYO — Make Your Own — sits somewhere between a store, a school and a club. I worked with them from 2021 to 2024 through Hellofolk, leading UI design, brand work and Webflow development.',
        ],
        notes: { label: 'Scope', items: ['Visual identity refresh', 'Store experience', 'Community platform', 'Design system'] },
        figure: { alt: 'MYO overview', caption: 'MYO across store, community and social' },
      },
      {
        id: 'brief',
        label: 'The brief',
        title: 'Grow up without losing the handmade feel.',
        body: [
          'The identity needed to work across Shopify, Webflow and social — without losing the handmade feel that makes MYO what it is.',
        ],
      },
      {
        id: 'thinking',
        label: 'Thinking',
        title: 'Research and workshops first.',
        body: [
          'The work started with user research and workshops, so the decisions about the store and the community platform came from the people who would use them.',
        ],
        notes: { label: 'Methods', items: ['User research', 'Workshops'] },
      },
      {
        id: 'design',
        label: 'Design',
        title: 'A store, a community, one system.',
        body: [
          'I redesigned the store experience and helped shape a new community platform. Underneath both sits a scalable design system.',
        ],
        figure: { alt: 'MYO store redesign', caption: 'Store experience' },
      },
      {
        id: 'build',
        label: 'Build',
        title: 'Designed and built by the same person.',
        body: [
          'I did the Webflow development alongside the UI — design and build in the same hands.',
        ],
        notes: { label: 'Built with', items: ['Webflow', 'Shopify', 'Figma'] },
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
    summary: 'Brand, UI components and a Webflow site while the product changed direction.',
    description:
      'Working through Hellofolk, I joined Coly while the product strategy was being narrowed. I handled the visual and UI side: extending the brand, building out UI components, and designing and building the landing page in Webflow.',
    tools: ['Figma', 'Webflow'],
    plate: { mark: 'Coly', icon: Compass, tone: 'paper' },
    status: 'shipped',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        title: 'Joining mid-turn.',
        body: [
          'I came in during a period of refocus. While the product strategy was being narrowed, someone needed to own the visual and UI side — that was me, for most of 2021.',
        ],
        notes: { label: 'Scope', items: ['Brand extension', 'UI components', 'Landing page'] },
        figure: { alt: 'Coly overview', caption: 'Coly, 2021' },
      },
      {
        id: 'problem',
        label: 'The problem',
        title: 'Make the outside match the new product.',
        body: [
          'When a product changes direction, the outside lags behind. The job was to make sure what Coly communicated externally matched where the product was actually heading.',
        ],
      },
      {
        id: 'design',
        label: 'Design',
        title: 'Extend the brand, then build the parts.',
        body: ['I extended the existing brand and built out a set of UI components to carry it into the product.'],
        figure: { alt: 'Coly UI components', caption: 'UI components' },
      },
      {
        id: 'build',
        label: 'Build',
        title: 'Designed it, then built it.',
        body: ['I designed the landing page and built it in Webflow.'],
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
    summary: 'My studio. Brands, websites and products, designed in Figma and built in Webflow.',
    description:
      'We started Handsdown because we kept seeing good teams slowed down by design that was hard to work with. I do the design and the Webflow development.',
    tools: ['Figma', 'Webflow'],
    plate: { mark: 'Hd', icon: Hand, tone: 'ink' },
    status: 'ongoing',
    sections: [
      {
        id: 'why',
        label: 'Why',
        title: 'Too much process, too many layers.',
        body: [
          'Good teams kept getting slowed down by design that was hard to work with: too much process, too many layers. Handsdown has fewer of both.',
        ],
      },
      {
        id: 'how',
        label: 'How',
        title: 'Design and build, one person.',
        body: [
          'We make brands, websites and products. I do the design and the Webflow build, so there is no handoff in between.',
        ],
        notes: { label: 'Practice', items: ['Figma', 'Webflow', 'Fully remote', 'No ceremony'] },
        figure: { alt: 'Handsdown Studio', caption: 'Handsdown Studio' },
      },
      {
        id: 'work',
        label: 'Selected studio work',
        draft: true,
        body: ['Add Handsdown projects here once they can be shown publicly.'],
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
    summary: 'Early-stage startup building an all-in-one calendar, task and email app.',
    description:
      'An early-stage startup building an all-in-one calendar, task and email app — 100k+ downloads globally and part of SUP46. I contributed to wireframes, prototyping and UX/UI design.',
    tools: ['Wireframes', 'Prototypes'],
    plate: { mark: 'Sd', icon: CalendarDots, tone: 'paper' },
    status: 'archived',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        title: 'Calendar, tasks and email in one place.',
        body: [
          'Simpliday was an early-stage startup with an ambitious idea: one app for your calendar, your tasks and your email. It went on to reach 100k+ downloads globally and was part of the SUP46 startup community.',
        ],
        notes: { label: 'Context', items: ['Early stage', '100k+ downloads', 'SUP46'] },
      },
      {
        id: 'role',
        label: 'My part',
        title: 'Wireframes, prototypes, UX/UI.',
        body: [
          'Over the summer of 2018 in Malmö, I contributed to wireframes, prototyping and UX/UI design.',
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
