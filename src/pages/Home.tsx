import { AboutTeaser } from '@/components/sections/AboutTeaser'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { Hero } from '@/components/sections/Hero'
import { PlaygroundTeaser } from '@/components/sections/PlaygroundTeaser'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { profile } from '@/data/profile'

export default function Home() {
  return (
    <>
      <title>{`${profile.name} — Designer who builds`}</title>
      <Hero />
      <SelectedWork />
      <AboutTeaser />
      <PlaygroundTeaser />
      <ExperienceSection />
    </>
  )
}
