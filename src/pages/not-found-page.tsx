import { PageHeader } from '@/components/layout/page-header'
import { AnimatedLink } from '@/components/motion/animated-link'
import { SectionContact } from '@/sections/section-contact'

/** Any unknown path. */
export default function NotFoundPage() {
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
              <AnimatedLink href="/">Back to the index</AnimatedLink>
            </div>
          </>
        }
      />
      <div className="h-block-gap" />
      <SectionContact />
    </>
  )
}
