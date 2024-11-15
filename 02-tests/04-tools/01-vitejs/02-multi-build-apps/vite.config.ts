import react from '@vitejs/plugin-react';
import { sync } from 'glob';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin(), ViteMinifyPlugin()],
  base: '',
  build: {
    rollupOptions: {
      input: sync('./src/**/*.html'.replace(/\\/g, '/')),
    },
  },
});
