import type { Icon } from '@phosphor-icons/react'

/** A link out of the site (or into it). */
export interface ExternalLink {
  label: string
  href: string
}

/**
 * An image. If `src` is missing, the site renders a typeset placeholder
 * plate instead — so the layout holds until real images exist.
 */
export interface Figure {
  src?: string
  alt: string
  caption: string
  /** CSS aspect-ratio, e.g. '16 / 10'. Defaults to 16 / 10. */
  aspect?: string
}

/** Settings for the generated "spec sheet" visual used when there is no cover image. */
export interface PlateSpec {
  mark: string
  icon: Icon
  tone: 'paper' | 'ink' | 'sand'
}

export interface CaseSection {
  id: string
  label: string
  title?: string
  body: string[]
  /** A short list shown as technical/design notes beside the text. */
  notes?: { label: string; items: string[] }
  figure?: Figure
  /** Draft sections only render in development, as a reminder of what to write. */
  draft?: boolean
}

export type ProjectStatus = 'shipped' | 'ongoing' | 'archived'

export interface Project {
  slug: string
  title: string
  client: string
  /** e.g. the studio the work was done through */
  via?: string
  /** Display range, e.g. '2021—2024' */
  year: string
  role: string
  location?: string
  disciplines: string[]
  /** One line, used in lists */
  summary: string
  /** Lead paragraph on the case page */
  description: string
  tools: string[]
  cover?: Figure
  plate: PlateSpec
  sections: CaseSection[]
  links?: ExternalLink[]
  status: ProjectStatus
}

export type PlaygroundItemStatus = 'live' | 'building' | 'idea' | 'paused'

export interface PlaygroundItem {
  id: string
  title: string
  description: string
  stack: string[]
  status: PlaygroundItemStatus
  /** Started, as 'YYYY-MM' */
  date: string
  demoUrl?: string
  repoUrl?: string
  thumbnail?: Figure
  /** Key of an interactive demo rendered inline (see components/playground) */
  embed?: 'easing-lab' | 'type-specimen' | 'grid'
  /** Draft items only render in development. */
  draft?: boolean
}

export interface ExperienceEntry {
  company: string
  role: string
  start: string
  end: string | 'now'
  location: string
  description: string
  /** Links the role to a case study */
  projectSlug?: string
  /** Groups early, non-design roles into one compact block */
  group?: 'earlier'
}

export interface EducationEntry {
  school: string
  programme: string
  start: string
  end: string
  note?: string
}

/** How at-home I am with a tool. Kept honest on purpose. */
export type SkillLevel = 'fluent' | 'building' | 'exploring'

export interface SkillGroup {
  label: string
  items: { name: string; level: SkillLevel }[]
}

export interface NowItem {
  verb: string
  what: string
  detail?: string
}
