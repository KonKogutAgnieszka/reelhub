import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
    env: {
      TMDB_ACCESS_TOKEN: 'test_token',
      TMDB_API_URL: 'https://api.themoviedb.org/3',
      TMDB_IMAGE_URL: 'https://image.tmdb.org/t/p',
    },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './') },
  },
});
