import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://clade.anmitali.dev",
  integrations: [sitemap()],
  output: "static",
});
