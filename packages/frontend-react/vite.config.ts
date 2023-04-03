import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import UnoRules from './unocss-rules';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    UnoCSS({
      rules: UnoRules,
    }),
  ],
})
