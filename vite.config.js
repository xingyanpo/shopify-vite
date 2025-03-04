import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import react from '@vitejs/plugin-react';
import cleanup from '@by-association-only/vite-plugin-shopify-clean';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    cleanup(),
    shopify(),
    react(),
    tailwindcss(),
  ],
  build: {
    emptyOutDir: false
  }
})
