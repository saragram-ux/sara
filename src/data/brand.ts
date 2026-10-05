/**
 * sara lou — the brand around Sara Gramstad. See BRAND.md for the reasoning.
 * Brand words are lowercase; the person's name is always written in full.
 */
export const brand = {
  name: 'sara lou',
  person: 'Sara Gramstad',
  /** the one-line descriptor, under the name */
  descriptor: 'designer who builds.',
  /** the menu-card description */
  description: 'Interfaces, products & websites. Designed carefully, built properly.',
  /** the small sign-off line, Sara's own "details matter, but never more than momentum" */
  signoff: ['details, yes', 'ceremony, no', 'remote, across europe'],
  /** why the name: shown on the About page */
  nameNote: 'sara lou is short for Sara Louise. It’s what this little corner of the internet is called; Sara Gramstad is who you’ll be working with.',
} as const

/** "About" → "About · sara lou — Sara Gramstad". No argument: the home page title. */
export function pageTitle(page?: string) {
  const site = `${brand.name} — ${brand.person}`
  return page ? `${page} · ${site}` : `${site} · UI, Product & Frontend`
}
