import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "craft:pointer-events-none craft:inline-flex craft:h-5 craft:w-fit craft:min-w-5 craft:items-center craft:justify-center craft:gap-1 craft:rounded-sm craft:bg-muted craft:px-1 craft:font-sans craft:text-xs craft:font-medium craft:text-muted-foreground craft:select-none craft:in-data-[slot=tooltip-content]:bg-background/20 craft:in-data-[slot=tooltip-content]:text-background craft:dark:in-data-[slot=tooltip-content]:bg-background/10 craft:[&_svg:not([class*=size-])]:size-3",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("craft:inline-flex craft:items-center craft:gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
