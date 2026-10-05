import { MetaList } from '@/components/common/meta-list'
import { AnimatedLink } from '@/components/motion/animated-link'
import type { Project } from '@/data/types'

/** The spec sheet of a case study: client, role, years, place, tools, links. */
export function ProjectMeta({ project }: { project: Project }) {
  return (
    <MetaList
      rows={[
        { label: 'Client', value: project.client },
        { label: 'Role', value: project.role },
        ...(project.via ? [{ label: 'Via', value: project.via }] : []),
        { label: 'Year', value: <span className="tabular-nums">{project.year}</span> },
        ...(project.location ? [{ label: 'Where', value: project.location }] : []),
        { label: 'Tools', value: project.tools.join(', ') },
        ...(project.links ?? []).map((link) => ({
          label: 'Link',
          value: (
            <AnimatedLink href={link.href} variant="text">
              {link.label}
            </AnimatedLink>
          ),
        })),
      ]}
    />
  )
}
