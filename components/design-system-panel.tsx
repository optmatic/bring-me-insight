"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, X, Palette, Type, Download } from "lucide-react"
import { useDesignSystem } from "@/lib/design-system-provider"

export function DesignSystemPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const { tokens, updateToken, resetToDefaults } = useDesignSystem()

  const handleColorChange = (path: string, value: string) => {
    updateToken(path, value)
  }

  const handleFontChange = (path: string, value: string) => {
    updateToken(path, value)
  }

  const exportConfig = () => {
    const config = JSON.stringify(tokens, null, 2)
    const blob = new Blob([config], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "design-system-config.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0 bg-forest text-white shadow-lg z-50"
        onClick={() => setIsOpen(true)}
      >
        <Settings className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white border border-charcoal/20 rounded-xl shadow-xl p-6 z-50 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="ds-display-h4">Design System</h3>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="colors" className="flex items-center gap-1">
            <Palette className="h-3 w-3" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex items-center gap-1">
            <Type className="h-3 w-3" />
            Type
          </TabsTrigger>
          <TabsTrigger value="export" className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            Export
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-4">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Primary Lime Colors</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {Object.entries(tokens.colors.primary.lime).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <Label className="text-xs">{key}</Label>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded border border-gray-200" style={{ backgroundColor: value }} />
                      <Input
                        type="color"
                        value={value}
                        onChange={(e) => handleColorChange(`colors.primary.lime.${key}`, e.target.value)}
                        className="w-12 h-6 p-0 border-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium">Forest Colors</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {Object.entries(tokens.colors.primary.forest).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <Label className="text-xs">{key}</Label>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded border border-gray-200" style={{ backgroundColor: value }} />
                      <Input
                        type="color"
                        value={value}
                        onChange={(e) => handleColorChange(`colors.primary.forest.${key}`, e.target.value)}
                        className="w-12 h-6 p-0 border-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="typography" className="space-y-4">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Font Families</Label>
              <div className="space-y-3 mt-2">
                {Object.entries(tokens.typography.fontFamily).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <Label className="text-xs capitalize">{key}</Label>
                    <Input
                      value={value}
                      onChange={(e) => handleFontChange(`typography.fontFamily.${key}`, e.target.value)}
                      className="text-xs"
                    />
                    <div className="text-xs text-gray-500" style={{ fontFamily: value }}>
                      The quick brown fox jumps over the lazy dog
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="export" className="space-y-4">
          <div className="space-y-4">
            <Button onClick={exportConfig} className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Configuration
            </Button>

            <Button onClick={resetToDefaults} variant="outline" className="w-full">
              Reset to Defaults
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
