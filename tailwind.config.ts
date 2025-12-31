import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom sky and cloud colors
        sky: {
          DEFAULT: "#e5f2ff",
        },
        cloud: {
          light: "#E4F0FF",
          medium: "#D6E8FF",
          dark: "#C9DEFF",
        },
        // Navigation link color
        "nav-link": {
          DEFAULT: "#8C97A8",
        },
        // Button colors
        "button-primary-bg": {
          DEFAULT: "var(--button-primary-bg)",
        },
        "button-primary-text": {
          DEFAULT: "var(--button-primary-text)",
        },
        // Feature badge colors
        "feature-badge-text": {
          DEFAULT: "var(--feature-badge-text)",
        },
        "feature-badge-bg": {
          DEFAULT: "var(--feature-badge-bg)",
        },
        // Heading colors
        "heading-primary": {
          DEFAULT: "var(--heading-primary)",
        },
        "heading-secondary": {
          DEFAULT: "var(--heading-secondary)",
        },
        // Description color
        "description-text": {
          DEFAULT: "var(--description-text)",
        },
        // Separator color
        "separator": {
          DEFAULT: "var(--separator-color)",
        },
      },
      keyframes: {
        "fade-out-fast": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden", pointerEvents: "none" },
        },
      },
      animation: {
        "fade-out-fast": "fade-out-fast 2.0s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

