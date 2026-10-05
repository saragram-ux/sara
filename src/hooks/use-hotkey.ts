import { useEffect, useLayoutEffect, useRef } from 'react'

const isTyping = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))

/**
 * Listen for a single key (optionally with ⌘/Ctrl).
 * Ignores keypresses while the user is typing in a field.
 */
export function useHotkey(key: string, handler: (e: KeyboardEvent) => void, opts: { mod?: boolean } = {}) {
  const ref = useRef(handler)
  useLayoutEffect(() => {
    ref.current = handler
  })
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== key.toLowerCase()) return
      const mod = e.metaKey || e.ctrlKey
      if (opts.mod ? !mod : mod || e.altKey) return
      if (!opts.mod && isTyping(e.target)) return
      ref.current(e)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [key, opts.mod])
}
