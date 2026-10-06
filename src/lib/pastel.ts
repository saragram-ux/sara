/**
 * The two pastels. Lilac is primary (main buttons, active states), peach is secondary (the
 * personal moment). A pastel is always a fill with black (on-pastel) text and a black outline,
 * in both light and dark mode. Classes are written out in full so Tailwind sees them.
 */
export type Pastel = 'lilac' | 'peach'

export const pastelFill: Record<Pastel, string> = {
  lilac: 'border-on-pastel bg-lilac text-on-pastel',
  peach: 'border-on-pastel bg-peach text-on-pastel',
}

/** The acid LED on a pastel needs a black ring to read. */
export const ledOnPastel = 'outline outline-1 outline-on-pastel'
