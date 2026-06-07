"use client"

import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}: ResizablePrimitive.GroupProps) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        "craft:flex craft:h-full craft:w-full craft:aria-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({ ...props }: ResizablePrimitive.PanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizablePrimitive.SeparatorProps & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "craft:relative craft:flex craft:w-px craft:items-center craft:justify-center craft:bg-border craft:ring-offset-background craft:after:absolute craft:after:inset-y-0 craft:after:start-1/2 craft:after:w-1 craft:after:-translate-x-1/2 rtl:craft:after:translate-x-1/2 craft:focus-visible:ring-1 craft:focus-visible:ring-ring craft:focus-visible:outline-hidden craft:aria-[orientation=horizontal]:h-px craft:aria-[orientation=horizontal]:w-full craft:aria-[orientation=horizontal]:after:start-0 craft:aria-[orientation=horizontal]:after:h-1 craft:aria-[orientation=horizontal]:after:w-full craft:aria-[orientation=horizontal]:after:translate-x-0 rtl:craft:aria-[orientation=horizontal]:after:-translate-x-0 craft:aria-[orientation=horizontal]:after:-translate-y-1/2 craft:[&[aria-orientation=horizontal]>div]:rotate-90",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="craft:z-10 craft:flex craft:h-6 craft:w-1 craft:shrink-0 craft:rounded-lg craft:bg-border" />
      )}
    </ResizablePrimitive.Separator>
  )
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
