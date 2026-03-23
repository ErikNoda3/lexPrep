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
        lp: {
          bg: "var(--lp-bg)",
          surface: "var(--lp-surface)",
          border: "var(--lp-border)",
          muted: "var(--lp-text-muted)",
          accent: "var(--lp-accent)",
          "accent-soft": "var(--lp-accent-soft)",
        },
      },
      fontFamily: {
        serif: ["var(--serif)", "Georgia", "serif"],
        sans: ["var(--sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "var(--lp-shadow-sm)",
        card: "var(--lp-shadow-md)",
        lift: "var(--lp-shadow-lg)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.45s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-subtle":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(180, 83, 9, 0.08), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(30, 58, 138, 0.06), transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
