import { Check, Copy } from '@phosphor-icons/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

/** Copy-to-clipboard with an inline confirmation, announced to screen readers. */
export function CopyEmailButton({ className }: { className?: string }) {
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
    <Button type="button" variant="outline" onClick={copy} className={className}>
      {copied ? <Check aria-hidden weight="bold" className="size-4" /> : <Copy aria-hidden weight="bold" className="size-4" />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </Button>
  )
}
