import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "craft:group/button craft:inline-flex craft:shrink-0 craft:items-center craft:justify-center craft:rounded-lg craft:border craft:border-transparent craft:bg-clip-padding craft:text-sm craft:font-medium craft:whitespace-nowrap craft:transition-all craft:outline-none craft:select-none craft:focus-visible:border-ring craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:active:not-aria-[haspopup]:translate-y-px craft:disabled:pointer-events-none craft:disabled:opacity-50 craft:aria-invalid:border-destructive craft:aria-invalid:ring-3 craft:aria-invalid:ring-destructive/20 craft:dark:aria-invalid:border-destructive/50 craft:dark:aria-invalid:ring-destructive/40 craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "craft:bg-primary craft:text-primary-foreground craft:hover:bg-primary/80",
        outline:
          "craft:border-border craft:bg-background craft:hover:bg-muted craft:hover:text-foreground craft:aria-expanded:bg-muted craft:aria-expanded:text-foreground craft:dark:border-input craft:dark:bg-input/30 craft:dark:hover:bg-input/50",
        secondary:
          "craft:bg-secondary craft:text-secondary-foreground craft:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] craft:aria-expanded:bg-secondary craft:aria-expanded:text-secondary-foreground",
        ghost:
          "craft:hover:bg-muted craft:hover:text-foreground craft:aria-expanded:bg-muted craft:aria-expanded:text-foreground craft:dark:hover:bg-muted/50",
        destructive:
          "craft:bg-destructive/10 craft:text-destructive craft:hover:bg-destructive/20 craft:focus-visible:border-destructive/40 craft:focus-visible:ring-destructive/20 craft:dark:bg-destructive/20 craft:dark:hover:bg-destructive/30 craft:dark:focus-visible:ring-destructive/40",
        link: "craft:text-primary craft:underline-offset-4 craft:hover:underline",
      },
      size: {
        default:
          "craft:h-8 craft:gap-1.5 craft:px-2.5 craft:has-data-[icon=inline-end]:pe-2 craft:has-data-[icon=inline-start]:ps-2",
        xs: "craft:h-6 craft:gap-1 craft:rounded-[min(var(--radius-md),10px)] craft:px-2 craft:text-xs craft:in-data-[slot=button-group]:rounded-lg craft:has-data-[icon=inline-end]:pe-1.5 craft:has-data-[icon=inline-start]:ps-1.5 craft:[&_svg:not([class*=size-])]:size-3",
        sm: "craft:h-7 craft:gap-1 craft:rounded-[min(var(--radius-md),12px)] craft:px-2.5 craft:text-[0.8rem] craft:in-data-[slot=button-group]:rounded-lg craft:has-data-[icon=inline-end]:pe-1.5 craft:has-data-[icon=inline-start]:ps-1.5 craft:[&_svg:not([class*=size-])]:size-3.5",
        lg: "craft:h-9 craft:gap-1.5 craft:px-2.5 craft:has-data-[icon=inline-end]:pe-2 craft:has-data-[icon=inline-start]:ps-2",
        icon: "craft:size-8",
        "icon-xs":
          "craft:size-6 craft:rounded-[min(var(--radius-md),10px)] craft:in-data-[slot=button-group]:rounded-lg craft:[&_svg:not([class*=size-])]:size-3",
        "icon-sm":
          "craft:size-7 craft:rounded-[min(var(--radius-md),12px)] craft:in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "craft:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
