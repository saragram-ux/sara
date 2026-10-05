import { Cluster } from '@/components/layout/cluster'
import { AnimatedLink } from '@/components/motion/animated-link'
import { profile } from '@/data/profile'
import { CopyEmailButton } from './copy-email-button'

/** Copy-email button + LinkedIn, side by side. */
export function ContactLinks({ className }: { className?: string }) {
  return (
    <Cluster className={className}>
      <CopyEmailButton />
      <AnimatedLink href={profile.linkedin}>LinkedIn</AnimatedLink>
    </Cluster>
  )
}
