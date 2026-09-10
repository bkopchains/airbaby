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
    // file:../airbaby-ui has its own React 19 install; without this, production
    // ends up with two Reacts and Router/Toast useContext() returns null.
    dedupe: ["react", "react-dom", "react-router", "react/jsx-runtime"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "react-router": path.resolve(__dirname, "node_modules/react-router"),
      "react/jsx-runtime": path.resolve(
        __dirname,
        "node_modules/react/jsx-runtime.js",
      ),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
