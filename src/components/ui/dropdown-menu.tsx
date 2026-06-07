"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"

import { cn } from "@/lib/utils"
import { ChevronRightIcon, CheckIcon } from "lucide-react"

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="craft:isolate craft:z-50 craft:outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn("craft: craft: craft:z-50 craft:max-h-(--available-height) craft:w-(--anchor-width) craft:min-w-32 craft:origin-(--transform-origin) craft:overflow-x-hidden craft:overflow-y-auto craft:rounded-lg craft:bg-popover craft:p-1 craft:text-popover-foreground craft:shadow-md craft:ring-1 craft:ring-foreground/10 craft:duration-100 craft:outline-none craft:data-[side=bottom]:slide-in-from-top-2 craft:data-[side=inline-end]:slide-in-from-start-2 craft:data-[side=inline-start]:slide-in-from-end-2 craft:data-[side=left]:slide-in-from-right-2 craft:data-[side=right]:slide-in-from-left-2 craft:data-[side=top]:slide-in-from-bottom-2 craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-open:zoom-in-95 craft:data-closed:animate-out craft:data-closed:overflow-hidden craft:data-closed:fade-out-0 craft:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "craft:px-1.5 craft:py-1 craft:text-xs craft:font-medium craft:text-muted-foreground craft:data-inset:ps-7",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "craft:group/dropdown-menu-item craft:relative craft:flex craft:cursor-default craft:items-center craft:gap-1.5 craft:rounded-md craft:px-1.5 craft:py-1 craft:text-sm craft:outline-hidden craft:select-none craft:focus:bg-accent craft:focus:text-accent-foreground craft:not-data-[variant=destructive]:focus:**:text-accent-foreground craft:data-inset:ps-7 craft:data-[variant=destructive]:text-destructive craft:data-[variant=destructive]:focus:bg-destructive/10 craft:data-[variant=destructive]:focus:text-destructive craft:dark:data-[variant=destructive]:focus:bg-destructive/20 craft:data-disabled:pointer-events-none craft:data-disabled:opacity-50 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4 craft:data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "craft:flex craft:cursor-default craft:items-center craft:gap-1.5 craft:rounded-md craft:px-1.5 craft:py-1 craft:text-sm craft:outline-hidden craft:select-none craft:focus:bg-accent craft:focus:text-accent-foreground craft:not-data-[variant=destructive]:focus:**:text-accent-foreground craft:data-inset:ps-7 craft:data-popup-open:bg-accent craft:data-popup-open:text-accent-foreground craft:data-open:bg-accent craft:data-open:text-accent-foreground craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="craft:ms-auto" />
    </MenuPrimitive.SubmenuTrigger>
  )
}

function DropdownMenuSubContent({
  align = "start",
  alignOffset = -3,
  side = "inline-end",
  sideOffset = 0,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      className={cn("craft: craft: craft:w-auto craft:min-w-[96px] craft:rounded-lg craft:bg-popover craft:p-1 craft:text-popover-foreground craft:shadow-lg craft:ring-1 craft:ring-foreground/10 craft:duration-100 craft:data-[side=bottom]:slide-in-from-top-2 craft:data-[side=left]:slide-in-from-right-2 craft:data-[side=right]:slide-in-from-left-2 craft:data-[side=top]:slide-in-from-bottom-2 craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-open:zoom-in-95 craft:data-closed:animate-out craft:data-closed:fade-out-0 craft:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
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
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "craft:relative craft:flex craft:cursor-default craft:items-center craft:gap-1.5 craft:rounded-md craft:py-1 craft:pe-8 craft:ps-1.5 craft:text-sm craft:outline-hidden craft:select-none craft:focus:bg-accent craft:focus:text-accent-foreground craft:focus:**:text-accent-foreground craft:data-inset:ps-7 craft:data-disabled:pointer-events-none craft:data-disabled:opacity-50 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className="craft:pointer-events-none craft:absolute craft:end-2 craft:flex craft:items-center craft:justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        "craft:relative craft:flex craft:cursor-default craft:items-center craft:gap-1.5 craft:rounded-md craft:py-1 craft:pe-8 craft:ps-1.5 craft:text-sm craft:outline-hidden craft:select-none craft:focus:bg-accent craft:focus:text-accent-foreground craft:focus:**:text-accent-foreground craft:data-inset:ps-7 craft:data-disabled:pointer-events-none craft:data-disabled:opacity-50 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <span
        className="craft:pointer-events-none craft:absolute craft:end-2 craft:flex craft:items-center craft:justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon
          />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("craft:-mx-1 craft:my-1 craft:h-px craft:bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "craft:ms-auto craft:text-xs craft:tracking-widest craft:text-muted-foreground craft:group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
