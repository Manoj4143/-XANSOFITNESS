import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F8F6",
        surface: "#FFFFFF",
        surfaceVariant: "#F0EFEB",
        primary: {
          DEFAULT: "#D95E39",
          hover: "#C2512E",
        },
        "text-main": "#2D2A26",
        text: {
          main: "#2D2A26",
          muted: "#6B655F",
          subtle: "#9C948A",
        },
        border: "#E6DFD5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.05)",
        card: "0 4px 20px -2px rgba(107, 101, 95, 0.05), 0 1px 3px 0 rgba(107, 101, 95, 0.03)",
        elevated: "0 20px 40px -8px rgba(217, 94, 57, 0.08), 0 4px 12px -2px rgba(45, 42, 38, 0.04)",
      },
      borderRadius: {
        button: "9999px",
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
