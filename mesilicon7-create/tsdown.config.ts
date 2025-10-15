import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'node',
  format: 'esm',
  shims: true,
  dts: {
    oxc: true,
  },
  onSuccess: async () => {
    // Optional: mark as executable after build
    console.log('✅ Build complete')
  }
})
