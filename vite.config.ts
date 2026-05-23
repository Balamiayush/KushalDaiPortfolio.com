import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/](react|react-dom|react-router-dom|scheduler)[\\/]/.test(id)) {
            return "react";
          }
          if (/[\\/]node_modules[\\/](gsap|@gsap[\\/]react)[\\/]/.test(id)) {
            return "gsap";
          }
          if (/[\\/]node_modules[\\/]framer-motion[\\/]/.test(id)) {
            return "framer";
          }
          if (/[\\/]node_modules[\\/]lenis[\\/]/.test(id)) {
            return "lenis";
          }
        },
      },
    },
  },
});
