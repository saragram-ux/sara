import { type ComponentType, lazy } from 'react'
import { Route, Switch } from 'wouter'

import HomePage from '@/pages/home-page'

/**
 * A lazily loaded page that renders synchronously once it has been preloaded.
 * The page transition preloads while the screen is covered, so the next page
 * is ready (no Suspense fallback) the moment it's revealed.
 */
function lazyPage(loader: () => Promise<{ default: ComponentType }>) {
  let Loaded: ComponentType | null = null
  let pending: Promise<void> | null = null
  const load = () => (pending ??= loader().then((m) => void (Loaded = m.default)))
  const Lazy = lazy(() => load().then(() => ({ default: Loaded! })))
  const Page = () => (Loaded ? <Loaded /> : <Lazy />)
  return { Page, load }
}

const project = lazyPage(() => import('@/pages/project-page'))
const playground = lazyPage(() => import('@/pages/playground-page'))
const about = lazyPage(() => import('@/pages/about-page'))
const notFound = lazyPage(() => import('@/pages/not-found-page'))

export function preloadRoute(pathname: string): Promise<unknown> {
  if (pathname === '/') return Promise.resolve()
  if (pathname.startsWith('/work/')) return project.load()
  if (pathname === '/playground') return playground.load()
  if (pathname === '/about') return about.load()
  return notFound.load()
}

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/work/:slug" component={project.Page} />
      <Route path="/playground" component={playground.Page} />
      <Route path="/about" component={about.Page} />
      <Route component={notFound.Page} />
    </Switch>
  )
}
