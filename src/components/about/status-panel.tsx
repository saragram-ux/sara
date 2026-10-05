import { LocalTime } from '@/components/common/local-time'
import { StatusDot } from '@/components/common/status-dot'
import { profile } from '@/data/profile'

/** Availability at a glance — the one iOS-flavoured object on the home page. */
export function StatusPanel() {
  const rows = [
    { label: 'Studio', value: profile.studio.name },
    { label: 'Mode', value: profile.availability.detail },
    { label: 'Reach', value: profile.availability.reach },
    { label: 'Local', value: <LocalTime /> },
  ]
  return (
    <div className="overflow-hidden rounded-lg border border-rule bg-paper-raised shadow-paper">
      <div className="flex items-center justify-between border-b border-rule px-4 py-3">
        <span className="type-label text-ink-muted">Status</span>
        <span className="flex items-center gap-2 type-label">
          <StatusDot />
          {profile.availability.label}
        </span>
      </div>
      <dl className="divide-y divide-rule px-4 text-small">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 py-2.5">
            <dt className="type-label text-ink-muted">{row.label}</dt>
            <dd className="text-right">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
