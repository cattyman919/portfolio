import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-bg": "#0B1215",
        "secondary-bg": "#FEF9F2",
        "primary-accent": "#00D4FF",
        "secondary-accent": "#A2D2DF",
      },
      animation: {
        caret: "blink 1s steps(1) infinite",
        "appear-left": "leftAppear .5s ease-in-out",
      },
      keyframes: {
        leftAppear: {
          "0%": {
            opacity: "0%",
            transform: "translateX(-50%)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateX(0)",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
