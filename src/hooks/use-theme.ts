import { useCallback, useState } from 'react'

export type Theme = 'light' | 'dark'

const KEY = 'sg:theme'
const BAR: Record<Theme, string> = { light: '#e8ebe4', dark: '#141414' }
const read = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')

/**
 * Light / dark. Dark is the default: the pre-paint script in index.html sets <html data-theme>
 * before first paint (saved choice, else dark); this keeps React in sync and saves a choice.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(read)

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', BAR[next])
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
