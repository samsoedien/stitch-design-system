"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "craft:flex craft:items-center craft:gap-2 craft:text-sm craft:leading-none craft:font-medium craft:select-none craft:group-data-[disabled=true]:pointer-events-none craft:group-data-[disabled=true]:opacity-50 craft:peer-disabled:cursor-not-allowed craft:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
