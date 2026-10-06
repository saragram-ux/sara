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
      className="group/cmd relative flex cursor-pointer items-center gap-1 [&_kbd]:transition-[border-color,translate,box-shadow] [&_kbd]:duration-fast hover:[&_kbd]:border-ink active:[&_kbd]:translate-y-px active:[&_kbd]:shadow-[0_1px_0_var(--rule-strong)]"
    >
      <Kbd size="lg">
        <Command aria-hidden weight="bold" className="size-3" />
      </Kbd>
      <Kbd size="lg">K</Kbd>
      <span className="sr-only">Open command menu</span>
      <span
        aria-hidden
        className="pointer-events-none absolute top-full right-0 mt-2 rounded-full bg-ink px-3 py-1.5 whitespace-nowrap type-label text-paper-raised opacity-0 shadow-lift transition-[opacity,translate] duration-fast -translate-y-1 group-hover/cmd:translate-y-0 group-hover/cmd:opacity-100 group-hover/cmd:delay-300"
      >
        Jump anywhere
      </span>
    </button>
  )
}
