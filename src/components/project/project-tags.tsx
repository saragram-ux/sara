import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const projectTagsVariants = cva('flex flex-wrap type-label text-ink-muted', {
  variants: {
    density: {
      /** inside a project card */
      compact: 'gap-x-3 gap-y-0.5',
      /** under the case-study cover */
      relaxed: 'gap-x-4 gap-y-1',
    },
  },
  defaultVariants: { density: 'compact' },
})

type ProjectTagsProps = VariantProps<typeof projectTagsVariants> & {
  tags: string[]
  as?: 'span' | 'p'
  className?: string
}

/** A project's disciplines as a wrapping row of mono labels. */
export function ProjectTags({ tags, density, as: Component = 'span', className }: ProjectTagsProps) {
  return (
    <Component className={cn(projectTagsVariants({ density }), className)}>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </Component>
  )
}
