import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * Preload the two fonts the first screen needs (display serif + body sans),
 * so text doesn't wait for the CSS to be parsed before fonts start downloading.
 */
function preloadCriticalFonts(patterns: RegExp[]): Plugin {
  return {
    name: 'preload-critical-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        const files = Object.keys(ctx.bundle ?? {}).filter((f) => f.endsWith('.woff2') && patterns.some((p) => p.test(f)))
        return files.map((file) => ({
          tag: 'link',
          attrs: { rel: 'preload', href: `/${file}`, as: 'font', type: 'font/woff2', crossorigin: '' },
          injectTo: 'head',
        }))
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    preloadCriticalFonts([/instrument-serif-latin-400-normal/, /geist-latin-wght-normal/]),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
