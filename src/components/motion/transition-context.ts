import { createContext, useContext } from 'react'

export interface TransitionContextValue {
  /** Navigate with the page-turn transition (or a smooth scroll, for in-page anchors). */
  go: (to: string) => void
}

export const TransitionContext = createContext<TransitionContextValue | null>(null)

export function usePageTransition() {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('usePageTransition must be used inside <PageTransition>')
  return ctx
}
