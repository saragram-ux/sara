import { MetaList } from '@/components/common/meta-list'
import { PageHeader } from '@/components/layout/page-header'
import { profile } from '@/data/profile'

/** Top of the About page: one sentence with some personality, then the professional facts. */
export function AboutIntro() {
  return (
    <PageHeader
      eyebrow={
        <>
          <span>About</span>
          <span>
            {profile.name} — {profile.location}
          </span>
        </>
      }
      title={
        <>
          Designer by trade. Builder by increasingly frequent necessity.
        </>
      }
      lead={
        <>
          <p>
            Designing interfaces since 2018. Five years at Hellofolk designing and building for clients across Europe,
            co-founder of {profile.studio.name} since 2025, a BA in Graphic Design — and, since 2026, a frontend development
            student.
          </p>
          <p className="mt-4 text-ink-muted">
            {profile.voice.approach} {profile.voice.tools}
          </p>
        </>
      }
      aside={
        <MetaList
          rows={[
            { label: 'Since', value: '2018' },
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
