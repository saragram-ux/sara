import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { SiteLayout } from '@/components/layout/site-layout'
import { runIntro } from '@/components/motion/intro'
import '@/styles/globals.css'
import '@/styles/fonts-pp.css'

runIntro()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteLayout />
  </StrictMode>,
)
