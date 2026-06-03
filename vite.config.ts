import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Build multipage: a LP (index.html) e a Galeria (galeria.html) são duas
// entradas. Gera dist/galeria.html, servido em /galeria pelo Firebase Hosting
// (cleanUrls). Mantém HTML estático real — robusto p/ link aberto a frio.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        galeria: resolve(__dirname, 'galeria.html'),
      },
    },
  },
})
