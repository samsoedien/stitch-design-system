"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "craft:group/tabs craft:flex craft:gap-2 craft:data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "craft:group/tabs-list craft:inline-flex craft:w-fit craft:items-center craft:justify-center craft:rounded-lg craft:p-[3px] craft:text-muted-foreground craft:group-data-horizontal/tabs:h-8 craft:group-data-vertical/tabs:h-fit craft:group-data-vertical/tabs:flex-col craft:data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "craft:bg-muted",
        line: "craft:gap-1 craft:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "craft:relative craft:inline-flex craft:h-[calc(100%-1px)] craft:flex-1 craft:items-center craft:justify-center craft:gap-1.5 craft:rounded-md craft:border craft:border-transparent craft:px-1.5 craft:py-0.5 craft:text-sm craft:font-medium craft:whitespace-nowrap craft:text-foreground/60 craft:transition-all craft:group-data-vertical/tabs:w-full craft:group-data-vertical/tabs:justify-start craft:hover:text-foreground craft:focus-visible:border-ring craft:focus-visible:ring-[3px] craft:focus-visible:ring-ring/50 craft:focus-visible:outline-1 craft:focus-visible:outline-ring craft:disabled:pointer-events-none craft:disabled:opacity-50 craft:has-data-[icon=inline-end]:pe-1 craft:has-data-[icon=inline-start]:ps-1 craft:aria-disabled:pointer-events-none craft:aria-disabled:opacity-50 craft:dark:text-muted-foreground craft:dark:hover:text-foreground craft:group-data-[variant=default]/tabs-list:data-active:shadow-sm craft:group-data-[variant=line]/tabs-list:data-active:shadow-none craft:[&_svg]:pointer-events-none craft:[&_svg]:shrink-0 craft:[&_svg:not([class*=size-])]:size-4",
        "craft:group-data-[variant=line]/tabs-list:bg-transparent craft:group-data-[variant=line]/tabs-list:data-active:bg-transparent craft:dark:group-data-[variant=line]/tabs-list:data-active:border-transparent craft:dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "craft:data-active:bg-background craft:data-active:text-foreground craft:dark:data-active:border-input craft:dark:data-active:bg-input/30 craft:dark:data-active:text-foreground",
        "craft:after:absolute craft:after:bg-foreground craft:after:opacity-0 craft:after:transition-opacity craft:group-data-horizontal/tabs:after:inset-x-0 craft:group-data-horizontal/tabs:after:bottom-[-5px] craft:group-data-horizontal/tabs:after:h-0.5 craft:group-data-vertical/tabs:after:inset-y-0 craft:group-data-vertical/tabs:after:-end-1 craft:group-data-vertical/tabs:after:w-0.5 craft:group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("craft:flex-1 craft:text-sm craft:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
