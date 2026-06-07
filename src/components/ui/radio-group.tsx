"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cn } from "@/lib/utils"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("craft:grid craft:w-full craft:gap-2", className)}
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "craft:group/radio-group-item craft:peer craft:relative craft:flex craft:aspect-square craft:size-4 craft:shrink-0 craft:rounded-full craft:border craft:border-input craft:outline-none craft:after:absolute craft:after:-inset-x-3 craft:after:-inset-y-2 craft:focus-visible:border-ring craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:disabled:cursor-not-allowed craft:disabled:opacity-50 craft:aria-invalid:border-destructive craft:aria-invalid:ring-3 craft:aria-invalid:ring-destructive/20 craft:aria-invalid:aria-checked:border-primary craft:dark:bg-input/30 craft:dark:aria-invalid:border-destructive/50 craft:dark:aria-invalid:ring-destructive/40 craft:data-checked:border-primary craft:data-checked:bg-primary craft:data-checked:text-primary-foreground craft:dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="craft:flex craft:size-4 craft:items-center craft:justify-center"
      >
        <span className="craft:absolute craft:top-1/2 craft:start-1/2 craft:size-2 craft:-translate-x-1/2 rtl:craft:translate-x-1/2 craft:-translate-y-1/2 craft:rounded-full craft:bg-primary-foreground" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
