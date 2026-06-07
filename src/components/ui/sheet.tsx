"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "craft:fixed craft:inset-0 craft:z-50 craft:bg-black/10 craft:transition-opacity craft:duration-150 craft:data-ending-style:opacity-0 craft:data-starting-style:opacity-0 craft:supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "craft:fixed craft:z-50 craft:flex craft:flex-col craft:gap-4 craft:bg-popover craft:bg-clip-padding craft:text-sm craft:text-popover-foreground craft:shadow-lg craft:transition craft:duration-200 craft:ease-in-out craft:data-ending-style:opacity-0 craft:data-starting-style:opacity-0 craft:data-[side=bottom]:inset-x-0 craft:data-[side=bottom]:bottom-0 craft:data-[side=bottom]:h-auto craft:data-[side=bottom]:border-t craft:data-[side=bottom]:data-ending-style:translate-y-[2.5rem] craft:data-[side=bottom]:data-starting-style:translate-y-[2.5rem] craft:data-[side=left]:inset-y-0 craft:data-[side=left]:left-0 craft:data-[side=left]:h-full craft:data-[side=left]:w-3/4 craft:data-[side=left]:border-e craft:data-[side=left]:data-ending-style:translate-x-[-2.5rem] rtl:craft:data-[side=left]:data-ending-style:-translate-x-[-2.5rem] craft:data-[side=left]:data-starting-style:translate-x-[-2.5rem] rtl:craft:data-[side=left]:data-starting-style:-translate-x-[-2.5rem] craft:data-[side=right]:inset-y-0 craft:data-[side=right]:right-0 craft:data-[side=right]:h-full craft:data-[side=right]:w-3/4 craft:data-[side=right]:border-s craft:data-[side=right]:data-ending-style:translate-x-[2.5rem] rtl:craft:data-[side=right]:data-ending-style:-translate-x-[2.5rem] craft:data-[side=right]:data-starting-style:translate-x-[2.5rem] rtl:craft:data-[side=right]:data-starting-style:-translate-x-[2.5rem] craft:data-[side=top]:inset-x-0 craft:data-[side=top]:top-0 craft:data-[side=top]:h-auto craft:data-[side=top]:border-b craft:data-[side=top]:data-ending-style:translate-y-[-2.5rem] craft:data-[side=top]:data-starting-style:translate-y-[-2.5rem] craft:data-[side=left]:sm:max-w-sm craft:data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="craft:absolute craft:top-3 craft:end-3"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="craft:sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("craft:flex craft:flex-col craft:gap-0.5 craft:p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("craft:mt-auto craft:flex craft:flex-col craft:gap-2 craft:p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "craft:font-heading craft:text-base craft:font-medium craft:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("craft:text-sm craft:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
