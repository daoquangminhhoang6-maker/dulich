import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F3A2E",
          light: "#2E5641",
        },
        gold: {
          DEFAULT: "#B8934B",
          light: "#D4B978",
        },
        cream: {
          DEFAULT: "#F7F3EA",
          dark: "#EFE8D8",
        },
        ink: "#1A1A1A",
      },
      fontFamily: {
        heading: ["var(--font-cardo)", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
