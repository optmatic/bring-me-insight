import type { Config } from "tailwindcss"
import { designTokens } from "./lib/design-system"

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

        // Design system colors - properly mapped
        lime: {
          50: designTokens.colors.primary.lime[50],
          100: designTokens.colors.primary.lime[100],
          200: designTokens.colors.primary.lime[200],
          300: designTokens.colors.primary.lime[300],
          400: designTokens.colors.primary.lime[400],
          500: designTokens.colors.primary.lime[500],
          600: designTokens.colors.primary.lime[600],
          700: designTokens.colors.primary.lime[700],
          800: designTokens.colors.primary.lime[800],
          900: designTokens.colors.primary.lime[900],
        },
        forest: {
          50: designTokens.colors.primary.forest[50],
          100: designTokens.colors.primary.forest[100],
          200: designTokens.colors.primary.forest[200],
          300: designTokens.colors.primary.forest[300],
          400: designTokens.colors.primary.forest[400],
          500: designTokens.colors.primary.forest[500],
          600: designTokens.colors.primary.forest[600],
          700: designTokens.colors.primary.forest[700],
          800: designTokens.colors.primary.forest[800],
          900: designTokens.colors.primary.forest[900],
        },
        charcoal: {
          50: designTokens.colors.neutral.charcoal[50],
          100: designTokens.colors.neutral.charcoal[100],
          200: designTokens.colors.neutral.charcoal[200],
          300: designTokens.colors.neutral.charcoal[300],
          400: designTokens.colors.neutral.charcoal[400],
          500: designTokens.colors.neutral.charcoal[500],
          600: designTokens.colors.neutral.charcoal[600],
          700: designTokens.colors.neutral.charcoal[700],
          800: designTokens.colors.neutral.charcoal[800],
          900: designTokens.colors.neutral.charcoal[900],
          950: designTokens.colors.neutral.charcoal[950],
        },
        offwhite: designTokens.colors.neutral.offwhite,

        // Legacy color names for backward compatibility
        leafy: designTokens.colors.primary.lime[500],
        "forest-dark": designTokens.colors.primary.forest[800],
        "charcoal-dark": designTokens.colors.neutral.charcoal[900],
        "charcoal-darker": designTokens.colors.neutral.charcoal[950],

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
        // Design system fonts
        sans: [designTokens.typography.fontFamily.sans],
        body: [designTokens.typography.fontFamily.body],
        heading: [designTokens.typography.fontFamily.heading],
        display: [designTokens.typography.fontFamily.display],
        gothic: [designTokens.typography.fontFamily.heading],
        mono: [designTokens.typography.fontFamily.mono],
        bokor: [designTokens.typography.fontFamily.logo],
      },
      fontSize: designTokens.typography.fontSize,
      fontWeight: designTokens.typography.fontWeight,
      lineHeight: designTokens.typography.lineHeight,
      letterSpacing: designTokens.typography.letterSpacing,
      spacing: designTokens.spacing,
      borderRadius: designTokens.borderRadius,
      boxShadow: {
        ...designTokens.boxShadow,
        "elegant-sm": designTokens.boxShadow.elegant.sm,
        "elegant-md": designTokens.boxShadow.elegant.md,
        "elegant-lg": designTokens.boxShadow.elegant.lg,
        "modern-sm": designTokens.boxShadow.modern.sm,
        "modern-md": designTokens.boxShadow.modern.md,
        "modern-lg": designTokens.boxShadow.modern.lg,
        glow: designTokens.boxShadow.modern.glow,
      },
      transitionDuration: {
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
