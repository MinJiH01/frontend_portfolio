import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProd ? '/frontend_portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
})