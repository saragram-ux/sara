import { Fragment, type ReactNode } from 'react'

/** A standalone capital I: "I", "I’m", "I've" — not the I in "Index". */
const PRONOUN_I = /\bI(?=[\s’',.!?;:]|$)/g

/**
 * Display type is lowercase, but the word "I" stays a capital: "hi, I’m sara. I design websites".
 * Wraps each standalone capital I in a span that opts out of the lowercase transform.
 * Non-string nodes pass through untouched.
 */
export function keepI(node: ReactNode): ReactNode {
  if (typeof node !== 'string' || !PRONOUN_I.test(node)) return node
  PRONOUN_I.lastIndex = 0
  const parts = node.split(PRONOUN_I)
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <span className="normal-case">I</span>}
    </Fragment>
  ))
}
