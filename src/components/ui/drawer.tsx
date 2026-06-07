"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "craft:fixed craft:inset-0 craft:z-50 craft:bg-black/10 craft:supports-backdrop-filter:backdrop-blur-xs craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-closed:animate-out craft:data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "craft:group/drawer-content craft:fixed craft:z-50 craft:flex craft:h-auto craft:flex-col craft:bg-popover craft:text-sm craft:text-popover-foreground craft:data-[vaul-drawer-direction=bottom]:inset-x-0 craft:data-[vaul-drawer-direction=bottom]:bottom-0 craft:data-[vaul-drawer-direction=bottom]:mt-24 craft:data-[vaul-drawer-direction=bottom]:max-h-[80vh] craft:data-[vaul-drawer-direction=bottom]:rounded-t-xl craft:data-[vaul-drawer-direction=bottom]:border-t craft:data-[vaul-drawer-direction=left]:inset-y-0 craft:data-[vaul-drawer-direction=left]:start-0 craft:data-[vaul-drawer-direction=left]:w-3/4 craft:data-[vaul-drawer-direction=left]:rounded-e-xl craft:data-[vaul-drawer-direction=left]:border-e craft:data-[vaul-drawer-direction=right]:inset-y-0 craft:data-[vaul-drawer-direction=right]:end-0 craft:data-[vaul-drawer-direction=right]:w-3/4 craft:data-[vaul-drawer-direction=right]:rounded-s-xl craft:data-[vaul-drawer-direction=right]:border-s craft:data-[vaul-drawer-direction=top]:inset-x-0 craft:data-[vaul-drawer-direction=top]:top-0 craft:data-[vaul-drawer-direction=top]:mb-24 craft:data-[vaul-drawer-direction=top]:max-h-[80vh] craft:data-[vaul-drawer-direction=top]:rounded-b-xl craft:data-[vaul-drawer-direction=top]:border-b craft:data-[vaul-drawer-direction=left]:sm:max-w-sm craft:data-[vaul-drawer-direction=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="craft:mx-auto craft:mt-4 craft:hidden craft:h-1 craft:w-[100px] craft:shrink-0 craft:rounded-full craft:bg-muted craft:group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "craft:flex craft:flex-col craft:gap-0.5 craft:p-4 craft:group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center craft:group-data-[vaul-drawer-direction=top]/drawer-content:text-center craft:md:gap-0.5 craft:md:text-start",
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("craft:mt-auto craft:flex craft:flex-col craft:gap-2 craft:p-4", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(
        "craft:font-heading craft:text-base craft:font-medium craft:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("craft:text-sm craft:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
