import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/users": "http://192.168.1.45:3000/",
    },
  },
  plugins: [react()],
});
