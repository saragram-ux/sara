import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const projectTagsVariants = cva('flex flex-wrap type-label', {
  variants: {
    density: {
      /** inside a project card */
      compact: 'gap-1.5',
      /** under the case-study cover */
      relaxed: 'gap-2',
    },
  },
  defaultVariants: { density: 'compact' },
})

type ProjectTagsProps = VariantProps<typeof projectTagsVariants> & {
  tags: string[]
  as?: 'span' | 'p'
  className?: string
}

/** A project's disciplines as dotted square chips, archive-style. */
export function ProjectTags({ tags, density, as: Component = 'span', className }: ProjectTagsProps) {
  return (
    <Component className={cn(projectTagsVariants({ density }), className)}>
      {tags.map((tag) => (
        <span key={tag} className="border border-dotted border-ink/60 px-1.5 py-0.5">
          {tag}
        </span>
      ))}
    </Component>
  )
}
