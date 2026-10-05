import type { NowItem } from './types'

/**
 * The "Currently" panel. Edit freely — it's meant to change often.
 * Bump `updated` when you do.
 */
export const now = {
  updated: '2026-10',
  items: [
    { verb: 'Studying', what: 'Front End Development', detail: 'EC Utbildning, YH' },
    { verb: 'Running', what: 'Handsdown Studio', detail: 'Co-founder' },
    { verb: 'Building', what: 'Small React experiments', detail: 'See playground' },
    { verb: 'Learning', what: 'TypeScript', detail: 'Types first, then everything else' },
    { verb: 'Exploring', what: 'Supabase & PostgreSQL', detail: 'Data, finally' },
    { verb: 'Making', what: 'Interfaces', detail: 'Always' },
  ] satisfies NowItem[],
}
