import { defineConfig } from "vite";

// http://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "countory-flag",
      entry: "src/countory-flag.ts",
      formats: ["iife"],
      fileName: () => "bundle.js",
    },
    rollupOptions: {
      output: {
        extend: true
      }
    },
  },
});