// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],

  image: {
    domains: ["bucket.senop.dev"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

