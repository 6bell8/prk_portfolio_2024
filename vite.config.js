// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper/react', 'swiper/css', 'swiper/css/navigation', 'swiper/css/pagination'],
  },
});
