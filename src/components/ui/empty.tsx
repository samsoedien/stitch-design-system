import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "craft:flex craft:w-full craft:min-w-0 craft:flex-1 craft:flex-col craft:items-center craft:justify-center craft:gap-4 craft:rounded-xl craft:border-dashed craft:p-6 craft:text-center craft:text-balance",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn("craft:flex craft:max-w-sm craft:flex-col craft:items-center craft:gap-2", className)}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "craft:mb-2 craft:flex craft:shrink-0 craft:items-center craft:justify-center craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "craft:bg-transparent",
        icon: "craft:flex craft:size-8 craft:shrink-0 craft:items-center craft:justify-center craft:rounded-lg craft:bg-muted craft:text-foreground craft:[&_svg:not([class*=size-])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn(
        "craft:font-heading craft:text-sm craft:font-medium craft:tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "craft:text-sm/relaxed craft:text-muted-foreground craft:[&>a]:underline craft:[&>a]:underline-offset-4 craft:[&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "craft:flex craft:w-full craft:max-w-sm craft:min-w-0 craft:flex-col craft:items-center craft:gap-2.5 craft:text-sm craft:text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
