/// <reference types="vitest/config" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@/lib/utils", replacement: path.resolve(__dirname, "registry/xr1/lib/utils.ts") },
      { find: "@/components/ui", replacement: path.resolve(__dirname, "registry/xr1/ui") },
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.ts",
    include: ["tests/unit/**/*.test.{ts,tsx}"],
  },
})
