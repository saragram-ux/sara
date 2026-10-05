import { MagnifyingGlass } from '@phosphor-icons/react'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './dialog'

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return <CommandPrimitive data-slot="command" className={cn('flex h-full w-full flex-col', className)} {...props} />
}

function CommandDialog({
  title = 'Command menu',
  description = 'Jump to a page or run an action',
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & { title?: string; description?: string }) {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{description}</DialogDescription>
        <Command loop>{children}</Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="flex items-center gap-3 border-b border-rule px-4">
      <MagnifyingGlass aria-hidden className="size-4 text-ink-muted" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn('h-13 w-full bg-transparent text-body outline-none placeholder:text-ink-faint', className)}
        {...props}
      />
    </div>
  )
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn('max-h-[min(60vh,26rem)] scroll-py-2 overflow-y-auto overscroll-contain p-2', className)}
      {...props}
    />
  )
}

function CommandEmpty(props: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return <CommandPrimitive.Empty data-slot="command-empty" className="py-8 text-center meta-mono text-ink-muted" {...props} />
}

function CommandGroup({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        '[&_[cmdk-group-heading]]:label-mono [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-ink-muted',
        className,
      )}
      {...props}
    />
  )
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        'flex cursor-pointer items-center gap-3 rounded-md px-2 py-2.5 text-small outline-none select-none',
        'data-[selected=true]:bg-paper-sunken [&_svg]:size-4 [&_svg]:text-ink-muted data-[selected=true]:[&_svg]:text-accent',
        className,
      )}
      {...props}
    />
  )
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return <span data-slot="command-shortcut" className={cn('ml-auto label-mono text-ink-faint', className)} {...props} />
}

export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut }
