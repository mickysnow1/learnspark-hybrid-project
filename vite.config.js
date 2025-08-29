import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- THIS IS THE CRITICAL FIX ---
  // This tells Vite what the final sub-folder will be on GitHub.
  base: '/learnspark-hybrid-project/', 
  build: {
    outDir: 'docs' 
  }
})
