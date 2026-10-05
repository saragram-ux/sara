import { useRef } from 'react'

import { Metadata } from '@/components/common/Metadata'
import { PageHeader } from '@/components/common/PageHeader'
import { SectionLabel } from '@/components/common/SectionLabel'
import { useScrollReveal } from '@/components/motion/useEntrance'
import { ExperienceList } from '@/components/sections/ExperienceList'
import { education, experience, formatRange } from '@/data/experience'
import { certifications, languages, profile } from '@/data/profile'
import { skillLevels, skills } from '@/data/skills'
import type { SkillLevel } from '@/data/types'
import { cn } from '@/lib/utils'

const triad = [
  {
    discipline: 'Graphic design',
    where: 'Malmö University · BA',
    years: '2015—2018',
    gives: 'The eye',
    text: 'Type, layout, hierarchy, craft. How to make something clear before making it pretty.',
  },
  {
    discipline: 'Behavioural science',
    where: 'Mälardalen University',
    years: '2012—2013',
    gives: 'The why',
    text: 'How people think, decide and behave. Interfaces are made of decisions, after all.',
  },
  {
    discipline: 'Frontend development',
    where: 'EC Utbildning · YH',
    years: '2026—2028',
    gives: 'The build',
    text: 'From HTML to React, TypeScript and databases. So the design and the build stop being two different jobs.',
  },
]

