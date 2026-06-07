import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "craft:group/badge craft:inline-flex craft:h-5 craft:w-fit craft:shrink-0 craft:items-center craft:justify-center craft:gap-1 craft:overflow-hidden craft:rounded-4xl craft:border craft:border-transparent craft:px-2 craft:py-0.5 craft:text-xs craft:font-medium craft:whitespace-nowrap craft:transition-all craft:focus-visible:border-ring craft:focus-visible:ring-[3px] craft:focus-visible:ring-ring/50 craft:has-data-[icon=inline-end]:pe-1.5 craft:has-data-[icon=inline-start]:ps-1.5 craft:aria-invalid:border-destructive craft:aria-invalid:ring-destructive/20 craft:dark:aria-invalid:ring-destructive/40 craft:[&>svg]:pointer-events-none craft:[&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "craft:bg-primary craft:text-primary-foreground craft:[a]:hover:bg-primary/80",
        secondary:
          "craft:bg-secondary craft:text-secondary-foreground craft:[a]:hover:bg-secondary/80",
        destructive:
          "craft:bg-destructive/10 craft:text-destructive craft:focus-visible:ring-destructive/20 craft:dark:bg-destructive/20 craft:dark:focus-visible:ring-destructive/40 craft:[a]:hover:bg-destructive/20",
        outline:
          "craft:border-border craft:text-foreground craft:[a]:hover:bg-muted craft:[a]:hover:text-muted-foreground",
        ghost:
          "craft:hover:bg-muted craft:hover:text-muted-foreground craft:dark:hover:bg-muted/50",
        link: "craft:text-primary craft:underline-offset-4 craft:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
