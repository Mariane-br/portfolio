import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        "dark-bg": "#0a0e17",
        "cyan-glow": "#22d3ee",
        "fuchsia": "#e879f9",
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 211, 238, 0.25), 0 0 40px rgba(34, 211, 238, 0.1)",
        "glow-sm": "0 0 15px rgba(34, 211, 238, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
