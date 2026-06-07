import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "craft:group/card craft:flex craft:flex-col craft:gap-(--card-spacing) craft:overflow-hidden craft:rounded-xl craft:bg-card craft:py-(--card-spacing) craft:text-sm craft:text-card-foreground craft:ring-1 craft:ring-foreground/10 craft:[--card-spacing:--spacing(4)] craft:has-data-[slot=card-footer]:pb-0 craft:has-[>img:first-child]:pt-0 craft:data-[size=sm]:[--card-spacing:--spacing(3)] craft:data-[size=sm]:has-data-[slot=card-footer]:pb-0 craft:*:[img:first-child]:rounded-t-xl craft:*:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "craft:group/card-header craft:@container/card-header craft:grid craft:auto-rows-min craft:items-start craft:gap-1 craft:rounded-t-xl craft:px-(--card-spacing) craft:has-data-[slot=card-action]:grid-cols-[1fr_auto] craft:has-data-[slot=card-description]:grid-rows-[auto_auto] craft:[.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "craft:font-heading craft:text-base craft:leading-snug craft:font-medium craft:group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("craft:text-sm craft:text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "craft:col-start-2 craft:row-span-2 craft:row-start-1 craft:self-start craft:justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("craft:px-(--card-spacing)", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "craft:flex craft:items-center craft:rounded-b-xl craft:border-t craft:bg-muted/50 craft:p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
