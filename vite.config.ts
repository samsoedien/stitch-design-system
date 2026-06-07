import path, { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ outDirs: 'lib/types' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      name: 'core',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    outDir: 'lib',
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', ...Object.keys(pkg.dependencies)],
      output: [
        {
          format: 'es',
          globals: {
            react: 'react',
          },
          dir: 'lib/esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: ({ name: fileName }) => `${fileName}.js`,
          banner: (chunk) => {
            // Only add 'use client' to .tsx files, not .ts files
            if (chunk.facadeModuleId && chunk.facadeModuleId.endsWith('.tsx')) {
              return `'use client';`
            }
            return ''
          },
        },
        {
          format: 'cjs',
          globals: {
            react: 'react',
          },
          dir: 'lib/cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: ({ name: fileName }) => `${fileName}.js`,
          banner: (chunk) => {
            // Only add 'use client' to .tsx files, not .ts files
            if (chunk.facadeModuleId && chunk.facadeModuleId.endsWith('.tsx')) {
              return `'use client';`
            }
            return ''
          },
        },
      ],
    },
  },
})
