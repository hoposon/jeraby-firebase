import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin({ cache: false })],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    }
  },
  server: {
    port: 5001,
    fs: {
      strict: false,
    },
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    },
  },
  preview: {
    port: 5001
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src'),
      },
    ],
  },
  // css: {
  //   preprocessorOptions: {
  //     stylus: {
  //       imports: [resolve('node_modules/@avast/common/styles/variables')],
  //     },
  //   },
  // },
})
