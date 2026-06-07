import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn(
        "craft:group/item-group craft:flex craft:w-full craft:flex-col craft:gap-4 craft:has-data-[size=sm]:gap-2.5 craft:has-data-[size=xs]:gap-2",
        className
      )}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("craft:my-2", className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  "craft:group/item craft:flex craft:w-full craft:flex-wrap craft:items-center craft:rounded-lg craft:border craft:text-sm craft:transition-colors craft:duration-100 craft:outline-none craft:focus-visible:border-ring craft:focus-visible:ring-[3px] craft:focus-visible:ring-ring/50 craft:[a]:transition-colors craft:[a]:hover:bg-muted",
  {
    variants: {
      variant: {
        default: "craft:border-transparent",
        outline: "craft:border-border",
        muted: "craft:border-transparent craft:bg-muted/50",
      },
      size: {
        default: "craft:gap-2.5 craft:px-3 craft:py-2.5",
        sm: "craft:gap-2.5 craft:px-3 craft:py-2.5",
        xs: "craft:gap-2 craft:px-2.5 craft:py-2 craft:in-data-[slot=dropdown-menu-content]:p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Item({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: useRender.ComponentProps<"div"> & VariantProps<typeof itemVariants>) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(itemVariants({ variant, size, className })),
      },
      props
    ),
    render,
    state: {
      slot: "item",
      variant,
      size,
    },
  })
}

const itemMediaVariants = cva(
  "craft:flex craft:shrink-0 craft:items-center craft:justify-center craft:gap-2 craft:group-has-data-[slot=item-description]/item:translate-y-0.5 craft:group-has-data-[slot=item-description]/item:self-start craft:[&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "craft:bg-transparent",
        icon: "craft:[&_svg:not([class*=size-])]:size-4",
        image:
          "craft:size-10 craft:overflow-hidden craft:rounded-sm craft:group-data-[size=sm]/item:size-8 craft:group-data-[size=xs]/item:size-6 craft:[&_img]:size-full craft:[&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "craft:flex craft:flex-1 craft:flex-col craft:gap-1 craft:group-data-[size=xs]/item:gap-0 craft:[&+[data-slot=item-content]]:flex-none",
        className
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "craft:line-clamp-1 craft:flex craft:w-fit craft:items-center craft:gap-2 craft:text-sm craft:leading-snug craft:font-medium craft:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "craft:line-clamp-2 craft:text-start craft:text-sm craft:leading-normal craft:font-normal craft:text-muted-foreground craft:group-data-[size=xs]/item:text-xs craft:[&>a]:underline craft:[&>a]:underline-offset-4 craft:[&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("craft:flex craft:items-center craft:gap-2", className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "craft:flex craft:basis-full craft:items-center craft:justify-between craft:gap-2",
        className
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "craft:flex craft:basis-full craft:items-center craft:justify-between craft:gap-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
