import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'

// http://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({
    rollupTypes: true
  })],
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