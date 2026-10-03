/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx,html,js}",
    "./components/**/*.{ts,tsx,html,js}",
    "./app/**/*.{ts,tsx,html,js}",
    "./src/**/*.{ts,tsx,html,js}",
    "./scripts/**/*.{js,ts}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Pantone Mocha Mousse signature color tokens (Pantone 17-1230 TCX)
        mocha: {
          50: "#FAF6F2",
          100: "#F3E9DF",
          200: "#E4CFBC",
          300: "#D2B399",
          400: "#B89073",
          500: "#A3785E", // Core Mocha Mousse signature
          600: "#8C5F46",
          700: "#6E4734",
          800: "#4D3023",
          900: "#2A1A12",
          950: "#180F0B",
        },
        gold: {
          light: "#F7E7CE",
          DEFAULT: "#D4AF37",
          dark: "#AA820A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["Cinzel", "Cormorant Garamond", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        "mocha-glow": "0 10px 30px -10px rgba(163, 120, 94, 0.4)",
        "mocha-card": "0 20px 40px -15px rgba(24, 15, 11, 0.7)",
      },
    },
  },
  plugins: [],
}
