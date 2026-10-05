import { lazy, Suspense, useCallback, useMemo, useState } from 'react'
import { Router } from 'wouter'

import { PageTransition } from '@/components/motion/PageTransition'
import { Contact } from '@/components/sections/Contact'
import { useHotkey } from '@/hooks/useHotkey'
import { BASE } from '@/lib/base'
import { SiteContext } from '@/lib/site-context'
import { AppRoutes } from '@/routes'
import { GridOverlay } from './GridOverlay'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

const CommandMenu = lazy(() => import('@/components/navigation/CommandMenu'))

export function RootLayout() {
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

  const skipToContent = () => {
    const main = document.getElementById('main')
    main?.focus()
    main?.scrollIntoView()
  }

  return (
    <Router base={BASE}>
    <SiteContext.Provider value={site}>
        <PageTransition>
          <button
            type="button"
            onClick={skipToContent}
            className="fixed top-2 left-2 z-[100] -translate-y-20 rounded-sm bg-ink px-3 py-2 label-mono text-paper-raised focus:translate-y-0"
          >
            Skip to content
          </button>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            <Suspense fallback={<div className="min-h-dvh" />}>
              <AppRoutes />
            </Suspense>
          </main>
          <Contact />
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
