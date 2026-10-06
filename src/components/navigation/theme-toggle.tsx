import { Moon, Sun } from '@phosphor-icons/react'

import { keycap } from '@/components/ui/kbd'
import { useSite } from '@/lib/site-context'
import { cn } from '@/lib/utils'

/** Light / dark, as a round icon button in the header. Shows the mode you'd switch to. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useSite()
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={dark}
      aria-label="Dark mode"
      title={dark ? 'Switch to light' : 'Switch to dark'}
      className={cn(
        'grid size-8 shrink-0 cursor-pointer place-items-center rounded-full transition-[border-color,translate,box-shadow] duration-fast hover:border-ink active:translate-y-px active:shadow-[0_1px_0_var(--rule-strong)]',
        keycap,
        className,
      )}
    >
      {dark ? <Sun aria-hidden weight="bold" className="size-3.5" /> : <Moon aria-hidden weight="bold" className="size-3.5" />}
    </button>
  )
}
