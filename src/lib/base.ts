/**
 * Where the site lives. '/' on Vercel or locally, '/sara' on GitHub Pages.
 * Set at build time with the BASE_PATH env var (see vite.config.ts).
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

/** '/about' → '/sara/about'. Leaves '#hash' and external links alone. */
export const withBase = (path: string) => (path.startsWith('/') ? `${BASE}${path}` : path)
