import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4141,
  },
  define: {
    "import.meta.env.VITE_API": JSON.stringify(process.env.API_URI),
    css: {
      postcss: "./postcss.config.mjs",
    },
  },
});
