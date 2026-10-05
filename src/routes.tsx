import { type ComponentType, lazy } from 'react'
import { Route, Switch } from 'wouter'

import Home from '@/pages/Home'

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

const project = lazyPage(() => import('@/pages/Project'))
const playground = lazyPage(() => import('@/pages/Playground'))
const about = lazyPage(() => import('@/pages/About'))
const notFound = lazyPage(() => import('@/pages/NotFound'))

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
      <Route path="/" component={Home} />
      <Route path="/work/:slug" component={project.Page} />
      <Route path="/playground" component={playground.Page} />
      <Route path="/about" component={about.Page} />
      <Route component={notFound.Page} />
    </Switch>
  )
}
