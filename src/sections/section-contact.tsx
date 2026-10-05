import { useRef } from 'react'

import { LocalTime } from '@/components/common/local-time'
import { MetaList } from '@/components/common/meta-list'
import { ContactLinks } from '@/components/contact/contact-links'
import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { SectionLabel } from '@/components/layout/section-label'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { profile } from '@/data/profile'

/** The end of every page: how to start a conversation. */
export function SectionContact() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)

  return (
    <Section ref={ref} id="contact" tabIndex={-1} aria-labelledby="contact-title" className="outline-none">
      <SectionLabel index="→" id="contact-title">
        Contact
      </SectionLabel>

      <Grid className="mt-12 gap-y-14 md:mt-16">
        <div data-reveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-3">
          <p className="font-serif text-display-lg">
            say <em className="text-accent-ink">hi.</em>
          </p>
          <p className="mt-6 max-w-md text-lead text-ink-muted">
            Open for freelance and contract work. Remote, across Europe. If that sounds like a fit, just reach out — always
            happy to chat.
          </p>

          {/* Art-directed size: large enough to read as the call to action, small enough to fit on one line. */}
          <a
            href={`mailto:${profile.email}`}
            className="group/mail mt-10 inline-block font-serif text-[clamp(1.5rem,1rem+2.6vw,3rem)] leading-tight break-all"
          >
            <span className="link-underline decoration-ink/30 group-hover/mail:decoration-accent">{profile.email}</span>
          </a>
          <ContactLinks className="mt-6" />
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
