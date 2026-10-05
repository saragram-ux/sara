import { LocalTime } from '@/components/common/local-time'
import { SpecPanel } from '@/components/common/spec-panel'
import { StatusDot } from '@/components/common/status-dot'
import { profile } from '@/data/profile'

/** Availability at a glance, in the same ruled panel as the currently board. */
export function StatusPanel() {
  return (
    <SpecPanel
      title="Status"
      aside={
        <>
          <StatusDot />
          {profile.availability.label}
        </>
      }
      rows={[
        { key: 'studio', label: 'Studio', value: profile.studio.name },
        { key: 'mode', label: 'Mode', value: profile.availability.detail },
        { key: 'reach', label: 'Reach', value: profile.availability.reach },
        { key: 'local', label: 'Local', value: <LocalTime /> },
      ]}
    />
  )
}