const levelGlyph: Record<SkillLevel, string> = { fluent: '●', building: '◐', exploring: '○' }

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)
  const earlier = experience.filter((x) => x.group === 'earlier')

  return (
    <>
      <title>About — Sara Gramstad</title>
      <PageHeader
        eyebrow={
          <>
            <span>About</span>
            <span>{profile.location}</span>
          </>
        }
        title={
          <>
            Hi, I’m <em>Sara.</em>
          </>
        }
        lead={
          <>
            <p>
              UI and product designer, co-founder of {profile.studio.name}, and — since 2026 — a frontend development student.
            </p>
            <p className="mt-4 text-ink-muted">
              {profile.voice.approach} {profile.voice.tools}
            </p>
          </>
        }
        aside={
          <Metadata
            rows={[
              { label: 'Studio', value: profile.studio.name },
              { label: 'Works', value: profile.availability.reach },
              { label: 'Open to', value: profile.availability.detail },
              { label: 'Speaks', value: 'Swedish, English' },
            ]}
          />
        }
      />

      <div ref={ref}>
        {/* 01 — The combination */}
        <section aria-labelledby="mix-title" className="page section-space">
          <SectionLabel index="01" id="mix-title">
            Design + behaviour + code
          </SectionLabel>
          <ol className="page-grid mt-12 gap-y-12 md:mt-16">
            {triad.map((t, i) => (
              <li key={t.discipline} data-reveal className="relative col-span-4 md:col-span-8 lg:col-span-4">
                <div className="flex items-baseline justify-between label-mono text-ink-muted">
                  <span className="text-accent">{t.gives}</span>
                  <span className="tabular-nums">{t.years}</span>
                </div>
                <h3 className="mt-6 font-serif text-display-sm">{t.discipline}</h3>
                <p className="mt-1 label-mono text-ink-muted">{t.where}</p>
                <p className="mt-5 max-w-sm text-body">{t.text}</p>
                {i < triad.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-14 -right-[calc(var(--gutter)/2)] hidden translate-x-1/2 font-serif text-display-sm text-ink-faint lg:block"
                  >
                    +
                  </span>
                )}
              </li>
            ))}
          </ol>
          <figure data-reveal className="page-grid mt-(--space-block)">
            <blockquote className="col-span-4 font-serif text-display-md md:col-span-7 lg:col-span-8 lg:col-start-3">
              “Details matter to me, but never more than <em className="text-accent">momentum.</em>”
            </blockquote>
          </figure>
        </section>

        {/* 02 — Made by hand */}
        <section aria-labelledby="hand-title" className="page section-space pt-0">
          <SectionLabel index="02" id="hand-title">
            Made by hand, first
          </SectionLabel>
          <div className="page-grid mt-12 gap-y-10 md:mt-16">
            <div data-reveal className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-3">
              <p className="text-lead">
                Before screens, I made things with my hands: designing and sewing accessories for a small Malmö store, working in
                the costume department at Malmö Stadsteater, early days at Remake Sthlm.
              </p>
              <p className="mt-4 text-body text-ink-muted">
                My first taste of making something from scratch and seeing it reach a customer. Then Kreation Studio, my own small
                studio — where I learned what it actually takes to make things work.
              </p>
            </div>
            <ul data-reveal className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-10">
              {earlier.map((x) => (
                <li key={x.company} className="flex items-baseline justify-between gap-4 border-t border-rule py-2.5">
                  <span className="text-small">{x.company}</span>
                  <span className="label-mono text-ink-muted tabular-nums">{x.start}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 — Experience */}
        <section id="experience" tabIndex={-1} aria-labelledby="xp-title" className="page section-space pt-0 outline-none">
          <SectionLabel index="03" id="xp-title" aside="2018—now">
            Experience
          </SectionLabel>
          <div className="mt-12 md:mt-16">
            <ExperienceList items={experience.filter((x) => !x.group)} detailed />
          </div>
        </section>

        {/* 04 — Stack */}
        <section aria-labelledby="stack-title" className="page section-space pt-0">
          <SectionLabel index="04" id="stack-title">
            Built with
          </SectionLabel>
          <div className="page-grid mt-12 gap-y-6 md:mt-16">
            <p data-reveal className="col-span-4 text-lead md:col-span-5 lg:col-span-5 lg:col-start-3">
              Years of Figma and Webflow. A growing amount of everything underneath.
            </p>
            <ul data-reveal aria-label="Legend" className="col-span-4 grid gap-1.5 md:col-span-3 lg:col-span-3 lg:col-start-10">
              {(Object.keys(skillLevels) as SkillLevel[]).map((lvl) => (
                <li key={lvl} className="flex items-baseline gap-3 meta-mono">
                  <span aria-hidden className={cn('w-3', lvl === 'fluent' ? 'text-ink' : 'text-accent')}>
                    {levelGlyph[lvl]}
                  </span>
                  <span>{skillLevels[lvl].label}</span>
                  <span className="text-ink-muted">— {skillLevels[lvl].description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="page-grid mt-12 gap-y-10">
            {skills.map((group) => (
              <div key={group.label} data-reveal className="col-span-2 md:col-span-2 lg:col-span-3">
                <h3 className="border-t border-ink pt-3 label-mono">{group.label}</h3>
                <ul className="mt-4 grid gap-1.5">
                  {group.items.map((s) => (
                    <li key={s.name} className="flex items-baseline gap-2.5 text-small">
                      <span
                        aria-hidden
                        className={cn('w-3 shrink-0 font-mono text-[0.7rem]', s.level === 'fluent' ? 'text-ink' : 'text-accent')}
                      >
                        {levelGlyph[s.level]}
                      </span>
                      <span className={s.level === 'exploring' ? 'text-ink-muted' : ''}>{s.name}</span>
                      <span className="sr-only">({skillLevels[s.level].label})</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — Education */}
        <section aria-labelledby="edu-title" className="page section-space pt-0">
          <SectionLabel index="05" id="edu-title">
            Education
          </SectionLabel>
          <ol className="mt-12 border-t border-rule md:mt-16">
            {education.map((e) => (
              <li key={e.programme} data-reveal className="page-grid items-baseline gap-y-1 border-b border-rule py-4 md:py-5">
                <span className="col-span-4 label-mono text-ink-muted tabular-nums md:col-span-2">{formatRange(e.start, e.end)}</span>
                <span className="col-span-4 text-body font-medium md:col-span-3 lg:col-span-4">{e.programme}</span>
                <span className="col-span-4 text-small text-ink-muted md:col-span-3 lg:col-span-4">{e.school}</span>
                <span className="hidden text-right label-mono text-ink-muted lg:col-span-2 lg:block">{e.note}</span>
              </li>
            ))}
          </ol>
          <div className="page-grid mt-12 gap-y-8">
            <div data-reveal className="col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-3">
              <h3 className="label-mono text-ink-muted">Certification</h3>
              {certifications.map((c) => (
                <p key={c} className="mt-3 text-small">
                  {c}
                </p>
              ))}
            </div>
            <div data-reveal className="col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-8">
              <h3 className="label-mono text-ink-muted">Languages</h3>
              <ul className="mt-3 grid gap-1 text-small">
                {languages.map((l) => (
                  <li key={l.name} className="flex justify-between gap-4">
                    <span>{l.name}</span>
                    <span className="label-mono text-ink-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
