import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * Preload the two fonts the first screen needs (display display + body sans),
 * so text doesn't wait for the CSS to be parsed before fonts start downloading.
 */
function preloadCriticalFonts(patterns: RegExp[]): Plugin {
  let base = '/'
  return {
    name: 'preload-critical-fonts',
    apply: 'build',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        const files = Object.keys(ctx.bundle ?? {}).filter((f) => f.endsWith('.woff2') && patterns.some((p) => p.test(f)))
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
    preloadCriticalFonts([/archivo-latin-wght-normal/, /geist-latin-wght-normal/]),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
