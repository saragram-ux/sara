import type { NowItem } from './types'

/**
 * The currently board — a little status board, not a CV. Lowercase on purpose.
 * Edit freely; bump `updated` when you do. The first item also shows in the footer.
 */
export const currently: { updated: string; items: NowItem[] } = {
  updated: '2026-10',
  items: [
    { verb: 'learning', what: 'typescript' },
    { verb: 'building', what: 'small things in react' },
    { verb: 'using', what: 'react + vite' },
    { verb: 'studying', what: 'front end development' },
    { verb: 'running', what: 'handsdown studio' },
    { verb: 'exploring', what: 'supabase + postgresql' },
    { verb: 'thinking about', what: 'clearer interfaces' },
  ],
}
