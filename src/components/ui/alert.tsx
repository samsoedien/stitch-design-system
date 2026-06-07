import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "craft:group/alert craft:relative craft:grid craft:w-full craft:gap-0.5 craft:rounded-lg craft:border craft:px-2.5 craft:py-2 craft:text-start craft:text-sm craft:has-data-[slot=alert-action]:relative craft:has-data-[slot=alert-action]:pe-18 craft:has-[>svg]:grid-cols-[auto_1fr] craft:has-[>svg]:gap-x-2 craft:*:[svg]:row-span-2 craft:*:[svg]:translate-y-0.5 craft:*:[svg]:text-current craft:*:[svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "craft:bg-card craft:text-card-foreground",
        destructive:
          "craft:bg-card craft:text-destructive craft:*:data-[slot=alert-description]:text-destructive/90 craft:*:[svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "craft:font-medium craft:group-has-[>svg]/alert:col-start-2 craft:[&_a]:underline craft:[&_a]:underline-offset-3 craft:[&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "craft:text-sm craft:text-balance craft:text-muted-foreground craft:md:text-pretty craft:[&_a]:underline craft:[&_a]:underline-offset-3 craft:[&_a]:hover:text-foreground craft:[&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("craft:absolute craft:top-2 craft:end-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
