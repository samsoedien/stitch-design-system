import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
  "craft:flex craft:w-fit craft:items-stretch craft:*:focus-visible:relative craft:*:focus-visible:z-10 craft:has-[>[data-slot=button-group]]:gap-2 craft:has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-e-lg craft:[&>[data-slot=select-trigger]:not([class*=w-])]:w-fit craft:[&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal:
          "craft:*:data-slot:rounded-e-none craft:[&>[data-slot]:not(:has(~[data-slot]))]:rounded-e-lg! craft:[&>[data-slot]~[data-slot]]:rounded-s-none craft:[&>[data-slot]~[data-slot]]:border-s-0",
        vertical:
          "craft:flex-col craft:*:data-slot:rounded-b-none craft:[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! craft:[&>[data-slot]~[data-slot]]:rounded-t-none craft:[&>[data-slot]~[data-slot]]:border-t-0",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "flex items-center gap-2 rounded-lg border bg-muted px-2.5 text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "button-group-text",
    },
  })
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "craft:relative craft:self-stretch craft:bg-input craft:data-horizontal:mx-px craft:data-horizontal:w-auto craft:data-vertical:my-px craft:data-vertical:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
