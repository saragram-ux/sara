import { PageHeader } from '@/components/layout/page-header'
import { AnimatedLink } from '@/components/motion/animated-link'
import { pageTitle } from '@/data/brand'
import { SectionContact } from '@/sections/section-contact'

/** Any unknown path. */
export default function NotFoundPage() {
  return (
    <>
      <title>{pageTitle('Not found')}</title>
      <PageHeader
        eyebrow={
          <>
            <span>Error</span>
            <span>404</span>
          </>
        }
        title={
          <>
            Nothing here.
          </>
        }
        lead={
          <>
            <p className="text-ink-muted">This page doesn’t exist, or it has moved.</p>
            <div className="mt-8">
              <AnimatedLink href="/">Back to the start</AnimatedLink>
            </div>
          </>
        }
      />
      <div className="h-block-gap" />
      <SectionContact />
    </>
  )
}
