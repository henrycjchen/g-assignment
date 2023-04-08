import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { rules } from './unocss-rules';
import { fileURLToPath, URL } from 'node:url';
import { PORT } from './conf/env';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: PORT,
  },
  plugins: [
    react(),
    UnoCSS({
      rules: rules as [],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
