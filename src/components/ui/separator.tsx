"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "craft:shrink-0 craft:bg-border craft:data-horizontal:h-px craft:data-horizontal:w-full craft:data-vertical:w-px craft:data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
