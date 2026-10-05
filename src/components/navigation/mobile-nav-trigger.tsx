import { List } from '@phosphor-icons/react'
import { lazy, Suspense, useState } from 'react'

const MobileNav = lazy(() => import('./mobile-nav'))

/** The menu button. The sheet itself (and Radix Dialog) only loads on first tap. */
export function MobileNavTrigger() {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setLoaded(true)
          setOpen(true)
        }}
        onPointerEnter={() => setLoaded(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="-mr-2 flex h-11 cursor-pointer items-center gap-2 px-2 type-label md:hidden"
      >
        Menu
        <List aria-hidden className="size-4" />
      </button>
      {loaded && (
        <Suspense fallback={null}>
          <MobileNav open={open} onOpenChange={setOpen} />
        </Suspense>
      )}
    </>
  )
}
