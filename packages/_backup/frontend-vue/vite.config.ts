import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import UnoCSS from '@unocss/vite'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    UnoCSS({
      rules: [
        ['font-14', {
          'font-family': 'Inter',
          'font-style': 'normal',
          'font-weight': 600,
          'font-size': '14px',
          'line-height': '17px',
        }],
        ['font-heading-h6', {
          'font-family': 'Inter',
          'font-style': 'normal',
          'font-weight': 500,
          'font-size': '14px',
          'line-height': '20px',
        }],
        ['font-15', {
          'font-family': 'Inter',
          'font-style': 'normal',
          'font-weight': 500,
          'font-size': '15px',
          'line-height': '160%',
        }],
        ['font-15-heavy', {
          'font-family': 'Inter',
          'font-style': 'normal',
          'font-weight': 600,
          'font-size': '15px',
          'line-height': '23px',
        }],
        ['font-heading-h5', {
          'font-family': 'Inter',
          'font-style': 'normal',
          'font-weight': 500,
          'font-size': '16px',
          'line-height': '23px',
        }],
        ['font-18', {
          'font-family': 'Inter',
          'font-style': 'normal',
          'font-weight': 500,
          'font-size': '18px',
          'line-height': '22px',
        }],
        ['color-text-primary', {
          color: '#C9C7D0',
        }],
        ['color-hint-light', {
          color: '#797B85',
        }],
        ['color-hint', {
          color: '#929699',
        }],
        ['color-active', {
          color: '#04B17D',
        }],
        ['color-text-secondary', {
          color: '#7B798F'
        }],
        ['border-text-secondary', {
          color: '#7B798F'
        }],
        ['bg-main', {
          background: '#0C0E13'
        }],
        ['bg-divider', {
          background: '#26252D'
        }],
        ['bg-placeholder', {
          background: 'rgba(255, 255, 255, 0.05)'
        }],
        ['bg-channel-list', {
          background: '#1D1C21',
        }]
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
