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
  /** Lines lifted from my own profile text — the voice of the site. */
  voice: {
    motto: 'Details matter to me, but never more than momentum.',
    problem:
      'Good teams slowed down by design that was hard to work with. Too much process, too many layers, not enough just… getting it done.',
    approach:
      'I slot into your team, get up to speed fast, and focus on making things clearer. For your users, your product, and the people building it.',
    tools: 'Figma and Webflow, fully remote. No ceremony.',
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
