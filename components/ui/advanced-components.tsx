"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { forwardRef, useState, useEffect } from "react"
import { ChevronDown, Search, X, Check } from "lucide-react"

// =============================================================================
// ADVANCED DROPDOWN COMPONENT
// =============================================================================

interface DropdownOption {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
}

interface AdvancedDropdownProps {
  options: DropdownOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchable?: boolean
  className?: string
  disabled?: boolean
}

export const AdvancedDropdown = forwardRef<HTMLDivElement, AdvancedDropdownProps>(
  (
    { options, value, onValueChange, placeholder = "Select option...", searchable = false, className, disabled },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const filteredOptions = searchable
      ? options.filter(
          (option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
            option.description?.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : options

    const selectedOption = options.find((option) => option.value === value)

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref && "current" in ref && ref.current && !ref.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [ref])

    return (
      <div ref={ref} className={cn("relative", className)}>
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "ds-select w-full flex items-center justify-between",
            disabled && "opacity-50 cursor-not-allowed",
            isOpen && "ring-2 ring-lime-500/20 border-lime-500",
          )}
        >
          <span className="flex items-center gap-2">
            {selectedOption?.icon}
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-charcoal-200/20 rounded-lg shadow-elegant-lg z-dropdown max-h-64 overflow-hidden">
            {searchable && (
              <div className="p-2 border-b border-charcoal-200/10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal-500" />
                  <input
                    type="text"
                    placeholder="Search options..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm border border-charcoal-200/20 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500/20"
                  />
                </div>
              </div>
            )}

            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length === 0 ? (
                <div className="p-3 text-sm text-charcoal-500 text-center">No options found</div>
              ) : (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onValueChange?.(option.value)
                      setIsOpen(false)
                      setSearchTerm("")
                    }}
                    className={cn(
                      "w-full text-left p-3 hover:bg-lime-50 transition-colors flex items-center gap-3",
                      value === option.value && "bg-lime-100 text-lime-700",
                    )}
                  >
                    {option.icon}
                    <div className="flex-1">
                      <div className="font-medium text-sm">{option.label}</div>
                      {option.description && <div className="text-xs text-charcoal-600 mt-1">{option.description}</div>}
                    </div>
                    {value === option.value && <Check className="h-4 w-4 text-lime-600" />}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    )
  },
)
AdvancedDropdown.displayName = "AdvancedDropdown"

// =============================================================================
// TOAST NOTIFICATION SYSTEM
// =============================================================================

interface ToastProps {
  id: string
  title: string
  description?: string
  type?: "success" | "error" | "warning" | "info"
  duration?: number
  onClose?: (id: string) => void
}

export function Toast({ id, title, description, type = "info", duration = 5000, onClose }: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.(id)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [id, duration, onClose])

  const typeStyles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  }

  return (
    <div
      className={cn(
        "fixed top-4 right-4 max-w-sm w-full border rounded-lg p-4 shadow-elegant-lg z-toast animate-slideLeft",
        typeStyles[type],
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-medium text-sm">{title}</h4>
          {description && <p className="text-xs mt-1 opacity-90">{description}</p>}
        </div>
        <button onClick={() => onClose?.(id)} className="ml-2 opacity-70 hover:opacity-100 transition-opacity">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

// =============================================================================
// PROGRESS INDICATOR
// =============================================================================

interface ProgressProps {
  value: number
  max?: number
  size?: "sm" | "md" | "lg"
  variant?: "default" | "success" | "warning" | "error"
  showLabel?: boolean
  className?: string
}

export function Progress({
  value,
  max = 100,
  size = "md",
  variant = "default",
  showLabel = false,
  className,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const sizeStyles = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  }

  const variantStyles = {
    default: "bg-lime-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  }

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between text-xs text-charcoal-600 mb-1">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={cn("w-full bg-charcoal-100 rounded-full overflow-hidden", sizeStyles[size])}>
        <div
          className={cn("h-full transition-all duration-300 ease-out rounded-full", variantStyles[variant])}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
        />
      </div>
    </div>
  )
}

// =============================================================================
// BADGE COMPONENT
// =============================================================================

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "error" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const variantStyles = {
      default: "bg-lime-100 text-lime-800 border-lime-200",
      secondary: "bg-charcoal-100 text-charcoal-800 border-charcoal-200",
      success: "bg-green-100 text-green-800 border-green-200",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
      error: "bg-red-100 text-red-800 border-red-200",
      outline: "bg-transparent text-charcoal-700 border-charcoal-300",
    }

    const sizeStyles = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-xs",
      lg: "px-3 py-1.5 text-sm",
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium border rounded-full transition-colors",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </span>
    )
  },
)
Badge.displayName = "Badge"

