import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  const isGhPages = mode === 'ghpages'

  return {
    base: isGhPages ? '/' : command === 'build' ? '/static/portfolio/' : '/',
    plugins: [react()],
    build: {
      outDir: isGhPages ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, '../../static/portfolio'),
      emptyOutDir: true
    },
    server: {
      port: 5000,
      strictPort: true,
      proxy: {
        '/api': 'http://localhost:8000'
      }
    }
  }
})
