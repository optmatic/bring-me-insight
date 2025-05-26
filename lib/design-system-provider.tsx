"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { designTokens, componentStyles, type ThemeVariant } from "./design-system"

interface DesignSystemContextType {
  theme: ThemeVariant
  setTheme: (theme: ThemeVariant) => void
  tokens: typeof designTokens
  components: typeof componentStyles
  updateToken: (path: string, value: any) => void
  resetToDefaults: () => void
}

const DesignSystemContext = createContext<DesignSystemContextType | undefined>(undefined)

interface DesignSystemProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeVariant
}

export function DesignSystemProvider({ children, defaultTheme = "default" }: DesignSystemProviderProps) {
  const [theme, setTheme] = useState<ThemeVariant>(defaultTheme)
  const [tokens, setTokens] = useState(designTokens)
  const [components, setComponents] = useState(componentStyles)

  // Update CSS custom properties when tokens change
  useEffect(() => {
    const root = document.documentElement

    // Update color variables
    Object.entries(tokens.colors.primary.lime).forEach(([key, value]) => {
      root.style.setProperty(`--color-lime-${key}`, value)
    })

    Object.entries(tokens.colors.primary.forest).forEach(([key, value]) => {
      root.style.setProperty(`--color-forest-${key}`, value)
    })

    Object.entries(tokens.colors.neutral.charcoal).forEach(([key, value]) => {
      root.style.setProperty(`--color-charcoal-${key}`, value)
    })

    // Update font variables
    Object.entries(tokens.typography.fontFamily).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value)
    })

    // Update spacing variables
    Object.entries(tokens.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value)
    })
  }, [tokens])

  const updateToken = (path: string, value: any) => {
    setTokens((prev) => {
      const newTokens = { ...prev }
      const keys = path.split(".")
      let current: any = newTokens

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]]
      }

      current[keys[keys.length - 1]] = value
      return newTokens
    })
  }

  const resetToDefaults = () => {
    setTokens(designTokens)
    setComponents(componentStyles)
  }

  return (
    <DesignSystemContext.Provider
      value={{
        theme,
        setTheme,
        tokens,
        components,
        updateToken,
        resetToDefaults,
      }}
    >
      {children}
    </DesignSystemContext.Provider>
  )
}

export function useDesignSystem() {
  const context = useContext(DesignSystemContext)
  if (context === undefined) {
    throw new Error("useDesignSystem must be used within a DesignSystemProvider")
  }
  return context
}
