import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate',  manifest: false })],
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toUTCString()),
  },
});
