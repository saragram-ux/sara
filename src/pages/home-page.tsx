import { profile } from '@/data/profile'
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
      <title>{`${profile.name} — Designer who builds`}</title>
      <SectionHero />
      <SectionProjects />
      <SectionAbout />
      <SectionPlayground />
      <SectionExperience variant="summary" index="04" />
      <SectionContact />
    </>
  )
}
