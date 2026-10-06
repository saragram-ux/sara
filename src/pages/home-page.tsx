import { Ticker } from '@/components/instrument/ticker'
import { pageTitle } from '@/data/brand'
import { SectionAbout } from '@/sections/section-about'
import { SectionContact } from '@/sections/section-contact'
import { SectionExperience } from '@/sections/section-experience'
import { SectionHero } from '@/sections/section-hero'
import { SectionPlayground } from '@/sections/section-playground'
import { SectionProjects } from '@/sections/section-projects'

/** / */
export default function HomePage() {
  return (
    <>
      <title>{pageTitle()}</title>
      <SectionHero />
      <Ticker items={['sara lou', 'ui / product / frontend', 'open for work', 'östersund, sweden', 'designed in figma', 'built in webflow']} />
      <SectionProjects />
      <SectionAbout />
      <SectionPlayground />
      <SectionExperience variant="summary" index="04" />
      <SectionContact />
    </>
  )
}
