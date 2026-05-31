import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/community': 'http://localhost:5000',
      '/compare': 'http://localhost:3000',
    },
  },
})
