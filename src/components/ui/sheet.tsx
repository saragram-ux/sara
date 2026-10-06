import { Dialog as SheetPrimitive } from 'radix-ui'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Sheet = (props: React.ComponentProps<typeof SheetPrimitive.Root>) => <SheetPrimitive.Root data-slot="sheet" {...props} />
const SheetTrigger = (props: React.ComponentProps<typeof SheetPrimitive.Trigger>) => (
  <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
)
const SheetClose = (props: React.ComponentProps<typeof SheetPrimitive.Close>) => (
  <SheetPrimitive.Close data-slot="sheet-close" {...props} />
)

function SheetContent({
  className,
  children,
  side = 'top',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & { side?: 'top' | 'right' | 'bottom' | 'left' }) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay
        data-slot="sheet-overlay"
        className="fixed inset-0 z-50 bg-ink/25 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
      />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'fixed z-50 flex flex-col bg-paper shadow-float',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=closed]:duration-300',
          '[animation-timing-function:var(--ease-out)]',
          side === 'top' && 'inset-x-0 top-0 rounded-b-card border-b border-ink data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top',
          side === 'bottom' && 'inset-x-0 bottom-0 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom',
          side === 'right' && 'inset-y-0 right-0 h-full w-4/5 data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right',
          side === 'left' && 'inset-y-0 left-0 h-full w-4/5 data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
          className,
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
}

const SheetTitle = ({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) => (
  <SheetPrimitive.Title data-slot="sheet-title" className={cn(className)} {...props} />
)
const SheetDescription = ({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Description>) => (
  <SheetPrimitive.Description data-slot="sheet-description" className={cn(className)} {...props} />
)

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger }
