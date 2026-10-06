import { createContext, useContext } from 'react'

import type { Theme } from '@/hooks/use-theme'

export interface SiteContextValue {
  grid: boolean
  toggleGrid: () => void
  openCommand: () => void
  theme: Theme
  toggleTheme: () => void
}

export const SiteContext = createContext<SiteContextValue | null>(null)

export function useSite() {
  const ctx = useContext(SiteContext)
  if (!ctx) throw new Error('useSite must be used inside <SiteLayout>')
  return ctx
}
