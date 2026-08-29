import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#16324F",
          light: "#28496C",
        },
        ocean: {
          DEFAULT: "#0E7490",
          light: "#0EA5B7",
          dark: "#0B5A70",
        },
        paper: "#FBF8F1",
        sand: "#EFE4CC",
        leaf: {
          DEFAULT: "#4C7A5A",
          light: "#6C9A78",
        },
        compass: {
          DEFAULT: "#B8552E",
          light: "#D07142",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        graticule:
          "linear-gradient(rgba(22,50,79,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,50,79,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
