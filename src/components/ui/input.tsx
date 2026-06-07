import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "craft:h-8 craft:w-full craft:min-w-0 craft:rounded-lg craft:border craft:border-input craft:bg-transparent craft:px-2.5 craft:py-1 craft:text-base craft:transition-colors craft:outline-none craft:file:inline-flex craft:file:h-6 craft:file:border-0 craft:file:bg-transparent craft:file:text-sm craft:file:font-medium craft:file:text-foreground craft:placeholder:text-muted-foreground craft:focus-visible:border-ring craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:disabled:pointer-events-none craft:disabled:cursor-not-allowed craft:disabled:bg-input/50 craft:disabled:opacity-50 craft:aria-invalid:border-destructive craft:aria-invalid:ring-3 craft:aria-invalid:ring-destructive/20 craft:md:text-sm craft:dark:bg-input/30 craft:dark:disabled:bg-input/80 craft:dark:aria-invalid:border-destructive/50 craft:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
