import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import fs from 'fs'
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [vue(), eslintPlugin(), splitVendorChunkPlugin()],
  // base: `https://static.avast.com/my-account/my/my-account-js-subscriptions/${pjson.version}/`,
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // generate localizations files to separare dir
          let packageName = ''
          if (id.includes('localizations')) {
            const matcher = new RegExp(`localizations/jeraby/.*`)
            const match = id.match(matcher)
            if (match && match[0]) {
              // packageName = match[0].slice(match[0].indexOf('/')+1,-1)+'/'+
              const splitted = match[0].split('/')
              if (splitted.length === 5) {
                packageName = 'localizations/'+splitted[1]+'/'+splitted[2]+'/'+splitted[1]
                return packageName
              }
            }
            
          }
        },
        entryFileNames: 'jeraby.js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          // rename main css to subscriptions.css
          if (assetInfo.name === 'index.css') return 'jeraby.css'
          else return assetInfo.name
        }
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
