/** "Skip to content" — the first thing a keyboard user reaches. Hidden until focused. */
export function SkipLink() {
  const skipToContent = () => {
    const main = document.getElementById('main')
    main?.focus()
    main?.scrollIntoView()
  }
  return (
    <button
      type="button"
      onClick={skipToContent}
      className="fixed top-2 left-2 z-[100] -translate-y-20 rounded-sm bg-ink px-3 py-2 type-label text-paper-raised focus:translate-y-0"
    >
      Skip to content
    </button>
  )
}
