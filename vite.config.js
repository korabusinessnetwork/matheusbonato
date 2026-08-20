import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Config mínima de propósito: SPA de página única, build estático para a Vercel.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: false },
  build: {
    outDir: 'dist',
    // A LP é uma página só: sourcemap ajuda a depurar em produção sem custo real.
    sourcemap: true,
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.js'],
  },
})
