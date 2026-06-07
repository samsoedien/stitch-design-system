"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ChevronDownIcon, XIcon, CheckIcon } from "lucide-react"

const Combobox = ComboboxPrimitive.Root

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("craft:[&_svg:not([class*=size-])]:size-4", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="craft:pointer-events-none craft:size-4 craft:text-muted-foreground" />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="craft:pointer-events-none" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean
  showClear?: boolean
}) {
  return (
    <InputGroup className={cn("craft:w-auto", className)}>
      <ComboboxPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            render={<ComboboxTrigger />}
            data-slot="input-group-button"
            className="craft:group-has-data-[slot=combobox-clear]/input-group:hidden craft:data-pressed:bg-transparent"
            disabled={disabled}
          />
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  )
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="craft:isolate craft:z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn("craft: craft: craft:group/combobox-content craft:relative craft:max-h-(--available-height) craft:w-(--anchor-width) craft:max-w-(--available-width) craft:min-w-[calc(var(--anchor-width)+--spacing(7))] craft:origin-(--transform-origin) craft:overflow-hidden craft:rounded-lg craft:bg-popover craft:text-popover-foreground craft:shadow-md craft:ring-1 craft:ring-foreground/10 craft:duration-100 craft:data-[chips=true]:min-w-(--anchor-width) craft:data-[side=bottom]:slide-in-from-top-2 craft:data-[side=inline-end]:slide-in-from-start-2 craft:data-[side=inline-start]:slide-in-from-end-2 craft:data-[side=left]:slide-in-from-right-2 craft:data-[side=right]:slide-in-from-left-2 craft:data-[side=top]:slide-in-from-bottom-2 craft:*:data-[slot=input-group]:m-1 craft:*:data-[slot=input-group]:mb-0 craft:*:data-[slot=input-group]:h-8 craft:*:data-[slot=input-group]:border-input/30 craft:*:data-[slot=input-group]:bg-input/30 craft:*:data-[slot=input-group]:shadow-none craft:data-open:animate-in craft:data-open:fade-in-0 craft:data-open:zoom-in-95 craft:data-closed:animate-out craft:data-closed:fade-out-0 craft:data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "craft:no-scrollbar craft:max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] craft:scroll-py-1 craft:overflow-y-auto craft:overscroll-contain craft:p-1 craft:data-empty:p-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "craft:relative craft:flex craft:w-full craft:cursor-default craft:items-center craft:gap-2 craft:rounded-md craft:py-1 craft:pe-8 craft:ps-1.5 craft:text-sm craft:outline-hidden craft:select-none craft:data-highlighted:bg-accent craft:data-highlighted:text-accent-foreground craft:not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground craft:data-disabled:pointer-events-none craft:data-disabled:opacity-50 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={
          <span className="craft:pointer-events-none craft:absolute craft:end-2 craft:flex craft:size-4 craft:items-center craft:justify-center" />
        }
      >
        <CheckIcon className="craft:pointer-events-none" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  )
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn("craft:px-2 craft:py-1.5 craft:text-xs craft:text-muted-foreground", className)}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "craft:hidden craft:w-full craft:justify-center craft:py-2 craft:text-center craft:text-sm craft:text-muted-foreground craft:group-data-empty/combobox-content:flex",
        className
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("craft:-mx-1 craft:my-1 craft:h-px craft:bg-border", className)}
      {...props}
    />
  )
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        "craft:flex craft:min-h-8 craft:flex-wrap craft:items-center craft:gap-1 craft:rounded-lg craft:border craft:border-input craft:bg-transparent craft:bg-clip-padding craft:px-2.5 craft:py-1 craft:text-sm craft:transition-colors craft:focus-within:border-ring craft:focus-within:ring-3 craft:focus-within:ring-ring/50 craft:has-aria-invalid:border-destructive craft:has-aria-invalid:ring-3 craft:has-aria-invalid:ring-destructive/20 craft:has-data-[slot=combobox-chip]:px-1 craft:dark:bg-input/30 craft:dark:has-aria-invalid:border-destructive/50 craft:dark:has-aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "craft:flex craft:h-[calc(--spacing(5.25))] craft:w-fit craft:items-center craft:justify-center craft:gap-1 craft:rounded-sm craft:bg-muted craft:px-1.5 craft:text-xs craft:font-medium craft:whitespace-nowrap craft:text-foreground craft:has-disabled:pointer-events-none craft:has-disabled:cursor-not-allowed craft:has-disabled:opacity-50 craft:has-data-[slot=combobox-chip-remove]:pe-0",
        className
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="craft:-ms-1 craft:opacity-50 craft:hover:opacity-100"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="craft:pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

function ComboboxChipsInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn("craft:min-w-16 craft:flex-1 craft:outline-none", className)}
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null)
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
}
