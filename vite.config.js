import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        servicos: resolve(__dirname, 'servicos.html'),
        consultoria: resolve(__dirname, 'consultoria.html'),
      },
    },
  },
});