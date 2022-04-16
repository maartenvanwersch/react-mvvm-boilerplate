import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...legacy({
        targets: ['defaults', 'not IE 11']
      }),
      apply: 'build'
    }
  ],
  resolve: {
    alias: [
      { find: '@components', replacement: `${path.resolve(__dirname, 'src/components')}/` },
      { find: '@contexts', replacement: `${path.resolve(__dirname, 'src/contexts')}/` },
      { find: '@hooks', replacement: `${path.resolve(__dirname, 'src/hooks')}/` },
      { find: '@my-types', replacement: `${path.resolve(__dirname, 'src/my-types')}/` },
      { find: '@pages', replacement: `${path.resolve(__dirname, 'src/pages')}/` },
      { find: '@providers', replacement: `${path.resolve(__dirname, 'src/providers')}/` },
      { find: '@stores', replacement: `${path.resolve(__dirname, 'src/stores')}/` },
    ]
  },
})
