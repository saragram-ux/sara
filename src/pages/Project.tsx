import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'wouter'

import { ArrowLink } from '@/components/common/ArrowLink'
import { Metadata } from '@/components/common/Metadata'
import { PageHeader } from '@/components/common/PageHeader'
import { useScrollReveal } from '@/components/motion/useEntrance'
import { TransitionLink } from '@/components/navigation/TransitionLink'
import { Plate } from '@/components/project/Plate'
import { getNextProject, getProject, projects } from '@/data/projects'
import type { CaseSection, Project as ProjectType } from '@/data/types'
import { gsap, MOTION_OK, useGSAP } from '@/lib/motion'
import { cn } from '@/lib/utils'
import NotFound from './NotFound'

export default function Project() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProject(slug)
  if (!project) return <NotFound />
  // keyed so state and animations reset between case studies
  return <CaseStudy key={project.slug} project={project} />
}

function CaseStudy({ project }: { project: ProjectType }) {
  const index = projects.indexOf(project)
  const next = getNextProject(project.slug)
  const sections = project.sections.filter((s) => !s.draft || import.meta.env.DEV)
  const bodyRef = useRef<HTMLDivElement>(null)
  const coverRef = useRef<HTMLDivElement>(null)
  const active = useActiveSection(sections.map((s) => s.id))
  useScrollReveal(bodyRef)

  // Gentle cover parallax: the plate drifts slower than the page.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          '[data-plate-inner]',
          { yPercent: -4, scale: 1.06 },
          {
            yPercent: 4,
            scale: 1.06,
            ease: 'none',
            scrollTrigger: { trigger: coverRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
    },
    { scope: coverRef },
  )

  // running figure numbers across sections: Fig. 01, 02, …
  const figureNumbers = sections.reduce<number[]>((acc, s) => [...acc, (acc.at(-1) ?? 0) + (s.figure ? 1 : 0)], [])

  return (
    <article>
      <title>{`${project.title} — ${project.role} · Sara Gramstad`}</title>
      <PageHeader
        eyebrow={
          <>
            <TransitionLink to="/#work" className="group/back -my-2 flex items-center gap-1.5 py-2 hover:text-ink">
              <ArrowLeft aria-hidden className="size-3 transition-transform group-hover/back:-translate-x-0.5" />
              Work
            </TransitionLink>
            <span className="tabular-nums">
              Case {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
          </>
        }
        title={project.title}
        lead={<p>{project.description}</p>}
        aside={
          <Metadata
            rows={[
              { label: 'Client', value: project.client },
              { label: 'Role', value: project.role },
              ...(project.via ? [{ label: 'Via', value: project.via }] : []),
              { label: 'Year', value: <span className="tabular-nums">{project.year}</span> },
              ...(project.location ? [{ label: 'Where', value: project.location }] : []),
              { label: 'Tools', value: project.tools.join(', ') },
              ...(project.links ?? []).map((l) => ({ label: 'Link', value: <ArrowLink href={l.href} variant="text">{l.label}</ArrowLink> })),
            ]}
          />
        }
      />

      <div ref={coverRef} className="page mt-(--space-block)">
        <div className="overflow-hidden rounded-xs">
          <Plate project={project} index={index} className="aspect-[4/3]! md:aspect-[16/8]!" />
        </div>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 label-mono text-ink-muted">
          {project.disciplines.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </p>
      </div>

      <div ref={bodyRef} className="page page-grid section-space">
        {/* Sticky section index */}
        <nav aria-label="Sections" className="hidden lg:col-span-2 lg:block">
          <ol className="sticky top-[calc(var(--header-h)+2rem)] grid gap-1.5">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={cn(
                    'flex items-baseline gap-3 py-0.5 label-mono transition-colors',
                    active === s.id ? 'text-ink' : 'text-ink-faint hover:text-ink-muted',
                  )}
                >
                  <span className={cn('tabular-nums', active === s.id && 'text-accent')}>{String(i + 1).padStart(2, '0')}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="col-span-4 grid gap-[clamp(4rem,3rem+4vw,7rem)] md:col-span-8 lg:col-span-9 lg:col-start-4">
          {sections.map((section, i) => (
            <Section
              key={section.id}
              section={section}
              number={i + 1}
              project={project}
              projectIndex={index}
              figureIndex={figureNumbers[i]}
            />
          ))}
        </div>
      </div>

      {/* Next case */}
      <nav aria-label="Next case study" className="page">
        <TransitionLink to={`/work/${next.slug}`} className="group/next block border-t border-ink pt-3">
          <span className="flex items-baseline justify-between label-mono text-ink-muted">
            <span>Next case</span>
            <span className="tabular-nums">{next.year}</span>
          </span>
          <span className="mt-8 flex items-end justify-between gap-6 pb-4">
            <span className="font-serif text-display-lg transition-transform duration-(--dur-slow) ease-out-soft group-hover/next:translate-x-1">
              {next.title}
            </span>
            <ArrowRight
              aria-hidden
              className="mb-[0.4em] size-[clamp(1.5rem,1rem+2vw,3rem)] shrink-0 text-accent transition-transform duration-(--dur-slow) ease-out-soft group-hover/next:translate-x-2"
            />
          </span>
        </TransitionLink>
      </nav>
    </article>
  )
}

function Section({
  section,
  number,
  project,
  projectIndex,
  figureIndex,
}: {
  section: CaseSection
  number: number
  project: ProjectType
  projectIndex: number
  figureIndex: number
}) {
  return (
    <section
      id={section.id}
      tabIndex={-1}
      aria-labelledby={`${section.id}-label`}
      className={cn('scroll-mt-[calc(var(--header-h)+2rem)] outline-none', section.draft && 'rounded-md border border-dashed border-accent/60 p-5')}
    >
      <div data-reveal className="grid gap-y-6 md:grid-cols-9 md:gap-x-(--gutter)">
        <div className="md:col-span-6">
          <h2 id={`${section.id}-label`} className="label-mono text-ink-muted">
            <span className="text-accent tabular-nums">{String(number).padStart(2, '0')}</span> — {section.label}
            {section.draft && <span className="ml-2 text-accent">(draft · dev only)</span>}
          </h2>
          {section.title && <p className="mt-5 font-serif text-display-sm">{section.title}</p>}
          <div className="prose-editorial mt-5">
            {section.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        {section.notes && (
          <aside className="md:col-span-3 md:pt-9" aria-label={section.notes.label}>
            <div className="border-t border-rule pt-3">
              <p className="label-mono text-ink-muted">{section.notes.label}</p>
              <ul className="mt-3 grid gap-1 meta-mono">
                {section.notes.items.map((n) => (
                  <li key={n} className="flex gap-2">
                    <span aria-hidden className="text-accent">
                      ›
                    </span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
      {section.figure && (
        <figure data-reveal className="mt-10">
          <div className="overflow-hidden rounded-xs">
            <Plate project={project} index={projectIndex} figure={section.figure} figureIndex={figureIndex} />
          </div>
          <figcaption className="mt-3 label-mono text-ink-muted">
            Fig. {String(figureIndex).padStart(2, '0')} — {section.figure.caption}
          </figcaption>
        </figure>
      )}
    </section>
  )
}

/** Which section is currently being read — drives the sticky index. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join(',')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    key.split(',').forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [key])
  return active
}
