import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sally/dist/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.devmmnd.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
