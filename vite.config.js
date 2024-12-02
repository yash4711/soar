import { defineConfig } from "vite";
import { fileURLToPath } from "url";

import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
