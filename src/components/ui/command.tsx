"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  InputGroup,
  InputGroupAddon,
} from "@/components/ui/input-group"
import { SearchIcon, CheckIcon } from "lucide-react"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "craft:flex craft:size-full craft:flex-col craft:overflow-hidden craft:rounded-xl! craft:bg-popover craft:p-1 craft:text-popover-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}: Omit<React.ComponentProps<typeof Dialog>, "children"> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
  children: React.ReactNode
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="craft:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          "craft:top-1/3 craft:translate-y-0 craft:overflow-hidden craft:rounded-xl! craft:p-0",
          className
        )}
        showCloseButton={showCloseButton}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="craft:p-1 craft:pb-0">
      <InputGroup className="craft:h-8! craft:rounded-lg! craft:border-input/30 craft:bg-input/30 craft:shadow-none! craft:*:data-[slot=input-group-addon]:ps-2!">
        <CommandPrimitive.Input
          data-slot="command-input"
          className={cn(
            "craft:w-full craft:text-sm craft:outline-hidden craft:disabled:cursor-not-allowed craft:disabled:opacity-50",
            className
          )}
          {...props}
        />
        <InputGroupAddon>
          <SearchIcon className="craft:size-4 craft:shrink-0 craft:opacity-50" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "craft:no-scrollbar craft:max-h-72 craft:scroll-py-1 craft:overflow-x-hidden craft:overflow-y-auto craft:outline-none",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("craft:py-6 craft:text-center craft:text-sm", className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "craft:overflow-hidden craft:p-1 craft:text-foreground craft:**:[[cmdk-group-heading]]:px-2 craft:**:[[cmdk-group-heading]]:py-1.5 craft:**:[[cmdk-group-heading]]:text-xs craft:**:[[cmdk-group-heading]]:font-medium craft:**:[[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("craft:-mx-1 craft:h-px craft:bg-border", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "craft:group/command-item craft:relative craft:flex craft:cursor-default craft:items-center craft:gap-2 craft:rounded-sm craft:px-2 craft:py-1.5 craft:text-sm craft:outline-hidden craft:select-none craft:in-data-[slot=dialog-content]:rounded-lg! craft:data-[disabled=true]:pointer-events-none craft:data-[disabled=true]:opacity-50 craft:data-selected:bg-muted craft:data-selected:text-foreground craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4 craft:data-selected:*:[svg]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <CheckIcon className="craft:ms-auto craft:opacity-0 craft:group-has-data-[slot=command-shortcut]/command-item:hidden craft:group-data-[checked=true]/command-item:opacity-100" />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "craft:ms-auto craft:text-xs craft:tracking-widest craft:text-muted-foreground craft:group-data-selected/command-item:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
