import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/your-repo-name/', // 👈 set your actual repo name here (important for GitHub Pages)
  plugins: [react()],
  build: {
    outDir: 'kh-Munir.github.io' // optional, default is 'dist'
  }
})
