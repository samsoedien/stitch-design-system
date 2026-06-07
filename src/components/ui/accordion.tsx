import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"

import { cn } from "@/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("craft:flex craft:w-full craft:flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("craft:not-last:border-b", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="craft:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "craft:group/accordion-trigger craft:relative craft:flex craft:flex-1 craft:items-start craft:justify-between craft:rounded-lg craft:border craft:border-transparent craft:py-2.5 craft:text-start craft:text-sm craft:font-medium craft:transition-all craft:outline-none craft:hover:underline craft:focus-visible:border-ring craft:focus-visible:ring-3 craft:focus-visible:ring-ring/50 craft:focus-visible:after:border-ring craft:aria-disabled:pointer-events-none craft:aria-disabled:opacity-50 craft:**:data-[slot=accordion-trigger-icon]:ms-auto craft:**:data-[slot=accordion-trigger-icon]:size-4 craft:**:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon data-slot="accordion-trigger-icon" className="craft:pointer-events-none craft:shrink-0 craft:group-aria-expanded/accordion-trigger:hidden" />
        <ChevronUpIcon data-slot="accordion-trigger-icon" className="craft:pointer-events-none craft:hidden craft:shrink-0 craft:group-aria-expanded/accordion-trigger:inline" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="craft:overflow-hidden craft:text-sm craft:data-open:animate-accordion-down craft:data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "craft:h-(--accordion-panel-height) craft:pt-0 craft:pb-2.5 craft:data-ending-style:h-0 craft:data-starting-style:h-0 craft:[&_a]:underline craft:[&_a]:underline-offset-3 craft:[&_a]:hover:text-foreground craft:[&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
