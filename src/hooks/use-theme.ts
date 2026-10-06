import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const KEY = 'sg:theme'
const read = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

/**
 * Light / dark. The pre-paint script in index.html sets <html data-theme> before first paint
 * (saved choice, else the system setting); this keeps React in sync and saves a choice.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(read)

  // Follow the system setting until someone picks one.
  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      let saved: string | null = null
      try {
        saved = localStorage.getItem(KEY)
      } catch {
        /* storage blocked: just follow the system */
      }
      if (saved) return
      document.documentElement.dataset.theme = mq.matches ? 'dark' : 'light'
      setThemeState(read())
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* storage blocked: the choice lasts for this page view */
    }
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => setTheme(read() === 'dark' ? 'light' : 'dark'), [setTheme])

  return { theme, setTheme, toggleTheme }
}
