import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toUTCString()),
  },
});
