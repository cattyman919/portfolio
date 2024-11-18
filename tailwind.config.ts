import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "xl-seno":
          "0 15px 20px -6px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
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
        path: "dash 2s ease-in-out infinite alternate",
        arrow: "arrow_animation 2s linear infinite",
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
        dash: {
          from: {
            "fill-opacity": "0",
            "stroke-opacity": "1",
          },
          to: {
            "stroke-dashoffset": "0",
            "fill-opacity": "1",
            "stroke-opacity": "0",
          },
        },
        arrow_animation: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(-10px)",
          },
          "80%": {
            opacity: "1",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
