"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CheckIcon } from "lucide-react"

function Menubar({ className, ...props }: MenubarPrimitive.Props) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn(
        "craft:flex craft:h-8 craft:items-center craft:gap-0.5 craft:rounded-lg craft:border craft:p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof DropdownMenu>) {
  return <DropdownMenu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuGroup>) {
  return <DropdownMenuGroup data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPortal>) {
  return <DropdownMenuPortal data-slot="menubar-portal" {...props} />
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuTrigger>) {
  return (
    <DropdownMenuTrigger
      data-slot="menubar-trigger"
      className={cn(
        "craft:flex craft:items-center craft:rounded-sm craft:px-1.5 craft:py-[2px] craft:text-sm craft:font-medium craft:outline-hidden craft:select-none craft:hover:bg-muted craft:aria-expanded:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="menubar-content"
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn("craft: craft: craft:min-w-36 craft:rounded-lg craft:bg-popover craft:p-1 craft:text-popover-foreground craft:shadow-md craft:ring-1 craft:ring-foreground/10 craft:duration-100 craft:data-[side=bottom]:slide-in-from-top-2 craft:data-[side=inline-end]:slide-in-from-start-2 craft:data-[side=inline-start]:slide-in-from-end-2 craft:data-[side=left]:slide-in-from-right-2 craft:data-[side=right]:slide-in-from-left-2 craft:data-[side=top]:slide-in-from-bottom-2 craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-open:zoom-in-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
      {...props}
    />
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuItem>) {
  return (
    <DropdownMenuItem
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "craft:group/menubar-item craft:gap-1.5 craft:rounded-md craft:px-1.5 craft:py-1 craft:text-sm craft:focus:bg-accent craft:focus:text-accent-foreground craft:not-data-[variant=destructive]:focus:**:text-accent-foreground craft:data-inset:ps-7 craft:data-[variant=destructive]:text-destructive craft:data-[variant=destructive]:focus:bg-destructive/10 craft:data-[variant=destructive]:focus:text-destructive craft:dark:data-[variant=destructive]:focus:bg-destructive/20 craft:data-disabled:opacity-50 craft:[&_svg:not([class*=size-])]:size-4 craft:data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-inset={inset}
      className={cn(
        "craft:relative craft:flex craft:cursor-default craft:items-center craft:gap-1.5 craft:rounded-md craft:py-1 craft:pe-1.5 craft:ps-7 craft:text-sm craft:outline-hidden craft:select-none craft:focus:bg-accent craft:focus:text-accent-foreground craft:focus:**:text-accent-foreground craft:data-inset:ps-7 craft:data-disabled:pointer-events-none craft:data-disabled:opacity-50 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="craft:pointer-events-none craft:absolute craft:start-1.5 craft:flex craft:size-4 craft:items-center craft:justify-center craft:[&_svg:not([class*=size-])]:size-4">
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuRadioGroup>) {
  return <DropdownMenuRadioGroup data-slot="menubar-radio-group" {...props} />
}

function MenubarRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-inset={inset}
      className={cn(
        "craft:relative craft:flex craft:cursor-default craft:items-center craft:gap-1.5 craft:rounded-md craft:py-1 craft:pe-1.5 craft:ps-7 craft:text-sm craft:outline-hidden craft:select-none craft:focus:bg-accent craft:focus:text-accent-foreground craft:focus:**:text-accent-foreground craft:data-inset:ps-7 craft:data-disabled:pointer-events-none craft:data-disabled:opacity-50 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span className="craft:pointer-events-none craft:absolute craft:start-1.5 craft:flex craft:size-4 craft:items-center craft:justify-center craft:[&_svg:not([class*=size-])]:size-4">
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuLabel> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuLabel
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "craft:px-1.5 craft:py-1 craft:text-sm craft:font-medium craft:data-inset:ps-7",
        className
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSeparator>) {
  return (
    <DropdownMenuSeparator
      data-slot="menubar-separator"
      className={cn("craft:-mx-1 craft:my-1 craft:h-px craft:bg-border", className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuShortcut>) {
  return (
    <DropdownMenuShortcut
      data-slot="menubar-shortcut"
      className={cn(
        "craft:ms-auto craft:text-xs craft:tracking-widest craft:text-muted-foreground craft:group-focus/menubar-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuSub>) {
  return <DropdownMenuSub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuSubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "craft:gap-1.5 craft:rounded-md craft:px-1.5 craft:py-1 craft:text-sm craft:focus:bg-accent craft:focus:text-accent-foreground craft:data-inset:ps-7 craft:data-open:bg-accent craft:data-open:text-accent-foreground craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubContent>) {
  return (
    <DropdownMenuSubContent
      data-slot="menubar-sub-content"
      className={cn("craft: craft: craft:min-w-32 craft:rounded-lg craft:bg-popover craft:p-1 craft:text-popover-foreground craft:shadow-lg craft:ring-1 craft:ring-foreground/10 craft:duration-100 craft:data-[side=bottom]:slide-in-from-top-2 craft:data-[side=left]:slide-in-from-right-2 craft:data-[side=right]:slide-in-from-left-2 craft:data-[side=top]:slide-in-from-bottom-2 craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-open:zoom-in-95 craft:data-closed:animate-out craft:data-closed:fade-out-0 craft:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
