import { useRef } from 'react'

import { ArrowLink } from '@/components/common/ArrowLink'
import { SectionLabel } from '@/components/common/SectionLabel'
import { useScrollReveal } from '@/components/motion/useEntrance'
import { TransitionLink } from '@/components/navigation/TransitionLink'
import { StatusTag } from '@/components/playground/StatusTag'
import { visiblePlayground } from '@/data/playground'

export function PlaygroundTeaser() {
  const ref = useRef<HTMLElement>(null)
  useScrollReveal(ref)
  const items = visiblePlayground.slice(0, 3)
  return (
    <section ref={ref} aria-labelledby="playground-title" className="page section-space">
      <SectionLabel index="03" id="playground-title" aside={`(${String(visiblePlayground.length).padStart(2, '0')})`}>
        Playground
      </SectionLabel>

      <div className="page-grid mt-12 gap-y-6 md:mt-16">
        <h3 data-reveal className="col-span-4 font-serif text-display-md md:col-span-6 lg:col-span-5 lg:col-start-3">
          A lab notebook.
        </h3>
        <p data-reveal className="col-span-4 text-lead text-ink-muted md:col-span-5 lg:col-span-4 lg:col-start-3">
          What I’m building and learning right now. Small, unfinished, honest.
        </p>
      </div>

      <ol className="page-grid mt-14 gap-y-10">
        {items.map((item) => (
          <li key={item.id} data-reveal className="col-span-4 md:col-span-4 lg:col-span-4">
            <TransitionLink to={`/playground#p-${item.id}`} className="group/entry block border-t border-ink pt-4">
              <div className="flex items-center justify-between label-mono text-ink-muted">
                <span>Playground / {item.id}</span>
                <StatusTag status={item.status} />
              </div>
              <h4 className="mt-6 font-serif text-display-sm transition-transform duration-(--dur-slow) ease-out-soft group-hover/entry:translate-x-[3px]">
                {item.title}
              </h4>
              <p className="mt-3 max-w-sm text-small text-ink-muted">{item.description}</p>
              <p className="mt-5 meta-mono text-ink-muted">{item.stack.join(' · ')}</p>
            </TransitionLink>
          </li>
        ))}
      </ol>

      <div data-reveal className="mt-12">
        <ArrowLink href="/playground">Open the playground</ArrowLink>
      </div>
    </section>
  )
}
