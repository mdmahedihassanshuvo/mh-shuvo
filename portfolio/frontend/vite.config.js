import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/static/portfolio/' : '/',
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../../static/portfolio'),
    emptyOutDir: true
  },
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
}))
