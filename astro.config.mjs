// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), icon()],

  fonts: [
    {
      provider: fontProviders.local(),
      name: "HomeVideo",
      cssVariable: "--font-pixel",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/HomeVideo.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],

  image: {
    domains: ["bucket.senop.dev"],
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ["react", "react-dom"],
    },
  },
});

