import { useRef } from 'react'

import { LocalTime } from '@/components/common/local-time'
import { MetaList } from '@/components/common/meta-list'
import { ContactLinks } from '@/components/contact/contact-links'
import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { profile } from '@/data/profile'

/** The end of every page: an ink block with one job — get an email sent. */
export function SectionContact() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)

  return (
    <Section ref={ref} id="contact" tabIndex={-1} aria-labelledby="contact-title" className="theme-inverse outline-none">
      <SectionLabel index="→" id="contact-title">
        Contact
      </SectionLabel>

      <Grid className="mt-12 gap-y-14 md:mt-16">
        <div data-reveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-3">
          <p className="type-display text-display-xl">Say hi.</p>
          <p className="mt-6 max-w-md text-lead text-ink-muted">Freelance, contract or something in between. Remote, anywhere in Europe. Tell me what’s up.</p>

          {/* Set like a form field: a label, the address, a heavy underline. It's a mailto, not a form. */}
          <div className="mt-12">
            <p className="type-label text-ink-muted">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block border-b-2 border-ink pb-3 font-display text-[clamp(1.35rem,0.95rem+2vw,2.6rem)] leading-tight font-bold break-all transition-colors duration-fast hover:border-accent"
            >
              {profile.email}
            </a>
          </div>
          <ContactLinks className="mt-8" />
        </div>

        <div data-reveal className="col-span-4 md:col-span-5 lg:col-span-3 lg:self-end">
          <MetaList
            rows={[
              { label: 'Mode', value: profile.availability.detail },
              { label: 'Based in', value: profile.location },
              { label: 'Works', value: profile.availability.reach },
              { label: 'Local time', value: <LocalTime mutedZone /> },
            ]}
          />
        </div>
      </Grid>
    </Section>
  )
}
