import { AboutIntro } from '@/components/about/about-intro'
import { SectionCapabilities } from '@/sections/section-capabilities'
import { SectionContact } from '@/sections/section-contact'
import { SectionCraft } from '@/sections/section-craft'
import { SectionDisciplines } from '@/sections/section-disciplines'
import { SectionEducation } from '@/sections/section-education'
import { SectionExperience } from '@/sections/section-experience'

/** /about */
export default function AboutPage() {
  return (
    <>
      <title>About — Sara Gramstad</title>
      <AboutIntro />
      <SectionDisciplines />
      <SectionCraft />
      <SectionExperience variant="full" index="03" />
      <SectionCapabilities />
      <SectionEducation />
      <SectionContact />
    </>
  )
}
