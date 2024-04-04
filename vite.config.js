import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@img": path.resolve(__dirname, './src/assets/img'),
      "@components": path.resolve(__dirname, './src/components'),
      "@fonts": path.resolve(__dirname, './src/assets/fonts')
    }
  }
})
