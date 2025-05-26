// =============================================================================
// DESIGN SYSTEM CONFIGURATION
// =============================================================================
// This file contains all design tokens, colors, typography, spacing, and
// component styles for the entire application. Update values here to change
// the design system globally.

// =============================================================================
// DESIGN TOKENS
// =============================================================================

export const designTokens = {
  // Color Palette
  colors: {
    // Primary Brand Colors
    primary: {
      lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264", // Main lime green
        400: "#a3e635",
        500: "#84cc16", // Primary brand color
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#365314",
        900: "#1a2e05",
      },
      forest: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a", // Secondary brand color
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
    },

    // Neutral Colors
    neutral: {
      charcoal: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b", // Main charcoal
        900: "#0f172a", // Dark charcoal
        950: "#020617", // Darkest charcoal
      },
      offwhite: "#f8fafc",
      white: "#ffffff",
    },

    // Semantic Colors
    semantic: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#3b82f6",
    },

    // Social Media Brand Colors
    social: {
      twitter: "#1DA1F2",
      facebook: "#4267B2",
      instagram: "#E1306C",
      youtube: "#FF0000",
    },

    // Layout-specific Colors
    layout: {
      // Footer colors
      footer: {
        primary: "#16a34a", // forest-600
        secondary: "#166534", // forest-800
        accent: "#bef264", // lime-300
        text: "#ffffff",
        textMuted: "#ffffff99", // white with 60% opacity
      },

      // Header colors
      header: {
        background: "#ffffff",
        backgroundBlur: "#ffffff90", // white with 90% opacity
        border: "#e2e8f010", // charcoal-200 with 10% opacity
      },
    },

    // Background Colors - Updated for full coverage
    background: {
      primary: "#ffffff", // Pure white
      secondary: "#f8fafc", // Off-white (charcoal-50)
      tertiary: "#f1f5f9", // Light gray (charcoal-100)

      // Page-specific backgrounds - Updated with full viewport coverage
      page: {
        default: "#ffffff",
        article: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
        category: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        home: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
      },

      // Component backgrounds
      card: "#ffffff",
      modal: "#ffffff",
      overlay: "rgba(15, 23, 42, 0.8)", // charcoal-950 with opacity
    },
  },

  // Typography Scale
  typography: {
    // Font Families
    fontFamily: {
      // Display & Headings - Gothic A1
      display: '"Gothic A1", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heading: '"Gothic A1", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

      // Body Text - Inter
      body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

      // Monospace - JetBrains Mono
      mono: '"JetBrains Mono", "Fira Code", "Consolas", monospace',

      // Special - Bokor (logo only)
      logo: '"Bokor", serif',
    },

    // Font Sizes
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
    },

    // Font Weights
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },

    // Line Heights
    lineHeight: {
      tight: "1.2",
      normal: "1.5",
      relaxed: "1.75",
    },

    // Letter Spacing
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
    },
  },

  // Spacing Scale
  spacing: {
    px: "1px",
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
  },

  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.25rem", // 4px
    lg: "0.375rem", // 6px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    full: "9999px", // Fully rounded
  },

  // Shadows
  boxShadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",

    // Elegant shadows
    elegant: {
      sm: "0 2px 8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02)",
      md: "0 4px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02)",
      lg: "0 8px 24px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.02)",
    },

    // Modern shadows with lime accent
    modern: {
      sm: "0 4px 12px -2px rgba(132, 204, 22, 0.15), 0 0 0 1px rgba(132, 204, 22, 0.08)",
      md: "0 8px 20px -4px rgba(132, 204, 22, 0.2), 0 0 0 1px rgba(132, 204, 22, 0.1)",
      lg: "0 12px 30px -6px rgba(132, 204, 22, 0.25), 0 0 0 1px rgba(132, 204, 22, 0.12)",
      glow: "0 0 15px rgba(132, 204, 22, 0.4)",
    },
  },

  // Transitions
  transition: {
    fast: "150ms ease",
    normal: "300ms ease",
    slow: "500ms ease",
  },
  // Animation System
  animation: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "750ms",
    },
    easing: {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    keyframes: {
      fadeIn: "fadeIn",
      fadeOut: "fadeOut",
      slideUp: "slideUp",
      slideDown: "slideDown",
      slideLeft: "slideLeft",
      slideRight: "slideRight",
      scaleIn: "scaleIn",
      scaleOut: "scaleOut",
      bounce: "bounce",
      pulse: "pulse",
      spin: "spin",
    },
  },

  // Responsive Breakpoints
  responsive: {
    breakpoints: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    containers: {
      xs: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  // Grid System
  grid: {
    columns: 12,
    gap: {
      xs: "0.5rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "3rem",
    },
    container: {
      padding: {
        xs: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      maxWidth: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  // Z-Index Scale
  zIndex: {
    hide: "-1",
    auto: "auto",
    base: "0",
    docked: "10",
    dropdown: "1000",
    sticky: "1100",
    banner: "1200",
    overlay: "1300",
    modal: "1400",
    popover: "1500",
    skipLink: "1600",
    toast: "1700",
    tooltip: "1800",
  },
}

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const componentStyles = {
  // Button Variants - Fully configurable and clean
  button: {
    // Base button configuration
    base: {
      fontFamily: designTokens.typography.fontFamily.body,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      whiteSpace: "nowrap",
      borderRadius: designTokens.borderRadius.full,
      fontWeight: designTokens.typography.fontWeight.medium,
      transition: `all ${designTokens.transition.normal} cubic-bezier(0.4, 0, 0.2, 1)`,
      cursor: "pointer",
      textDecoration: "none",
      outline: "none",
      position: "relative",
      overflow: "hidden",
      border: "none", // Clean - no borders
      boxShadow: "none", // Clean - no shadows
    },

    // Primary gradient button (lime)
    primary: {
      fontSize: designTokens.typography.fontSize.sm,
      lineHeight: designTokens.typography.lineHeight.tight,
      padding: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
      background: `linear-gradient(to right, ${designTokens.colors.primary.lime[300]}, ${designTokens.colors.primary.lime[400]})`,
      color: designTokens.colors.primary.forest[800],
      border: "none",
      boxShadow: "none",
    },

    primaryHover: {
      background: `linear-gradient(to right, ${designTokens.colors.primary.lime[400]}, ${designTokens.colors.primary.lime[500]})`,
      transform: "translateY(-1px)",
    },

    primaryActive: {
      transform: "translateY(0)",
    },

    // Secondary button (outline)
    secondary: {
      fontSize: designTokens.typography.fontSize.sm,
      lineHeight: designTokens.typography.lineHeight.tight,
      padding: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
      backgroundColor: designTokens.colors.neutral.white,
      color: designTokens.colors.primary.forest[800],
      border: `1px solid ${designTokens.colors.neutral.charcoal[200]}30`, // 30% opacity
      boxShadow: "none",
    },

    secondaryHover: {
      borderColor: `${designTokens.colors.primary.lime[500]}40`, // 40% opacity
      backgroundColor: designTokens.colors.neutral.charcoal[50],
    },

    // Ghost button (transparent)
    ghost: {
      fontSize: designTokens.typography.fontSize.sm,
      lineHeight: designTokens.typography.lineHeight.tight,
      padding: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
      backgroundColor: "transparent",
      color: designTokens.colors.primary.forest[800],
      border: "none",
      boxShadow: "none",
    },

    ghostHover: {
      color: `${designTokens.colors.primary.forest[800]}cc`, // 80% opacity
      backgroundColor: `${designTokens.colors.primary.lime[300]}1a`, // 10% opacity
    },

    // Inverse button (dark)
    inverse: {
      fontSize: designTokens.typography.fontSize.sm,
      lineHeight: designTokens.typography.lineHeight.tight,
      padding: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
      background: `linear-gradient(to right, ${designTokens.colors.neutral.charcoal[800]}, ${designTokens.colors.neutral.charcoal[900]})`,
      color: designTokens.colors.neutral.white,
      border: "none",
      boxShadow: "none",
    },

    inverseHover: {
      background: `linear-gradient(to right, ${designTokens.colors.neutral.charcoal[900]}, ${designTokens.colors.neutral.charcoal[950]})`,
      transform: "translateY(-1px)",
    },

    // Topic/Tag button (flat lime background)
    topic: {
      fontSize: designTokens.typography.fontSize.xs,
      lineHeight: designTokens.typography.lineHeight.tight,
      padding: `${designTokens.spacing[1]} ${designTokens.spacing[3]}`,
      backgroundColor: designTokens.colors.primary.lime[100],
      color: designTokens.colors.primary.forest[800],
      border: "none",
      boxShadow: "none",
    },

    topicHover: {
      backgroundColor: designTokens.colors.primary.lime[200],
    },

    // Size variants
    sizes: {
      sm: {
        padding: `${designTokens.spacing[1]} ${designTokens.spacing[3]}`,
        fontSize: designTokens.typography.fontSize.xs,
        lineHeight: designTokens.typography.lineHeight.tight,
      },
      md: {
        padding: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
        fontSize: designTokens.typography.fontSize.sm,
        lineHeight: designTokens.typography.lineHeight.tight,
      },
      lg: {
        padding: `${designTokens.spacing[3]} ${designTokens.spacing[6]}`,
        fontSize: designTokens.typography.fontSize.base,
        lineHeight: designTokens.typography.lineHeight.normal,
      },
      icon: {
        padding: designTokens.spacing[2],
        width: "2.5rem",
        height: "2.5rem",
      },
    },
  },

  // Card Styles
  card: {
    base: {
      border: `1px solid ${designTokens.colors.neutral.charcoal[200]}1a`, // 10% opacity
      boxShadow: designTokens.boxShadow.elegant.md,
      overflow: "hidden",
      transition: `all ${designTokens.transition.normal} cubic-bezier(0.4, 0, 0.2, 1)`,
      backdropFilter: "blur(2px)",
    },

    hover: {
      borderColor: `${designTokens.colors.primary.lime[400]}33`, // 20% opacity
      boxShadow: designTokens.boxShadow.modern.md,
    },

    glass: {
      backdropFilter: "blur(16px)",
      backgroundColor: `${designTokens.colors.neutral.white}b3`, // 70% opacity
      border: `1px solid ${designTokens.colors.neutral.white}33`, // 20% opacity
      boxShadow: designTokens.boxShadow.elegant.md,
    },
  },

  // Typography Styles
  typography: {
    // Display text (Gothic A1)
    display: {
      h1: {
        fontFamily: designTokens.typography.fontFamily.display,
        fontSize: designTokens.typography.fontSize["4xl"],
        fontWeight: designTokens.typography.fontWeight.semibold,
        color: designTokens.colors.neutral.charcoal[950],
        letterSpacing: designTokens.typography.letterSpacing.tight,
        lineHeight: designTokens.typography.lineHeight.tight,
      },
      h2: {
        fontFamily: designTokens.typography.fontFamily.display,
        fontSize: designTokens.typography.fontSize["2xl"],
        fontWeight: designTokens.typography.fontWeight.medium,
        color: designTokens.colors.neutral.charcoal[950],
        letterSpacing: designTokens.typography.letterSpacing.tight,
        lineHeight: designTokens.typography.lineHeight.tight,
      },
      h3: {
        fontFamily: designTokens.typography.fontFamily.display,
        fontSize: designTokens.typography.fontSize.xl,
        fontWeight: designTokens.typography.fontWeight.medium,
        color: designTokens.colors.neutral.charcoal[950],
        letterSpacing: designTokens.typography.letterSpacing.tight,
        lineHeight: designTokens.typography.lineHeight.tight,
      },
      h4: {
        fontFamily: designTokens.typography.fontFamily.display,
        fontSize: designTokens.typography.fontSize.lg,
        fontWeight: designTokens.typography.fontWeight.medium,
        color: designTokens.colors.neutral.charcoal[950],
      },
      h5: {
        fontFamily: designTokens.typography.fontFamily.display,
        fontSize: designTokens.typography.fontSize.base,
        fontWeight: designTokens.typography.fontWeight.medium,
        color: designTokens.colors.neutral.charcoal[950],
      },
      h6: {
        fontFamily: designTokens.typography.fontFamily.display,
        fontSize: designTokens.typography.fontSize.sm,
        fontWeight: designTokens.typography.fontWeight.medium,
        color: designTokens.colors.neutral.charcoal[950],
      },
    },

    // Body text (Inter)
    body: {
      large: {
        fontFamily: designTokens.typography.fontFamily.body,
        fontSize: designTokens.typography.fontSize.lg,
        color: `${designTokens.colors.neutral.charcoal[800]}e6`, // 90% opacity
        lineHeight: designTokens.typography.lineHeight.relaxed,
      },
      base: {
        fontFamily: designTokens.typography.fontFamily.body,
        fontSize: designTokens.typography.fontSize.base,
        color: `${designTokens.colors.neutral.charcoal[800]}e6`, // 90% opacity
        lineHeight: designTokens.typography.lineHeight.relaxed,
      },
      small: {
        fontFamily: designTokens.typography.fontFamily.body,
        fontSize: designTokens.typography.fontSize.sm,
        color: `${designTokens.colors.neutral.charcoal[700]}b3`, // 70% opacity
        lineHeight: designTokens.typography.lineHeight.normal,
      },
      xs: {
        fontFamily: designTokens.typography.fontFamily.body,
        fontSize: designTokens.typography.fontSize.xs,
        color: `${designTokens.colors.neutral.charcoal[600]}99`, // 60% opacity
        lineHeight: designTokens.typography.lineHeight.normal,
      },
    },

    // Special text styles
    special: {
      logo: {
        fontFamily: designTokens.typography.fontFamily.logo,
        fontSize: designTokens.typography.fontSize["3xl"],
        fontWeight: designTokens.typography.fontWeight.normal,
        letterSpacing: designTokens.typography.letterSpacing.wide,
      },
      category: {
        fontFamily: designTokens.typography.fontFamily.display,
        fontSize: designTokens.typography.fontSize["5xl"],
        fontWeight: designTokens.typography.fontWeight.bold,
        color: designTokens.colors.neutral.charcoal[950],
        letterSpacing: designTokens.typography.letterSpacing.tight,
        textTransform: "uppercase",
      },
      mono: {
        fontFamily: designTokens.typography.fontFamily.mono,
        fontSize: designTokens.typography.fontSize.sm,
        color: `${designTokens.colors.neutral.charcoal[800]}cc`, // 80% opacity
      },
    },
  },

  // Navigation Styles
  navigation: {
    header: {
      backdropFilter: "blur(16px)",
      backgroundColor: `${designTokens.colors.layout.header.background}e6`, // 90% opacity
      position: "sticky",
      top: "0",
      zIndex: "50",
      borderBottom: `1px solid ${designTokens.colors.layout.header.border}`,
      boxShadow: designTokens.boxShadow.elegant.sm,
    },

    link: {
      default: {
        fontFamily: designTokens.typography.fontFamily.body,
        fontSize: designTokens.typography.fontSize.sm,
        letterSpacing: designTokens.typography.letterSpacing.wide,
        color: designTokens.colors.neutral.charcoal[800],
        transition: `color ${designTokens.transition.normal} cubic-bezier(0.4, 0, 0.2, 1)`,
        position: "relative",
      },

      active: {
        fontFamily: designTokens.typography.fontFamily.body,
        fontSize: designTokens.typography.fontSize.sm,
        letterSpacing: designTokens.typography.letterSpacing.wide,
        color: designTokens.colors.primary.lime[500],
        fontWeight: designTokens.typography.fontWeight.medium,
        position: "relative",
      },
    },
  },

  // Form Styles
  form: {
    input: {
      base: {
        fontFamily: designTokens.typography.fontFamily.body,
        width: "100%",
        padding: `${designTokens.spacing[3]} ${designTokens.spacing[4]}`,
        border: `1px solid ${designTokens.colors.neutral.charcoal[200]}33`, // 20% opacity
        borderRadius: designTokens.borderRadius.full,
        backgroundColor: designTokens.colors.neutral.white,
        fontSize: designTokens.typography.fontSize.sm,
        lineHeight: designTokens.typography.lineHeight.tight,
        color: designTokens.colors.neutral.charcoal[800],
        transition: `all ${designTokens.transition.normal} cubic-bezier(0.4, 0, 0.2, 1)`,
        outline: "none",
        boxShadow: designTokens.boxShadow.sm,
      },

      focus: {
        borderColor: designTokens.colors.primary.lime[500],
        boxShadow: `0 0 0 3px ${designTokens.colors.primary.lime[500]}1a`, // 10% opacity
      },

      placeholder: {
        color: `${designTokens.colors.neutral.charcoal[500]}99`, // 60% opacity
        fontWeight: designTokens.typography.fontWeight.normal,
      },
    },

    search: {
      base: {
        fontFamily: designTokens.typography.fontFamily.body,
        width: "100%",
        padding: `${designTokens.spacing[3]} ${designTokens.spacing[4]} ${designTokens.spacing[3]} 2.5rem`,
        border: `1px solid ${designTokens.colors.neutral.charcoal[200]}33`, // 20% opacity
        borderRadius: designTokens.borderRadius.full,
        backgroundColor: designTokens.colors.neutral.white,
        fontSize: designTokens.typography.fontSize.sm,
        lineHeight: designTokens.typography.lineHeight.tight,
        color: designTokens.colors.neutral.charcoal[800],
        transition: `all ${designTokens.transition.normal} cubic-bezier(0.4, 0, 0.2, 1)`,
        outline: "none",
        boxShadow: designTokens.boxShadow.sm,
      },

      focus: {
        borderColor: designTokens.colors.primary.lime[500],
        boxShadow: `0 0 0 3px ${designTokens.colors.primary.lime[500]}1a`, // 10% opacity
      },

      placeholder: {
        color: `${designTokens.colors.neutral.charcoal[500]}99`, // 60% opacity
        fontWeight: designTokens.typography.fontWeight.normal,
      },
    },

    label: {
      fontFamily: designTokens.typography.fontFamily.body,
      fontSize: designTokens.typography.fontSize.sm,
      fontWeight: designTokens.typography.fontWeight.medium,
      color: designTokens.colors.neutral.charcoal[950],
    },

    error: {
      fontFamily: designTokens.typography.fontFamily.body,
      fontSize: designTokens.typography.fontSize.xs,
      color: designTokens.colors.semantic.error,
      marginTop: designTokens.spacing[1],
    },

    help: {
      fontFamily: designTokens.typography.fontFamily.body,
      fontSize: designTokens.typography.fontSize.xs,
      color: `${designTokens.colors.neutral.charcoal[600]}99`, // 60% opacity
      marginTop: designTokens.spacing[1],
    },
  },

  // Layout Styles
  layout: {
    // Footer styles
    footer: {
      container: {
        background: `linear-gradient(135deg, ${designTokens.colors.layout.footer.primary}, ${designTokens.colors.layout.footer.secondary})`,
        color: designTokens.colors.layout.footer.text,
        padding: `${designTokens.spacing[12]} 0`,
      },

      brand: {
        fontFamily: designTokens.typography.fontFamily.display,
        fontSize: designTokens.typography.fontSize["2xl"],
        fontWeight: designTokens.typography.fontWeight.bold,
        marginBottom: designTokens.spacing[4],
        display: "inline-block",
        backgroundColor: `${designTokens.colors.neutral.white}1a`, // 10% opacity
        backdropFilter: "blur(4px)",
        padding: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
        boxShadow: designTokens.boxShadow.elegant.md,
      },

      description: {
        fontFamily: designTokens.typography.fontFamily.body,
        fontSize: designTokens.typography.fontSize.xs,
        color: designTokens.colors.layout.footer.textMuted,
        maxWidth: "28rem",
        marginBottom: designTokens.spacing[6],
      },

      sectionTitle: {
        fontFamily: designTokens.typography.fontFamily.display,
        fontSize: designTokens.typography.fontSize.sm,
        fontWeight: designTokens.typography.fontWeight.bold,
        textTransform: "uppercase",
        letterSpacing: designTokens.typography.letterSpacing.wider,
        marginBottom: designTokens.spacing[4],
        paddingBottom: designTokens.spacing[2],
        borderBottom: `1px solid ${designTokens.colors.neutral.white}33`, // 20% opacity
      },

      link: {
        fontFamily: designTokens.typography.fontFamily.body,
        fontSize: designTokens.typography.fontSize.xs,
        color: designTokens.colors.layout.footer.textMuted,
        transition: `color ${designTokens.transition.normal} cubic-bezier(0.4, 0, 0.2, 1)`,
        display: "flex",
        alignItems: "center",
      },

      linkIcon: {
        marginRight: designTokens.spacing[2],
        color: designTokens.colors.layout.footer.accent,
      },

      socialLink: {
        color: designTokens.colors.layout.footer.accent,
        transition: `color ${designTokens.transition.normal} cubic-bezier(0.4, 0, 0.2, 1)`,
      },

      copyright: {
        fontFamily: designTokens.typography.fontFamily.body,
        fontSize: designTokens.typography.fontSize.xs,
        color: `${designTokens.colors.layout.footer.text}80`, // 50% opacity
      },

      separator: {
        margin: `${designTokens.spacing[8]} 0`,
        backgroundColor: `${designTokens.colors.layout.footer.accent}33`, // 20% opacity
      },
    },

    // Header styles
    header: {
      container: {
        backdropFilter: "blur(16px)",
        backgroundColor: `${designTokens.colors.layout.header.background}e6`, // 90% opacity
        position: "sticky",
        top: "0",
        zIndex: "50",
        borderBottom: `1px solid ${designTokens.colors.layout.header.border}`,
        boxShadow: designTokens.boxShadow.elegant.sm,
      },
    },
  },

  // Newsletter/Subscription Styles
  newsletter: {
    container: {
      border: `1px solid ${designTokens.colors.neutral.charcoal[200]}1a`, // 10% opacity
      padding: designTokens.spacing[8],
      background: `linear-gradient(135deg, ${designTokens.colors.primary.forest[50]}80, ${designTokens.colors.primary.lime[100]}80)`, // 50% opacity
      backdropFilter: "blur(4px)",
      borderRadius: designTokens.borderRadius.xl,
      boxShadow: designTokens.boxShadow.elegant.lg,
      position: "relative",
      overflow: "hidden",
    },

    title: {
      fontFamily: designTokens.typography.fontFamily.display,
      fontSize: designTokens.typography.fontSize["2xl"],
      fontWeight: designTokens.typography.fontWeight.medium,
      color: designTokens.colors.neutral.charcoal[950],
      marginBottom: designTokens.spacing[2],
      textAlign: "center",
    },

    description: {
      fontFamily: designTokens.typography.fontFamily.body,
      fontSize: designTokens.typography.fontSize.base,
      color: `${designTokens.colors.neutral.charcoal[800]}cc`, // 80% opacity
      marginBottom: designTokens.spacing[6],
      textAlign: "center",
      maxWidth: "32rem",
      marginLeft: "auto",
      marginRight: "auto",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: designTokens.spacing[2],
      maxWidth: "28rem",
      marginLeft: "auto",
      marginRight: "auto",
    },

    input: {
      fontFamily: designTokens.typography.fontFamily.body,
      padding: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
      border: `1px solid ${designTokens.colors.neutral.charcoal[200]}1a`, // 10% opacity
      fontSize: designTokens.typography.fontSize.sm,
      width: "100%",
      borderRadius: designTokens.borderRadius.full,
      boxShadow: designTokens.boxShadow.sm,
    },

    button: {
      fontFamily: designTokens.typography.fontFamily.body,
      background: `linear-gradient(to right, ${designTokens.colors.primary.lime[300]}, ${designTokens.colors.primary.lime[400]})`,
      color: designTokens.colors.primary.forest[800],
      fontWeight: designTokens.typography.fontWeight.medium,
      fontSize: designTokens.typography.fontSize.sm,
      borderRadius: designTokens.borderRadius.full,
      border: "none",
      boxShadow: "none",
      transition: `all ${designTokens.transition.normal} cubic-bezier(0.4, 0, 0.2, 1)`,
      padding: `${designTokens.spacing[2]} ${designTokens.spacing[6]}`,
      whiteSpace: "nowrap",
    },

    decorativeElement: {
      position: "absolute",
      borderRadius: "50%",
      border: "4px solid",
      opacity: "0.2",
    },
  },

  // Background Styles - Updated for full viewport coverage
  background: {
    page: {
      default: {
        backgroundColor: "#ffffff",
        minHeight: "100vh", // Ensure full viewport height
        width: "100%", // Ensure full width
      },

      gradient: {
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
        minHeight: "100vh", // Ensure full viewport height
        width: "100%", // Ensure full width
      },

      article: {
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)",
        minHeight: "100vh", // Ensure full viewport height
        width: "100%", // Ensure full width
        position: "relative", // For proper positioning
      },

      category: {
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        minHeight: "100vh", // Ensure full viewport height
        width: "100%", // Ensure full width
        position: "relative", // For proper positioning
      },
    },

    section: {
      default: {
        backgroundColor: "transparent",
      },

      accent: {
        background: `linear-gradient(135deg, ${designTokens.colors.primary.forest[50]}80, ${designTokens.colors.primary.lime[100]}80)`,
        backdropFilter: "blur(4px)",
      },

      hero: {
        background: `linear-gradient(135deg, ${designTokens.colors.neutral.offwhite} 0%, ${designTokens.colors.neutral.white} 50%, ${designTokens.colors.neutral.offwhite} 100%)`,
      },
    },
  },

  // Animation Components
  animation: {
    fadeIn: {
      animationName: "fadeIn",
      animationDuration: designTokens.animation.duration.normal,
      animationTimingFunction: designTokens.animation.easing.smooth,
      animationFillMode: "forwards",
    },

    fadeOut: {
      animationName: "fadeOut",
      animationDuration: designTokens.animation.duration.normal,
      animationTimingFunction: designTokens.animation.easing.smooth,
      animationFillMode: "forwards",
    },

    slideUp: {
      animationName: "slideUp",
      animationDuration: designTokens.animation.duration.normal,
      animationTimingFunction: designTokens.animation.easing.smooth,
      animationFillMode: "forwards",
    },

    bounce: {
      animationName: "bounce",
      animationDuration: designTokens.animation.duration.slow,
      animationTimingFunction: designTokens.animation.easing.bounce,
      animationIterationCount: "infinite",
    },

    pulse: {
      animationName: "pulse",
      animationDuration: designTokens.animation.duration.slower,
      animationTimingFunction: designTokens.animation.easing.easeInOut,
      animationIterationCount: "infinite",
    },

    spin: {
      animationName: "spin",
      animationDuration: "1s",
      animationTimingFunction: designTokens.animation.easing.linear,
      animationIterationCount: "infinite",
    },
  },

  // Loading States
  loading: {
    spinner: {
      width: "1rem",
      height: "1rem",
      border: "2px solid transparent",
      borderTop: `2px solid ${designTokens.colors.primary.lime[500]}`,
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },

    skeleton: {
      backgroundColor: designTokens.colors.neutral.charcoal[100],
      borderRadius: designTokens.borderRadius.md,
      animation: "pulse 2s ease-in-out infinite",
    },

    dots: {
      display: "flex",
      gap: designTokens.spacing[1],
    },

    dot: {
      width: "0.5rem",
      height: "0.5rem",
      backgroundColor: designTokens.colors.primary.lime[500],
      borderRadius: "50%",
      animation: "bounce 1.4s ease-in-out infinite both",
    },
  },

  // Interactive States
  interactive: {
    hover: {
      scale: "1.02",
      transition: `transform ${designTokens.animation.duration.fast} ${designTokens.animation.easing.smooth}`,
    },

    press: {
      scale: "0.98",
      transition: `transform ${designTokens.animation.duration.fast} ${designTokens.animation.easing.smooth}`,
    },

    focus: {
      outline: "none",
      boxShadow: `0 0 0 3px ${designTokens.colors.primary.lime[500]}33`,
      transition: `box-shadow ${designTokens.animation.duration.fast} ${designTokens.animation.easing.smooth}`,
    },

    disabled: {
      opacity: "0.5",
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  },

  // Responsive Utilities
  responsive: {
    container: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: designTokens.grid.container.padding.xs,
      paddingRight: designTokens.grid.container.padding.xs,
    },

    grid: {
      display: "grid",
      gap: designTokens.grid.gap.md,
      gridTemplateColumns: `repeat(${designTokens.grid.columns}, 1fr)`,
    },

    flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    stack: {
      display: "flex",
      flexDirection: "column",
      gap: designTokens.spacing[4],
    },
  },

  // Advanced Form Components
  formAdvanced: {
    fieldset: {
      border: "none",
      padding: "0",
      margin: "0",
    },

    legend: {
      fontFamily: designTokens.typography.fontFamily.display,
      fontSize: designTokens.typography.fontSize.lg,
      fontWeight: designTokens.typography.fontWeight.semibold,
      color: designTokens.colors.neutral.charcoal[950],
      marginBottom: designTokens.spacing[4],
    },

    inputGroup: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },

    inputIcon: {
      position: "absolute",
      left: designTokens.spacing[3],
      color: designTokens.colors.neutral.charcoal[500],
      pointerEvents: "none",
      zIndex: "1",
    },

    inputWithIcon: {
      paddingLeft: "2.5rem",
    },

    textarea: {
      fontFamily: designTokens.typography.fontFamily.body,
      width: "100%",
      padding: designTokens.spacing[3],
      border: `1px solid ${designTokens.colors.neutral.charcoal[200]}33`,
      borderRadius: designTokens.borderRadius.lg,
      backgroundColor: designTokens.colors.neutral.white,
      fontSize: designTokens.typography.fontSize.sm,
      lineHeight: designTokens.typography.lineHeight.normal,
      color: designTokens.colors.neutral.charcoal[800],
      transition: `all ${designTokens.transition.normal} ${designTokens.animation.easing.smooth}`,
      outline: "none",
      resize: "vertical",
      minHeight: "6rem",
    },

    select: {
      fontFamily: designTokens.typography.fontFamily.body,
      width: "100%",
      padding: `${designTokens.spacing[3]} ${designTokens.spacing[4]}`,
      border: `1px solid ${designTokens.colors.neutral.charcoal[200]}33`,
      borderRadius: designTokens.borderRadius.lg,
      backgroundColor: designTokens.colors.neutral.white,
      fontSize: designTokens.typography.fontSize.sm,
      color: designTokens.colors.neutral.charcoal[800],
      transition: `all ${designTokens.transition.normal} ${designTokens.animation.easing.smooth}`,
      outline: "none",
      cursor: "pointer",
    },

    checkbox: {
      width: "1rem",
      height: "1rem",
      borderRadius: designTokens.borderRadius.sm,
      border: `2px solid ${designTokens.colors.neutral.charcoal[300]}`,
      backgroundColor: designTokens.colors.neutral.white,
      transition: `all ${designTokens.transition.fast} ${designTokens.animation.easing.smooth}`,
      cursor: "pointer",
    },

    radio: {
      width: "1rem",
      height: "1rem",
      borderRadius: "50%",
      border: `2px solid ${designTokens.colors.neutral.charcoal[300]}`,
      backgroundColor: designTokens.colors.neutral.white,
      transition: `all ${designTokens.transition.fast} ${designTokens.animation.easing.smooth}`,
      cursor: "pointer",
    },
  },
}

// =============================================================================
// THEME VARIANTS
// =============================================================================

export type ThemeVariant = "default" | "dark" | "high-contrast"

export const themeVariants = {
  default: {
    name: "Default",
    colors: designTokens.colors,
  },

  dark: {
    name: "Dark Mode",
    colors: {
      ...designTokens.colors,
      neutral: {
        ...designTokens.colors.neutral,
        offwhite: "#0f172a",
        white: "#1e293b",
        charcoal: {
          ...designTokens.colors.neutral.charcoal,
          800: "#f8fafc", // Invert for dark mode
          900: "#f1f5f9",
          950: "#e2e8f0",
        },
      },
      layout: {
        ...designTokens.colors.layout,
        footer: {
          ...designTokens.colors.layout.footer,
          primary: "#0f172a", // darker for dark mode
          secondary: "#1e293b",
        },
      },
    },
  },

  "high-contrast": {
    name: "High Contrast",
    colors: {
      ...designTokens.colors,
      primary: {
        lime: {
          ...designTokens.colors.primary.lime,
          300: "#00ff00", // More vibrant lime
          400: "#00e600",
          500: "#00cc00",
        },
      },
      layout: {
        ...designTokens.colors.layout,
        footer: {
          ...designTokens.colors.layout.footer,
          accent: "#00ff00", // High contrast lime
        },
      },
    },
  },
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

// Generate CSS custom properties from design tokens
export function generateCSSVariables() {
  return `
    :root {
      /* Colors */
      --color-lime-300: ${designTokens.colors.primary.lime[300]};
      --color-lime-400: ${designTokens.colors.primary.lime[400]};
      --color-lime-500: ${designTokens.colors.primary.lime[500]};
      --color-lime-600: ${designTokens.colors.primary.lime[600]};
      
      --color-forest: ${designTokens.colors.primary.forest[600]};
      --color-forest-dark: ${designTokens.colors.primary.forest[800]};
      
      --color-charcoal: ${designTokens.colors.neutral.charcoal[800]};
      --color-charcoal-dark: ${designTokens.colors.neutral.charcoal[900]};
      --color-charcoal-darker: ${designTokens.colors.neutral.charcoal[950]};
      
      --color-offwhite: ${designTokens.colors.neutral.offwhite};
      
      /* Layout Colors */
      --color-footer-primary: ${designTokens.colors.layout.footer.primary};
      --color-footer-secondary: ${designTokens.colors.layout.footer.secondary};
      --color-footer-accent: ${designTokens.colors.layout.footer.accent};
      --color-footer-text: ${designTokens.colors.layout.footer.text};
      --color-footer-text-muted: ${designTokens.colors.layout.footer.textMuted};
      
      /* Typography */
      --font-display: ${designTokens.typography.fontFamily.display};
      --font-heading: ${designTokens.typography.fontFamily.heading};
      --font-body: ${designTokens.typography.fontFamily.body};
      --font-sans: ${designTokens.typography.fontFamily.sans};
      --font-mono: ${designTokens.typography.fontFamily.mono};
      --font-logo: ${designTokens.typography.fontFamily.logo};
      
      /* Spacing */
      --spacing-xs: ${designTokens.spacing[1]};
      --spacing-sm: ${designTokens.spacing[2]};
      --spacing-md: ${designTokens.spacing[4]};
      --spacing-lg: ${designTokens.spacing[6]};
      --spacing-xl: ${designTokens.spacing[8]};
      
      /* Border Radius */
      --radius-sm: ${designTokens.borderRadius.sm};
      --radius-md: ${designTokens.borderRadius.md};
      --radius-lg: ${designTokens.borderRadius.lg};
      --radius-full: ${designTokens.borderRadius.full};
      
      /* Transitions */
      --transition-fast: ${designTokens.transition.fast};
      --transition-normal: ${designTokens.transition.normal};
      --transition-slow: ${designTokens.transition.slow};
    }
  `
}

// Get color value by path (e.g., 'primary.lime.500')
export function getColor(path: string): string {
  const keys = path.split(".")
  let value: any = designTokens.colors

  for (const key of keys) {
    value = value[key]
    if (!value) return "#000000" // fallback
  }

  return value
}

// Get typography style by path (e.g., 'display.h1')
export function getTypography(path: string): any {
  const keys = path.split(".")
  let value: any = componentStyles.typography

  for (const key of keys) {
    value = value[key]
    if (!value) return {} // fallback
  }

  return value
}

// Get component style by path (e.g., 'button.primary')
export function getComponentStyle(path: string): any {
  const keys = path.split(".")
  let value: any = componentStyles

  for (const key of keys) {
    value = value[key]
    if (!value) return {} // fallback
  }

  return value
}

// Create responsive breakpoint utilities
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

// Create spacing utilities
export function spacing(size: keyof typeof designTokens.spacing): string {
  return designTokens.spacing[size]
}

// Create color utilities
export function color(path: string): string {
  return getColor(path)
}

// Export everything for easy access
export default {
  tokens: designTokens,
  components: componentStyles,
  variants: themeVariants,
  utils: {
    generateCSSVariables,
    getColor,
    getTypography,
    getComponentStyle,
    spacing,
    color,
    breakpoints,
  },
}
