import { useEffect, useState } from 'react'

/** Current time in a given IANA zone, refreshed every 15 seconds. */
export function useLocalTime(timeZone: string) {
  const format = () => {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    }).formatToParts(new Date())
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
    return { hours: get('hour'), minutes: get('minute'), zone: get('timeZoneName') }
  }
  const [time, setTime] = useState(format)
  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 15_000)
    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])
  return time
}
