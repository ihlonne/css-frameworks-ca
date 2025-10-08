import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        feed: './feed/index.html',
        profile: './profile/index.html',
      },
    },
    outDir: 'dist',
  },
});
