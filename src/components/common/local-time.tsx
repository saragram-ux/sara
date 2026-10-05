import { profile } from '@/data/profile'
import { useLocalTime } from '@/hooks/use-local-time'
import { cn } from '@/lib/utils'

/** My local time (HH:MM, blinking colon, zone). Updates by itself. */
export function LocalTime({ mutedZone = false }: { mutedZone?: boolean }) {
  const time = useLocalTime(profile.timeZone)
  return (
    <span className="tabular-nums">
      {time.hours}
      <span className="animate-blink">:</span>
      {time.minutes} <span className={cn(mutedZone && 'text-ink-muted')}>{time.zone}</span>
    </span>
  )
}
