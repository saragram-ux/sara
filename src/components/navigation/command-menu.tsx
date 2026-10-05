import { ArrowRight, Copy, EnvelopeSimple, Flask, GridFour, House, LinkedinLogo, User } from '@phosphor-icons/react'

import { usePageTransition } from '@/components/motion/transition-context'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { useSite } from '@/lib/site-context'

/** ⌘K. Lazy-loaded the first time it's opened. */
export default function CommandMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { go } = usePageTransition()
  const { toggleGrid } = useSite()

  const run = (fn: () => void) => () => {
    onOpenChange(false)
    // let the dialog release focus and scroll before acting
    window.setTimeout(fn, 60)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Where to?" />
      <CommandList>
        <CommandEmpty>Nothing here. Try “work” or “email”.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem onSelect={run(() => go('/'))}>
            <House /> home
          </CommandItem>
          <CommandItem onSelect={run(() => go('/playground'))}>
            <Flask /> playground
          </CommandItem>
          <CommandItem onSelect={run(() => go('/about'))}>
            <User /> about
          </CommandItem>
          <CommandItem onSelect={run(() => go('#contact'))}>
            <EnvelopeSimple /> contact — say hi
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Work">
          {projects.map((p) => (
            <CommandItem key={p.slug} value={`${p.title} ${p.client} ${p.disciplines.join(' ')}`} onSelect={run(() => go(`/work/${p.slug}`))}>
              <ArrowRight /> {p.title}
              <CommandShortcut>{p.year}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={run(() => navigator.clipboard?.writeText(profile.email))}>
            <Copy /> copy email address
          </CommandItem>
          <CommandItem onSelect={run(() => window.open(profile.linkedin, '_blank', 'noopener'))}>
            <LinkedinLogo /> open linkedin
          </CommandItem>
          <CommandItem onSelect={run(toggleGrid)}>
            <GridFour /> toggle the layout grid
            <CommandShortcut>G</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
