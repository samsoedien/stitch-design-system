"use client"

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  )
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="craft:isolate craft:z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "craft:z-50 craft:inline-flex craft:w-fit craft:max-w-xs craft:origin-(--transform-origin) craft:items-center craft:gap-1.5 craft:rounded-md craft:bg-foreground craft:px-3 craft:py-1.5 craft:text-xs craft:text-background craft:has-data-[slot=kbd]:pe-1.5 craft:data-[side=bottom]:slide-in-from-top-2 craft:data-[side=inline-end]:slide-in-from-start-2 craft:data-[side=inline-start]:slide-in-from-end-2 craft:data-[side=left]:slide-in-from-right-2 craft:data-[side=right]:slide-in-from-left-2 craft:data-[side=top]:slide-in-from-bottom-2 craft:**:data-[slot=kbd]:relative craft:**:data-[slot=kbd]:isolate craft:**:data-[slot=kbd]:z-50 craft:**:data-[slot=kbd]:rounded-sm craft:data-[state=delayed-open]:animate-in craft:data-[state=delayed-open]:fade-in-0 craft:data-[state=delayed-open]:zoom-in-95 craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-open:zoom-in-95 craft:data-closed:animate-out craft:data-closed:fade-out-0 craft:data-closed:zoom-out-95",
            className
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className="craft:z-50 craft:size-2.5 craft:translate-y-[calc(-50%-2px)] craft:rotate-45 craft:rounded-[2px] craft:bg-foreground craft:fill-foreground craft:data-[side=bottom]:top-1 craft:data-[side=inline-end]:top-1/2! craft:data-[side=inline-end]:-start-1 craft:data-[side=inline-end]:-translate-y-1/2 craft:data-[side=inline-start]:top-1/2! craft:data-[side=inline-start]:-end-1 craft:data-[side=inline-start]:-translate-y-1/2 craft:data-[side=left]:top-1/2! craft:data-[side=left]:-right-1 craft:data-[side=left]:-translate-y-1/2 craft:data-[side=right]:top-1/2! craft:data-[side=right]:-left-1 craft:data-[side=right]:-translate-y-1/2 craft:data-[side=top]:-bottom-2.5" />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
