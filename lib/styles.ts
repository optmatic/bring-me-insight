// Color palette
export const colors = {
  // Primary colors
  leafy: {
    DEFAULT: "#84cc16", // Lime green as primary accent
    light: "#a3e635",
    dark: "#65a30d",
  },
  forest: {
    DEFAULT: "#15803d", // Deeper forest green
    light: "#22c55e",
    dark: "#166534",
  },
  charcoal: {
    DEFAULT: "#1e293b", // Darker slate gray
    dark: "#0f172a", // Darker shade
    darker: "#020617", // Even darker shade for subtle black tones
  },
  offwhite: "#f8fafc", // Slightly cooler white

  // Accent colors - now using lime as primary accent
  accent: {
    DEFAULT: "#84cc16", // Changed to lime green
    light: "#a3e635",
    dark: "#65a30d",
  },

  // UI states
  success: "#10b981", // Emerald
  warning: "#f59e0b", // Amber
  error: "#ef4444", // Red
  info: "#3b82f6", // Blue
}

// Typography
export const typography = {
  fontFamily: {
    sans: "'Inter', sans-serif", // Simplified to just Inter for consistency
    mono: "'JetBrains Mono', monospace", // Simplified to just JetBrains Mono
    serif: "'Cinzel', serif",
    gothic: "'Bebas Neue', sans-serif", // Simplified to just Bebas Neue
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
  primary: "bg-gradient-to-r from-lime-300 to-lime-500",
  primaryHover: "hover:from-lime-400 hover:to-lime-600",
  tag: "bg-gradient-to-r from-lime-300 to-lime-500",
  tagHover: "hover:bg-gradient-to-r hover:from-lime-400 hover:to-lime-600",
  accent: "bg-gradient-to-r from-lime-300 to-lime-500", // Changed to lime gradient
  accentHover: "hover:from-lime-400 hover:to-lime-600", // Changed to lime hover
  card: "bg-gradient-to-br from-white to-offwhite",
  glass: "backdrop-blur-md bg-white/70 dark:bg-charcoal-dark/70",
  darkEdge: "bg-gradient-to-b from-transparent to-charcoal-darker/5", // Added dark edge gradient
  darkCorner: "bg-gradient-to-br from-transparent to-charcoal-darker/10", // Added dark corner gradient
  // Modern futuristic gradients
  modern: "bg-gradient-to-r from-lime-400/90 via-lime-500/80 to-lime-600/90",
  modernDark: "bg-gradient-to-r from-charcoal-dark/90 via-charcoal/80 to-charcoal-dark/90",
  glow: "bg-gradient-to-r from-lime-400/20 via-lime-500/30 to-lime-400/20",
  // Inverse gradients
  inverse: "bg-gradient-to-r from-charcoal to-charcoal-dark",
  inverseHover: "hover:from-charcoal-dark hover:to-charcoal-darker",
}

// Shadows
export const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  logo: "0 10px 15px -3px rgba(2,6,23,0.2), 0 4px 6px -2px rgba(2,6,23,0.1)",
  card: "0 4px 20px rgba(2, 6, 23, 0.08)",
  hover: "0 10px 25px rgba(2, 6, 23, 0.12)",
  inner: "inset 0 2px 4px 0 rgba(2, 6, 23, 0.06)",
  // Modern futuristic shadows
  modern: {
    sm: "0 4px 12px -2px rgba(132, 204, 22, 0.15), 0 0 0 1px rgba(132, 204, 22, 0.08)",
    md: "0 8px 20px -4px rgba(132, 204, 22, 0.2), 0 0 0 1px rgba(132, 204, 22, 0.1)",
    lg: "0 12px 30px -6px rgba(132, 204, 22, 0.25), 0 0 0 1px rgba(132, 204, 22, 0.12)",
    glow: "0 0 15px rgba(132, 204, 22, 0.4)",
  },
  // Elegant shadows
  elegant: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02)",
    md: "0 4px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02)",
    lg: "0 8px 24px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.02)",
  },
}

// Common component styles
export const componentStyles = {
  // Button styles with consistent 2D design
  button: {
    // Base styles for all buttons - REMOVED 3D effects
    base: "rounded-full font-medium font-mono text-xs transition-all duration-300",

    // Primary button (lime gradient) - REMOVED 3D effects
    primary: `bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark border border-lime-400/20 hover:border-lime-500/30 shadow-sm hover:shadow-md`,

    // Outline button - REMOVED 3D effects
    outline:
      "bg-white text-forest border border-charcoal/10 hover:text-forest hover:border-lime-500/30 shadow-sm hover:shadow-md",

    // Ghost button
    ghost: "bg-transparent text-forest p-0 hover:bg-transparent hover:text-forest/80 shadow-none",

    // Accent button (same as primary for now) - REMOVED 3D effects
    accent: `bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark border border-lime-400/20 hover:border-lime-500/30 shadow-sm hover:shadow-md`,

    // Inverse button (dark gradient) - REMOVED 3D effects
    inverse: `bg-gradient-to-r from-charcoal to-charcoal-dark hover:from-charcoal-dark hover:to-charcoal-darker text-white border border-charcoal-dark/20 hover:border-charcoal-darker/30 shadow-sm hover:shadow-md`,
  },

  // Card styles
  card: {
    DEFAULT:
      "border border-charcoal/5 shadow-elegant-md overflow-hidden transition-all duration-300 backdrop-blur-[2px]",
    hover: "group hover:border-lime-400/20 hover:shadow-modern-md transition-all duration-300",
    glass:
      "backdrop-blur-md bg-white/70 border border-white/20 shadow-elegant-md border-b-charcoal-darker/10 border-r-charcoal-darker/5",
  },

  // Tag styles - Updated for better legibility
  tag: {
    DEFAULT: `bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 px-3 py-1 font-mono text-xs text-charcoal-darker font-medium shadow-elegant-sm transition-all duration-300 border-b-charcoal-darker/10 rounded-full no-underline`,
  },

  // Logo styles
  logo: {
    DEFAULT:
      "inline-block text-3xl font-gothic font-medium text-forest uppercase tracking-tight border-2 border-forest px-6 py-2 bg-offwhite transform -skew-x-3 shadow-elegant-lg hover:shadow-modern-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-300",
  },

  // Navigation styles
  nav: {
    link: {
      DEFAULT:
        "font-mono text-xs tracking-wider text-charcoal hover:text-lime-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lime-500 after:transition-all hover:after:w-full",
      active:
        "font-mono text-xs tracking-wider text-lime-500 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-lime-500",
    },
    container: "backdrop-blur-md bg-white/90 sticky top-0 z-50 border-b border-charcoal/5 shadow-elegant-sm",
  },

  // Heading styles - updated to be more modern gothic
  heading: {
    h1: "font-gothic text-4xl md:text-5xl font-bold text-charcoal-darker uppercase tracking-tight leading-tight border-b border-charcoal-darker/5 pb-2 mb-4 shadow-elegant-sm",
    h2: "font-gothic text-2xl md:text-3xl font-bold text-charcoal-darker uppercase tracking-tight leading-tight border-b border-charcoal-darker/5 pb-1 mb-3 shadow-elegant-sm",
    h3: "font-gothic text-xl md:text-2xl font-bold text-charcoal-darker uppercase tracking-tight leading-tight shadow-elegant-sm",
  },

  // Text styles
  text: {
    body: "font-mono text-sm text-charcoal/80",
    small: "font-mono text-xs text-charcoal/60",
  },
}
