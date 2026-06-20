import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Minimal configuration to use pre-installed packages only
export default defineConfig({
  plugins: [
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
  }
});
