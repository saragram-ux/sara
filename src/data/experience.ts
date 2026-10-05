import type { EducationItem, ExperienceItem } from './types'

/** Newest first. Source: LinkedIn profile export (2026). */
export const experience: ExperienceItem[] = [
  {
    company: 'Handsdown Studio',
    role: 'Co-founder & Product Designer',
    start: '2025',
    end: 'now',
    location: 'Sweden · Remote',
    description:
      'Brands, websites and products that are easy to work with. Design and Webflow development, plus freelance and contract work alongside the studio.',
    projectSlug: 'handsdown',
  },
  {
    company: 'Hellofolk',
    role: 'UI Designer & Webflow Developer',
    start: '2020',
    end: '2025',
    location: 'Östersund · Remote',
    description:
      'Designing and building for clients across Europe. UI design and Webflow development, often both at once. Startups and established brands, always hands-on.',
  },
  {
    company: 'MYO — Make Your Own',
    role: 'Product Designer, via Hellofolk',
    start: '2021',
    end: '2024',
    location: 'Åre',
    description: 'Led UI, brand and Webflow development. Identity refresh, store redesign, community platform, design system.',
    projectSlug: 'myo',
  },
  {
    company: 'Coly',
    role: 'UX/UI Designer, via Hellofolk',
    start: '2021',
    end: '2021',
    location: 'Stockholm',
    description: 'Brand extension, UI components and a Webflow landing page during a product refocus.',
    projectSlug: 'coly',
  },
  {
    company: 'Kreation Studio',
    role: 'Founder',
    start: '2018',
    end: '2020',
    location: 'Östersund',
    description: 'Built and ran a small creative studio. Where I learned what it actually takes to make things work.',
  },
  {
    company: 'Simpliday',
    role: 'UX Designer',
    start: '2018',
    end: '2018',
    location: 'Malmö',
    description: 'Wireframes, prototyping and UX/UI for an all-in-one calendar, task and email app.',
    projectSlug: 'simpliday',
  },
  {
    company: 'Malmö Stadsteater',
    role: 'Intern, costume department',
    start: '2011',
    end: '2011',
    location: 'Malmö',
    description: 'One of Sweden’s leading theatres. Detail-oriented, collaborative work.',
    group: 'earlier',
  },
  {
    company: 'Remake Sthlm',
    role: 'Intern',
    start: '2010',
    end: '2010',
    location: 'Stockholm',
    description: 'Early days at what became a well-known sustainable fashion brand.',
    group: 'earlier',
  },
  {
    company: 'Uni Barn',
    role: 'Intern',
    start: '2009',
    end: '2009',
    location: 'Malmö',
    description: 'Designed and sewed accessories sold under the store’s own brand.',
    group: 'earlier',
  },
  {
    company: 'Tjallamalla',
    role: 'Intern',
    start: '2008',
    end: '2008',
    location: 'Malmö',
    description: 'A small independent store for local craftsmanship.',
    group: 'earlier',
  },
]

export const education: EducationItem[] = [
  {
    school: 'EC Utbildning',
    programme: 'Front End Developer (YH), Full Stack Web Development',
    start: '2026',
    end: '2028',
    note: 'In progress',
  },
  {
    school: 'Umeå University',
    programme: 'Innovation & Business Development',
    start: '2020',
    end: '2020',
    note: 'Short course, 7.5 credits',
  },
  {
    school: 'Malmö University',
    programme: 'BA, Graphic Design',
    start: '2015',
    end: '2018',
  },
  {
    school: 'Luleå University of Technology',
    programme: 'Creative Writing — Advanced',
    start: '2018',
    end: '2018',
    note: 'Course',
  },
  {
    school: 'Mälardalen University',
    programme: 'Behavioural Science',
    start: '2012',
    end: '2013',
    note: 'Studied, not completed',
  },
]

export const formatRange = (start: string, end: string) => {
  if (end === 'now') return `${start}—now`
  return start === end ? start : `${start}—${end}`
}
