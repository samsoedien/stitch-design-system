import { cn } from "@/lib/utils"

function AspectRatio({
  ratio,
  className,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      style={
        {
          "--ratio": ratio,
        } as React.CSSProperties
      }
      className={cn("craft:relative craft:aspect-(--ratio)", className)}
      {...props}
    />
  )
}

export { AspectRatio }
