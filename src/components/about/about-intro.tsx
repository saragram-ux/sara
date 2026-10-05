import { MetaList } from '@/components/common/meta-list'
import { PageHeader } from '@/components/layout/page-header'
import { brand } from '@/data/brand'
import { profile } from '@/data/profile'

/** Top of the About page: hello, one-paragraph positioning, quick facts. */
export function AboutIntro() {
  return (
    <PageHeader
      eyebrow={
        <>
          <span>About</span>
          <span>{profile.location}</span>
        </>
      }
      title={
        <>
          Hi, I’m <em>Sara.</em>
        </>
      }
      lead={
        <>
          <p>UI and product designer, co-founder of {profile.studio.name}, and — since 2026 — a frontend development student.</p>
          <p className="mt-4 text-ink-muted">
            {profile.voice.approach} {profile.voice.tools}
          </p>
          <p className="mt-4 text-ink-muted">{brand.nameNote}</p>
        </>
      }
      aside={
        <MetaList
          rows={[
            { label: 'Known as', value: <span className="font-serif text-[1.15em]">{brand.name}</span> },
            { label: 'Studio', value: profile.studio.name },
            { label: 'Works', value: profile.availability.reach },
            { label: 'Open to', value: profile.availability.detail },
            { label: 'Speaks', value: 'Swedish, English' },
          ]}
        />
      }
    />
  )
}
