"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"

import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "craft:peer craft:relative craft:flex craft:size-4 craft:shrink-0 craft:items-center craft:justify-center craft:rounded-[4px] craft:border craft:border-input craft:transition-colors craft:outline-none craft:group-has-disabled/field:opacity-50 craft:after:absolute craft:after:-inset-x-3 craft:after:-inset-y-2 craft:focus-visible:border-ring craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:disabled:cursor-not-allowed craft:disabled:opacity-50 craft:aria-invalid:border-destructive craft:aria-invalid:ring-3 craft:aria-invalid:ring-destructive/20 craft:aria-invalid:aria-checked:border-primary craft:dark:bg-input/30 craft:dark:aria-invalid:border-destructive/50 craft:dark:aria-invalid:ring-destructive/40 craft:data-checked:border-primary craft:data-checked:bg-primary craft:data-checked:text-primary-foreground craft:dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="craft:grid craft:place-content-center craft:text-current craft:transition-none craft:[&>svg]:size-3.5"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
