import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url"; // Use this instead of 'path'

import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // This maps "@" to the "src" directory
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
