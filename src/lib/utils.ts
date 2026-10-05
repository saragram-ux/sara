import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * tailwind-merge needs to know the custom design tokens, otherwise it mistakes
 * a font size like `text-nano` for a colour and drops it when merging classes.
 * Keep these lists in sync with the @theme block in styles/globals.css.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['nano', 'micro', 'meta', 'small', 'body', 'lead', 'title', 'display-sm', 'display-md', 'display-lg', 'display-xl'],
      spacing: ['gutter', 'header', 'sticky', 'section', 'block-gap', 'entry', 'page-top', 'inset', 'nudge'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** '2026-10' → 'Oct 2026' */
export function formatMonth(yyyyMm: string) {
  const [y, m] = yyyyMm.split('-').map(Number)
  return new Date(y, m - 1, 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

export const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href)
