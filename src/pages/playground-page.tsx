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
        title="Things I build while learning to code."
        lead={
          <>
            <p>Small tools and experiments from my frontend studies. Some are finished, some are still just an idea.</p>
            <p className="mt-4 text-ink-muted">You can try the live ones right here on the page.</p>
          </>
        }
        aside={<PlaygroundStatusLegend />}
      />
      <PlaygroundList items={visiblePlayground} />
      <SectionContact />
    </>
  )
}
