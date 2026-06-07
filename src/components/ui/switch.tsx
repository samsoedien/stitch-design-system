"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "craft:peer craft:group/switch craft:relative craft:inline-flex craft:shrink-0 craft:items-center craft:rounded-full craft:border craft:border-transparent craft:transition-all craft:outline-none craft:after:absolute craft:after:-inset-x-3 craft:after:-inset-y-2 craft:focus-visible:border-ring craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:aria-invalid:border-destructive craft:aria-invalid:ring-3 craft:aria-invalid:ring-destructive/20 craft:data-[size=default]:h-[18.4px] craft:data-[size=default]:w-[32px] craft:data-[size=sm]:h-[14px] craft:data-[size=sm]:w-[24px] craft:dark:aria-invalid:border-destructive/50 craft:dark:aria-invalid:ring-destructive/40 craft:data-checked:bg-primary craft:data-unchecked:bg-input craft:dark:data-unchecked:bg-input/80 craft:data-disabled:cursor-not-allowed craft:data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="craft:pointer-events-none craft:block craft:rounded-full craft:bg-background craft:ring-0 craft:transition-transform craft:group-data-[size=default]/switch:size-4 craft:group-data-[size=sm]/switch:size-3 craft:group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] rtl:craft:group-data-[size=default]/switch:data-checked:-translate-x-[calc(100%-2px)] craft:group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] rtl:craft:group-data-[size=sm]/switch:data-checked:-translate-x-[calc(100%-2px)] craft:dark:data-checked:bg-primary-foreground craft:group-data-[size=default]/switch:data-unchecked:translate-x-0 rtl:craft:group-data-[size=default]/switch:data-unchecked:-translate-x-0 craft:group-data-[size=sm]/switch:data-unchecked:translate-x-0 rtl:craft:group-data-[size=sm]/switch:data-unchecked:-translate-x-0 craft:dark:data-unchecked:bg-foreground"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
