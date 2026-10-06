/**
 * The three pastels and what they mean. A pastel is always a fill with black (on-pastel) text and a
 * black outline, in both light and dark mode. Classes are written out in full so Tailwind sees them.
 */
export type Pastel = 'lavender' | 'taffy' | 'peach'

/** lavender = work · taffy = playground · peach = you / contact */
export const pastelFill: Record<Pastel, string> = {
  lavender: 'border-on-pastel bg-lavender text-on-pastel',
  taffy: 'border-on-pastel bg-taffy text-on-pastel',
  peach: 'border-on-pastel bg-peach text-on-pastel',
}

/** The acid LED on a pastel needs a black ring to read. */
export const ledOnPastel = 'outline outline-1 outline-on-pastel'
