"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "craft:group/toggle craft:inline-flex craft:items-center craft:justify-center craft:gap-1 craft:rounded-lg craft:text-sm craft:font-medium craft:whitespace-nowrap craft:transition-all craft:outline-none craft:hover:bg-muted craft:hover:text-foreground craft:focus-visible:border-ring craft:focus-visible:ring-[3px] craft:focus-visible:ring-ring/50 craft:disabled:pointer-events-none craft:disabled:opacity-50 craft:aria-invalid:border-destructive craft:aria-invalid:ring-destructive/20 craft:aria-pressed:bg-muted craft:data-[state=on]:bg-muted craft:dark:aria-invalid:ring-destructive/40 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "craft:bg-transparent",
        outline: "craft:border craft:border-input craft:bg-transparent craft:hover:bg-muted",
      },
      size: {
        default:
          "craft:h-8 craft:min-w-8 craft:px-2.5 craft:has-data-[icon=inline-end]:pe-2 craft:has-data-[icon=inline-start]:ps-2",
        sm: "craft:h-7 craft:min-w-7 craft:rounded-[min(var(--radius-md),12px)] craft:px-2.5 craft:text-[0.8rem] craft:has-data-[icon=inline-end]:pe-1.5 craft:has-data-[icon=inline-start]:ps-1.5 craft:[&_svg:not([class*=size-])]:size-3.5",
        lg: "craft:h-9 craft:min-w-9 craft:px-2.5 craft:has-data-[icon=inline-end]:pe-2 craft:has-data-[icon=inline-start]:ps-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