// =============================================================================
// TABS COMPONENT
// =============================================================================

interface TabsContextType {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined)

interface TabsProps {
  defaultValue: string
  children: React.ReactNode
  className?: string
}

export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

interface TabsListProps {
  children: React.ReactNode
  className?: string
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lg bg-charcoal-100 p-1 text-charcoal-500",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("TabsTrigger must be used within Tabs")

  const { activeTab, setActiveTab } = context
  const isActive = activeTab === value

  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-white text-charcoal-950 shadow-sm" : "text-charcoal-600 hover:text-charcoal-900",
        className,
      )}
    >
      {children}
    </button>
  )
}

interface TabsContentProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("TabsContent must be used within Tabs")

  const { activeTab } = context

  if (activeTab !== value) return null

  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </div>
  )
}

// =============================================================================
// MODAL COMPONENT
// =============================================================================

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function Modal({ isOpen, onClose, title, children, size = "md", className }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizeStyles = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  }

  return (
    <div className="fixed inset-0 z-modal">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          className={cn(
            "relative bg-white rounded-xl shadow-elegant-xl w-full animate-scaleIn",
            sizeStyles[size],
            className,
          )}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-charcoal-200/10">
              <h2 className="ds-display-h3">{title}</h2>
              <button onClick={onClose} className="text-charcoal-500 hover:text-charcoal-700 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Content */}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

// =============================================================================
// ACCORDION COMPONENT
// =============================================================================

interface AccordionContextType {
  openItems: string[]
  toggleItem: (value: string) => void
  multiple?: boolean
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined)

interface AccordionProps {
  children: React.ReactNode
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  className?: string
}

export function Accordion({ children, type = "single", defaultValue, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    }
    return []
  })

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      if (type === "single") {
        return prev.includes(value) ? [] : [value]
      } else {
        return prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      }
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, multiple: type === "multiple" }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return <div className={cn("border-b border-charcoal-200/10", className)}>{children}</div>
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error("AccordionTrigger must be used within Accordion")

  // Get the value from the parent AccordionItem
  const accordionItem = React.useContext(AccordionItemContext)
  if (!accordionItem) throw new Error("AccordionTrigger must be used within AccordionItem")

  const { openItems, toggleItem } = context
  const { value } = accordionItem
  const isOpen = openItems.includes(value)

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline",
        className,
      )}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  )
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error("AccordionContent must be used within Accordion")

  const accordionItem = React.useContext(AccordionItemContext)
  if (!accordionItem) throw new Error("AccordionContent must be used within AccordionItem")

  const { openItems } = context
  const { value } = accordionItem
  const isOpen = openItems.includes(value)

  return (
    <div className={cn("overflow-hidden transition-all duration-200", isOpen ? "animate-slideDown" : "hidden")}>
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  )
}

// Context for AccordionItem to pass value to children
const AccordionItemContext = React.createContext<{ value: string } | undefined>(undefined)

// Update AccordionItem to provide context
export function AccordionItemWithContext({ value, children, className }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn("border-b border-charcoal-200/10", className)}>{children}</div>
    </AccordionItemContext.Provider>
  )
}
