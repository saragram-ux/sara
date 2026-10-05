import { cn } from '@/lib/utils'

interface PlaygroundStackProps {
  stack: string[]
  /** inline: "React · TypeScript" text. chips: small bordered tags. */
  variant?: 'inline' | 'chips'
  className?: string
}

/** The technologies an experiment is built with. */
export function PlaygroundStack({ stack, variant = 'inline', className }: PlaygroundStackProps) {
  if (variant === 'inline') {
    return <p className={cn('type-meta text-ink-muted', className)}>{stack.join(' · ')}</p>
  }
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {stack.map((tech) => (
        <li key={tech} className="rounded-xs border border-rule bg-paper-raised px-1.5 py-0.5 type-meta">
          {tech}
        </li>
      ))}
    </ul>
  )
}
