"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "craft:group/input-group craft:relative craft:flex craft:h-8 craft:w-full craft:min-w-0 craft:items-center craft:rounded-lg craft:border craft:border-input craft:transition-colors craft:outline-none craft:in-data-[slot=combobox-content]:focus-within:border-inherit craft:in-data-[slot=combobox-content]:focus-within:ring-0 craft:has-disabled:bg-input/50 craft:has-disabled:opacity-50 craft:has-[[data-slot=input-group-control]:focus-visible]:border-ring craft:has-[[data-slot=input-group-control]:focus-visible]:ring-3 craft:has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 craft:has-[[data-slot][aria-invalid=true]]:border-destructive craft:has-[[data-slot][aria-invalid=true]]:ring-3 craft:has-[[data-slot][aria-invalid=true]]:ring-destructive/20 craft:has-[>[data-align=block-end]]:h-auto craft:has-[>[data-align=block-end]]:flex-col craft:has-[>[data-align=block-start]]:h-auto craft:has-[>[data-align=block-start]]:flex-col craft:has-[>textarea]:h-auto craft:dark:bg-input/30 craft:dark:has-disabled:bg-input/80 craft:dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 craft:has-[>[data-align=block-end]]:[&>input]:pt-3 craft:has-[>[data-align=block-start]]:[&>input]:pb-3 craft:has-[>[data-align=inline-end]]:[&>input]:pe-1.5 craft:has-[>[data-align=inline-start]]:[&>input]:ps-1.5",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "craft:flex craft:h-auto craft:cursor-text craft:items-center craft:justify-center craft:gap-2 craft:py-1.5 craft:text-sm craft:font-medium craft:text-muted-foreground craft:select-none craft:group-data-[disabled=true]/input-group:opacity-50 craft:[&>kbd]:rounded-[calc(var(--radius)-5px)] craft:[&>svg:not([class*=size-])]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "craft:order-first craft:ps-2 craft:has-[>button]:ms-[-0.3rem] craft:has-[>kbd]:ms-[-0.15rem]",
        "inline-end":
          "craft:order-last craft:pe-2 craft:has-[>button]:me-[-0.3rem] craft:has-[>kbd]:me-[-0.15rem]",
        "block-start":
          "craft:order-first craft:w-full craft:justify-start craft:px-2.5 craft:pt-2 craft:group-has-[>input]/input-group:pt-2 craft:[.border-b]:pb-2",
        "block-end":
          "craft:order-last craft:w-full craft:justify-start craft:px-2.5 craft:pb-2 craft:group-has-[>input]/input-group:pb-2 craft:[.border-t]:pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "craft:flex craft:items-center craft:gap-2 craft:text-sm craft:shadow-none",
  {
    variants: {
      size: {
        xs: "craft:h-6 craft:gap-1 craft:rounded-[calc(var(--radius)-3px)] craft:px-1.5 craft:[&>svg:not([class*=size-])]:size-3.5",
        sm: "craft:",
        "icon-xs":
          "craft:size-6 craft:rounded-[calc(var(--radius)-3px)] craft:p-0 craft:has-[>svg]:p-0",
        "icon-sm": "craft:size-8 craft:p-0 craft:has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset"
  }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "craft:flex craft:items-center craft:gap-2 craft:text-sm craft:text-muted-foreground craft:[&_svg]:pointer-events-none craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "craft:flex-1 craft:rounded-none craft:border-0 craft:bg-transparent craft:shadow-none craft:ring-0 craft:focus-visible:ring-0 craft:disabled:bg-transparent craft:aria-invalid:ring-0 craft:dark:bg-transparent craft:dark:disabled:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "craft:flex-1 craft:resize-none craft:rounded-none craft:border-0 craft:bg-transparent craft:py-2 craft:shadow-none craft:ring-0 craft:focus-visible:ring-0 craft:disabled:bg-transparent craft:aria-invalid:ring-0 craft:dark:bg-transparent craft:dark:disabled:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
