import { ArrowUpRight } from '@phosphor-icons/react'

import { Cluster } from '@/components/layout/cluster'
import { AnimatedLink } from '@/components/motion/animated-link'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { CopyEmailButton } from './copy-email-button'

/** Email me (the loud one), copy email, LinkedIn. */
export function ContactLinks({ className }: { className?: string }) {
  return (
    <Cluster className={className}>
      <Button asChild variant="peach">
        <a href={`mailto:${profile.email}`}>
          Email me
          <ArrowUpRight
            aria-hidden
            weight="bold"
            className="size-4 transition-transform duration-fast group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
          />
        </a>
      </Button>
      <CopyEmailButton />
      <AnimatedLink href={profile.linkedin}>LinkedIn</AnimatedLink>
    </Cluster>
  )
}
