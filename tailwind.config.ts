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
      },
      keyframes: {
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
