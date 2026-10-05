/**
 * Who, where, how to reach me. Source: LinkedIn profile export (2026).
 */
export const profile = {
  name: 'Sara Gramstad',
  initials: 'SG',
  titles: ['UI Designer', 'Product Designer', 'Frontend Developer'],
  disciplines: ['UI', 'Product', 'Frontend'],
  location: 'Östersund, Sweden',
  timeZone: 'Europe/Stockholm',
  email: 'sara.gramstad@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sara-gramstad',
  studio: { name: 'Handsdown Studio', role: 'Co-founder' },
  availability: {
    open: true,
    label: 'Open for work',
    detail: 'Freelance + contract',
    reach: 'Remote, across Europe',
  },
  /** The few lines that say how I work. Talk to the reader; if it sounds like LinkedIn, cut it. */
  voice: {
    problem: 'Good teams slowed down by design that was hard to work with. Too much process, too many layers.',
    approach: 'The person who designs it is the person who builds it, so nothing gets lost in a handoff.',
    tools: 'I work where you already work: Figma, Webflow, Notion, Slack. 100% remote.',
  },
} as const

export const languages = [
  { name: 'Swedish', level: 'Native' },
  { name: 'English', level: 'Full professional' },
  { name: 'Norwegian', level: 'Elementary' },
  { name: 'Spanish', level: 'Elementary' },
  { name: 'French', level: 'Elementary' },
] as const

export const certifications = ['Webflow Certificate — Layouts 1 & 2, CMS 1'] as const

/** The path so far, shown under the hero. Dates from the profile. */
export const careerPath = [
  { year: '2015', label: 'Graphic design' },
  { year: '2018', label: 'UX / UI design' },
  { year: '2020', label: 'Webflow development' },
  { year: '2026', label: 'Frontend development', current: true },
] as const
