/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050818",
        surface: "#121A42",
        surface2: "#1B2560",
        navy: "#080C24",
        accent: "#F2A33A",
        accent2: "#19A7A1",
        danger: "#B8323F",
        text: "#F3F5F9",
        muted: "#A9B0D0",
      },
      fontFamily: {
        heading: ["Unbounded", "system-ui", "sans-serif"],
        body: ["Onest", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(242,163,58,0.25), 0 10px 60px -20px rgba(242,163,58,0.9)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        fadeUp: "fadeUp 700ms ease-out both",
      }
    },
  },
  plugins: [],
}
