import { useRef } from 'react'

import { LocalTime } from '@/components/common/local-time'
import { StatusDot } from '@/components/common/status-dot'
import { Module } from '@/components/instrument/module'
import { Readout, Readouts } from '@/components/instrument/readout'
import { ContactLinks } from '@/components/contact/contact-links'
import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { useScrollReveal } from '@/components/motion/use-reveal'
import { profile } from '@/data/profile'
import { ledOnPastel } from '@/lib/pastel'

/** The end of every page: an ink block with one job — get an email sent. */
export function SectionContact() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)

  return (
    <Section ref={ref} id="contact" tabIndex={-1} aria-labelledby="contact-title" className="outline-none">
      <Module
        tone="peach"
        label={
          <span id="contact-title" role="heading" aria-level={2}>
            → Contact
          </span>
        }
        aside={
          <span className="flex items-center gap-2 rounded-full border border-ink px-3 py-1 text-ink">
            <StatusDot className={ledOnPastel} />
            {profile.availability.label}
          </span>
        }
        className="p-5 md:p-8 lg:p-10"
      >
        <Grid className="gap-y-12">
          <div data-reveal className="col-span-4 md:col-span-8 lg:col-span-7">
            <p className="type-display text-display-xl">Say hi.</p>
            <p className="mt-6 max-w-md text-lead text-ink-muted">
              Freelance, contract or something in between. Remote, anywhere in Europe. Tell me what’s up.
            </p>

            {/* set like a readout: label, the address, a heavy underline. It's a mailto, not a form. */}
            <div className="mt-12">
              <p className="type-label text-ink-muted">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block border-b border-ink pb-3 font-mono text-[clamp(1.2rem,0.9rem+1.6vw,2.25rem)] tracking-[-0.03em] break-all transition-colors duration-fast hover:border-b-2"
              >
                {profile.email}
              </a>
            </div>
            <ContactLinks className="mt-8" primary="ink" />
          </div>

          <div data-reveal className="col-span-4 self-end rounded-cell border border-ink p-4 md:col-span-5 lg:col-span-4 lg:col-start-9">
            <Readouts className="grid-cols-2">
              <Readout label="Local time" value={<LocalTime />} className="col-span-2" />
              <Readout label="Based in" value="Östersund" className="col-span-2" />
            </Readouts>
          </div>
        </Grid>
      </Module>
    </Section>
  )
}
