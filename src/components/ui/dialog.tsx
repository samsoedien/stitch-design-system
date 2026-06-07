"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "craft:fixed craft:inset-0 craft:isolate craft:z-50 craft:bg-black/10 craft:duration-100 craft:supports-backdrop-filter:backdrop-blur-xs craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-closed:animate-out craft:data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "craft:fixed craft:top-1/2 craft:start-1/2 craft:z-50 craft:grid craft:w-full craft:max-w-[calc(100%-2rem)] craft:-translate-x-1/2 rtl:craft:translate-x-1/2 craft:-translate-y-1/2 craft:gap-4 craft:rounded-xl craft:bg-popover craft:p-4 craft:text-sm craft:text-popover-foreground craft:ring-1 craft:ring-foreground/10 craft:duration-100 craft:outline-none craft:sm:max-w-sm craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-open:zoom-in-95 craft:data-closed:animate-out craft:data-closed:fade-out-0 craft:data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <Button
                variant="ghost"
                className="craft:absolute craft:top-2 craft:end-2"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="craft:sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("craft:flex craft:flex-col craft:gap-2", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "craft:-mx-4 craft:-mb-4 craft:flex craft:flex-col-reverse craft:gap-2 craft:rounded-b-xl craft:border-t craft:bg-muted/50 craft:p-4 craft:sm:flex-row craft:sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "craft:font-heading craft:text-base craft:leading-none craft:font-medium",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "craft:text-sm craft:text-muted-foreground craft:*:[a]:underline craft:*:[a]:underline-offset-3 craft:*:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
