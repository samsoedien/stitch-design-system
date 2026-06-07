import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "craft:flex craft:field-sizing-content craft:min-h-16 craft:w-full craft:rounded-lg craft:border craft:border-input craft:bg-transparent craft:px-2.5 craft:py-2 craft:text-base craft:transition-colors craft:outline-none craft:placeholder:text-muted-foreground craft:focus-visible:border-ring craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:disabled:cursor-not-allowed craft:disabled:bg-input/50 craft:disabled:opacity-50 craft:aria-invalid:border-destructive craft:aria-invalid:ring-3 craft:aria-invalid:ring-destructive/20 craft:md:text-sm craft:dark:bg-input/30 craft:dark:disabled:bg-input/80 craft:dark:aria-invalid:border-destructive/50 craft:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
