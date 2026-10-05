import { useRef, useState } from 'react'

import type { Project } from '@/data/types'
import { useMediaQuery } from '@/hooks/use-media-query'
import { gsap, MOTION_OK, useGSAP } from '@/lib/motion'
import { ProjectCard } from './project-card'
import { ProjectPreview } from './project-preview'

const FINE_POINTER = '(hover: hover) and (pointer: fine) and (min-width: 64rem)'

/**
 * The work index: an editorial list of ProjectCards, one ruled row each.
 * Desktop: hovering a row brings its plate along with the cursor (ProjectPreview).
 * Touch: the plate sits inline above each row instead.
 */
export function ProjectList({ projects }: { projects: Project[] }) {
  const listRef = useRef<HTMLOListElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const finePointer = useMediaQuery(FINE_POINTER)
  const motionOk = useMediaQuery(MOTION_OK)
  const showPreview = finePointer && motionOk

  // Cursor-following preview.
  const { contextSafe } = useGSAP(
    () => {
      if (!showPreview || !previewRef.current) return
      const el = previewRef.current
      // sit just right of the cursor, so the hovered title stays readable
      gsap.set(el, { xPercent: 12, yPercent: -50, scale: 0.96, autoAlpha: 0 })
      // quick and exact: it follows, it doesn't float
      const xTo = gsap.quickTo(el, 'x', { duration: 0.28, ease: 'power3' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.28, ease: 'power3' })
      const onMove = (e: PointerEvent) => {
        const bounds = listRef.current!.getBoundingClientRect()
        xTo(e.clientX - bounds.left)
        yTo(e.clientY - bounds.top)
      }
      const list = listRef.current!
      list.addEventListener('pointermove', onMove)
      return () => list.removeEventListener('pointermove', onMove)
    },
    { dependencies: [showPreview], scope: listRef },
  )

  const enter = contextSafe((i: number) => {
    setActive(i)
    gsap.to('[data-preview]', { autoAlpha: 1, scale: 1, duration: 0.22, ease: 'power3.out' })
  })
  const leave = contextSafe(() => {
    setActive(null)
    gsap.to('[data-preview]', { autoAlpha: 0, scale: 0.96, duration: 0.16, ease: 'power2.out' })
  })

  return (
    <ol ref={listRef} className="relative" onPointerLeave={showPreview ? leave : undefined}>
      {projects.map((project, i) => (
        <li key={project.slug} data-reveal className="border-b border-rule">
          <ProjectCard
            project={project}
            index={i}
            active={active === i}
            showPlate={!showPreview}
            onPointerEnter={showPreview ? () => enter(i) : undefined}
          />
        </li>
      ))}
      {showPreview && <ProjectPreview ref={previewRef} projects={projects} active={active} />}
    </ol>
  )
}
