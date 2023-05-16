import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    server: {
      open: true,
      watch: {
        usePolling: true,
      }
    },
    define: { 'process.env': {} },
    build: { outDir: 'build' },
    plugins: [react({ include: '**/*.tsx' })],
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      alias: {
          '@components': resolve(__dirname, 'src/components'),
          '@services': resolve(__dirname, 'src/services'),
          '@utils': resolve(__dirname, 'src/utils'),
          '@hooks': resolve(__dirname, 'src/hooks'),
      },
    },
})
