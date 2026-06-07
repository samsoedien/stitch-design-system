"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "craft:group/avatar craft:relative craft:flex craft:size-8 craft:shrink-0 craft:rounded-full craft:select-none craft:after:absolute craft:after:inset-0 craft:after:rounded-full craft:after:border craft:after:border-border craft:after:mix-blend-darken craft:data-[size=lg]:size-10 craft:data-[size=sm]:size-6 craft:dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "craft:aspect-square craft:size-full craft:rounded-full craft:object-cover",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "craft:flex craft:size-full craft:items-center craft:justify-center craft:rounded-full craft:bg-muted craft:text-sm craft:text-muted-foreground craft:group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "craft:absolute craft:end-0 craft:bottom-0 craft:z-10 craft:inline-flex craft:items-center craft:justify-center craft:rounded-full craft:bg-primary craft:text-primary-foreground craft:bg-blend-color craft:ring-2 craft:ring-background craft:select-none",
        "craft:group-data-[size=sm]/avatar:size-2 craft:group-data-[size=sm]/avatar:[&>svg]:hidden",
        "craft:group-data-[size=default]/avatar:size-2.5 craft:group-data-[size=default]/avatar:[&>svg]:size-2",
        "craft:group-data-[size=lg]/avatar:size-3 craft:group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "craft:group/avatar-group craft:flex craft:-space-x-2 craft:*:data-[slot=avatar]:ring-2 craft:*:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "craft:relative craft:flex craft:size-8 craft:shrink-0 craft:items-center craft:justify-center craft:rounded-full craft:bg-muted craft:text-sm craft:text-muted-foreground craft:ring-2 craft:ring-background craft:group-has-data-[size=lg]/avatar-group:size-10 craft:group-has-data-[size=sm]/avatar-group:size-6 craft:[&>svg]:size-4 craft:group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 craft:group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
