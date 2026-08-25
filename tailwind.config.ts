import type { Config } from "tailwindcss";

const config: Config = {
content: [
"./app/**/*.{ts,tsx}",
"./components/**/*.{ts,tsx}",
],
theme: {
extend: {
colors: {
brand: {
50: "#eef4ff",
  100: "#d9e6ff",
  200: "#b3ccff",
  300: "#84acff",
  400: "#5c8dff",
  500: "#3366ff",
  600: "#254edb",
  700: "#1c3caf",
  800: "#182f85",
  900: "#16265f",
  },
  success: {
50: "#effaf3",
  500: "#1f9d55",
  700: "#166534",
  },
  warning: {
50: "#fffaeb",
  500: "#d97706",
  700: "#92400e",
  },
  error: {
50: "#fef2f2",
  500: "#dc2626",
  700: "#991b1b",
  },
  info: {
50: "#eff6ff",
  500: "#2563eb",
  700: "#1d4ed8",
  },
  neutral: {
50: "#f8fafc",
100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
  },
},
fontFamily: {
sans: ["var(--font-inter)", "system-ui", "sans-serif"],
  },
  borderRadius: {
lg: "0.75rem",
  xl: "1rem",
},
  boxShadow: {
card: "0 1px 2px 0 rgb(15 23 42 / 0.06), 0 1px 3px 0 rgb(15 23 42 / 0.08)",
  },
},
},
plugins: [],
  };

export default config;
