import { Check, Copy } from '@phosphor-icons/react'
import { useState } from 'react'

import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

/** Copy-to-clipboard with an inline confirmation, announced to screen readers. */
export function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        'inline-flex h-11 cursor-pointer items-center gap-2 rounded-sm border border-rule-strong px-3 label-mono text-ink',
        'transition-colors duration-(--dur-base) hover:border-ink hover:bg-paper-raised',
        className,
      )}
    >
      {copied ? <Check aria-hidden weight="bold" className="size-3.5 text-live" /> : <Copy aria-hidden className="size-3.5" />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </button>
  )
}
