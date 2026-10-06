import { useRef } from 'react'

import { Container } from '@/components/layout/container'
import { useScrollReveal } from '@/components/motion/use-reveal'
import type { PlaygroundItem } from '@/data/types'
import { PlaygroundEntry } from './playground-entry'

/** Every playground entry, newest first: one module each. */
export function PlaygroundList({ items }: { items: PlaygroundItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref)
  return (
    <Container ref={ref} className="section-padding grid gap-6">
      {items.map((item) => (
        <PlaygroundEntry key={item.id} item={item} />
      ))}
    </Container>
  )
}
