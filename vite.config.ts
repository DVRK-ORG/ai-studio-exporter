import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Custom Vite plugin to strip `crossorigin` attributes from HTML.
 * Chrome Web Store scanner flags these as potential remote code loading.
 */
function stripCrossorigin() {
  return {
    name: 'strip-crossorigin',
    enforce: 'post' as const,
    transformIndexHtml(html: string) {
      return html.replace(/ crossorigin/g, '');
    }
  };
}

// This config ensures we build both the Popup (index.html) and the Content Script
export default defineConfig({
  plugins: [
    react(),
    stripCrossorigin(),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html'),
        content: resolve(__dirname, 'src/content.ts'),
      },
      output: {
        entryFileNames: 'src/[name].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      },
      plugins: [
        // Neutralize jspdf's hardcoded CDN URL for pdfobject.
        // Chrome Web Store scanner flags this as "remotely hosted code".
        replace({
          preventAssignment: true,
          values: {
            'https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js': 'data:text/javascript,',
          }
        })
      ]
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});