import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { rules } from './unocss-rules';
import { fileURLToPath, URL } from 'node:url';
import { PORT } from './src/conf/env';

// todo here should be import port from @gradual/backend
const ServerUrl = `http://127.0.0.1:3000`;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: PORT,
    proxy: {
      '/api': {
        target: ServerUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
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
