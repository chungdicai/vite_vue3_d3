import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '/',
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: [
      { find: '@', replacement: `${path.resolve(process.cwd())}/src` },
    ],
  }
})
