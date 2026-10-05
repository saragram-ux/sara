import { Command } from '@phosphor-icons/react'

import { Kbd } from '@/components/ui/kbd'
import { useSite } from '@/lib/site-context'

/** The ⌘K keycaps in the header. Opens the command menu; shows a hint on hover. */
export function CommandMenuTrigger() {
  const { openCommand } = useSite()
  return (
    <button
      type="button"
      onClick={openCommand}
      aria-keyshortcuts="Meta+K Control+K"
      className="group/cmd relative flex h-8 cursor-pointer items-center gap-1 rounded-sm px-1.5 text-ink-muted transition-colors hover:bg-paper-sunken hover:text-ink"
    >
      <Kbd>
        <Command aria-hidden className="size-2.5" />
      </Kbd>
      <Kbd>K</Kbd>
      <span className="sr-only">Open command menu</span>
      <span
        aria-hidden
        className="pointer-events-none absolute top-full right-0 mt-2 rounded-xs bg-ink px-2 py-1.5 whitespace-nowrap type-label text-paper-raised opacity-0 shadow-lift transition-[opacity,translate] duration-fast -translate-y-1 group-hover/cmd:translate-y-0 group-hover/cmd:opacity-100 group-hover/cmd:delay-300"
      >
        Jump anywhere
      </span>
    </button>
  )
}
