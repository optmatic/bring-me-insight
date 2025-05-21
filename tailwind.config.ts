import type { Config } from "tailwindcss"
import { colors } from "./lib/styles"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        leafy: colors.leafy,
        forest: colors.forest,
        charcoal: colors.charcoal,
        offwhite: colors.offwhite,
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Space Mono", "monospace"],
        serif: ["Cinzel", "serif"],
        gothic: ["Bebas Neue", "Oswald", "sans-serif"],
      },
      boxShadow: {
        "elegant-sm": "0 2px 8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02)",
        "elegant-md": "0 4px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02)",
        "elegant-lg": "0 8px 24px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.02)",
        "modern-sm": "0 4px 12px -2px rgba(132, 204, 22, 0.15), 0 0 0 1px rgba(132, 204, 22, 0.08)",
        "modern-md": "0 8px 20px -4px rgba(132, 204, 22, 0.2), 0 0 0 1px rgba(132, 204, 22, 0.1)",
        "modern-lg": "0 12px 30px -6px rgba(132, 204, 22, 0.25), 0 0 0 1px rgba(132, 204, 22, 0.12)",
        glow: "0 0 15px rgba(132, 204, 22, 0.4)",
        "button-primary": "0 6px 0 rgba(101, 163, 13, 0.8)",
        "button-primary-hover": "0 4px 0 rgba(101, 163, 13, 0.8)",
        "button-primary-active": "0 2px 0 rgba(101, 163, 13, 0.8)",
        "button-inverse": "0 6px 0 rgba(2, 6, 23, 0.8)",
        "button-inverse-hover": "0 4px 0 rgba(2, 6, 23, 0.8)",
        "button-inverse-active": "0 2px 0 rgba(2, 6, 23, 0.8)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
