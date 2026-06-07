"use client"

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Root.Props) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("craft:relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="craft:size-full craft:rounded-[inherit] craft:transition-[color,box-shadow] craft:outline-none craft:focus-visible:ring-[3px] craft:focus-visible:ring-ring/50 craft:focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "craft:flex craft:touch-none craft:p-px craft:transition-colors craft:select-none craft:data-horizontal:h-2.5 craft:data-horizontal:flex-col craft:data-horizontal:border-t craft:data-horizontal:border-t-transparent craft:data-vertical:h-full craft:data-vertical:w-2.5 craft:data-vertical:border-s craft:data-vertical:border-s-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="craft:relative craft:flex-1 craft:rounded-full craft:bg-border"
      />
    </ScrollAreaPrimitive.Scrollbar>
  )
}

export { ScrollArea, ScrollBar }
