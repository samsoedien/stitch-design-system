"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"

import { cn } from "@/lib/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"

const Select = SelectPrimitive.Root

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("craft:scroll-my-1 craft:p-1", className)}
      {...props}
    />
  )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("craft:flex craft:flex-1 craft:text-start", className)}
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "craft:flex craft:w-fit craft:items-center craft:justify-between craft:gap-1.5 craft:rounded-lg craft:border craft:border-input craft:bg-transparent craft:py-2 craft:pe-2 craft:ps-2.5 craft:text-sm craft:whitespace-nowrap craft:transition-colors craft:outline-none craft:select-none craft:focus-visible:border-ring craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:disabled:cursor-not-allowed craft:disabled:opacity-50 craft:aria-invalid:border-destructive craft:aria-invalid:ring-3 craft:aria-invalid:ring-destructive/20 craft:data-placeholder:text-muted-foreground craft:data-[size=default]:h-8 craft:data-[size=sm]:h-7 craft:data-[size=sm]:rounded-[min(var(--radius-md),10px)] craft:*:data-[slot=select-value]:line-clamp-1 craft:*:data-[slot=select-value]:flex craft:*:data-[slot=select-value]:items-center craft:*:data-[slot=select-value]:gap-1.5 craft:dark:bg-input/30 craft:dark:hover:bg-input/50 craft:dark:aria-invalid:border-destructive/50 craft:dark:aria-invalid:ring-destructive/40 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="craft:pointer-events-none craft:size-4 craft:text-muted-foreground" />
        }
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="craft:isolate craft:z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn("craft: craft: craft:relative craft:isolate craft:z-50 craft:max-h-(--available-height) craft:w-(--anchor-width) craft:min-w-36 craft:origin-(--transform-origin) craft:overflow-x-hidden craft:overflow-y-auto craft:rounded-lg craft:bg-popover craft:text-popover-foreground craft:shadow-md craft:ring-1 craft:ring-foreground/10 craft:duration-100 craft:data-[align-trigger=true]:animate-none craft:data-[side=bottom]:slide-in-from-top-2 craft:data-[side=inline-end]:slide-in-from-start-2 craft:data-[side=inline-start]:slide-in-from-end-2 craft:data-[side=left]:slide-in-from-right-2 craft:data-[side=right]:slide-in-from-left-2 craft:data-[side=top]:slide-in-from-bottom-2 craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-open:zoom-in-95 craft:data-closed:animate-out craft:data-closed:fade-out-0 craft:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("craft:px-1.5 craft:py-1 craft:text-xs craft:text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "craft:relative craft:flex craft:w-full craft:cursor-default craft:items-center craft:gap-1.5 craft:rounded-md craft:py-1 craft:pe-8 craft:ps-1.5 craft:text-sm craft:outline-hidden craft:select-none craft:focus:bg-accent craft:focus:text-accent-foreground craft:not-data-[variant=destructive]:focus:**:text-accent-foreground craft:data-disabled:pointer-events-none craft:data-disabled:opacity-50 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4 craft:*:[span]:last:flex craft:*:[span]:last:items-center craft:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="craft:flex craft:flex-1 craft:shrink-0 craft:gap-2 craft:whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="craft:pointer-events-none craft:absolute craft:end-2 craft:flex craft:size-4 craft:items-center craft:justify-center" />
        }
      >
        <CheckIcon className="craft:pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("craft:pointer-events-none craft:-mx-1 craft:my-1 craft:h-px craft:bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "craft:top-0 craft:z-10 craft:flex craft:w-full craft:cursor-default craft:items-center craft:justify-center craft:bg-popover craft:py-1 craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronUpIcon
      />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "craft:bottom-0 craft:z-10 craft:flex craft:w-full craft:cursor-default craft:items-center craft:justify-center craft:bg-popover craft:py-1 craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronDownIcon
      />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
