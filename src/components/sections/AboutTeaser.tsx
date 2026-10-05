import { useRef } from 'react'

import { ArrowLink } from '@/components/common/ArrowLink'
import { SectionLabel } from '@/components/common/SectionLabel'
import { useScrollReveal } from '@/components/motion/useEntrance'
import { profile } from '@/data/profile'
import { CurrentlyPanel } from './CurrentlyPanel'

export function AboutTeaser() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  return (
    <section ref={ref} aria-labelledby="about-title" className="page section-space">
      <SectionLabel index="02" id="about-title">
        About
      </SectionLabel>

      <div className="page-grid mt-12 gap-y-14 md:mt-16">
        <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-3">
          <p data-reveal className="font-serif text-display-md">
            Graphic design taught me to see. Behavioural science taught me to ask why. Frontend development is teaching me to
            make it real.
          </p>
          <div data-reveal className="mt-10 grid gap-5 text-body md:grid-cols-2 md:gap-(--gutter)">
            <p>
              We started Handsdown because we kept seeing good teams slowed down by design that was hard to work with. Too much
              process, too many layers.
            </p>
            <p className="text-ink-muted">{profile.voice.approach}</p>
          </div>
          <figure data-reveal className="mt-12 border-l-2 border-accent pl-5">
            <blockquote className="font-serif text-display-sm italic">“{profile.voice.motto}”</blockquote>
          </figure>
          <div data-reveal className="mt-10">
            <ArrowLink href="/about">More about me</ArrowLink>
          </div>
        </div>

        <div data-reveal className="col-span-4 md:col-span-5 lg:col-span-3 lg:col-start-10">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <CurrentlyPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
