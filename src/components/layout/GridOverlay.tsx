/** The layout grid, made visible. Toggle with G. */
export function GridOverlay() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[80]">
      <div className="page page-grid h-full">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={[
              'h-full border-x border-accent/25 bg-accent/[0.05]',
              i >= 4 ? 'hidden md:block' : '',
              i >= 8 ? 'md:hidden lg:block' : '',
            ].join(' ')}
          />
        ))}
      </div>
      <div className="page absolute inset-x-0 bottom-4">
        <span className="inline-block rounded-xs bg-accent px-2 py-1 label-mono text-paper-raised">
          <span className="md:hidden">4</span>
          <span className="hidden md:inline lg:hidden">8</span>
          <span className="hidden lg:inline">12</span> col · press G to hide
        </span>
      </div>
    </div>
  )
}
