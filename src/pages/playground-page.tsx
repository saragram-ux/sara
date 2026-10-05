import { PageHeader } from '@/components/layout/page-header'
import { PlaygroundList } from '@/components/playground/playground-list'
import { PlaygroundStatusLegend } from '@/components/playground/playground-status-legend'
import { pageTitle } from '@/data/brand'
import { visiblePlayground } from '@/data/playground'
import { SectionContact } from '@/sections/section-contact'

/** /playground — the lab notebook. */
export default function PlaygroundPage() {
  return (
    <>
      <title>{pageTitle('Playground')}</title>
      <PageHeader
        eyebrow={
          <>
            <span>Playground</span>
            <span className="tabular-nums">001 — {visiblePlayground[0]?.id ?? '000'}</span>
          </>
        }
        title={
          <>
            Small things. Big rabbit <em>holes.</em>
          </>
        }
        lead={
          <>
            <p>Experiments, tools and exercises from studying frontend development. Some of it works. Some of it is an idea.</p>
            <p className="mt-4 text-ink-muted">The live ones run right here on the page — no screenshots.</p>
          </>
        }
        aside={<PlaygroundStatusLegend />}
      />
      <PlaygroundList items={visiblePlayground} />
      <SectionContact />
    </>
  )
}
