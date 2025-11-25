import path from 'path';
import { defineConfig } from 'vite'; // loadEnv is no longer needed
import react from '@vitejs/plugin-react';

// Vite automatically loads environment variables prefixed with VITE_
// (e.g., VITE_GEMINI_API_KEY) and exposes them via import.meta.env.

export default defineConfig({
  // We can remove the destructuring ({ mode }) and loadEnv since they are not used anymore.
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});