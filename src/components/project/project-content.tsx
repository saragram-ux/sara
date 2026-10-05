import { useRef } from 'react'

import { Container } from '@/components/layout/container'
import { Grid } from '@/components/layout/grid'
import { useScrollReveal } from '@/components/motion/use-reveal'
import type { Project } from '@/data/types'
import { useActiveSection } from '@/hooks/use-active-section'
import { ProjectChapter } from './project-chapter'
import { ProjectChapterNav } from './project-chapter-nav'

/** The body of a case study: sticky chapter index + the chapters themselves. */
export function ProjectContent({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)

  const chapters = project.sections.filter((s) => !s.draft || import.meta.env.DEV)
  const active = useActiveSection(chapters.map((s) => s.id))
  // running figure numbers across chapters: Fig. 01, 02, …
  const figureNumbers = chapters.reduce<number[]>((acc, s) => [...acc, (acc.at(-1) ?? 0) + (s.figure ? 1 : 0)], [])

  return (
    <Container ref={ref} className="section-padding">
      <Grid>
        <ProjectChapterNav chapters={chapters} active={active} />
        <div className="col-span-4 grid gap-entry md:col-span-8 lg:col-span-9 lg:col-start-4">
          {chapters.map((chapter, i) => (
            <ProjectChapter
              key={chapter.id}
              chapter={chapter}
              number={i + 1}
              project={project}
              projectIndex={index}
              figureIndex={figureNumbers[i]}
            />
          ))}
        </div>
      </Grid>
    </Container>
  )
}
