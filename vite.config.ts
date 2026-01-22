import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/Kashif-Iqbal/',        // <-- set the repo name base
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': 'AIzaSyB0eYqDcEPt9qHd1zHMAEp5CZwtzcX6lX0',
        'process.env.GEMINI_API_KEY': 'AIzaSyB0eYqDcEPt9qHd1zHMAEp5CZwtzcX6lX0'
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
