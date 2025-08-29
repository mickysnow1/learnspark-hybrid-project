import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // UPDATED: Changed from '../docs' to 'docs' to build inside the project
    outDir: 'docs' 
  }
})
