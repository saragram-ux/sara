import type { Pastel } from '@/lib/pastel'

/** Each page has its pastel: the active nav pill is filled with it. */
export const navigation: readonly { label: string; href: string; tone: Pastel }[] = [
  { label: 'Work', href: '/#work', tone: 'lavender' },
  { label: 'Playground', href: '/playground', tone: 'taffy' },
  { label: 'About', href: '/about', tone: 'peach' },
  { label: 'Contact', href: '#contact', tone: 'peach' },
]

export const isNavActive = (href: string, pathname: string) => {
  if (href.startsWith('#')) return false
  if (href === '/#work') return pathname.startsWith('/work')
  return pathname === href || pathname.startsWith(`${href}/`)
}
