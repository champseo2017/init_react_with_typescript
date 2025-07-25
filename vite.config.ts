import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Services': path.resolve(__dirname, './src/services'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Hooks': path.resolve(__dirname, './src/hooks'),
      '@Types': path.resolve(__dirname, './src/types'),
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Styles': path.resolve(__dirname, './src/styles'),
      '@Pages': path.resolve(__dirname, './src/pages'),
    }
  },
  build: {
    sourcemap: false,
  }
})
