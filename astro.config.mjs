import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jcheng328.github.io",
  base: process.env.PAGES_BASE_PATH || "/",
});
