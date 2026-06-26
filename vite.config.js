import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'force-exit-after-build',
      apply: 'build',
      closeBundle() {
        process.exit(0);
      }
    }
  ],
  server: {
    port: 3000,
    open: true
  }
})