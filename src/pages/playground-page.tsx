import { PageHeader } from '@/components/layout/page-header'
import { PlaygroundList } from '@/components/playground/playground-list'
import { PlaygroundStatusLegend } from '@/components/playground/playground-status-legend'
import { visiblePlayground } from '@/data/playground'
import { SectionContact } from '@/sections/section-contact'

/** /playground — the lab notebook. */
export default function PlaygroundPage() {
  return (
    <>
      <title>Playground — Sara Gramstad</title>
      <PageHeader
        eyebrow={
          <>
            <span>Playground</span>
            <span className="tabular-nums">({String(visiblePlayground.length).padStart(2, '0')} entries)</span>
          </>
        }
        title={
          <>
            A lab <em>notebook.</em>
          </>
        }
        lead={
          <>
            <p>What I’m building and learning while I study frontend development. Some of it works. Some of it is an idea.</p>
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
