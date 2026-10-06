import { cn } from '@/lib/utils'

/** A tiny pixel-block critter, after the Claude Code terminal mascot. Drawn in the current text colour. */
const ROWS = ['..#######..', '..#.###.#..', '###########', '..#######..', '..#.#.#.#..']

export function ClaudeCodeMark({ className }: { className?: string }) {
  const w = ROWS[0].length
  const h = ROWS.length
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      className={cn('inline-block h-[0.72em] w-auto fill-current align-[-0.04em]', className)}
    >
      {ROWS.flatMap((row, y) => [...row].map((c, x) => (c === '#' ? <rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" /> : null)))}
    </svg>
  )
}
