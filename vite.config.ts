import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { resolve } from 'path'

const outDir = resolve(__dirname, 'build')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir
  },
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/pages'),
    },
  },
  base: './',
})
