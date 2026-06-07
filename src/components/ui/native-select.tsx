import * as React from "react"

import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
}

function NativeSelect({
  className,
  size = "default",
  ...props
}: NativeSelectProps) {
  return (
    <div
      className={cn(
        "craft:group/native-select craft:relative craft:w-fit craft:has-[select:disabled]:opacity-50",
        className
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="craft:h-8 craft:w-full craft:min-w-0 craft:appearance-none craft:rounded-lg craft:border craft:border-input craft:bg-transparent craft:py-1 craft:pe-8 craft:ps-2.5 craft:text-sm craft:transition-colors craft:outline-none craft:select-none craft:selection:bg-primary craft:selection:text-primary-foreground craft:placeholder:text-muted-foreground craft:focus-visible:border-ring craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:disabled:pointer-events-none craft:disabled:cursor-not-allowed craft:aria-invalid:border-destructive craft:aria-invalid:ring-3 craft:aria-invalid:ring-destructive/20 craft:data-[size=sm]:h-7 craft:data-[size=sm]:rounded-[min(var(--radius-md),10px)] craft:data-[size=sm]:py-0.5 craft:dark:bg-input/30 craft:dark:hover:bg-input/50 craft:dark:aria-invalid:border-destructive/50 craft:dark:aria-invalid:ring-destructive/40"
        {...props}
      />
      <ChevronDownIcon className="craft:pointer-events-none craft:absolute craft:top-1/2 craft:end-2.5 craft:size-4 craft:-translate-y-1/2 craft:text-muted-foreground craft:select-none" aria-hidden="true" data-slot="native-select-icon" />
    </div>
  )
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      data-slot="native-select-option"
      className={cn("craft:bg-[Canvas] craft:text-[CanvasText]", className)}
      {...props}
    />
  )
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn("craft:bg-[Canvas] craft:text-[CanvasText]", className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
