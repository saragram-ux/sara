import { ArrowLink } from '@/components/common/ArrowLink'
import { PageHeader } from '@/components/common/PageHeader'

export default function NotFound() {
  return (
    <>
      <title>Not found — Sara Gramstad</title>
      <PageHeader
        eyebrow={
          <>
            <span>Error</span>
            <span>404</span>
          </>
        }
        title={
          <>
            Nothing <em>here.</em>
          </>
        }
        lead={
          <>
            <p className="text-ink-muted">This page doesn’t exist — or it moved while I was redesigning things.</p>
            <div className="mt-8">
              <ArrowLink href="/">Back to the index</ArrowLink>
            </div>
          </>
        }
      />
      <div className="h-(--space-block)" />
    </>
  )
}
