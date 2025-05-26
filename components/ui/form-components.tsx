import type React from "react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface FormFieldProps {
  label: string
  error?: string
  help?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

export function FormField({ label, error, help, required, children, className }: FormFieldProps) {
  return (
    <div className={cn("ds-stack-sm", className)}>
      <label className="ds-label">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <span className="text-xs text-red-500" role="alert">
          {error}
        </span>
      )}
      {help && !error && <span className="text-xs text-charcoal-600/60">{help}</span>}
    </div>
  )
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
  return (
    <textarea
      className={cn("ds-textarea", error && "border-red-500 focus:border-red-500 focus:ring-red-500/20", className)}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  children: React.ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, error, children, ...props }, ref) => {
  return (
    <select
      className={cn("ds-select", error && "border-red-500 focus:border-red-500 focus:ring-red-500/20", className)}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
})
Select.displayName = "Select"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, label, id, ...props }, ref) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" className={cn("ds-checkbox", className)} ref={ref} id={id} {...props} />
      {label && (
        <label htmlFor={id} className="ds-label cursor-pointer">
          {label}
        </label>
      )}
    </div>
  )
})
Checkbox.displayName = "Checkbox"

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ className, label, id, ...props }, ref) => {
  return (
    <div className="flex items-center gap-2">
      <input type="radio" className={cn("ds-radio", className)} ref={ref} id={id} {...props} />
      {label && (
        <label htmlFor={id} className="ds-label cursor-pointer">
          {label}
        </label>
      )}
    </div>
  )
})
Radio.displayName = "Radio"
