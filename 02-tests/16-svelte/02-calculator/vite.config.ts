import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
/// import path from "path";

// const scssVariablesPath = path.resolve(__dirname, "");

export default defineConfig({
  plugins: [sveltekit()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/theme.scss";`,
      },
    },
  },
});
