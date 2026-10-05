import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RootLayout } from '@/components/layout/RootLayout'
import { runIntro } from '@/components/motion/intro'
import '@/styles/globals.css'

runIntro()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout />
  </StrictMode>,
)
