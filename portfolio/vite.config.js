import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['three/tsl']
  },
  resolve: {
    alias: {
      'three/tsl': 'three/src/nodes/tsl/TSL.js'
    }
  }
})