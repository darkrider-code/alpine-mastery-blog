import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0f1e",
          secondary: "#0f172a",
          card: "#1e293b",
        },
        accent: {
          DEFAULT: "#38bdf8",
          hover: "#0ea5e9",
        },
        border: "#334155",
        "text-secondary": "#94a3b8",
      },
    },
  },
};

export default config;
