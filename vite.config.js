import { defineConfig } from 'vite';

export default defineConfig({
  base: '/personal-resume-template/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
