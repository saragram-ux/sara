import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** '2026-10' → 'Oct 2026' */
export function formatMonth(yyyyMm: string) {
  const [y, m] = yyyyMm.split('-').map(Number)
  return new Date(y, m - 1, 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

export const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href)
