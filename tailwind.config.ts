import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        backgroundSecondary: "#141414",
        accent: "#FFD400",
        accentHover: "#FFE44D",
        textPrimary: "#FFFFFF",
        textSecondary: "#B0B0B0",
        cardBg: "#1A1A1A",
        borderColor: "#2A2A2A",
        borderColorLight: "#3A3A3A",
        // Toned down green/red for better readability
        success: "#16c784",
        successLight: "#4ade80",
        successDark: "#10a56f",
        danger: "#ea3943",
        dangerLight: "#f87171",
        dangerDark: "#c92a33",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["SF Mono", "Monaco", "Inconsolata", "Fira Code", "Droid Sans Mono", "Source Code Pro", "monospace"],
      },
      borderRadius: {
        DEFAULT: "8px",
        sm: "6px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
};

export default config;

