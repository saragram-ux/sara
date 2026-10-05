export const navigation = [
  { label: 'work', href: '/#work' },
  { label: 'playground', href: '/playground' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '#contact' },
] as const

export const isNavActive = (href: string, pathname: string) => {
  if (href.startsWith('#')) return false
  if (href === '/#work') return pathname.startsWith('/work')
  return pathname === href || pathname.startsWith(`${href}/`)
}
