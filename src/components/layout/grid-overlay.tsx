import { Container } from './container'
import { Grid } from './grid'

/** The layout grid, made visible. Toggle with G, or tap the label to hide it (phones and tablets have no G). */
export function GridOverlay({ onHide }: { onHide: () => void }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[80]">
      <Container aria-hidden className="h-full">
        <Grid className="h-full">
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
        </Grid>
      </Container>
      <Container className="absolute inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={onHide}
          className="pointer-events-auto inline-flex min-h-8 cursor-pointer items-center bg-accent px-2 type-label text-on-pastel"
        >
          <span className="md:hidden">4</span>
          <span className="hidden md:inline lg:hidden">8</span>
          <span className="hidden lg:inline">12</span>&nbsp;col ·&nbsp;
          <span className="pointer-coarse:hidden">press G to hide</span>
          <span className="hidden pointer-coarse:inline">tap to hide</span>
        </button>
      </Container>
    </div>
  )
}
