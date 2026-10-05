export const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Playground', href: '/playground' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' },
] as const

export const isNavActive = (href: string, pathname: string) => {
  if (href.startsWith('#')) return false
  if (href === '/#work') return pathname.startsWith('/work')
  return pathname === href || pathname.startsWith(`${href}/`)
}
