"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ThemeConfig = {
  colors: {
    leafy: string
    leafyLight: string
    leafyDark: string
    forest: string
    forestLight: string
    forestDark: string
    charcoal: string
    charcoalDark: string
    offwhite: string
  }
  fonts: {
    sans: string
    mono: string
    serif: string
  }
}

const defaultThemeConfig: ThemeConfig = {
  colors: {
    leafy: "132, 204, 22",
    leafyLight: "163, 230, 53",
    leafyDark: "101, 163, 13",
    forest: "22, 101, 52",
    forestLight: "34, 197, 94",
    forestDark: "20, 83, 45",
    charcoal: "54, 69, 79",
    charcoalDark: "44, 56, 64",
    offwhite: "249, 249, 249",
  },
  fonts: {
    sans: "'Alegreya Sans', sans-serif",
    mono: "'IBM Plex Mono', monospace",
    serif: "'Cinzel', serif",
  },
}

const ThemeConfigContext = createContext<{
  themeConfig: ThemeConfig
  updateThemeConfig: (newConfig: Partial<ThemeConfig>) => void
}>({
  themeConfig: defaultThemeConfig,
  updateThemeConfig: () => {},
})

export function ThemeConfigProvider({ children }: { children: ReactNode }) {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(defaultThemeConfig)

  const updateThemeConfig = (newConfig: Partial<ThemeConfig>) => {
    setThemeConfig((prev) => {
      const updatedConfig = {
        ...prev,
        ...newConfig,
        colors: {
          ...prev.colors,
          ...(newConfig.colors || {}),
        },
        fonts: {
          ...prev.fonts,
          ...(newConfig.fonts || {}),
        },
      }

      // Update CSS variables
      if (newConfig.colors) {
        Object.entries(newConfig.colors).forEach(([key, value]) => {
          const cssVarName = `--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
          document.documentElement.style.setProperty(cssVarName, value)
        })
      }

      if (newConfig.fonts) {
        Object.entries(newConfig.fonts).forEach(([key, value]) => {
          document.documentElement.style.setProperty(`--font-${key}`, value)
        })
      }

      return updatedConfig
    })
  }

  return (
    <ThemeConfigContext.Provider value={{ themeConfig, updateThemeConfig }}>{children}</ThemeConfigContext.Provider>
  )
}

export const useThemeConfig = () => useContext(ThemeConfigContext)
