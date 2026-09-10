import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

/** SPA fallback + .nojekyll for GitHub Pages (branch or Actions artifact). */
function githubPagesSpa(): Plugin {
  return {
    name: "github-pages-spa",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const indexHtml = path.join(dist, "index.html");
      if (!fs.existsSync(indexHtml)) return;
      fs.copyFileSync(indexHtml, path.join(dist, "404.html"));
      fs.writeFileSync(path.join(dist, ".nojekyll"), "");
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesSpa()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
