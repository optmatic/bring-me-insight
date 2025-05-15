// Color palette
export const colors = {
  // Primary colors
  leafy: {
    DEFAULT: "#84cc16", // Lime, leafy green
    light: "#a3e635",
    dark: "#65a30d",
  },
  forest: {
    DEFAULT: "#166534", // Forest, gumtree green
    light: "#22c55e",
    dark: "#14532d",
  },
  charcoal: {
    DEFAULT: "#36454F",
    dark: "#2c3840",
  },
  offwhite: "#f9f9f9",

  // UI states
  success: "#10b981", // Emerald
  warning: "#f59e0b", // Amber
  error: "#ef4444", // Red
  info: "#3b82f6", // Blue
}

// Typography
export const typography = {
  fontFamily: {
    sans: "Alegreya Sans, sans-serif",
    mono: "IBM Plex Mono, monospace",
    serif: "Cinzel, serif",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    bold: "700",
  },
}

// Gradients
export const gradients = {
  primary: "bg-gradient-to-r from-forest to-leafy/60",
  primaryHover: "hover:from-forest hover:to-leafy/80",
  tag: "bg-gradient-to-r from-forest to-leafy/40",
  tagHover: "hover:bg-gradient-to-r hover:from-forest hover:to-leafy/60",
}

// Spacing
export const spacing = {
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
    maxWidth: "1200px",
  },
}

// Borders
export const borders = {
  radius: {
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
  width: {
    DEFAULT: "1px",
    medium: "2px",
    thick: "4px",
  },
}

// Shadows
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  logo: "4px 4px 0px 0px rgba(22,101,52,0.8)",
}

// Common component styles
export const componentStyles = {
  // Button styles
  button: {
    primary: `${gradients.primary} ${gradients.primaryHover} text-white font-mono text-xs`,
    outline: "border border-charcoal/20 text-forest hover:text-leafy hover:border-leafy font-mono text-xs",
    ghost: "font-mono text-xs text-leafy p-0 hover:bg-transparent hover:text-leafy",
  },

  // Card styles
  card: {
    DEFAULT: "border border-charcoal/20 shadow-sm",
    hover: "group hover:border-leafy/50 transition-colors",
  },

  // Tag styles
  tag: {
    DEFAULT: `${gradients.tag} ${gradients.tagHover} px-3 py-1 font-mono text-xs text-white shadow-sm`,
  },

  // Logo styles
  logo: {
    DEFAULT:
      "inline-block text-3xl font-serif font-medium text-forest uppercase tracking-tight border-2 border-forest px-6 py-2 bg-offwhite transform -skew-x-3 shadow-[4px_4px_0px_0px_rgba(22,101,52,0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all",
  },

  // Navigation styles
  nav: {
    link: {
      DEFAULT: "font-mono text-xs tracking-wider text-charcoal hover:text-leafy transition-colors",
      active: "font-mono text-xs tracking-wider text-leafy font-medium",
    },
  },

  // Heading styles
  heading: {
    h1: "font-sans text-4xl md:text-5xl font-light text-black",
    h2: "font-sans text-2xl font-light text-black",
    h3: "font-sans text-xl font-light text-black",
  },

  // Text styles
  text: {
    body: "font-mono text-sm text-charcoal/80",
    small: "font-mono text-xs text-charcoal/60",
  },
}
