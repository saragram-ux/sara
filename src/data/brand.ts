/**
 * sara lou — the public name. Sara Gramstad — the person. See BRAND.md.
 * The name stands on its own; nothing on the site explains it.
 */
export const brand = {
  name: 'sara lou',
  person: 'Sara Gramstad',
  /** the technical half of the lockup: sara lou / UI / PRODUCT / FRONTEND */
  descriptor: 'UI / Product / Frontend',
  country: 'Sweden',
} as const

/** Three-digit index: 1 → '001'. The site is numbered like an archive. */
export const pad3 = (n: number) => String(n).padStart(3, '0')

/** 'WORK / 001' for the first project (0-based index in). */
export const workIndex = (i: number) => `Work / ${pad3(i + 1)}`

/** "About" → "About · sara lou — Sara Gramstad". No argument: the home page title. */
export function pageTitle(page?: string) {
  const site = `${brand.name} — ${brand.person}`
  return page ? `${page} · ${site}` : `${site} · ${brand.descriptor}`
}
