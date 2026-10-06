import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/** The licensed fonts the first screen needs (display, text, mono), when the deploy has fetched them. */
const LICENSED_FIRST_SCREEN = ['PPRightGrotesk-CompactBlack.woff2', 'PPMori-Regular.woff2', 'PPSupplyMono-Regular.woff2']

/**
 * Preload the fonts the first screen needs, so text doesn't wait for the CSS to be parsed
 * before fonts start downloading. Licensed fonts if they're in public/fonts/pp/ at build time
 * (see scripts/fonts.sh), else the bundled free fallbacks.
 */
function preloadCriticalFonts(fallbackPatterns: RegExp[]): Plugin {
  let base = '/'
  let publicDir = 'public'
  return {
    name: 'preload-critical-fonts',
    apply: 'build',
    configResolved(config) {
      base = config.base
      publicDir = config.publicDir
    },
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        const licensed = LICENSED_FIRST_SCREEN.filter((f) => existsSync(join(publicDir, 'fonts/pp', f))).map((f) => `fonts/pp/${f}`)
        const files =
          licensed.length > 0
            ? licensed
            : Object.keys(ctx.bundle ?? {}).filter((f) => f.endsWith('.woff2') && fallbackPatterns.some((p) => p.test(f)))
        return files.map((file) => ({
          tag: 'link',
          attrs: { rel: 'preload', href: `${base}${file}`, as: 'font', type: 'font/woff2', crossorigin: '' },
          injectTo: 'head',
        }))
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // '/' by default; the GitHub Pages workflow sets BASE_PATH=/sara/
  base: process.env.BASE_PATH ?? '/',
  plugins: [
    react(),
    tailwindcss(),
    preloadCriticalFonts([/familjen-grotesk-latin-700-normal/, /geist-latin-wght-normal/]),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
