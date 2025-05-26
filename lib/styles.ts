// =============================================================================
// LEGACY STYLES FILE
// =============================================================================
// This file is kept for backward compatibility.
// New code should use the design system from './design-system.ts'

import { designTokens, componentStyles } from "./design-system"

// Re-export design system for backward compatibility
export const colors = {
  leafy: designTokens.colors.primary.lime,
  forest: designTokens.colors.primary.forest,
  charcoal: designTokens.colors.neutral.charcoal,
  offwhite: designTokens.colors.neutral.offwhite,
  accent: designTokens.colors.primary.lime,
  success: designTokens.colors.semantic.success,
  warning: designTokens.colors.semantic.warning,
  error: designTokens.colors.semantic.error,
  info: designTokens.colors.semantic.info,
}

export const typography = designTokens.typography

export const gradients = {
  primary: "bg-gradient-to-r from-lime-300 to-lime-500",
  primaryHover: "hover:from-lime-400 hover:to-lime-600",
  tag: "bg-gradient-to-r from-lime-300 to-lime-500",
  tagHover: "hover:bg-gradient-to-r hover:from-lime-400 hover:to-lime-600",
  accent: "bg-gradient-to-r from-lime-300 to-lime-500",
  accentHover: "hover:from-lime-400 hover:to-lime-600",
  card: "bg-gradient-to-br from-white to-offwhite",
  glass: "backdrop-blur-md bg-white/70 dark:bg-charcoal-dark/70",
  darkEdge: "bg-gradient-to-b from-transparent to-charcoal-darker/5",
  darkCorner: "bg-gradient-to-br from-transparent to-charcoal-darker/10",
  modern: "bg-gradient-to-r from-lime-400/90 via-lime-500/80 to-lime-600/90",
  modernDark: "bg-gradient-to-r from-charcoal-dark/90 via-charcoal/80 to-charcoal-dark/90",
  glow: "bg-gradient-to-r from-lime-400/20 via-lime-500/30 to-lime-400/20",
  inverse: "bg-gradient-to-r from-charcoal to-charcoal-dark",
  inverseHover: "hover:from-charcoal-dark hover:to-charcoal-darker",
}

export const shadows = designTokens.boxShadow

// Re-export component styles for backward compatibility
export { componentStyles }
