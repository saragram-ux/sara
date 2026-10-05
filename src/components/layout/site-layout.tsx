import { lazy, Suspense, useCallback, useMemo, useState } from 'react'
import { Router } from 'wouter'

import { PageTransition } from '@/components/motion/page-transition'
import { SkipLink } from '@/components/navigation/skip-link'
import { useHotkey } from '@/hooks/use-hotkey'
import { BASE } from '@/lib/base'
import { SiteContext } from '@/lib/site-context'
import { AppRoutes } from '@/routes'
import { GridOverlay } from './grid-overlay'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

const CommandMenu = lazy(() => import('@/components/navigation/command-menu'))

/**
 * The frame around every page: header, the current page, footer,
 * plus site-wide extras (page transitions, grid overlay, ⌘K menu).
 */
export function SiteLayout() {
  const [grid, setGrid] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [commandLoaded, setCommandLoaded] = useState(false)

  const toggleGrid = useCallback(() => setGrid((g) => !g), [])
  const openCommand = useCallback(() => {
    setCommandLoaded(true)
    setCommandOpen(true)
  }, [])

  useHotkey('g', toggleGrid)
  useHotkey(
    'k',
    (e) => {
      e.preventDefault()
      if (commandOpen) setCommandOpen(false)
      else openCommand()
    },
    { mod: true },
  )

  const site = useMemo(() => ({ grid, toggleGrid, openCommand }), [grid, toggleGrid, openCommand])

  return (
    <Router base={BASE}>
      <SiteContext.Provider value={site}>
        <PageTransition>
          <SkipLink />
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            <Suspense fallback={<div className="min-h-dvh" />}>
              <AppRoutes />
            </Suspense>
          </main>
          <SiteFooter />
          {grid && <GridOverlay />}
          {commandLoaded && (
            <Suspense fallback={null}>
              <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
            </Suspense>
          )}
        </PageTransition>
      </SiteContext.Provider>
    </Router>
  )
}
