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

  // Cursor-following preview: quickTo for position, velocity for a little tilt.
  const { contextSafe } = useGSAP(
    () => {
      if (!showPreview || !previewRef.current) return
      const el = previewRef.current
      // sit just right of the cursor, so the hovered title stays readable
      gsap.set(el, { xPercent: 12, yPercent: -50, scale: 0.9, autoAlpha: 0 })
      const xTo = gsap.quickTo(el, 'x', { duration: 0.55, ease: 'power3' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.55, ease: 'power3' })
      const rTo = gsap.quickTo(el, 'rotation', { duration: 0.8, ease: 'power3' })
      let lastX = 0
      const onMove = (e: PointerEvent) => {
        const bounds = listRef.current!.getBoundingClientRect()
        const x = e.clientX - bounds.left
        xTo(x)
        yTo(e.clientY - bounds.top)
        rTo(gsap.utils.clamp(-6, 6, (e.clientX - lastX) * 0.35))
        lastX = e.clientX
      }
      const list = listRef.current!
      list.addEventListener('pointermove', onMove)
      return () => list.removeEventListener('pointermove', onMove)
    },
    { dependencies: [showPreview], scope: listRef },
  )

  const enter = contextSafe((i: number) => {
    setActive(i)
    gsap.to('[data-preview]', { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'expo.out' })
  })
  const leave = contextSafe(() => {
    setActive(null)
    gsap.to('[data-preview]', { autoAlpha: 0, scale: 0.92, duration: 0.3, ease: 'power2.out' })
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
