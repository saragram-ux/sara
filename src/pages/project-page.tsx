import { useParams } from 'wouter'

import { ProjectContent } from '@/components/project/project-content'
import { ProjectCover } from '@/components/project/project-cover'
import { ProjectHeader } from '@/components/project/project-header'
import { ProjectNext } from '@/components/project/project-next'
import { pageTitle } from '@/data/brand'
import { getNextProject, getProject, projects } from '@/data/projects'
import type { Project } from '@/data/types'
import { SectionContact } from '@/sections/section-contact'
import NotFoundPage from './not-found-page'

/** /work/:slug — one case study. */
export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProject(slug)
  if (!project) return <NotFoundPage />
  // keyed so state and animations reset between case studies
  return <CaseStudy key={project.slug} project={project} />
}

function CaseStudy({ project }: { project: Project }) {
  const index = projects.indexOf(project)
  const next = getNextProject(project.slug)
  return (
    <>
      <article>
        <title>{pageTitle(project.title)}</title>
        <ProjectHeader project={project} index={index} total={projects.length} />
        <ProjectCover project={project} index={index} />
        <ProjectContent project={project} index={index} />
        <ProjectNext project={next} index={projects.indexOf(next)} />
      </article>
      <SectionContact />
    </>
  )
}
