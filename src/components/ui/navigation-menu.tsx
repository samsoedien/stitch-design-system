import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

function NavigationMenu({
  align = "start",
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align">) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "craft:group/navigation-menu craft:relative craft:flex craft:max-w-max craft:flex-1 craft:items-center craft:justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "craft:group craft:flex craft:flex-1 craft:list-none craft:items-center craft:justify-center craft:gap-0",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("craft:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "craft:group/navigation-menu-trigger craft:inline-flex craft:h-9 craft:w-max craft:items-center craft:justify-center craft:rounded-lg craft:px-2.5 craft:py-1.5 craft:text-sm craft:font-medium craft:transition-all craft:outline-none craft:hover:bg-muted craft:focus:bg-muted craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:focus-visible:outline-1 craft:disabled:pointer-events-none craft:disabled:opacity-50 craft:data-popup-open:bg-muted/50 craft:data-popup-open:hover:bg-muted craft:data-open:bg-muted/50 craft:data-open:hover:bg-muted craft:data-open:focus:bg-muted"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "craft:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon className="craft:relative craft:top-px craft:ms-1 craft:size-3 craft:transition craft:duration-300 craft:group-data-popup-open/navigation-menu-trigger:rotate-180 craft:group-data-open/navigation-menu-trigger:rotate-180" aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "craft:data-ending-style:data-activation-direction=left:translate-x-[50%] rtl:craft:data-ending-style:data-activation-direction=left:-translate-x-[50%] craft:data-ending-style:data-activation-direction=right:translate-x-[-50%] rtl:craft:data-ending-style:data-activation-direction=right:-translate-x-[-50%] craft:data-starting-style:data-activation-direction=left:translate-x-[-50%] rtl:craft:data-starting-style:data-activation-direction=left:-translate-x-[-50%] craft:data-starting-style:data-activation-direction=right:translate-x-[50%] rtl:craft:data-starting-style:data-activation-direction=right:-translate-x-[50%] craft:h-full craft:w-auto craft:p-1 craft:transition-[opacity,transform,translate] craft:duration-[0.35s] craft:ease-[cubic-bezier(0.22,1,0.36,1)] craft:group-data-[viewport=false]/navigation-menu:rounded-lg craft:group-data-[viewport=false]/navigation-menu:bg-popover craft:group-data-[viewport=false]/navigation-menu:text-popover-foreground craft:group-data-[viewport=false]/navigation-menu:shadow craft:group-data-[viewport=false]/navigation-menu:ring-1 craft:group-data-[viewport=false]/navigation-menu:ring-foreground/10 craft:group-data-[viewport=false]/navigation-menu:duration-300 craft:data-ending-style:opacity-0 craft:data-starting-style:opacity-0 craft:data-[motion=from-end]:slide-in-from-right-52 craft:data-[motion=from-start]:slide-in-from-left-52 craft:data-[motion=to-end]:slide-out-to-right-52 craft:data-[motion=to-start]:slide-out-to-left-52 craft:data-[motion^=from-]:animate-in craft:data-[motion^=from-]:fade-in craft:data-[motion^=to-]:animate-out craft:data-[motion^=to-]:fade-out craft:**:data-[slot=navigation-menu-link]:focus:ring-0 craft:**:data-[slot=navigation-menu-link]:focus:outline-none craft:group-data-[viewport=false]/navigation-menu:data-open:animate-in craft:group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 craft:group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 craft:group-data-[viewport=false]/navigation-menu:data-closed:animate-out craft:group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 craft:group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuPositioner({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "craft:isolate craft:z-50 craft:h-(--positioner-height) craft:w-(--positioner-width) craft:max-w-(--available-width) craft:transition-[top,left,right,bottom] craft:duration-[0.35s] craft:ease-[cubic-bezier(0.22,1,0.36,1)] craft:data-instant:transition-none craft:data-[side=bottom]:before:top-[-10px] craft:data-[side=bottom]:before:end-0 craft:data-[side=bottom]:before:start-0",
          className
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup className="craft:data-[ending-style]:easing-[ease] craft:xs:w-(--popup-width) craft:relative craft:h-(--popup-height) craft:w-(--popup-width) craft:origin-(--transform-origin) craft:rounded-lg craft:bg-popover craft:text-popover-foreground craft:shadow craft:ring-1 craft:ring-foreground/10 craft:transition-[opacity,transform,width,height,scale,translate] craft:duration-[0.35s] craft:ease-[cubic-bezier(0.22,1,0.36,1)] craft:outline-none craft:data-ending-style:scale-90 craft:data-ending-style:opacity-0 craft:data-ending-style:duration-150 craft:data-starting-style:scale-90 craft:data-starting-style:opacity-0">
          <NavigationMenuPrimitive.Viewport className="craft:relative craft:size-full craft:overflow-hidden" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "craft:flex craft:items-center craft:gap-2 craft:rounded-lg craft:p-2 craft:text-sm craft:transition-all craft:outline-none craft:hover:bg-muted craft:focus:bg-muted craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:focus-visible:outline-1 craft:in-data-[slot=navigation-menu-content]:rounded-md craft:data-active:bg-muted/50 craft:data-active:hover:bg-muted craft:data-active:focus:bg-muted craft:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        "craft:top-full craft:z-1 craft:flex craft:h-1.5 craft:items-end craft:justify-center craft:overflow-hidden craft:data-[state=hidden]:animate-out craft:data-[state=hidden]:fade-out craft:data-[state=visible]:animate-in craft:data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="craft:relative craft:top-[60%] craft:h-2 craft:w-2 craft:rotate-45 craft:rounded-ss-sm craft:bg-border craft:shadow-md" />
    </NavigationMenuPrimitive.Icon>
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
}
