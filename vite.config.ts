
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cdyos/',  // <--- 👈 必须加这一行！ '/你的仓库名/'
})