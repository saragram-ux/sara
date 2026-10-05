import { ArrowRight } from '@phosphor-icons/react'
import { useRef, useState } from 'react'

import { TransitionLink } from '@/components/navigation/TransitionLink'
import type { Project } from '@/data/types'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { gsap, MOTION_OK, useGSAP } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { Plate } from './Plate'

const FINE_POINTER = '(hover: hover) and (pointer: fine) and (min-width: 64rem)'

/**
 * The work index. An editorial list: one ruled row per project.
 * Desktop: hovering a row brings its plate along with the cursor.
 * Touch: the plate sits inline above each row.
 */
export function ProjectIndex({ projects }: { projects: Project[] }) {
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
          <TransitionLink
            to={`/work/${project.slug}`}
            onPointerEnter={showPreview ? () => enter(i) : undefined}
            className={cn(
              'group/row page-grid relative items-baseline gap-y-3 py-7 transition-colors duration-(--dur-base) md:py-9',
              'focus-visible:outline-offset-[-2px]',
            )}
          >
            {!showPreview && (
              <div className="col-span-4 mb-3 overflow-hidden rounded-xs md:col-span-8 lg:hidden">
                <Plate project={project} index={i} />
              </div>
            )}

            <span
              className={cn(
                'col-span-1 label-mono tabular-nums transition-colors duration-(--dur-base)',
                active === i ? 'text-accent' : 'text-ink-muted group-hover/row:text-accent',
              )}
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <span className="relative col-span-3 overflow-hidden text-right label-mono text-ink-muted tabular-nums md:col-span-7 lg:order-last lg:col-span-1">
              <span className="block transition-transform duration-(--dur-base) ease-out-soft lg:group-hover/row:-translate-y-full lg:group-focus-visible/row:-translate-y-full">
                {project.year}
              </span>
              <span
                aria-hidden
                className="absolute inset-0 hidden translate-y-full items-center justify-end gap-1 text-accent-ink transition-transform duration-(--dur-base) ease-out-soft lg:flex lg:group-hover/row:translate-y-0 lg:group-focus-visible/row:translate-y-0"
              >
                View <ArrowRight weight="bold" className="size-3" />
              </span>
            </span>

            <span className="col-span-4 md:col-span-6 lg:col-span-5 lg:col-start-3">
              <span className="block font-serif text-display-md transition-transform duration-(--dur-slow) ease-out-soft group-hover/row:translate-x-[3px]">
                {project.title}
              </span>
              <span className="mt-2 block max-w-[34rem] text-small text-ink-muted">{project.summary}</span>
            </span>

            <span className="col-span-3 flex flex-col gap-1 md:col-span-2 lg:col-span-3 lg:col-start-9">
              <span className="text-small">{project.role}</span>
              <span className="flex flex-wrap gap-x-3 gap-y-0.5 label-mono text-ink-muted">
                {project.disciplines.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </span>
            </span>

            <span
              aria-hidden
              className="col-span-1 flex justify-end self-center md:col-start-8 lg:col-start-auto lg:hidden"
            >
              <ArrowRight weight="bold" className="size-4" />
            </span>
          </TransitionLink>
        </li>
      ))}

      {showPreview && (
        <div
          ref={previewRef}
          data-preview
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 z-10 w-[min(26vw,380px)] overflow-hidden rounded-xs shadow-float"
        >
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={cn('transition-opacity duration-(--dur-fast)', active === i ? 'relative opacity-100' : 'absolute inset-0 opacity-0')}
            >
              <Plate project={project} index={i} />
            </div>
          ))}
        </div>
      )}
    </ol>
  )
}
