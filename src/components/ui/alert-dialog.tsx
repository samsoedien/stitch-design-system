"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={cn(
        "craft:fixed craft:inset-0 craft:isolate craft:z-50 craft:bg-black/10 craft:duration-100 craft:supports-backdrop-filter:backdrop-blur-xs craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-closed:animate-out craft:data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  size = "default",
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: "default" | "sm"
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "craft:group/alert-dialog-content craft:fixed craft:top-1/2 craft:start-1/2 craft:z-50 craft:grid craft:w-full craft:-translate-x-1/2 rtl:craft:translate-x-1/2 craft:-translate-y-1/2 craft:gap-4 craft:rounded-xl craft:bg-popover craft:p-4 craft:text-popover-foreground craft:ring-1 craft:ring-foreground/10 craft:duration-100 craft:outline-none craft:data-[size=default]:max-w-xs craft:data-[size=sm]:max-w-xs craft:data-[size=default]:sm:max-w-sm craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-open:zoom-in-95 craft:data-closed:animate-out craft:data-closed:fade-out-0 craft:data-closed:zoom-out-95",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "craft:grid craft:grid-rows-[auto_1fr] craft:place-items-center craft:gap-1.5 craft:text-center craft:has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] craft:has-data-[slot=alert-dialog-media]:gap-x-4 craft:sm:group-data-[size=default]/alert-dialog-content:place-items-start craft:sm:group-data-[size=default]/alert-dialog-content:text-start craft:sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "craft:-mx-4 craft:-mb-4 craft:flex craft:flex-col-reverse craft:gap-2 craft:rounded-b-xl craft:border-t craft:bg-muted/50 craft:p-4 craft:group-data-[size=sm]/alert-dialog-content:grid craft:group-data-[size=sm]/alert-dialog-content:grid-cols-2 craft:sm:flex-row craft:sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "craft:mb-2 craft:inline-flex craft:size-10 craft:items-center craft:justify-center craft:rounded-md craft:bg-muted craft:sm:group-data-[size=default]/alert-dialog-content:row-span-2 craft:*:[svg:not([class*=size-])]:size-6",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "craft:font-heading craft:text-base craft:font-medium craft:sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        "craft:text-sm craft:text-balance craft:text-muted-foreground craft:md:text-pretty craft:*:[a]:underline craft:*:[a]:underline-offset-3 craft:*:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="alert-dialog-action"
      className={cn(className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      className={cn(className)}
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
