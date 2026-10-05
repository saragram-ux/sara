import { useRef } from 'react'

import { ArrowLink } from '@/components/common/ArrowLink'
import { CopyEmail } from '@/components/common/CopyEmail'
import { Metadata } from '@/components/common/Metadata'
import { SectionLabel } from '@/components/common/SectionLabel'
import { useScrollReveal } from '@/components/motion/useEntrance'
import { profile } from '@/data/profile'
import { useLocalTime } from '@/hooks/useLocalTime'

/** The end of every page: how to start a conversation. */
export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const time = useLocalTime(profile.timeZone)
  useScrollReveal(ref)

  return (
    <section ref={ref} id="contact" tabIndex={-1} aria-labelledby="contact-title" className="page section-space outline-none">
      <SectionLabel index="→" id="contact-title">
        Contact
      </SectionLabel>

      <div className="page-grid mt-12 gap-y-14 md:mt-16">
        <div data-reveal className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-3">
          <p className="font-serif text-display-lg">
            Let’s make <em className="text-accent">something.</em>
          </p>
          <p className="mt-6 max-w-md text-lead text-ink-muted">
            Open for freelance and contract work. Remote, across Europe. If that sounds like a fit, just reach out — always
            happy to chat.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group/mail mt-10 inline-block font-serif text-[clamp(1.5rem,1rem+2.6vw,3rem)] leading-tight break-all"
          >
            <span className="link-underlined decoration-ink/30 group-hover/mail:decoration-accent">{profile.email}</span>
          </a>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <CopyEmail />
            <ArrowLink href={profile.linkedin}>LinkedIn</ArrowLink>
          </div>
        </div>

        <div data-reveal className="col-span-4 md:col-span-5 lg:col-span-3 lg:self-end">
          <Metadata
            rows={[
              { label: 'Mode', value: profile.availability.detail },
              { label: 'Based in', value: profile.location },
              { label: 'Works', value: profile.availability.reach },
              {
                label: 'Local time',
                value: (
                  <span className="tabular-nums">
                    {time.hours}
                    <span className="animate-blink">:</span>
                    {time.minutes} <span className="text-ink-muted">{time.zone}</span>
                  </span>
                ),
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
