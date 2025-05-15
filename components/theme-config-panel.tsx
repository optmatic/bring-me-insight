"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useThemeConfig } from "@/components/theme-config-provider"
import { useState } from "react"
import { Settings, X } from "lucide-react"

const defaultThemeConfig = {
  colors: {
    leafy: "16, 185, 129",
    forest: "5, 102, 85",
    charcoal: "51, 51, 51",
    offwhite: "250, 250, 250",
  },
  fonts: {
    sans: "Inter, sans-serif",
    mono: "Roboto Mono, monospace",
    serif: "Lora, serif",
  },
}

export function ThemeConfigPanel() {
  const { themeConfig, updateThemeConfig } = useThemeConfig()
  const [isOpen, setIsOpen] = useState(false)

  const handleColorChange = (colorKey: string, value: string) => {
    updateThemeConfig({
      colors: {
        [colorKey]: value,
      },
    })
  }

  const handleFontChange = (fontKey: string, value: string) => {
    updateThemeConfig({
      fonts: {
        [fontKey]: value,
      },
    })
  }

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0 bg-forest text-white shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <Settings />
      </Button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white border border-charcoal/20 rounded-lg shadow-lg p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-sans text-lg font-medium">Theme Configuration</h3>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="colors">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="colors" className="flex-1">
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex-1">
            Typography
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-4">
          <div className="space-y-2">
            <Label>Leafy Green</Label>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `rgb(${themeConfig.colors.leafy})` }} />
              <Input
                value={themeConfig.colors.leafy}
                onChange={(e) => handleColorChange("leafy", e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Forest Green</Label>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: `rgb(${themeConfig.colors.forest})` }} />
              <Input
                value={themeConfig.colors.forest}
                onChange={(e) => handleColorChange("forest", e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Charcoal</Label>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: `rgb(${themeConfig.colors.charcoal})` }}
              />
              <Input
                value={themeConfig.colors.charcoal}
                onChange={(e) => handleColorChange("charcoal", e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Off White</Label>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full border border-gray-200"
                style={{ backgroundColor: `rgb(${themeConfig.colors.offwhite})` }}
              />
              <Input
                value={themeConfig.colors.offwhite}
                onChange={(e) => handleColorChange("offwhite", e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="typography" className="space-y-4">
          <div className="space-y-2">
            <Label>Sans Font</Label>
            <Input value={themeConfig.fonts.sans} onChange={(e) => handleFontChange("sans", e.target.value)} />
            <p className="text-sm" style={{ fontFamily: themeConfig.fonts.sans }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>

          <div className="space-y-2">
            <Label>Mono Font</Label>
            <Input value={themeConfig.fonts.mono} onChange={(e) => handleFontChange("mono", e.target.value)} />
            <p className="text-sm" style={{ fontFamily: themeConfig.fonts.mono }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>

          <div className="space-y-2">
            <Label>Serif Font</Label>
            <Input value={themeConfig.fonts.serif} onChange={(e) => handleFontChange("serif", e.target.value)} />
            <p className="text-sm" style={{ fontFamily: themeConfig.fonts.serif }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <Button
          className="w-full"
          onClick={() => {
            updateThemeConfig(defaultThemeConfig)
          }}
        >
          Reset to Defaults
        </Button>
      </div>
    </div>
  )
}
