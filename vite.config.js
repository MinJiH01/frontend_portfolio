import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5172,      // 원하는 포트번호
    strictPort: true // 이미 사용 중이면 오류 발생
  },
});