import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-contrast": "var(--accent-contrast)",
        amber: "var(--amber)",
        emerald: "var(--emerald)",
        "nav-glass": "var(--nav-glass)",
        "surface-muted": "var(--surface-muted)",
        "surface-2-muted": "var(--surface-2-muted)",
        "accent-muted-border": "var(--accent-muted-border)",
        glass: "var(--glass)",
        "glass-border": "var(--glass-border)",
        "glass-highlight": "var(--glass-highlight)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        hero: [
          "clamp(2.4rem, 5.2vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        section: [
          "clamp(1.6rem, 3vw, 2.1rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        base2: ["1.05rem", { lineHeight: "1.7" }],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        statusPulse: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        gridDrift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 -120px" },
        },
      },
      animation: {
        statusPulse: "statusPulse 2.2s ease-out infinite",
      },
      transitionTimingFunction: {
        "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
